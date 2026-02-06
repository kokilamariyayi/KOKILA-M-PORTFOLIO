import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    period: '2022 — Present',
    description:
      'Leading the design system initiative and building performant React applications serving millions of users.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2020 — 2022',
    description:
      'Built end-to-end features across React frontend and Node.js backend, reducing page load times by 40%.',
  },
  {
    role: 'Frontend Developer',
    company: 'DigitalAgency',
    period: '2018 — 2020',
    description:
      'Developed responsive web applications and interactive experiences for Fortune 500 clients.',
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Technology',
    period: '2014 — 2018',
  },
];

const Resume = () => {
  const reducedMotion = useReducedMotion();

  const handleDownload = () => {
    toast.info('Resume download will be available once a PDF is uploaded.');
  };

  return (
    <PageTransition>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  Resume
                </h1>
                <p className="text-muted-foreground">
                  My professional journey at a glance.
                </p>
              </div>
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
              >
                <Button
                  variant="glow"
                  size="lg"
                  onClick={handleDownload}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-heading font-semibold">
                Experience
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6 mb-12">
            {experience.map((item, i) => (
              <AnimatedSection key={item.role} delay={0.15 + i * 0.1}>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-heading font-semibold">{item.role}</h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm mb-2">{item.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Education */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-heading font-semibold">
                Education
              </h2>
            </div>
          </AnimatedSection>

          {education.map((item, i) => (
            <AnimatedSection key={item.degree} delay={0.35 + i * 0.1}>
              <div className="p-5 rounded-xl bg-card border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-heading font-semibold">{item.degree}</h3>
                  <span className="text-xs text-muted-foreground font-mono">
                    {item.period}
                  </span>
                </div>
                <p className="text-primary text-sm mt-1">{item.school}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
