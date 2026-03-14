import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import NotedByNaniImage from '../imports/Group33988';
import SerenityPhones from '../imports/Group33982';
import BlyssImageStatic from 'figma:asset/a599320fb284b50fd85c5467705d2e1467d43acb.png';

export function Home() {
  const featuredProjects = [
    {
      id: 'blyss',
      title: 'Blyss',
      description: 'Social wellness platform for mindful connection',
    },
    {
      id: 'noted-by-nani',
      title: 'Rhythm',
      description: 'Digital planning tools for intentional living',
    },
    {
      id: 'sereniti',
      title: 'Crwn',
      description: 'Mental wellness app with personalized support',
    },
  ];

  const personalVentures = [
    {
      title: 'Blyss',
      role: 'Founder & Lead Designer',
      description: 'Social wellness platform designed to foster mindful digital connections and community support.',
      link: '/case-studies/blyss',
    },
    {
      title: 'Rhythm',
      role: 'Co-Founder & UX Lead',
      description: 'Digital planning ecosystem helping users build intentional habits through thoughtful design.',
      link: '/case-studies/noted-by-nani',
    },
    {
      title: 'Crwn',
      role: 'Product Designer',
      description: 'Mental wellness application providing personalized support through AI-driven insights.',
      link: '/case-studies/sereniti',
    },
  ];

  const professionalExperience = [
    {
      company: 'Design Studio',
      role: 'UX Engineer',
      period: '2023 — Present',
      description: 'Leading design system development and front-end implementation for enterprise clients.',
    },
    {
      company: 'Tech Startup',
      role: 'Product Designer',
      period: '2021 — 2023',
      description: 'Drove end-to-end product design for mobile applications serving 50K+ users.',
    },
    {
      company: 'Creative Agency',
      role: 'Junior Designer',
      period: '2019 — 2021',
      description: 'Collaborated on branding and digital experiences for Fortune 500 companies.',
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
          <div 
            className="aspect-[4/3] rounded-lg mb-4 overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}
          >
            <div className="w-[350px] h-[350px] relative scale-[0.6]">
              <NotedByNaniImage />
            </div>
          </div>
        );
      case 'blyss':
        return (
          <div 
            className="aspect-[4/3] rounded-lg mb-4 overflow-hidden flex items-center justify-center p-6"
            style={{ backgroundColor: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}
          >
            <img src={BlyssImageStatic} alt={title} className="w-full h-full object-contain" />
          </div>
        );
      case 'sereniti':
        return (
          <div 
            className="aspect-[4/3] rounded-lg mb-4 overflow-hidden flex items-center justify-center p-4"
            style={{ backgroundColor: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}
          >
            <div className="w-[300px] h-[300px] relative scale-[0.55]">
              <SerenityPhones />
            </div>
          </div>
        );
      default:
        return (
          <div 
            className="aspect-[4/3] rounded-lg mb-4 overflow-hidden"
            style={{ backgroundColor: 'var(--color-warm-white)', border: '1px solid var(--color-stone)' }}
          >
            <ImageWithFallback
              src={`https://via.placeholder.com/800x600?text=Project+${studyId}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        );
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p 
              className="mb-4"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--color-bark)',
                textTransform: 'uppercase',
              }}
            >
              ux engineer · entrepreneur
            </p>
            
            {/* Headline */}
            <h1 
              className="mb-6"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--color-ink)',
              }}
            >
              hey, i'm alana!
            </h1>
            
            {/* Description */}
            <p 
              className="mb-8 max-w-2xl"
              style={{
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--color-bark)',
              }}
            >
              Aspiring design technologist working at the intersection of AI, design strategy, 
              and product development. I design on the foundation of lived experience, blending 
              creativity, empathy, and data-driven insights to craft products that empower, 
              connect, and simplify. Guided by human-centered design, technical 
              excellence, and social impact, I translate complex problems into intuitive, 
              impactful experiences.
            </p>
            
            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToWork}
                className="px-6 py-3 rounded transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-ink)',
                  color: 'var(--color-warm-white)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                VIEW WORK
              </button>
              <Link
                to="/about"
                className="px-4 py-3 transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-ink)',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                {'ABOUT ME →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where Creativity Meets Impact Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <h2 
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: 'var(--color-steel-blue)',
              textTransform: 'uppercase',
            }}
          >
            Where Creativity Meets Impact
          </h2>
          <p 
            className="mb-16 max-w-4xl"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'var(--color-bark)',
            }}
          >
            Too often, digital spaces prioritize efficiency over empathy. My work challenges that norm — centering lived experience, mindful innovation, and ease of use.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Design */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-ink)',
                  textTransform: 'uppercase',
                }}
              >
                Design
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'var(--color-bark)',
                }}
              >
                Skilled product designer with experience in design thinking, product development, and usability testing.
              </p>
            </div>

            {/* Development */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-ink)',
                  textTransform: 'uppercase',
                }}
              >
                Development
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'var(--color-bark)',
                }}
              >
                Actively expanding expertise in front-end development, with a focus on scalable cross-platform interfaces.
              </p>
            </div>

            {/* Leadership */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-ink)',
                  textTransform: 'uppercase',
                }}
              >
                Leadership
              </h3>
              <p 
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'var(--color-bark)',
                }}
              >
                Empathetic leader passionate about mentorship and community impact, committed to cultivating collaborative growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="max-w-7xl mx-auto px-6"
        style={{ borderTop: '1px solid var(--color-stone)' }}
      />

      {/* Featured Work Section */}
      <section id="featured-work" className="max-w-7xl mx-auto px-6 py-24">
        <h2 
          className="mb-12"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/case-studies/${project.id}`}
              className="group block"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(42, 33, 24, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div 
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: 'var(--color-warm-white)' }}
              >
                {renderProjectImage(project.id, project.title)}
                <div className="p-4">
                  <h3 
                    className="mb-1"
                    style={{ 
                      color: 'var(--color-ink)', 
                      fontWeight: 600, 
                      fontSize: '1.25rem' 
                    }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    style={{ 
                      color: 'var(--color-bark)', 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div 
        className="max-w-7xl mx-auto px-6"
        style={{ borderTop: '1px solid var(--color-stone)' }}
      />

      {/* Personal Ventures Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 
          className="mb-12"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          Personal Ventures
        </h2>
        <div className="flex flex-col gap-8">
          {personalVentures.map((venture, index) => (
            <Link
              key={index}
              to={venture.link}
              className="group block py-6"
              style={{
                borderBottom: '1px solid var(--color-stone)',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 
                    style={{ 
                      color: 'var(--color-ink)', 
                      fontWeight: 600, 
                      fontSize: '1.25rem',
                      marginBottom: '4px',
                    }}
                  >
                    {venture.title}
                  </h3>
                  <p 
                    style={{ 
                      color: 'var(--color-steel-blue)', 
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontStyle: 'italic',
                    }}
                  >
                    {venture.role}
                  </p>
                </div>
                <p 
                  className="md:max-w-md"
                  style={{ 
                    color: 'var(--color-bark)', 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {venture.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div 
        className="max-w-7xl mx-auto px-6"
        style={{ borderTop: '1px solid var(--color-stone)' }}
      />

      {/* Professional Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 
          className="mb-12"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          Professional Experience
        </h2>
        <div className="flex flex-col gap-8">
          {professionalExperience.map((experience, index) => (
            <div
              key={index}
              className="py-6"
              style={{
                borderBottom: '1px solid var(--color-stone)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 
                    style={{ 
                      color: 'var(--color-ink)', 
                      fontWeight: 600, 
                      fontSize: '1.25rem',
                      marginBottom: '4px',
                    }}
                  >
                    {experience.company}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p 
                      style={{ 
                        color: 'var(--color-steel-blue)', 
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        fontStyle: 'italic',
                      }}
                    >
                      {experience.role}
                    </p>
                    <span style={{ color: 'var(--color-stone)' }}>·</span>
                    <p 
                      style={{ 
                        color: 'var(--color-bark)', 
                        fontSize: '0.875rem',
                        fontWeight: 400,
                      }}
                    >
                      {experience.period}
                    </p>
                  </div>
                </div>
                <p 
                  className="md:max-w-md"
                  style={{ 
                    color: 'var(--color-bark)', 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
