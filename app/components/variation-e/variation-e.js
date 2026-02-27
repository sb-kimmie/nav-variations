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
        href: '/its',
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
        href: '/its',
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

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IcoArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ChevronDown() {
  return (
    <svg className="w-[10px] h-[7px] flex-shrink-0" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Desktop({ item, onClose }) {
  return (
    <div className="bg-[#f1f1f1] border-t border-[#d0d7e2] shadow-[0_8px_24px_rgba(0,52,106,0.10)]">
      <div className="max-w-[1280px] mx-auto px-8 pt-9 pb-10">

        {/* ── Columns — stretched 1fr ── */}
        <div
          className="grid gap-x-6 gap-y-5 content-start"
          style={{ gridTemplateColumns: `repeat(${item.sections.length}, 1fr)` }}
        >
          {item.sections.map((sec, i) => {

            if (!sec.heading) {
              return (
                <div key={`orphan-${i}`} className="flex flex-col gap-1">
                  <ul className="list-none m-0 p-0">
                    {sec.links.map((lk) => (
                      <li key={lk.label}>
                        <Link
                          href={lk.href}
                          onClick={onClose}
                          className="block text-[13.5px] font-semibold no-underline hover:underline py-[6px] leading-snug transition-colors text-[#004A8A] hover:text-[#0273D7]"
                        >
                          {lk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            if (sec.href) {
              return (
                <div key={sec.heading} className="flex flex-col gap-2">
                  <Link
                    href={sec.href}
                    onClick={onClose}
                    className="group flex items-center gap-[5px] text-[12px] font-extrabold uppercase tracking-[0.08em] no-underline pb-[7px] border-b-2 transition-colors text-[#004A8A] hover:text-[#0273D7] border-[#b0bac8] leading-[1.2] hover:border-[#0273D7]"
                  >
                    <span>{sec.heading}</span>
                    <span className="flex items-center flex-shrink-0 opacity-60 group-hover:translate-x-0.5 transition-transform">
                      <IcoArrow />
                    </span>
                  </Link>
                  <ul className="list-none m-0 p-0">
                    {sec.links.map((lk) => (
                      <li key={lk.label}>
                        <Link
                          href={lk.href}
                          onClick={onClose}
                          className="block text-[13.5px] font-extrabold no-underline hover:underline py-[6px] leading-snug transition-colors text-[#004A8A] hover:text-[#0273D7]"
                        >
                          {lk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div key={sec.heading} className="flex flex-col gap-2">
                <span className="block text-[12px] font-extrabold text-[#6b7a8d] uppercase tracking-[0.08em] pb-[7px] border-b-2 border-[#b0bac8]">
                  {sec.heading}
                </span>
                <ul className="list-none m-0 p-0">
                  {sec.links.map((lk) => (
                    <li key={lk.label}>
                      <Link
                        href={lk.href}
                        onClick={onClose}
                        className="block text-[13.5px] font-semibold no-underline hover:underline py-[6px] leading-snug transition-colors text-[#004A8A] hover:text-[#0273D7]"
                      >
                        {lk.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────

function MobileSectionFromSections({ sec }) {
  const [open, setOpen] = useState(false);

  if (!sec.heading) {
    return (
      <div className="border-b border-[#dde3f0]">
        {sec.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 px-8 py-[10px] text-[#1a2a4a] text-[13.5px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
            style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
          >
            <svg className="flex-shrink-0 w-[6px] h-[10px] opacity-50 text-[#004A8A]" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  if (sec.href) {
    return (
      <div className="border-b border-[#dde3f0]">
        <div className="flex items-stretch">
          <Link
            href={sec.href}
            className="flex-1 flex items-center gap-2 px-5 py-[14px] text-[14px] font-semibold text-[#0273D7] no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
            style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; }}
          >
            <span className="flex-shrink-0 w-[3px] self-stretch" style={{ background: '#0273D7' }} aria-hidden="true" />
            <span>{sec.heading}</span>
            <svg className="w-[10px] h-[10px] flex-shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button
            className="flex items-center justify-center px-4 bg-transparent border-none border-l border-[#dde3f0] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
            style={{ minWidth: '44px', transition: 'background 0.15s' }}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={`${open ? 'Collapse' : 'Expand'} ${sec.heading} links`}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(2,115,215,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = ''}
          >
            <ChevronDown />
          </button>
        </div>
        {open && (
          <ul className="list-none m-0 p-0 pb-2" style={{ background: 'linear-gradient(to bottom, #f0f4fc, #f8f9fd)' }} role="list">
            {sec.links.map((link) => (
              <li key={link.label} role="listitem">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-8 py-[10px] text-[#1a2a4a] text-[13.5px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
                  style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
                >
                  <svg className="flex-shrink-0 w-[6px] h-[10px] opacity-50 text-[#004A8A]" viewBox="0 0 6 10" fill="none" aria-hidden="true">
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
      <button
        className="w-full flex items-center justify-between px-5 py-[14px] text-[14px] font-semibold text-[#1a2a4a] text-left bg-transparent border-none cursor-pointer font-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
        style={{ minHeight: '44px' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="flex-shrink-0 w-[3px] self-stretch rounded-full" style={{ background: open ? '#0273D7' : '#b3c6e8', transition: 'background 0.2s' }} aria-hidden="true" />
          <span className="truncate">{sec.heading}</span>
        </span>
        <span style={{ color: open ? '#0273D7' : '#1a2a4a', transition: 'color 0.2s' }}>
          <ChevronDown />
        </span>
      </button>
      {open && (
        <ul className="list-none m-0 p-0 pb-2" style={{ background: 'linear-gradient(to bottom, #f0f4fc, #f8f9fd)' }} role="list">
          {sec.links.map((link) => (
            <li key={link.label} role="listitem">
              <Link
                href={link.href}
                className="flex items-center gap-2 px-8 py-[10px] text-[#1a2a4a] text-[13.5px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7]"
                style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
              >
                <svg className="flex-shrink-0 w-[6px] h-[10px] opacity-50 text-[#004A8A]" viewBox="0 0 6 10" fill="none" aria-hidden="true">
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
        <ChevronDown />
      </button>
      {open && (
        <div className="border-t border-[#0057a8]" style={{ background: '#ffffff' }} role="region" aria-label={`${item.label} submenu`}>
          {item.sections.map((sec, i) => (
            <MobileSectionFromSections key={i} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function VariationE() {
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
        scrolled || activeId ? 'shadow-[0_2px_16px_rgba(0,52,106,0.15)]' : '',
      ].join(' ')}
    >
      <div className="border-b border-black/10">
        <div className="max-w-[1280px] mx-auto px-8 py-2 flex items-center">

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
                        'inline-flex items-center h-full px-[14px] text-[13.5px] font-normal text-white whitespace-nowrap gap-[6px]',
                        'bg-transparent border-none cursor-pointer font-[inherit]',
                        'underline-offset-[4px] decoration-white decoration-[1.5px]',
                        activeId === item.id ? 'underline' : 'no-underline hover:underline',
                      ].join(' ')}
                      aria-expanded={activeId === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center h-full px-[14px] text-[13.5px] font-normal text-white whitespace-nowrap no-underline hover:underline underline-offset-[4px] decoration-white decoration-[1.5px]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto lg:hidden flex items-center">
            <button
              className="flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 rounded"
              onClick={() => { setMobOpen(!mobOpen); setActiveId(null); }}
              aria-label={mobOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobOpen}
              aria-controls="mobile-nav-e2"
            >
              {mobOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      {activeId && activeItem?.sections && (
        <div className="absolute left-0 right-0" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <Desktop item={activeItem} onClose={() => setActiveId(null)} />
        </div>
      )}

      {mobOpen && (
        <div id="mobile-nav-e2" className="lg:hidden overflow-y-auto" style={{ maxHeight: 'calc(100vh - 52px)', background: '#0057a8' }}>
          <nav aria-label="Mobile navigation">
            {NAV.map((item) => (
              <MobileAccordionItemA key={item.id || item.label} item={item} />
            ))}
          </nav>
          <div className="h-[4px]" style={{ background: 'linear-gradient(to right, #0273D7, #004a8a, #7ec8ff)' }} aria-hidden="true" />
        </div>
      )}

    </header>
  );
}