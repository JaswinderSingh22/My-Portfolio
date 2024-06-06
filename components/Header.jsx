import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container max-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-accent">Jass Singh</h1>
        </Link>

        {/* desktop Nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button>Hire me</Button>
        </div>

        {/* Mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
