
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex-1 justify-center hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute right-4 md:right-6">
          <ThemeToggle />
        </div>

        <div className="md:hidden flex-1 flex justify-end">
           <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="mt-8 flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                        <SheetClose asChild key={label}>
                            <Link
                                href={href}
                                className="text-lg font-medium transition-colors hover:text-primary"
                            >
                                {label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
