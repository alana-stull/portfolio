import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from '../imports/svg-qqzod930ty';
import MentorMeImage from '../imports/Group33987';
import NotedByNaniImage from '../imports/Group33988';
import SerenityPhones from '../imports/Group33982';
import BlyssImageStatic from 'figma:asset/a599320fb284b50fd85c5467705d2e1467d43acb.png';
import ClarityAssistImage from 'figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png';
import AmazonLearnImage from 'figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  externalLink?: string;
  brandColor: string;
  brandColorLight: string;
}

// V2 Home - Color burst project cards
export function HomeV2() {
  const personalProjects: ProjectData[] = [
    {
      id: 'blyss',
      title: 'Blyss Social',
      description: 'Co-Founder, Chief of Design & Development',
      tags: ['End-to-End Product Development', 'Product Strategy'],
      brandColor: '#5885AE',
      brandColorLight: '#e8f0fb',
    },
    {
      id: 'noted-by-nani',
      title: 'Noted by Nani',
      description: 'Founder, Digital Product Designer',
      tags: ['Digital Product Design', 'Data Visualization'],
      brandColor: '#B88C6F',
      brandColorLight: '#f3efe8',
    },
    {
      id: 'sereniti',
      title: 'Sereniti',
      description: 'Founder, Product Designer',
      tags: ['Academic Research', 'Product Design'],
      brandColor: '#FFB347',
      brandColorLight: '#fdf6e3',
    },
  ];

  const professionalProjects: ProjectData[] = [
    {
      id: 'clarity-assist',
      title: 'Clarity Assist',
      description: 'UX Design Intern',
      tags: ['Generative AI', 'Conversation & Interaction Design'],
      externalLink: 'https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1',
      brandColor: '#1768C9',
      brandColorLight: '#e8f0fb',
    },
    {
      id: 'amazon-learn',
      title: 'Amazon Learn',
      description: 'UX Design Intern',
      tags: ['Edtech', 'Product Design', 'Usability Testing'],
      externalLink: 'https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1',
      brandColor: '#1768C9',
      brandColorLight: '#e8f0fb',
    },
    {
      id: 'mentor-me-collective',
      title: 'Mentor Me Collective',
      description: 'Content Designer',
      tags: ['Brand & Visual Identity', 'Content Design'],
      brandColor: '#5E7F5B',
      brandColorLight: '#e5f2e9',
    },
  ];

  const scrollToWork = () => {
    const workSection = document.getElementById('featured-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProjectImage = (studyId: string, title: string) => {
    switch (studyId) {
      case 'noted-by-nani':
        return (
          <div className="w-[320px] h-[260px] relative">
            <div className="absolute inset-0 scale-[0.6] origin-center">
              <NotedByNaniImage />
            </div>
          </div>
        );
      case 'blyss':
        return (
          <img src={BlyssImageStatic} alt={title} className="max-h-[260px] max-w-full object-contain" />
        );
      case 'sereniti':
        return (
          <div className="w-[320px] h-[260px] relative">
            <div className="absolute inset-0 scale-[0.45] origin-center">
              <SerenityPhones />
            </div>
          </div>
        );
      case 'clarity-assist':
        return (
          <img src={ClarityAssistImage} alt={title} className="max-h-[260px] max-w-full object-contain" />
        );
      case 'amazon-learn':
        return (
          <img src={AmazonLearnImage} alt={title} className="max-h-[260px] max-w-full object-contain" />
        );
      case 'mentor-me-collective':
        return (
          <div className="w-[320px] h-[260px] relative">
            <div className="absolute inset-0 scale-[0.45] origin-center">
              <MentorMeImage />
            </div>
          </div>
        );
      default:
        return (
          <ImageWithFallback
            src={`https://via.placeholder.com/800x600?text=Project+${studyId}`}
            alt={title}
            className="max-h-[260px] max-w-full object-contain"
          />
        );
    }
  };

  const ProjectCard = ({ project }: { project: ProjectData }) => {
    const inner = (
      <div>
        {/* Image area with color burst */}
        <div
          className="relative flex items-center justify-center overflow-visible rounded-2xl"
          style={{ minHeight: '300px' }}
        >
          {/* Radial color burst behind the image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 75% 70% at 50% 50%, ${project.brandColor}35 0%, ${project.brandColor}18 35%, transparent 65%),
                radial-gradient(ellipse 55% 55% at 25% 35%, ${project.brandColor}20 0%, transparent 55%),
                radial-gradient(ellipse 55% 55% at 75% 65%, ${project.brandColor}18 0%, transparent 50%)
              `,
            }}
          />
          {/* Image wrapper -- only this scales on hover */}
          <div className="relative flex items-center justify-center p-6 transition-transform duration-[400ms] ease-out group-hover:scale-110">
            {renderProjectImage(project.id, project.title)}
          </div>
        </div>

        {/* Text content area */}
        <div className="pt-5 px-1">
          <div className="flex items-center mb-1">
            <h3 style={{
              color: 'var(--color-black)',
              fontWeight: 'var(--font-weight-semibold)',
              fontSize: 'var(--font-size-h3)',
            }}>
              {project.title}
            </h3>
            {project.externalLink && (
              <ExternalLink
                size={16}
                className="transition-colors"
                style={{ marginLeft: '8px', color: 'var(--color-taupe)' }}
              />
            )}
          </div>

          <p className="mb-3" style={{
            color: 'var(--color-warm-gray)',
            fontSize: 'var(--font-size-body)',
          }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md"
                style={{
                  backgroundColor: 'var(--color-light-bg)',
                  color: 'var(--color-gray-text)',
                  fontSize: 'var(--font-size-small)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );

    if (project.externalLink) {
      return (
        <a
          href={project.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {inner}
        </a>
      );
    }

    return (
      <Link to={`/case-studies/${project.id}`} className="group block">
        {inner}
      </Link>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[100vh] flex items-center justify-center relative overflow-hidden">
        {/* Ombre color bursts - right / bottom-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 55% at 90% 75%, rgba(184, 140, 111, 0.25) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 95% 55%, rgba(108, 56, 42, 0.15) 0%, transparent 55%),
              radial-gradient(ellipse 35% 45% at 80% 90%, rgba(255, 179, 71, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 30% 30% at 70% 65%, rgba(94, 127, 91, 0.08) 0%, transparent 45%)
            `,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-5xl" style={{ paddingLeft: '60px' }}>
            <h1 className="mb-12" style={{
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.05',
              color: 'var(--color-brown-primary)',
              textTransform: 'lowercase',
            }}>
              hey, i'm alana!
            </h1>
            <p style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: '1.5',
              color: 'var(--color-gray-text)',
              textTransform: 'lowercase',
            }}>
              ux engineer and entrepreneur designing experiences that empower, connect, and simplify.
            </p>

            <button
              onClick={scrollToWork}
              className="flex flex-col items-center cursor-pointer hover:opacity-70 transition-opacity mt-16"
              aria-label="Scroll to work section"
            >
              <ChevronDown
                size={50}
                style={{
                  color: 'var(--color-tan-accent)',
                  animation: 'bounce 2s infinite',
                }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          WHERE CREATIVITY MEETS IMPACT
        </h2>
        <p className="mb-12 max-w-6xl" style={{ fontSize: '24px', lineHeight: '1.4', color: 'var(--color-warm-gray)' }}>
          Too often, digital spaces prioritize efficiency over empathy. My work challenges that norm, centering lived experience, mindful innovation, and ease of use.
        </p>

        {/* Skills Container */}
        <div className="rounded-[50px] p-12 md:p-16" style={{ backgroundColor: 'var(--color-light-bg)', border: '1px solid var(--color-border-warm)', boxShadow: '0 4px 24px rgba(44,36,32,0.08)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start">
              <div className="w-[70px] h-[70px] flex items-start justify-start mb-3">
                <svg className="w-[90px] h-[100px]" fill="none" viewBox="0 0 119 152">
                  <g>
                    <path d={svgPaths.pcb84900} fill="var(--color-tan-accent)" />
                    <path d={svgPaths.p3359bf00} fill="var(--color-tan-accent)" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', color: 'var(--color-black)' }}>
                Design
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.4', color: 'var(--color-warm-gray)' }}>
                Skilled product designer with experience in design thinking, product development, and usability testing.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-[60px] h-[60px] flex items-center justify-start mb-3">
                <svg className="w-[50px] h-[30px]" fill="none" viewBox="0 0 62 38">
                  <g>
                    <path d={svgPaths.p16f1bc00} fill="var(--color-tan-accent)" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', color: 'var(--color-black)' }}>
                Development
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.4', color: 'var(--color-warm-gray)' }}>
                Actively expanding expertise in front-end development, with a focus on scalable cross-platform interfaces.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-[60px] h-[60px] flex items-start justify-start mb-3">
                <svg className="w-[50px] h-[60px]" fill="none" viewBox="0 0 80 97">
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p848be00} fill="var(--color-tan-accent)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', color: 'var(--color-black)' }}>
                Leadership
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.4', color: 'var(--color-warm-gray)' }}>
                Empathetic leader passionate about mentorship and community impact, committed to cultivating collaborative growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="mb-12 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          PERSONAL VENTURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <h2 className="mb-12 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
