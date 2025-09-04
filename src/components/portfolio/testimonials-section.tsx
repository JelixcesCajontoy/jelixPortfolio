
"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Jane Smith',
    title: 'CEO, Tech Innovations Inc.',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'professional portrait',
    quote: "Working with John was an absolute pleasure. His technical expertise and dedication to our project's success were instrumental. He's a true professional and a valuable asset to any team."
  },
  {
    name: 'Michael Brown',
    title: 'Project Manager, Creative Solutions',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'business person',
    quote: "John's ability to tackle complex problems with a positive attitude is remarkable. He consistently delivered high-quality code and was always open to feedback. Highly recommended!"
  },
  {
    name: 'Emily White',
    title: 'Lead Designer, UX Masters',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'creative professional',
    quote: "He has a great eye for design and user experience, which is a rare and valuable skill for a developer. His collaboration made the final product so much better."
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">What Others Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Testimonials from colleagues and clients I've had the pleasure of working with.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-secondary/50 border-secondary-foreground/10">
                    <CardContent className="flex flex-col items-center justify-center p-6 sm:p-8 text-center space-y-4 h-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-primary"
                        data-ai-hint={testimonial.imageHint}
                      />
                      <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-foreground/80">"{testimonial.quote}"</blockquote>
                      <div className="font-semibold">
                        <p className="text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
