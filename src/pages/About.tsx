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
            <h1 className="text-gray-900 mb-6 text-2xl font-bold">
              ABOUT ME
            </h1>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                I'm a diligent, creative, and empathetic problem solver who designs on the foundation of lived experience. For me, design is about impact—removing friction, building authentic connections, and bringing joy into daily experiences. I strive to reflect authenticity, compassion, and intentionality in both my work and collaboration.
              </p>
              <p>
                My interdisciplinary background in psychology, engineering, entrepreneurship, and African/African-American studies shapes a human-centered, culturally aware approach. I've applied this to projects like Noted by Nani, social platforms, and equity-focused tech initiatives.              </p>
              <p>
                Through internships at Amazon and IDEO, I've learned to design solutions that scale while staying human-centered. I'm seeking UX engineering or design technology roles where I can create products that empower, connect, and simplify.              </p>
            </div>
          </div>
          <div className="aspect-square bg-gray-100 rounded-b-[50px] overflow-hidden shadow-2xl">
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
        <h2 className="text-gray-900 mb-8 text-2xl font-bold">
          SKILLS & EXPERTISE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-6 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              <p className="text-gray-900 whitespace-nowrap text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-gray-900 mb-12 text-2xl font-bold">
          EXPERIENCE
        </h2>
        <div className="space-y-12 mx-8">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-gray-900">
                  {job.title}
                </h3>
                <span className="text-gray-600">{job.period}</span>
              </div>
              <p className="text-gray-700 mb-2">{job.company}</p>
              <p className="text-gray-600 max-w-5xl">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section (Optional) */}
      <section className="max-w-7xl mx-auto px-6 py-16 pt-24">
        <h2 className="text-gray-900 mb-12 text-2xl font-bold">
          EDUCATION
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="flex-1 md:pr-12">
            <h3 className="text-gray-900 mb-1">
              M.Eng in Design and Technology Innovation
            </h3>
            <p className="text-gray-600 italic mb-1">Innovation & Entrepreneurship Certificate</p>
            <p className="text-gray-700 mb-1 mt-4">Duke University</p>
            <p className="text-gray-600">Expected Graduation: December 2026</p>
          </div>
          <div className="hidden md:block w-px bg-gray-200 rounded-full mx-6"></div>
          <div className="flex-1 md:pl-12">
            <h3 className="text-gray-900 mb-1">
              B.A. in Psychology (Human Factors)
            </h3>
            <p className="text-gray-600 italic mb-1">Engineering Design, Entrepreneurship, and African-American Studies</p>
            <p className="text-gray-700 mb-1 mt-4">Rice University</p>
            <p className="text-gray-600">Graduated May 2025</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gray-50 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: 'var(--font-size-h1)', fontWeight: '700' }}>
            Want to know more?
          </h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Download my resume or get in touch to discuss opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/path-to-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg"
            >
              Download Resume
            </a>
            <a
              href="mailto:stull.alana@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}