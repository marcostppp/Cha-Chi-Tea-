# Cha & Chi

Premium bilingual (English / French) Chinese and Taiwanese tea storefront.

## Current status

- Live-ready static storefront in `index.html`, with responsive design, seven products, bilingual interface, preference-based ten-question quiz, and local browser shopping bag.
- Netlify static-site configuration in `netlify.toml`.
- Checkout is **intentionally disabled** until payment processing and inventory are verified. No customer payment is collected.
- Product origin, harvest, cultivar and stock claims must be confirmed against supplier invoices before public sales.

## Deploy on Netlify

Connect this repository to a Netlify site. Build command: **none**. Publish directory: **.** (repository root). Deploy the `main` branch. The site will deploy automatically on future GitHub commits once linked.

## Payments

Stripe cannot be activated with a frontend-only placeholder. Set up a verified Stripe account, configure products/tax/shipping, then implement secure server-side Checkout Sessions (for example, Netlify Functions) or individual Stripe Payment Links. Never put a Stripe secret key in browser JavaScript or commit it to GitHub.

## Prices

Displayed price: CAD $30 per 50 g tin. Preview shipping estimate: CAD $8 below CAD $60, free above. Verify actual fulfillment costs and tax obligations before enabling orders.

## Editing

The website is self-contained in `index.html`; `catalog.json` provides a machine-readable draft catalog for future inventory/checkout integration. Keep these in sync when changing product details.

## Accuracy

The quiz is based on flavor and ritual preferences, not medical diagnosis. Tea is not marketed as treatment for health conditions. Brewing instructions and sourcing claims require product-specific validation.

## New additions
- `brewing.html`: bilingual gongfu brewing reference for all seven teas, with suggested water temperatures, ratios, and short-steep times.
- `favicon.svg` and `robots.txt`: branded browser icon and basic search-crawler instructions.
- `success.html`: bilingual post-checkout landing page (not proof of payment).
- `netlify/functions/checkout-status.js`: exposes only a boolean checkout-enabled status; no credentials.
- `netlify/functions/create-checkout.js`: validates cart IDs and quantities against server-owned CAD prices, restricts shipping destinations to Canada, calculates shipping server-side, and creates a Stripe-hosted Checkout Session.
  
### Stripe activation (only when ready for sales)
1. Verify inventory, prices, tax collection, shipping destinations and fulfillment processes.
2. In Netlify site environment variables, set `STRIPE_SECRET_KEY` to the Stripe **secret** key (never in GitHub), and `ENABLE_CHECKOUT=true`. Optionally set `STRIPE_AUTOMATIC_TAX=true` **only after** Stripe Tax registration and settings are correctly configured.
3. Redeploy the Netlify site so the environment variables are available to the Functions.
4. Test with Stripe test keys and test cards, then confirm tax/shipping and order handling before switching to live keys.
5. Configure a verified Stripe webhook and reliable order fulfillment workflow before accepting live orders. The current integration creates payment sessions but does **not** implement paid-order verification, inventory reservation, customer support, or automated fulfillment.

**Do not activate live checkout yet.** Serverless checkout code is preparation, not a production-ready commerce backend. The preview cart remains functional with checkout disabled until the environment gate is set.

### Tea constitution quiz and report email

The bilingual quiz scores six paired tendencies, falls back to a neutral ritual if there is no clear winner, and checks caffeine tolerance separately. Individual answers stay in page memory. The full report is available on the result screen. The optional one-time email sends the recipient address and matched profile to the email provider after an explicit request. No mailing-list enrollment is implemented.

To enable email, configure a verified sender domain in Resend and set `RESEND_API_KEY` and `QUIZ_FROM_EMAIL` as function-scoped Netlify environment variables. Use a monitored sender. Review provider retention, applicable privacy requirements and contact details before enabling the form. Test with an address you control.

For the offer, configure a 15% Stripe coupon with a first-time-order promotion code, and set `QUIZ_FIRST_ORDER_CODE` to that customer-facing code only after confirming the offer works in checkout. The offer appears only when report delivery and checkout are configured. Stripe applies its own first-time transaction rules. Guest checkout does not provide reliable repeat-buyer enforcement across sessions. Test this limitation and use a customer-linked checkout before relying on strict per-customer eligibility. Keep the offer variable unset until those terms are acceptable.
