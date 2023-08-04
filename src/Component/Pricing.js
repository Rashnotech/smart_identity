import PriceTag from "./Tag";
function Price() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mx-4 md:mx-0 my-14 snap-start scroll-mt-6">
      <div id="title" className="text-center">
        <h3 className="font-GoshaSans text-[#051B47] text-4xl">Pricing</h3>
        <p className="font-Roboto text-slate-400 text-xl  md:w-3/4 md:mx-auto">
          Boost your productivity. Start using Smart Identity today. Take
          control of your teams Identity.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row item-center space-x-4 space-y-4 md:space-y-0 justify-between">
        <PriceTag
          details="The essentials to provide your best work for clients."
          type="Starter"
          price="$0.00"
          active={false}
          categories={[
            "Limited Access",
            "PDF format",
            "24-hours, dedicated support response time",
            "Minimum custom design",
          ]}
        />
        <PriceTag
          details="A plan that scales with your rapidly growing business."
          type="Growth"
          price="$12.00"
          active={true}
          categories={[
            "Unlimited designs",
            "PDF format, PNG",
            "1-hour, dedicated support response time",
            "Custom integrations",
          ]}
        />
        <PriceTag
          details="Dedicated support and design for your company"
          type="Scale"
          active={false}
          categories={[
            "Unlimited designs",
            "All format",
            "30-minutes, dedicated support response time",
            "Custom integrations",
          ]}
          price="$19.00"
        />
      </div>
    </div>
  );
}

export default Price;
