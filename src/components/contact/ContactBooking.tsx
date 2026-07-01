/**
 * ContactBooking — the right column of the Contact page (capture column
 * 7d450e7): "Contact" / "Booking" headings + the booking info block.
 *
 * - "Contact" (c83a1dc): Abel, 36px / 36, 700, #000.
 * - "Booking" (5efd5c07): Abel, 30px / 30, 700, #000.
 * - Text (55038e65): Lato, 18px, 300, #000, lh 22px; the email is a mailto link
 *   in brand-purple (#61248d).
 */
export function ContactBooking() {
  return (
    <div>
      <h2 className="font-abel text-[36px] font-bold leading-[36px] text-black">Contact</h2>
      <h3 className="mt-[10px] font-abel text-[30px] font-bold leading-[30px] text-black">
        Booking
      </h3>

      <div className="mt-[20px] space-y-[22px] text-[18px] font-light leading-[22px] text-black">
        <p>For Booking info:</p>
        <p>
          Email:&nbsp;{" "}
          <a href="mailto:info@soul2soulsjazz.com" className="text-brand-purple">
            info@soul2soulsjazz.com
          </a>
        </p>
        <p>
          Accepting bookings for the
          <br />
          U.S. in March 2026. Send email to info@soul2soulsjazz.com for
          <br />
          additional information
        </p>
      </div>
    </div>
  );
}
