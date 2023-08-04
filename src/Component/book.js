function Appointment() {
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-center h-80 snap-start scroll-mt-6">
      <div className="md:w-3/4 text-white">
        <p className="uppercase font-Roboto text-sm">&ndash; Call to Action</p>
        <h2 className="font-GoshaSans text-5xl">
          Book an appointment <br /> Call us now!
        </h2>
      </div>
      <div>
        <button className="font-Roboto bg-[#FF743D] px-5 py-3 rounded-md text-white hover:bg-[#FF743D]/75 hover:ease-in-out duration-200">
          Get a Quote
        </button>
      </div>
    </div>
  );
}
export default Appointment;
