import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sky-600 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">🌤️ WeatherApp</Link>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
