import { useState, type FormEvent } from "react";

/**
 * ContactForm — the left column of the Contact page (capture column 334fefbf):
 * "Say Hello" / "Contact us" headings + the Contact Form 7 rebuild.
 *
 * Fields (capture order): Your Name (required), Your Email (required), Subject,
 * Your Message (textarea) + a full-width "Send" submit.
 *
 * Styling (capture): labels Lato 11px, uppercase, letter-spacing 3px, #000;
 * fields bg #dddddd, text #7e828a, no border, 10px/12px padding, min-height 50px,
 * full width; submit bg #7e828a (hover #666970), white, full width.
 *
 * SUBMIT: there is no backend yet. On a valid submit we open a prefilled mailto:
 * to info@soul2soulsjazz.com (Subject → email subject; Name + Email + Message →
 * body) and show a brief confirmation.
 *
 * TODO(backend): replace the mailto handoff below with a real server send — a
 * Resend call or a Supabase edge function — so the form submits in-page without
 * depending on the visitor's local email client. Do NOT fake a successful send.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = { name: string; email: string; subject: string; message: string };
type Errors = { name?: string; email?: string };

const FIELD_CLASS =
  "mb-[15px] block box-border w-full min-h-[50px] bg-[#dddddd] px-[12px] py-[10px] text-[15px] text-e-gray outline-none placeholder:text-e-gray focus:ring-2 focus:ring-brand-purple";
const LABEL_CLASS =
  "block text-[11px] font-light uppercase leading-[22px] tracking-[3px] text-black";
const ERROR_CLASS = "mt-1 block text-[13px] text-[#c0392b]";

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email.trim())) e.email = "Please enter a valid email address.";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // No backend yet — hand off to the visitor's email client with a prefilled
    // message. TODO(backend): swap for a real Resend / Supabase edge-function send.
    const subject = values.subject.trim() || "Contact from soul2soulsjazz.com";
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    window.location.href = `mailto:info@soul2soulsjazz.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div>
      <h2 className="font-abel text-[36px] font-bold leading-[36px] text-black">Say Hello</h2>
      <h3 className="mt-[10px] font-abel text-[30px] font-bold leading-[30px] text-black">
        Contact us
      </h3>

      <form className="mt-[30px]" onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <p className="mb-[20px]">
          <label htmlFor="cf-name" className={LABEL_CLASS}>
            Your Name (required)
          </label>
          <input
            id="cf-name"
            name="your-name"
            type="text"
            maxLength={400}
            value={values.name}
            onChange={set("name")}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            className={FIELD_CLASS}
          />
          {errors.name && <span className={ERROR_CLASS}>{errors.name}</span>}
        </p>

        <p className="mb-[20px]">
          <label htmlFor="cf-email" className={LABEL_CLASS}>
            Your Email (required)
          </label>
          <input
            id="cf-email"
            name="your-email"
            type="email"
            maxLength={400}
            value={values.email}
            onChange={set("email")}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            className={FIELD_CLASS}
          />
          {errors.email && <span className={ERROR_CLASS}>{errors.email}</span>}
        </p>

        <p className="mb-[20px]">
          <label htmlFor="cf-subject" className={LABEL_CLASS}>
            Subject
          </label>
          <input
            id="cf-subject"
            name="your-subject"
            type="text"
            maxLength={400}
            value={values.subject}
            onChange={set("subject")}
            className={FIELD_CLASS}
          />
        </p>

        <p className="mb-[20px]">
          <label htmlFor="cf-message" className={LABEL_CLASS}>
            Your Message
          </label>
          <textarea
            id="cf-message"
            name="your-message"
            rows={10}
            maxLength={2000}
            value={values.message}
            onChange={set("message")}
            className={`${FIELD_CLASS} min-h-[200px] resize-y`}
          />
        </p>

        <button
          type="submit"
          className="min-h-[50px] w-full bg-e-gray px-1 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#666970]"
        >
          Send
        </button>

        {sent && (
          <p className="mt-[15px] text-[15px] text-e-gray" role="status" aria-live="polite">
            Opening your email app…
          </p>
        )}
      </form>
    </div>
  );
}
