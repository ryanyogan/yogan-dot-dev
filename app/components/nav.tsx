import { NavLink } from "@remix-run/react";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "navlink";

function NavLinks() {
  return (
    <>
      <NavLink prefetch="intent" to="/" className={activeStyleCallback}>
        HOME
      </NavLink>

      <NavLink prefetch="intent" to="/blog" className={activeStyleCallback}>
        BLOG
      </NavLink>

      <NavLink prefetch="intent" to="/about" className={activeStyleCallback}>
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
