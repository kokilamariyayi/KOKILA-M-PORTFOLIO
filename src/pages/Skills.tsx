import { Monitor, Server, Wrench } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SkillBar } from '@/components/SkillBar';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'Docker', level: 78 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'AWS', level: 70 },
      { name: 'Figma', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 78 },
    ],
  },
];

const Skills = () => (
  <PageTransition>
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Skills
          </h1>
          <p className="text-muted-foreground max-w-lg mb-12">
            Technologies and tools I use to bring ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={catIndex * 0.15}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-heading font-semibold">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.15 + i * 0.08}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Skills;
