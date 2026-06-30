/**
 * SiteFooter — global footer (captured Sonaar/Elementor footer, template 1011).
 *
 * Structure (matches the original exactly — no social row):
 *   - Dark section (#19191b) with a centered, max-700px boxed column.
 *   - Mailing-list heading.
 *   - Inline mailchimp-style signup: pill email field + "Sign up" button.
 *   - Copyright line.
 *
 * Values (colors, radii, font sizes, paddings) are taken verbatim from the
 * capture's post-1011 stylesheet.
 */
export function SiteFooter() {
  return (
    <footer id="footer" className="relative z-[8000]">
      <div className="bg-e-dark text-white">
        <div className="mx-auto max-w-[700px] px-4 pb-[50px] pt-[130px]">
          {/* Mailing-list heading */}
          <p className="mb-[22px] text-center text-[16px] leading-[1.35em] text-e-border">
            Join our digital mailing list now and get notified when we release exclusive mixes,
            merch sales and more
          </p>

          {/* Signup form */}
          <form
            action="#"
            className="flex flex-col items-stretch gap-4 tablet:flex-row tablet:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-[100px] bg-input-bg px-[30px] py-[15px] text-[21px] text-white placeholder:text-e-gray focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-[100px] bg-brand-purple px-[30px] py-[17px] font-cousine text-[16px] font-normal leading-none text-white transition-colors hover:bg-brand-purple-hover tablet:ml-[17px] tablet:max-w-[150px]"
            >
              Sign up
            </button>
          </form>

          {/* Copyright */}
          <p className="mt-10 text-center text-[13px] uppercase tracking-[2px] text-e-gray">
            <a href="/" className="text-e-gray transition-colors hover:text-footer-link-hover">
              © Soul2SoulsJazz Musical Podcast LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
