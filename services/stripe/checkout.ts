import { Stripe, loadStripe } from "@stripe/stripe-js"

interface LineItem {
  price?: string | undefined
  quantity?: number | undefined
}

export const checkout = async (lineItems: LineItem[] | undefined) => {
  let stripePromise: Promise<Stripe | null>

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      )
    }
    return stripePromise
  }

  const stripe = await getStripe()

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?sessionId={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/4`,
  })
}
