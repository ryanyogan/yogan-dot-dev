import { NavLink } from "@remix-run/react";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "navlink";

function NavLinks() {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        home
      </NavLink>

      <NavLink to="/blog" className={activeStyleCallback}>
        articles
      </NavLink>

      <NavLink to="/about" className={activeStyleCallback}>
        about
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
