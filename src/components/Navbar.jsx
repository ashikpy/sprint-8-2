export default function Navbar() {
  return (
    <nav className=" border-b-2 border-[#F0F2F5]">
      <div className=" container mx-auto flex items-center max-w-4xl justify-between  p-5 px-10 ">
        <div className="flex items-center gap-3">
          <div className="size-3 bg-black rounded-full animate-bounce"></div>
          <h1 className="font-semibold">Finance Tracker</h1>
        </div>
        <ul className="flex items-center gap-5 text-sm ">
          <li className="text-black/60 font-medium hover:text-black transition-all duration-200">
            <a href="/">Dashboard</a>
          </li>
          <li className="text-black/60 font-medium hover:text-black transition-all duration-200">
            <a href="/add-expense">Add Expense</a>
          </li>
          <li className="text-black/60 font-medium hover:text-black transition-all duration-200">
            <a href="/data-breakdown">Data Breakdown</a>
          </li>
          <li>
            <img
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt=""
              className="size-7 rounded-full"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
