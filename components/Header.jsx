"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="py-4 xl:py-8 text-white fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm">
      <div className="container max-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="#home" onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('home');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}>
          <h1 className="text-4xl font-semibold text-accent cursor-pointer">Jaswinder Singh</h1>
        </Link>

        {/* desktop Nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={handleHireMeClick} className="cursor-pointer">Hire me</Button>
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
