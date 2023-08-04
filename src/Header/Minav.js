function MinifiedNav() {
  const link = ["Home", "About Us", "Services", "Pricing", "Contact"];
  return (
    <div className="border rounded-md bg-white font-Roboto fixed md:w-4/5 w-full p-4 duration-200 ease-linear">
      <ul className="space-y-4 divide-y">
        {link.map((links, index) => (
          <li
            className="cursor-pointer text-[#008287] hover:font-medium px-2 py-3 duration-200 hover:ease-in-out"
            key={index}
          >
            {links}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MinifiedNav;
