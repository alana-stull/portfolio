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

export function Home() {
  const professionalProjects = [
    {
      id: 'clarity-assist',
      title: 'Clarity Assist',
      description: 'UX Design Intern',
      tags: ['Generative AI', 'Conversation & Interaction Design'],
      externalLink: 'https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1',
    },
    {
      id: 'amazon-learn',
      title: 'Amazon Learn',
      description: 'UX Design Intern',
      tags: ['Edtech', 'Product Design', 'Usability Testing'],
      externalLink: 'https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1',
    },
    {
      id: 'mentor-me-collective',
      title: 'Mentor Me Collective',
      description: 'Content Designer',
      tags: ['Brand & Visual Identity', 'Content Design'],
    },
  ];

  const personalProjects = [
    {
      id: 'blyss',
      title: 'Blyss Social',
      description: 'Co-Founder, Chief of Design & Development',
      tags: ['End-to-End Product Development', 'Product Strategy'],
    },
    {
      id: 'noted-by-nani',
      title: 'Noted by Nani',
      description: 'Founder, Digital Product Designer',
      tags: ['Digital Product Design', 'Data Visualization'],
    },
    {
      id: 'sereniti',
      title: 'Sereniti',
      description: 'Founder, Product Designer',
      tags: ['Academic Research', 'Product Design'],
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
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-start pr-[220px]">
            <div className="w-[450px] h-[450px] relative scale-[0.72]">
              <NotedByNaniImage />
            </div>
          </div>
        );
      case 'blyss':
        return (
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-4 pr-[80px]">
            <img src={BlyssImageStatic} alt={title} className="w-full h-full object-contain" />
          </div>
        );
      case 'sereniti':
        return (
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-4 pr-[80px]">
            <div className="w-[400px] h-[400px] relative scale-[0.65]">
              <SerenityPhones />
            </div>
          </div>
        );
      case 'clarity-assist':
        return (
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
            <img src={ClarityAssistImage} alt={title} className="w-full h-full object-contain" />
          </div>
        );
      case 'amazon-learn':
        return (
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6">
            <img src={AmazonLearnImage} alt={title} className="w-full h-full object-contain" />
          </div>
        );
      case 'mentor-me-collective':
        return (
          <div className="aspect-[4/3] bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-start pr-[150px]">
            <div className="w-[450px] h-[450px] relative scale-[0.65]">
              <MentorMeImage />
            </div>
          </div>
        );
      default:
        return (
          <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <ImageWithFallback
              src={`https://via.placeholder.com/800x600?text=Project+${studyId}`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        );
    }
  };


  return (
    <div>
      {/* Hero Section (omitted for brevity) */}
      <section className="min-h-[100vh] flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl" style={{ paddingLeft: '60px' }}>
            <h1 className="mb-8" style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              color: 'var(--color-brown-primary)',
              textTransform: 'lowercase'
            }}>
              hey, i'm alana!
            </h1>
            <p className="mb-8" style={{
              fontSize: 'clamp(2.5rem, 2.5vw, 3.5rem)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: '1.2',
              color: 'var(--color-gray-text)',
              textTransform: 'lowercase'
            }}>
              ux engineer and entrepreneur designing experiences that empower, connect, and simplify.
            </p>

            {/* Scroll Down Arrow */}
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

      {/* Introduction Section (omitted for brevity) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-gray-900 mb-4 text-2xl font-bold">
          WHERE CREATIVITY MEETS IMPACT
        </h2>
        <p className="mb-12 max-w-6xl" style={{ fontSize: '24px', lineHeight: '1.4', color: 'var(--color-gray-text)' }}>
          Too often, digital spaces prioritize efficiency over empathy. My work challenges that norm, centering lived experience, mindful innovation, and ease of use.
        </p>

        {/* Skills Container (omitted for brevity) */}
        <div className="bg-white rounded-[50px] shadow-lg p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Design */}
            <div className="flex flex-col items-start">
              <div className="w-[70px] h-[70px] flex items-start justify-start mb-3">
                <svg className="w-[90px] h-[100px]" fill="none" viewBox="0 0 119 152">
                  <g>
                    <path d={svgPaths.pcb84900} fill="var(--color-tan-accent)" />
                    <path d={svgPaths.p3359bf00} fill="var(--color-tan-accent)" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase' }}>
                Design
              </h3>
              <p className="text-gray-900" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Skilled product designer with experience in design thinking, product development, and usability testing.
              </p>
            </div>

            {/* Development */}
            <div className="flex flex-col items-start">
              <div className="w-[60px] h-[60px] flex items-center justify-start mb-3">
                <svg className="w-[50px] h-[30px]" fill="none" viewBox="0 0 62 38">
                  <g>
                    <path d={svgPaths.p16f1bc00} fill="var(--color-tan-accent)" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase' }}>
                Development
              </h3>
              <p className="text-gray-900" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Actively expanding expertise in front-end development, with a focus on scalable cross-platform interfaces.
              </p>
            </div>

            {/* Leadership */}
            <div className="flex flex-col items-start">
              <div className="w-[60px] h-[60px] flex items-start justify-start mb-3">
                <svg className="w-[50px] h-[60px]" fill="none" viewBox="0 0 80 97">
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p848be00} fill="var(--color-tan-accent)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontSize: '20px', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase' }}>
                Leadership
              </h3>
              <p className="text-gray-900" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Empathetic leader passionate about mentorship and community impact, committed to cultivating collaborative growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-gray-900 mb-12 text-2xl font-bold">
          PERSONAL VENTURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {personalProjects.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group"
            >
              {renderProjectImage(study.id, study.title)}

              <div className="flex items-center mb-1">
                <h3 className="group-hover:opacity-70 transition-opacity mr-2" style={{ color: 'var(--color-black)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-h4)' }}>
                  {study.title}
                </h3>
              </div>

              <p className="text-body mb-3">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md"
                    style={{
                      backgroundColor: 'var(--color-light-bg)',
                      color: 'var(--color-gray-text)',
                      fontSize: 'var(--font-size-small)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-gray-900 mb-12 text-2xl font-bold">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((study) => (
            study.externalLink ? (
              <a
                key={study.id}
                href={study.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {renderProjectImage(study.id, study.title)}

                <div className="flex items-center mb-1">
                  <h3 className="group-hover:opacity-70 transition-opacity mr-2" style={{ color: 'var(--color-black)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-h4)' }}>
                    {study.title}
                  </h3>
                  {/* 👈 Added pl-1 for padding */}
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-gray-700 transition-colors pl-1" />
                </div>

                <p className="text-body mb-3">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md"
                      style={{
                        backgroundColor: 'var(--color-light-bg)',
                        color: 'var(--color-gray-text)',
                        fontSize: 'var(--font-size-small)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group"
              >
                {renderProjectImage(study.id, study.title)}

                <div className="flex items-center mb-1">
                  <h3 className="group-hover:opacity-70 transition-opacity mr-2" style={{ color: 'var(--color-black)', fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-h4)' }}>
                    {study.title}
                  </h3>
                </div>

                <p className="text-body mb-3">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md"
                      style={{
                        backgroundColor: 'var(--color-light-bg)',
                        color: 'var(--color-gray-text)',
                        fontSize: 'var(--font-size-small)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            )
          ))}
        </div>
      </section>


    </div>
  );
}