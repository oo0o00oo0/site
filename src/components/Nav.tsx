import { Link } from "@tanstack/react-router";

function Nav() {
  console.log("Nav");
  return (
    <nav className="col-span-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 grid-rows-[auto_1fr]">
        <div className="col-span-12 py-1">
          <div className="grid items-center h-full grid-cols-12 gap-0.5">
            <NavItem to="/" colStart={1}>Home</NavItem>
            <NavItem to="/about" colStart={6}>About</NavItem>
            <NavItem to="/contact" colStart={9}>Contact</NavItem>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 col-span-12 gap-0.5 py-4">
          <div className="col-span-12 md:col-start-9 md:col-span-4 text-[#4225ff]  pl-2 text-s flex items-center">
            REALISE - become fully aware of (something).
            <br />
            <br />
            Worldwide specialists in browser-based spatial visualisation tooling
            + services.
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

const NavItem = (
  { to, children, colStart = 1 }: {
    to: string;
    children: React.ReactNode;
    colStart?: number;
  },
) => {
  return (
    <Link
      to={to}
      className={`col-start-${colStart} col-span-3 px-1 [&.active]:font-bold text-gray-700 hover:text-gray-900 `}
    >
      <span className="underline">{children}</span>
    </Link>
  );
};
