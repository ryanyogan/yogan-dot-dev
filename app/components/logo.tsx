import { NavLink } from "@remix-run/react";

export function Logo() {
  return (
    <NavLink to="/" className="inline-block">
      <img
        alt="Blog Logo"
        src="/assets/images/logo.webp"
        className="block w-[75px]"
        width="75"
        height="50"
      />
    </NavLink>
  );
}

export default Logo;
