export default function StatComponent() {
  return (
    <div className="bg-slate-50 md:w-1/3 w-full rounded-lg shadow-sm font-Roboto">
      <div className="flex items-center justify-between px-2 py-3">
        <span>
          <p>Account balance</p>
          <h1 className="text-xl">N 30,000</h1>
        </span>
      </div>
      <div className="w-full text-teal-600 font-medium font-Roboto bg-slate-100 p-2">
        <p>View all</p>
      </div>
    </div>
  );
}
