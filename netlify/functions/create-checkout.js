// Netlify Function: server-authoritative Stripe Checkout Session creation.
// Payment stays disabled unless ENABLE_CHECKOUT=true and STRIPE_SECRET_KEY is configured.
// Uses Stripe's REST API directly; no npm dependencies.
const PRICES = Object.freeze({ember:3000,mist:3000,stillpoint:3000,ground:3000,vital:3000,pivot:3000,jade:3000});
const NAMES = Object.freeze({ember:"Ember — Shou Pu-erh",mist:"Mist — Aged Shou Mei",stillpoint:"Stillpoint — Ali Shan Oolong",ground:"Ground — Dianhong Jin Ya",vital:"Vital — Mi Lan Xiang",pivot:"Pivot — Mengding Huangya",jade:"Jade — Shifeng Longjing"});
const json=(statusCode,body)=>({statusCode,headers:{"Content-Type":"application/json","Cache-Control":"no-store"},body:JSON.stringify(body)});
exports.handler=async event=>{
  if(event.httpMethod!=="POST")return json(405,{error:"Method not allowed"});
  if(process.env.ENABLE_CHECKOUT!=="true"||!process.env.STRIPE_SECRET_KEY)return json(503,{error:"Checkout is not yet available."});
  let data;
  try{data=JSON.parse(event.body||"{}")}catch{return json(400,{error:"Invalid JSON"})}
  if(!Array.isArray(data.items)||data.items.length<1||data.items.length>7)return json(400,{error:"Invalid cart"});
  const counts={};
  for(const item of data.items){
    if(!item||typeof item.id!=="string"||!Object.hasOwn(PRICES,item.id)||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>10)return json(400,{error:"Invalid product or quantity"});
    counts[item.id]=(counts[item.id]||0)+item.quantity;
    if(counts[item.id]>10)return json(400,{error:"Quantity limit exceeded"});
  }
  const subtotal=Object.entries(counts).reduce((sum,[id,qty])=>sum+PRICES[id]*qty,0);
  const base=(process.env.URL||process.env.DEPLOY_PRIME_URL||"").replace(/\/$/,"");
  if(!/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(base))return json(503,{error:"Site URL is not configured"});
  const form=new URLSearchParams();
  if (process.env.QUIZ_FIRST_ORDER_CODE) form.set("allow_promotion_codes", "true");
  form.set("mode","payment");form.set("success_url",base+"/success.html?session_id={CHECKOUT_SESSION_ID}");form.set("cancel_url",base+"/#collection");
  form.set("billing_address_collection","required");form.set("shipping_address_collection[allowed_countries][0]","CA");
  form.set("phone_number_collection[enabled]","true");
  form.set("automatic_tax[enabled]",process.env.STRIPE_AUTOMATIC_TAX==="true"?"true":"false");
  let i=0;
  for(const [id,qty] of Object.entries(counts)){
    form.set("line_items["+i+"][price_data][currency]","cad");
    form.set("line_items["+i+"][price_data][unit_amount]",String(PRICES[id]));
    form.set("line_items["+i+"][price_data][product_data][name]",NAMES[id]+" — 50 g");
    form.set("line_items["+i+"][quantity]",String(qty));i++;
  }
  const shipping=subtotal>=6000?0:800;
  form.set("shipping_options[0][shipping_rate_data][type]","fixed_amount");
  form.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]",String(shipping));
  form.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]","cad");
  form.set("shipping_options[0][shipping_rate_data][display_name]",shipping?"Standard shipping":"Free shipping");
  form.set("metadata[source]","cha-chi");
  try{
    const res=await fetch("https://api.stripe.com/v1/checkout/sessions",{method:"POST",headers:{Authorization:"Bearer "+process.env.STRIPE_SECRET_KEY,"Content-Type":"application/x-www-form-urlencoded"},body:form});
    const result=await res.json();
    if(!res.ok){console.error("Stripe checkout failed",res.status,result.error?.code);return json(502,{error:"Unable to start checkout"})}
    if(!result.url||!/^https:\/\/checkout\.stripe\.com\//.test(result.url))return json(502,{error:"Invalid checkout response"});
    return json(200,{url:result.url});
  }catch(e){console.error("Stripe request failed",e.message);return json(502,{error:"Checkout temporarily unavailable"})}
};
