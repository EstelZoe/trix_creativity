import logo from "../assets/trixlogo.jpg";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-sm">

      {/* Logo */}
      <div className="bg-black px-5 py-3 flex items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Links */}
      <ul className="flex items-center gap-8 px-6 text-sm font-light text-gray-800">
        <li className="cursor-pointer hover:text-red-600 transition">Home</li>
        <li className="cursor-pointer hover:text-red-600 transition">About</li>
        <li className="cursor-pointer hover:text-red-600 transition">Services</li>
        <li className="cursor-pointer hover:text-red-600 transition">Contact</li>
      </ul>

    </nav>
  );
}

export default Navbar;