import { Github, Code2, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const profiles = [
  {
    name: 'GitHub',
    username: '@alexchen',
    description:
      'Open source contributions, personal projects, and experiments.',
    url: 'https://github.com',
    icon: Github,
    stats: '120+ repos • 500+ contributions',
  },
  {
    name: 'LeetCode',
    username: '@alexchen',
    description:
      'Algorithm problem solving, contest participation, and daily challenges.',
    url: 'https://leetcode.com',
    icon: Code2,
    stats: '400+ problems solved',
  },
  {
    name: 'SkillRack',
    username: '@alexchen',
    description:
      'Coding assessments, programming challenges, and skill certifications.',
    url: 'https://skillrack.com',
    icon: Award,
    stats: '200+ challenges completed',
  },
];

const CodingProfiles = () => {
  const reducedMotion = useReducedMotion();

  return (
    <PageTransition>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Coding Profiles
            </h1>
            <p className="text-muted-foreground mb-12">
              Where I practice, contribute, and grow as an engineer.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {profiles.map((profile, i) => (
              <AnimatedSection key={profile.name} delay={i * 0.12}>
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 block"
                  whileHover={reducedMotion ? {} : { scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-lg bg-secondary text-primary">
                    <profile.icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                        {profile.name}
                      </h2>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-primary text-sm mb-1">
                      {profile.username}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {profile.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {profile.stats}
                    </p>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CodingProfiles;
