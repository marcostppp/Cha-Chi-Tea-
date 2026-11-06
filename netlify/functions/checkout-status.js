exports.handler=async event=>{
  if(event.httpMethod!=="GET")return{statusCode:405,body:"Method not allowed"};
  return{statusCode:200,headers:{"Content-Type":"application/json","Cache-Control":"no-store"},body:JSON.stringify({enabled:process.env.ENABLE_CHECKOUT==="true"&&!!process.env.STRIPE_SECRET_KEY})};
};
