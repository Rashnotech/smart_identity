import woman from "../image/woman.png";
function Hero() {
  return (
    <div className="mt-24 mb-24 flex flex-row-reverse items-center justify-between space-x-4 snap-start">
      <div
        className="hidden md:block w-2/5 h-96"
        style={{
          background: `url(${woman})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
        }}
      ></div>
      <div className="space-y-8 md:w-3/5">
        <h3 className="text-5xl font-GoshaSans text-white md:w-4/5">
          Clever choice makes you smarter with digital Identity
        </h3>
        <p className="font-Roboto text-slate-50 md:w-4/6 w-2/3">
          Smart Identity has revolutionised the way we produce an Identity card
          to our clients.
        </p>
        <button className="bg-[#FF743D] text-sm px-4 py-3 text-white font-Roboto text-medium rounded-md hover:bg-[#FF743D]/90 hover:duration-200 hover:ease-in-out hover:font-semibold">
          Learn more
        </button>
        <p className="text-white ml-32 w-3/6 md:w-2/3 font-Roboto text-medium">
          &quot; It's so easy to get an identity card ready with smart identity
          all you need do is register &quot;
        </p>
      </div>
    </div>
  );
}

export default Hero;
