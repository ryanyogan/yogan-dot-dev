import { NavLink } from "@remix-run/react";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "navlink";

function NavLinks() {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        HOME
      </NavLink>

      <NavLink to="/blog" className={activeStyleCallback}>
        BLOG
      </NavLink>

      <NavLink to="/about" className={activeStyleCallback}>
        ABOUT
      </NavLink>
    </>
  );
}

export function Nav() {
  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="flex justify-end">
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
