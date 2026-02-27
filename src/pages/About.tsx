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
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="mb-6 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
              ABOUT ME
            </h1>
            <div className="space-y-6 text-lg" style={{ color: 'var(--color-warm-gray)' }}>
              <p>
                I'm a diligent, creative, and empathetic problem solver who designs on the foundation of lived experience. For me, design is about impact—removing friction, building authentic connections, and bringing joy into daily experiences. I strive to reflect authenticity, compassion, and intentionality in both my work and collaboration.
              </p>
              <p>
                My interdisciplinary background in psychology, engineering, entrepreneurship, and African/African-American studies shapes a human-centered, culturally aware approach. I've applied this to projects like Noted by Nani, social platforms, and equity-focused tech initiatives.              </p>
              <p>
                Through internships at Amazon and IDEO, I've learned to design solutions that scale while staying human-centered. I'm seeking UX engineering or design technology roles where I can create products that empower, connect, and simplify.              </p>
            </div>
          </div>
          <div className="aspect-square rounded-b-[50px] overflow-hidden shadow-2xl" style={{ backgroundColor: 'var(--color-light-bg)' }}>
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
        <h2 className="mb-8 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          SKILLS & EXPERTISE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-6 rounded-lg text-center transition-colors"
              style={{ backgroundColor: 'var(--color-light-bg)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-sage-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-light-bg)'}
            >
              <p className="whitespace-nowrap text-sm" style={{ color: 'var(--color-black)' }}>{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="mb-12 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          EXPERIENCE
        </h2>
        <div className="space-y-12 mx-8">
          {experience.map((job, index) => (
            <div key={index} className="pl-6" style={{ borderLeft: '2px solid var(--color-tan-accent)' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 style={{ color: 'var(--color-black)' }}>
                  {job.title}
                </h3>
                <span style={{ color: 'var(--color-warm-gray)' }}>{job.period}</span>
              </div>
              <p className="mb-2" style={{ color: 'var(--color-brown-primary)' }}>{job.company}</p>
              <p className="max-w-5xl" style={{ color: 'var(--color-warm-gray)' }}>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section (Optional) */}
      <section className="max-w-7xl mx-auto px-6 py-16 pt-24">
        <h2 className="mb-12 text-2xl font-bold" style={{ color: 'var(--color-black)' }}>
          EDUCATION
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="flex-1 md:pr-12">
            <h3 className="mb-1" style={{ color: 'var(--color-black)' }}>
              M.Eng in Design and Technology Innovation
            </h3>
            <p className="italic mb-1" style={{ color: 'var(--color-warm-gray)' }}>Innovation & Entrepreneurship Certificate</p>
            <p className="mb-1 mt-4" style={{ color: 'var(--color-brown-primary)' }}>Duke University</p>
            <p style={{ color: 'var(--color-warm-gray)' }}>Expected Graduation: December 2026</p>
          </div>
          <div className="hidden md:block w-px rounded-full mx-6" style={{ backgroundColor: 'var(--color-tan-accent)' }}></div>
          <div className="flex-1 md:pl-12">
            <h3 className="mb-1" style={{ color: 'var(--color-black)' }}>
              B.A. in Psychology (Human Factors)
            </h3>
            <p className="italic mb-1" style={{ color: 'var(--color-warm-gray)' }}>Engineering Design, Entrepreneurship, and African-American Studies</p>
            <p className="mb-1 mt-4" style={{ color: 'var(--color-brown-primary)' }}>Rice University</p>
            <p style={{ color: 'var(--color-warm-gray)' }}>Graduated May 2025</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-2xl p-12 md:p-16 text-center" style={{ backgroundColor: 'var(--color-light-bg)' }}>
          <h2 className="mb-4" style={{ fontSize: 'var(--font-size-h1)', fontWeight: '700', color: 'var(--color-black)' }}>
            Want to know more?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-warm-gray)' }}>
            Download my resume or get in touch to discuss opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Alana-Stull-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors rounded-lg"
              style={{ backgroundColor: 'var(--color-brown-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brown-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brown-primary)'}
            >
              Download Resume
            </a>
            <a
              href="mailto:stull.alana@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 transition-colors rounded-lg"
              style={{ border: '1px solid var(--color-tan-accent)', color: 'var(--color-brown-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-sage-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
