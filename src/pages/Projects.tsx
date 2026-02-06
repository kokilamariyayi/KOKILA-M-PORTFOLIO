import { PageTransition } from '@/components/PageTransition';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'NeuralChat',
    description:
      'AI-powered conversational platform with real-time language processing, sentiment analysis, and adaptive response generation.',
    category: 'AI / ML',
    tags: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    link: '#',
  },
  {
    id: 2,
    title: 'PixelForge',
    description:
      'Real-time collaborative image processing engine with GPU-accelerated filters, layer compositing, and WebGL shaders.',
    category: 'Creative Tools',
    tags: ['TypeScript', 'WebGL', 'Canvas API', 'Web Workers'],
    link: '#',
  },
  {
    id: 3,
    title: 'DataStream',
    description:
      'High-throughput analytics dashboard processing millions of events with real-time visualization and anomaly detection.',
    category: 'Data Engineering',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 4,
    title: 'CloudSync',
    description:
      'Distributed file synchronization system with conflict resolution, end-to-end encryption, and multi-device support.',
    category: 'Infrastructure',
    tags: ['Go', 'gRPC', 'Redis', 'Docker'],
    link: '#',
  },
  {
    id: 5,
    title: 'StyleScope',
    description:
      'Design system management tool with automated accessibility testing, component documentation, and Figma integration.',
    category: 'Developer Tools',
    tags: ['React', 'Storybook', 'Figma API', 'CI/CD'],
    link: '#',
  },
  {
    id: 6,
    title: 'QuantumTask',
    description:
      'Intelligent task management with AI-driven prioritization, natural language input, and cross-platform sync.',
    category: 'Productivity',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'tRPC'],
    link: '#',
  },
];

const Projects = () => (
  <PageTransition>
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-lg mb-12">
            A selection of work that reflects my approach: problem → solution → impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Projects;
