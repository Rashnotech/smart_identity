import company from "../image/about.png";
function About() {
  return (
    <div className="flex md:flex-row-reverse flex-col-reverse snap-start scroll-mt-6 items-center justify-center space-x-4 my-14">
      <div className="md:w-1/2 space-y-4 mx-4">
        <h5 className="font-Roboto text-3xl text-[#008287] font-black">
          - Who we are
        </h5>
        <h3 className="font-GoshaSans text-4xl text-[#051B47] w-3/4">
          We are creator of smart identity card
        </h3>
        <p className="font-Roboto text-xl text-slate-400">
          We are proud to offer top range of comprerhensive services such as
          digital identity and benefit of q-chip and assistance
        </p>
        <button className="bg-[#FF743D] px-5 py-3 rounded-md text-white hover:bg-[#FF743D]/60 hover:ease-in-out duration-200">
          Read More
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={company} alt="" />
      </div>
    </div>
  );
}
export default About;
