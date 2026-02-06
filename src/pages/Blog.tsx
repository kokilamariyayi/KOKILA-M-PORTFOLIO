import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const posts = [
  {
    id: 1,
    title: 'Building Performant React Applications',
    excerpt:
      'Exploring techniques for optimizing React apps including code splitting, memoization, and virtual scrolling strategies.',
    date: '2024-01-15',
    readTime: '8 min',
    tags: ['React', 'Performance'],
  },
  {
    id: 2,
    title: 'The Art of Clean Code Architecture',
    excerpt:
      'How to structure your codebase for maintainability, testability, and long-term developer happiness.',
    date: '2023-12-20',
    readTime: '6 min',
    tags: ['Architecture', 'Best Practices'],
  },
  {
    id: 3,
    title: 'Exploring WebGL and Three.js',
    excerpt:
      'A deep dive into 3D graphics on the web, from basic scenes to complex shader effects and optimizations.',
    date: '2023-11-10',
    readTime: '12 min',
    tags: ['WebGL', 'Three.js'],
  },
  {
    id: 4,
    title: 'Design Systems at Scale',
    excerpt:
      'Lessons learned from building and maintaining design systems across multiple product teams and codebases.',
    date: '2023-10-05',
    readTime: '7 min',
    tags: ['Design Systems', 'UI/UX'],
  },
];

const Blog = () => {
  const reducedMotion = useReducedMotion();

  return (
    <PageTransition>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground mb-12">
              Thoughts on engineering, design, and building for the web.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <motion.article
                  whileHover={reducedMotion ? {} : { x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
