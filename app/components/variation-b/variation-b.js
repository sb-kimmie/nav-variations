'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const NAV = [
  { label: 'Home', href: '/join-the-pack' },
  {
    id: 'future-students',
    label: 'Future Students',
    href: '/join-the-pack/future-students',
    description: 'Discover everything CSUSB has to offer — from exploring campus and choosing a major to applying and understanding the cost of attendance.',
    sections: [
      {
        heading: 'Explore CSUSB',
        href: '',
        links: [
          { label: 'Why Choose CSUSB',            href: '/join-the-pack/future-students/explore-csusb/why-choose-csusb' },
          { label: 'Campus Tours',                 href: '/join-the-pack/future-students/explore-csusb/campus-tours' },
          { label: 'Education Abroad',             href: '/join-the-pack/future-students/explore-csusb/education-abroad' },
          { label: 'Visit San Bernardino',         href: '/join-the-pack/future-students/explore-csusb/visit-san-bernardino' },
          { label: 'CSUSB Traditions & Landmarks', href: '/join-the-pack/future-students/explore-csusb/csusb-traditions-and-landmarks' },
        ],
      },
      {
        heading: 'Apply',
        href: '',
        links: [
          { label: 'Application Workshops',                 href: '/join-the-pack/future-students/apply/application-workshops' },
          { label: 'Freshmen Admissions Requirements',      href: '/join-the-pack/future-students/apply/freshmen-admissions-requirements' },
          { label: 'Transfer Admissions Requirements',      href: '/join-the-pack/future-students/apply/transfer-admissions-requirements' },
          { label: 'Returning Students',                    href: '/join-the-pack/future-students/apply/returning-students' },
          { label: 'Graduate Admissions Requirements',      href: '/join-the-pack/future-students/apply/graduate-admissions-requirements' },
          { label: 'International Admissions Requirements', href: 'https://www.csusb.edu/node/540620' },
          { label: 'After Admission: Your Next Steps',      href: '/join-the-pack/future-students/apply/after-admission-your-next-steps' },
        ],
      },
      {
        heading: 'Program Requirements',
        href: '',
        links: [
          { label: 'Transfer Success Pathway',    href: '/join-the-pack/future-students/program-specific-requirements/transfer-success-pathway-tsp' },
          { label: 'Veteran Admissions',          href: '/join-the-pack/future-students/program-specific-requirements/military-veteran-students' },
          { label: 'EOP',                         href: '/join-the-pack/future-students/program-specific-requirements/educational-opportunity-program-eop' },
          { label: 'High School Dual Enrollment', href: '/join-the-pack/future-students/program-specific-requirements/high-school-dual-enrollment' },
          { label: 'Non-degree Programs',         href: '/join-the-pack/future-students/program-specific-requirements/non-degree-programs' },
          { label: 'Over 60 Program',             href: '/join-the-pack/future-students/program-specific-requirements/over-60-program' },
          { label: 'University Honors College',   href: '/join-the-pack/future-students/program-specific-requirements/university-honors-college' },
        ],
      },
      {
        heading: 'Campus Life',
        href: '',
        links: [
          { label: 'Student Recreation & Wellness', href: '/join-the-pack/future-students/campus-life/student-recreation-wellness-center' },
          { label: 'Living on Campus',              href: '/join-the-pack/future-students/living-campus' },
          { label: 'Connect with a Counselor',      href: '/join-the-pack/future-students/connect-outreach-counselor' },
          { label: 'Palm Desert Campus',            href: '/join-the-pack/future-students/learn-about-palm-desert-campus' },
          { label: 'Cost of Attendance',            href: '/join-the-pack/future-students/cost-attendance' },
          { label: 'Tuition Calculator',            href: 'https://app.meadowfi.com/csusb' },
        ],
      },
    ],
  },
  {
    id: 'newly-admitted',
    label: 'Newly Admitted Students',
    href: '/join-the-pack/newly-admitted-students',
    description: "Congratulations! You've been admitted to CSUSB. Here's everything you need to complete enrollment and prepare for your first day as a Coyote.",
    sections: [
      {
        heading: 'By Student Type',
        href: '',
        links: [
          { label: 'First-year Students',     href: '/join-the-pack/newly-admitted-students/first-year-students' },
          { label: 'EOP First-year Students', href: '/join-the-pack/newly-admitted-students/eop-first-year-students' },
          { label: 'International Students',  href: 'https://www.csusb.edu/international-education/programs/partnership-programs/students/new-students' },
          { label: 'Transfer Students',       href: '/join-the-pack/newly-admitted-students/transfer-students' },
          { label: 'Returning Students',      href: '/join-the-pack/newly-admitted-students/returning-students' },
          { label: 'Graduate Students',       href: '/join-the-pack/newly-admitted-students/graduate-students' },
        ],
      },
      {
        heading: 'Getting Started',
        href: '',
        links: [
          { label: 'Financial Aid & Scholarships', href: '/join-the-pack/newly-admitted-students/financial-aid-scholarships-grants' },
          { label: 'Orientation Overview',         href: '/join-the-pack/newly-admitted-students/orientation-overview' },
          { label: 'Join Nearpeer',                href: '/join-the-pack/newly-admitted-students/join-the-nearpeer' },
        ],
      },
    ],
  },
  {
    id: 'parents',
    label: 'Parents & Guardians',
    href: '/join-the-pack/parents-guardians',
    description: "Resources to help you support your student's journey to becoming a CSUSB Coyote.",
    sections: [
      {
        heading: 'Resources',
        href: '',
        links: [
          { label: 'Financial Aid Overview',        href: '/join-the-pack/parents-guardians/financial-aid-overview' },
          { label: 'Campus Tours & Virtual Visits', href: '/join-the-pack/parents-guardians/campus-tours-virtual-visits' },
          { label: 'Campus Safety',                 href: '/join-the-pack/parents-guardians/campus-safety' },
        ],
      },
    ],
  },
  {
    id: 'counselors',
    label: 'Counselors',
    href: '/join-the-pack/counselors',
    description: 'Tools, programs, and connections to guide your students toward a successful future at Cal State San Bernardino.',
    sections: [
      {
        heading: 'Apply & Admissions',
        href: '',
        links: [
          { label: 'Freshman Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/freshmen-admissions-requirements' },
          { label: 'Transfer Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/transfer-admissions-requirements' },
        ],
      },
      {
        heading: 'Available Programs',
        href: '',
        links: [
          { label: 'Direct Admissions Program',        href: '/join-the-pack/counselors/available-programs/direct-admissions-program' },
          { label: 'High School Dual Enrollment',      href: 'https://www.csusb.edu/join-the-pack/counselors/available-programs#hsdualenrollment' },
          { label: 'Transfer Pathways & Articulation', href: '/join-the-pack/counselors/available-programs/transfer-pathways-articulation' },
        ],
      },
      {
        heading: 'Making College Happen',
        href: '',
        links: [
          { label: 'Affordability & Financial Aid', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#affordability-financial-aid' },
          { label: 'Parent & Family Communication', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#parent-family-communication' },
          { label: 'Visiting CSUSB',                href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#campus-tours' },
        ],
      },
      {
        heading: 'More',
        href: '',
        links: [
          { label: 'Palm Desert Campus',            href: '/join-the-pack/counselors/palm-desert-campus' },
          { label: 'Resources',                     href: '/join-the-pack/counselors/resources' },
          { label: 'Request an Outreach Counselor', href: '/join-the-pack/counselors/request-outreach-counselor' },
        ],
      },
    ],
  },
  {
    id: 'admissions-forms',
    label: 'Admissions Forms',
    href: '/join-the-pack/admissions-forms',
    sections: null,
  },
  {
    id: 'program-finder',
    label: 'Program Finder',
    href: 'https://www.csusb.edu/join-the-pack/program-finder',
    description: 'Explore over 70 majors, concentrations, and certificate programs at CSUSB.',
    sections: [
      {
        heading: 'Certificates',
        href: '',
        links: [
          { label: 'Why Earn a Certificate at CSUSB?', href: '/join-the-pack/program-finder/certificates' },
        ],
      },
    ],
  },
];

const IcoArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ChevronB({ open }) {
  return (
    <svg
      className={`w-[10px] h-[7px] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 12 8"
      fill="none"
    >
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Desktop Mega Panel ───────────────────────────────────────────────────────

function Desktop({ item, onClose }) {
  return (
    <div className="bg-[#f8f8f8] border-t border-[#004a8a] border-b-4 border-b-[#004a8a] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1280px] mx-auto px-8 pt-9 pb-10 grid grid-cols-[260px_1px_1fr] gap-x-10 items-start">
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] font-bold text-[#002060] m-0 leading-tight">{item.label}</h2>
          {item.description && (
            <p className="text-[14px] leading-[1.65] text-[#555] m-0">{item.description}</p>
          )}
          <Link
            href={item.href}
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-[14px] font-bold text-[#003DA5] no-underline mt-1 hover:text-[#002060]"
          >
            {item.label}
            <span className="flex items-center group-hover:translate-x-1">
              <IcoArrow />
            </span>
          </Link>
        </div>
        <div className="bg-[#e0e0e0] self-stretch min-h-[100px]" aria-hidden="true" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-x-6 gap-y-5 content-start">
          {item.sections.map((sec) => (
            <div key={sec.heading} className="flex flex-col gap-2">
              {sec.href ? (
                <Link
                  href={sec.href}
                  onClick={onClose}
                  className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#002060] no-underline pb-[6px] border-b-2 border-[#004a8a] hover:text-[#003DA5]"
                >
                  {sec.heading}
                </Link>
              ) : (
                <span className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#002060] pb-[6px] border-b-2 border-[#004a8a]">
                  {sec.heading}
                </span>
              )}
              <ul className="list-none m-0 p-0">
                {sec.links.map((lk) => (
                  <li key={lk.label}>
                    <Link
                      href={lk.href}
                      onClick={onClose}
                      className="block text-[13.5px] font-semibold text-[#333] no-underline py-[5px] border-b border-[#efefef] last:border-b-0 leading-snug hover:underline underline-offset-[3px] decoration-[#003DA5] decoration-[1.5px]"
                    >
                      {lk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function ChevronA() {
  return (
    <svg className="w-[10px] h-[7px] flex-shrink-0" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileSectionFromSections({ sec }) {
  const [open, setOpen] = useState(false);

  if (sec.heading) {
    return (
      <div className="border-b border-[#dde3f0]">
        <button
          className="w-full flex items-center justify-between px-5 py-[14px] text-[14px] font-semibold text-[#1a2a4a] text-left bg-transparent border-none cursor-pointer font-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
          style={{ minHeight: '44px' }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="flex items-center gap-2 min-w-0">
            <span
              className="flex-shrink-0 w-[3px] self-stretch"
              style={{ background: open ? '#0273D7' : '#b3c6e8', transition: 'background 0.2s' }}
              aria-hidden="true"
            />
            <span className="truncate">{sec.heading}</span>
          </span>
          <ChevronA />
        </button>

        {open && (
          <ul
            className="list-none m-0 p-0 pb-2"
            style={{ background: 'linear-gradient(to bottom, #f0f4fc, #f8f9fd)' }}
            role="list"
          >
            {sec.links.map((link) => (
              <li key={link.label} role="listitem">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-8 py-[10px] text-[#1a2a4a] text-[13.5px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
                  style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
                >
                  <svg className="flex-shrink-0 w-[6px] h-[10px] text-[#0273D7] opacity-60" viewBox="0 0 6 10" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="border-b border-[#dde3f0]">
      {sec.links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center gap-3 px-5 py-[11px] text-[#1a2a4a] text-[14px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
          style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
        >
          <svg className="flex-shrink-0 w-[6px] h-[10px] text-[#0273D7] opacity-50" viewBox="0 0 6 10" fill="none" aria-hidden="true">
            <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function MobileAccordionItemA({ item }) {
  const [open, setOpen] = useState(false);
  const hasSections = item.sections?.length > 0;

  if (!hasSections) {
    return (
      <div className="border-b border-[#0057a8]">
        <Link
          href={item.href}
          className="flex items-center justify-between px-5 py-[15px] text-[15px] font-bold text-white no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          style={{ minHeight: '52px', background: 'transparent', transition: 'background 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-[#0057a8]">
      <button
        className="w-full flex items-center justify-between px-5 text-[15px] font-bold text-white text-left bg-transparent border-none cursor-pointer font-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        style={{
          minHeight: '52px',
          paddingTop: '14px',
          paddingBottom: '14px',
          background: open ? 'rgba(255,255,255,0.1)' : 'transparent',
          transition: 'background 0.15s',
        }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = open ? 'rgba(255,255,255,0.1)' : 'transparent'; }}
      >
        <span>{item.label}</span>
        <ChevronA />
      </button>

      {open && (
        <div
          className="border-t border-[#0057a8]"
          style={{ background: '#ffffff' }}
          role="region"
          aria-label={`${item.label} submenu`}
        >
          <div
            className="px-5 py-[8px] text-[11px] font-bold uppercase tracking-[0.1em] text-[#0273D7]"
            style={{ borderBottom: '1px solid #e4eaf5', background: '#f0f5ff' }}
            aria-hidden="true"
          >
            {item.label}
          </div>
          {item.sections.map((sec, i) => (
            <MobileSectionFromSections key={i} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function VariationB() {
  const [activeId,  setActiveId]  = useState(null);
  const [mobOpen,   setMobOpen]   = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 1023) setMobOpen(false); };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') { setActiveId(null); setMobOpen(false); }
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveId(null), 120);
  };

  const activeItem = NAV.find((n) => n.id === activeId);

  return (
    <header
      className={[
        'relative sticky top-0 bg-[#0273D7] font-["Source_Sans_Pro",Helvetica,Arial,sans-serif]',
        scrolled || activeId ? 'shadow-[0_2px_16px_rgba(0,0,0,0.12)]' : '',
      ].join(' ')}
    >
      {/* ── Main bar ── */}
      <div className="border-b border-black/[0.08]">
        <div className="max-w-[1280px] mx-auto px-8 py-2 flex items-center">

          {/* Desktop nav */}
          <nav className="flex-1 overflow-hidden hidden lg:block" aria-label="Primary navigation">
            <ul className="list-none m-0 p-0 flex items-stretch flex-wrap">
              {NAV.map((item) => (
                <li
                  key={item.id || item.label}
                  onMouseEnter={() => { cancelClose(); setActiveId(item.sections ? item.id : null); }}
                  onMouseLeave={scheduleClose}
                >
                  {item.sections ? (
                    <button
                      className={[
                        'inline-flex items-center h-full px-[14px] text-[13.5px] font-medium text-white whitespace-nowrap gap-[6px]',
                        'bg-transparent border-none cursor-pointer font-[inherit]',
                        'underline-offset-[4px] decoration-white decoration-[1.5px]',
                        activeId === item.id ? 'underline' : 'no-underline hover:underline',
                      ].join(' ')}
                      aria-expanded={activeId === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronB open={activeId === item.id} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center h-full px-[14px] text-[13.5px] font-medium text-white whitespace-nowrap no-underline hover:underline underline-offset-[4px] decoration-white decoration-[1.5px]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger */}
          <div className="ml-auto lg:hidden flex items-center">
            <button
              className="flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2 w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#0273D7] rounded"
              onClick={() => { setMobOpen(!mobOpen); setActiveId(null); }}
              aria-label={mobOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobOpen}
              aria-controls="mobile-nav-b"
            >
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'opacity 0.2s', opacity: mobOpen ? 0 : 1 }}
                aria-hidden="true"
              />
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Desktop */}
      {activeId && activeItem?.sections && (
        <div
          className="absolute left-0 right-0"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <Desktop item={activeItem} onClose={() => setActiveId(null)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobOpen && (
        <div
          id="mobile-nav-b"
          className="lg:hidden overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 52px)', background: '#0057a8' }}
        >
          <nav aria-label="Mobile navigation">
            {NAV.map((item) => (
              <MobileAccordionItemA key={item.id || item.label} item={item} />
            ))}
          </nav>
          <div
            className="h-[4px]"
            style={{ background: 'linear-gradient(to right, #0273D7, #004a8a, #7ec8ff)' }}
            aria-hidden="true"
          />
        </div>
      )}

    </header>
  );
}