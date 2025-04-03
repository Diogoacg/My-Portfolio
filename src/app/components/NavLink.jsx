import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[rgb(var(--muted-foreground))] sm:text-xl rounded md:p-0 hover:text-[rgb(var(--foreground))] transition-colors"
    >
      {title}
    </a>
  );
};

export default NavLink;