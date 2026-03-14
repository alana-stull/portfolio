import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import profileImage from 'figma:asset/ec07d733eb726b699d85e6736336f9c950192cd0.png';

export function About() {
  const skills = [
    'Brand & Visual Design',
    'Cross-Functional Collaboration',
    'Data-Driven Design',
    'End-to-End Product Ownership',
    'Front-End Development',
    'Generative AI Design',
    'Information Architecture (IA)',
    'Interaction Design (IxD)',
    'Prototyping & Usability Testing',
    'UX Strategy & Vision',
  ];

  const experience = [
    {
      title: 'Founder, Digital Product Designer',
      company: 'Noted By Nani',
      period: 'May 2025 - Present',
      description: 'Founded a digital stationery company focused on intentional living and mindful planning. Provides minimalist digital planning tools that empower users to organize routines, set meaningful goals, and maintain balance in personal and professional life.',
    },
    {
      title: 'Co-Founder, Chief of Design & Development',
      company: 'Blyss Social',
      period: '2021 - Present',
      description: 'Design and develop the full mobile MVP using Figma, JavaScript, React, and React Native. Lead usability testing and manage all user-centered initiatives—from interviews to product development. Oversee end-to-end development across web and mobile, manage team operations, timelines, and hiring— aligning product direction with business strategy.',
    },
    {
      title: 'UX Design Intern',
      company: 'Amazon',
      period: 'May - August 2024',
      description: 'Designed and conducted usability tests for generative AI/LLM platform (hosting 1.4k+ people metrics and 175k+ customized reports). Created row-level data retrieval feature and concepts for prompt guide and data visualization features.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-warm-white)' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
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
              about me
            </p>
            <div className="space-y-6" style={{ color: 'var(--color-bark)', fontSize: '1rem', lineHeight: 1.6 }}>
              <p>
                I'm a diligent, creative, and empathetic problem solver who designs on the foundation of lived experience. For me, design is about impact—removing friction, building authentic connections, and bringing joy into daily experiences. I strive to reflect authenticity, compassion, and intentionality in both my work and collaboration.
              </p>
              <p>
                My interdisciplinary background in psychology, engineering, entrepreneurship, and African/African-American studies shapes a human-centered, culturally aware approach. I've applied this to projects like Noted by Nani, social platforms, and equity-focused tech initiatives.
              </p>
              <p>
                Through internships at Amazon and IDEO, I've learned to design solutions that scale while staying human-centered. I'm seeking UX engineering or design technology roles where I can create products that empower, connect, and simplify.
              </p>
            </div>
          </div>
          <div 
            className="aspect-square rounded-b-[50px] overflow-hidden"
            style={{ border: '1px solid var(--color-stone)' }}
          >
            <ImageWithFallback
              src={profileImage}
              alt="Alana Stull"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p 
          className="mb-8"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          skills & expertise
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-4 rounded-lg text-center transition-colors"
              style={{ 
                backgroundColor: 'var(--color-warm-white)', 
                border: '1px solid var(--color-stone)',
                color: 'var(--color-ink)',
                fontSize: '0.875rem',
                fontWeight: 400,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p 
          className="mb-12"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          experience
        </p>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="pl-6"
              style={{ borderLeft: '2px solid var(--color-stone)' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 style={{ color: 'var(--color-ink)', fontWeight: 600, fontSize: '1.125rem' }}>
                  {job.title}
                </h3>
                <span style={{ color: 'var(--color-bark)', fontSize: '0.875rem' }}>{job.period}</span>
              </div>
              <p style={{ color: 'var(--color-ink)', marginBottom: '0.5rem', fontStyle: 'italic' }}>{job.company}</p>
              <p style={{ color: 'var(--color-bark)', maxWidth: '64rem', lineHeight: 1.6 }}>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 pt-24">
        <p 
          className="mb-12"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'var(--color-bark)',
            textTransform: 'uppercase',
          }}
        >
          education
        </p>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="flex-1 md:pr-12">
            <h3 style={{ color: 'var(--color-ink)', fontWeight: 600, marginBottom: '0.25rem' }}>
              M.Eng in Design and Technology Innovation
            </h3>
            <p style={{ color: 'var(--color-bark)', fontStyle: 'italic', marginBottom: '0.25rem' }}>
              Innovation & Entrepreneurship Certificate
            </p>
            <p style={{ color: 'var(--color-ink)', marginTop: '1rem', marginBottom: '0.25rem' }}>Duke University</p>
            <p style={{ color: 'var(--color-bark)' }}>Expected Graduation: December 2026</p>
          </div>
          <div 
            className="hidden md:block w-px rounded-full mx-6"
            style={{ backgroundColor: 'var(--color-stone)' }}
          />
          <div className="flex-1 md:pl-12">
            <h3 style={{ color: 'var(--color-ink)', fontWeight: 600, marginBottom: '0.25rem' }}>
              B.A. in Psychology (Human Factors)
            </h3>
            <p style={{ color: 'var(--color-bark)', fontStyle: 'italic', marginBottom: '0.25rem' }}>
              Engineering Design, Entrepreneurship, and African-American Studies
            </p>
            <p style={{ color: 'var(--color-ink)', marginTop: '1rem', marginBottom: '0.25rem' }}>Rice University</p>
            <p style={{ color: 'var(--color-bark)' }}>Graduated May 2025</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div 
          className="rounded-2xl p-12 md:p-16"
          style={{ border: '1px solid var(--color-stone)' }}
        >
          <h2 
            className="mb-4"
            style={{ 
              color: 'var(--color-ink)', 
              fontSize: '2rem', 
              fontWeight: 800 
            }}
          >
            Want to know more?
          </h2>
          <p 
            className="mb-8 max-w-2xl"
            style={{ 
              color: 'var(--color-bark)', 
              fontSize: '1.125rem',
              lineHeight: 1.6 
            }}
          >
            Download my resume or get in touch to discuss opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/path-to-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-ink)',
                color: 'var(--color-warm-white)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.05em',
              }}
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="mailto:stull.alana@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded transition-colors hover:opacity-70"
              style={{
                border: '1px solid var(--color-stone)',
                color: 'var(--color-ink)',
                fontWeight: 600,
                fontSize: '12px',
                letterSpacing: '0.05em',
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
