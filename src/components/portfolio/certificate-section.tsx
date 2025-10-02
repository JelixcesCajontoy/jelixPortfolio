
"use client";

import Script from 'next/script';

const certificates = [
  {
    name: 'Data Science Essentials With Python',
    badgeId: 'd17962de-13a5-4b6f-98fa-829b2f71129a',
  },
  {
    name: 'Operating Systems Basics',
    badgeId: '992a9934-2755-4fc9-8f1a-6802e23fc854',
  },
  {
    name: 'Data Analytics Essentials',
    badgeId: '318a164f-9964-4334-8966-3963046ac005',
  },
  {
    name: 'Introduction to Data Science',
    badgeId: '8f3addbd-d571-4593-ae81-d989dfa14787',
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Certificates & Badges
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional certifications and digital badges.
            </p>
          </div>
        </div>
        <div className="grid gap-8 justify-center sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert) => (
            <div key={cert.badgeId} className="flex flex-col items-center text-center">
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={cert.badgeId}
                data-share-badge-host="https://www.credly.com"
              ></div>
              <h3 className="mt-4 text-lg font-bold">{cert.name}</h3>
            </div>
          ))}
        </div>
        <Script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        />
      </div>
    </section>
  );
}
