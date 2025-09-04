
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server, Brush, Rocket, ShieldCheck } from 'lucide-react';
import type { ElementType } from 'react';

const skills: Record<string, string[]> = {
  'Languages': ['JavaScript', 'TypeScript', 'Java', 'Python', 'Dart', 'C#'],
  'Frontend': ['React.js', 'Vue.js', 'Flutter', 'Blazor', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'],
  'DevOps & Tools': ['Git', 'GitHub', 'Vercel', 'Firebase', 'VS Code', 'Android Studio'],
};

const icons: Record<string, ElementType> = {
  'Languages': Code,
  'Frontend': Brush,
  'DevOps & Tools': Rocket,
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Skills & Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical toolkit. I'm always learning and expanding my skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = icons[category] || Code;
            return (
              <div key={category} className="grid gap-4 p-6 rounded-lg border bg-secondary/50">
                <div className="flex items-center gap-4">
                   <div className="bg-primary/10 text-primary p-3 rounded-full">
                     <Icon className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold font-headline">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
