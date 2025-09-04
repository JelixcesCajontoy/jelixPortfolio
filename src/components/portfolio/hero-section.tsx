
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import jelixcesImage from "@/image/jelixces.jpg";

export function HeroSection() {
  const displayDescription = "A passionate and creative front-end developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in front-end technologies, I thrive on turning complex problems into elegant user interfaces.";

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          <Image
              src= {jelixcesImage}
              alt="Jelixces Cajontoy Headshot"
              width={144}
              height={144}
              className="rounded-full object-cover shadow-lg border-4 border-primary"
              data-ai-hint="professional headshot"
          />
          <div className="space-y-3">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Jelixces Cajontoy
              </h1>
              <h2 className="text-xl font-medium text-primary md:text-2xl">
              Front-end Developer
              </h2>
          </div>
          <p className="max-w-3xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            {displayDescription}
          </p>
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
