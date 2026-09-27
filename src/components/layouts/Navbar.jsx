import React from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  [
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-indigo-50 text-indigo-700"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
        aria-label="Main"
      >
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Context<span className="text-indigo-600">App</span>
        </NavLink>

        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
