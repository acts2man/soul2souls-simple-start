import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { formatPrice } from "@/data/shop";
import { useCart } from "@/components/cart/CartContext";
import { createOrder } from "@/lib/shop";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Soul 2 Souls Jazz" }] }),
  component: CheckoutPage,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_CLASS =
  "mb-[6px] block box-border w-full min-h-[50px] bg-[#dddddd] px-[12px] py-[10px] text-[15px] text-e-gray outline-none focus:ring-2 focus:ring-brand-purple";
const LABEL_CLASS =
  "block text-[11px] font-light uppercase leading-[22px] tracking-[3px] text-black";
const ERROR_CLASS = "mb-[10px] block text-[13px] text-[#c0392b]";

type Values = {
  email: string;
  fullName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};
type Errors = Partial<Record<keyof Values, string>>;

// Keys the success page reads to render the confirmation (no payment).
const LAST_ORDER_KEY = "s2s-last-order";

export function CheckoutPage() {
  const { items, subtotalCents, clear } = useCart();
  const navigate = useNavigate();
  const [values, setValues] = useState<Values>({
    email: "",
    fullName: "",
    line1: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  if (items.length === 0) {
    return (
      <SiteLayout>
        <section className="pt-[40px]">
          <div className="mx-auto max-w-[1000px] px-[10px]">
            <h1 className="font-abel text-[42px] font-bold text-black">Checkout</h1>
            <p className="mt-[20px] text-[18px] font-light text-black">Your cart is empty.</p>
            <Link to="/shop" className="mt-4 inline-block font-abel text-[18px] text-brand-purple">
              ← Continue shopping
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!values.fullName.trim()) e.fullName = "Please enter your name.";
    if (!values.line1.trim()) e.line1 = "Please enter your street address.";
    if (!values.city.trim()) e.city = "Please enter your city.";
    if (!values.state.trim()) e.state = "Please enter your state.";
    if (!values.zip.trim()) e.zip = "Please enter your ZIP / postal code.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    // No payment is taken. Persist a guest order (status 'pending_payment') when
    // Supabase is configured; otherwise the success page notes it wasn't saved.
    // TODO(payment): a Stripe PaymentIntent / edge-function charge would attach here.
    const result = await createOrder({
      email: values.email.trim(),
      fullName: values.fullName.trim(),
      shippingAddress: {
        line1: values.line1.trim(),
        city: values.city.trim(),
        state: values.state.trim(),
        zip: values.zip.trim(),
        country: values.country.trim(),
      },
      subtotalCents,
      items: items.map((i) => ({
        slug: i.slug,
        name: i.name,
        qty: i.qty,
        unitPriceCents: i.priceCents,
      })),
    });

    try {
      window.sessionStorage.setItem(
        LAST_ORDER_KEY,
        JSON.stringify({
          persisted: result.persisted,
          orderId: result.orderId ?? null,
          email: values.email.trim(),
          subtotalCents,
        }),
      );
    } catch {
      /* ignore */
    }

    clear();
    navigate({ to: "/checkout/success" });
  };

  return (
    <SiteLayout>
      <section className="pt-[20px]">
        <div className="mx-auto max-w-[1100px] px-[10px]">
          <h1 className="font-abel text-[42px] font-bold text-black">Checkout</h1>

          <div className="mt-[30px] flex flex-col gap-10 tablet:flex-row tablet:items-start">
            {/* Form */}
            <form className="tablet:w-[58%]" onSubmit={onSubmit} noValidate aria-label="Checkout">
              <h2 className="mb-[16px] font-abel text-[24px] font-bold text-black">
                Contact & shipping
              </h2>

              <label htmlFor="co-email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="co-email"
                type="email"
                value={values.email}
                onChange={set("email")}
                className={FIELD_CLASS}
              />
              {errors.email && <span className={ERROR_CLASS}>{errors.email}</span>}

              <label htmlFor="co-name" className={LABEL_CLASS}>
                Full name
              </label>
              <input
                id="co-name"
                type="text"
                value={values.fullName}
                onChange={set("fullName")}
                className={FIELD_CLASS}
              />
              {errors.fullName && <span className={ERROR_CLASS}>{errors.fullName}</span>}

              <label htmlFor="co-line1" className={LABEL_CLASS}>
                Street address
              </label>
              <input
                id="co-line1"
                type="text"
                value={values.line1}
                onChange={set("line1")}
                className={FIELD_CLASS}
              />
              {errors.line1 && <span className={ERROR_CLASS}>{errors.line1}</span>}

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="co-city" className={LABEL_CLASS}>
                    City
                  </label>
                  <input
                    id="co-city"
                    type="text"
                    value={values.city}
                    onChange={set("city")}
                    className={FIELD_CLASS}
                  />
                  {errors.city && <span className={ERROR_CLASS}>{errors.city}</span>}
                </div>
                <div className="w-[120px]">
                  <label htmlFor="co-state" className={LABEL_CLASS}>
                    State
                  </label>
                  <input
                    id="co-state"
                    type="text"
                    value={values.state}
                    onChange={set("state")}
                    className={FIELD_CLASS}
                  />
                  {errors.state && <span className={ERROR_CLASS}>{errors.state}</span>}
                </div>
                <div className="w-[140px]">
                  <label htmlFor="co-zip" className={LABEL_CLASS}>
                    ZIP
                  </label>
                  <input
                    id="co-zip"
                    type="text"
                    value={values.zip}
                    onChange={set("zip")}
                    className={FIELD_CLASS}
                  />
                  {errors.zip && <span className={ERROR_CLASS}>{errors.zip}</span>}
                </div>
              </div>

              <label htmlFor="co-country" className={LABEL_CLASS}>
                Country
              </label>
              <input
                id="co-country"
                type="text"
                value={values.country}
                onChange={set("country")}
                className={FIELD_CLASS}
              />

              <button
                type="submit"
                disabled={submitting}
                className="mt-[20px] min-h-[50px] w-full bg-brand-purple px-6 font-abel text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-purple-hover disabled:opacity-60"
              >
                {submitting ? "Placing order…" : "Place order"}
              </button>

              {/* No online payment on the original store — none here either. */}
              <p className="mt-[12px] text-[13px] leading-[18px] text-e-gray">
                Online payment isn’t enabled yet — placing an order records your details and we’ll
                follow up by email. No card is charged.
              </p>
            </form>

            {/* Order summary */}
            <aside className="tablet:w-[42%]">
              <div className="bg-e-light p-[24px]">
                <h2 className="mb-[16px] font-abel text-[24px] font-bold text-black">Your order</h2>
                <ul className="divide-y divide-e-border">
                  {items.map((i) => (
                    <li key={i.slug} className="flex items-center justify-between gap-3 py-[12px]">
                      <span className="min-w-0 text-[15px] text-black">
                        {i.name} <span className="text-e-gray">× {i.qty}</span>
                      </span>
                      <span className="shrink-0 font-abel text-[15px] text-black">
                        {formatPrice(i.priceCents * i.qty)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-[16px] flex justify-between border-t border-e-border pt-[16px] text-[20px] text-black">
                  <span>Subtotal</span>
                  <span className="font-abel font-bold">{formatPrice(subtotalCents)}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
