import Logo from "../image/smart.png";
function Footer() {
  return (
    <div className="font-Roboto my-12 grid gap-4  md:gap-0 grid-cols-3 md:grid-cols-5 mx-4 md:mx-0 md:grid-flow-col text-sm">
      <div className="space-y-4 col-span-3 md:col-span-2">
        <h3 className="font-GoshaSans text-[#008287] text-xl">
          <img src={Logo} className="h-5 w-5 inline-block" alt="" />
          SMART IDENTITY
        </h3>
        <p className="text-slate-500 text-base">
          We provide top notch services and getting your identity smarter
        </p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="form-input focus:outline-none border-t-0 border-l-0 border-r-0 bg-slate-100 border-b border-gray-400 px-4 py-2"
          />
        </form>
        <ul className="inline-flex space-x-4 text-[#051B477] font-medium">
          <li>Facebook</li>
          <li>/</li>
          <li>Instagram</li>
          <li>/</li>
          <li>Twitter</li>
          <li>/</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div>
        <h3 className="font-GoshaSans text-[#051B477] text-base">COMPANY</h3>
        <ul className="space-y-4 mt-2 text-[#008287]">
          <li>&ndash; About Us</li>
          <li>&ndash; Team</li>
          <li>&ndash; Careers</li>
          <li>&ndash; Investors</li>
          <li>&ndash; Contact Us</li>
        </ul>
      </div>
      <div>
        <h3 className="font-GoshaSans text-[#051B477] text-base">QUICK LINK</h3>
        <ul className="space-y-4 mt-2 text-[#008287]">
          <li>&ndash; FAQ</li>
          <li>&ndash; Support</li>
          <li>&ndash; Sitemap</li>
          <li>&ndash; Community</li>
        </ul>
      </div>
      <div>
        <h3 className="font-GoshaSans text-[#050c47] text-base">CONTACT</h3>
        <ul className="space-y-4 mt-2 text-[#008287]">
          <li>&ndash; Inquiries</li>
          <li>&ndash; info@smartidentity.com</li>
          <li></li>
          <li>&ndash; Careers</li>
          <li>&ndash; jobs@smartidentity.com</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
