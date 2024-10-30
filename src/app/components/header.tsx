import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black py-5">
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/">Página Home</Link>
          </li>
          <li>
            <Link href="/register">Página Register</Link>
          </li>
          <li>
            <Link href="/sign-in">Página SignIn</Link>
          </li>
        </ul>
      </nav>

      <div id="button-menu" className="md:hidden">
        menu
      </div>
    </header>
  );
}
