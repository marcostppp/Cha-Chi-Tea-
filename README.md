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
