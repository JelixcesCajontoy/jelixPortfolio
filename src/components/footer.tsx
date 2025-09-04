import { ContactSection } from '@/components/portfolio/contact-section';

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-background border-t border-border">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
        <ContactSection />
        <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jelixce Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
