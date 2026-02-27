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

const IcoArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Always points down — never rotates up
function ChevronDown() {
  return (
    <svg
      className="w-[10px] h-[7px] flex-shrink-0"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Desktop ───────────────────────────────────────────────────────
function Desktop({ item, onClose }) {
  return (
    <div className="bg-[#004A8A]">
      <div className="max-w-[1280px] mx-auto px-8 pt-8 pb-10 grid grid-cols-[240px_1px_1fr] gap-x-10 items-start">

        {/* ── Left panel ── */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[22px] font-bold text-[#fff] m-0 leading-tight">{item.label}</h2>
          {item.description && (
            <p className="text-[16px] leading-[1.65] text-[#fff] m-0">{item.description}</p>
          )}
          <Link
            href={item.href}
            onClick={onClose}
            className="group inline-flex items-center gap-2 w-fit mt-auto text-[12.5px] font-bold tracking-[0.06em] uppercase text-white no-underline px-4 py-[7px] rounded border border-white/50 hover:bg-white hover:text-[#023369] hover:border-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform duration-150 flex items-center">
              <IcoArrow />
            </span>
          </Link>
        </div>

        {/* ── Vertical divider ── */}
        <div className="bg-white/20 self-stretch min-h-[100px]" aria-hidden="true" />

        {/* ── Section columns ── */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-x-6 gap-y-5 content-start">
          {item.sections.map((sec, i) => {

            // Orphan links (no heading)
            if (!sec.heading) {
              return (
                <div key={`orphan-${i}`} className="flex flex-col gap-1">
                  <ul className="list-none m-0 p-0">
                    {sec.links.map((lk) => (
                      <li key={lk.label}>
                        <Link
                          href={lk.href}
                          onClick={onClose}
                          className="block text-[13.5px] font-semibold text-[#e8eef8] no-underline py-[5px] border-b border-white/10 last:border-b-0 leading-snug hover:text-white hover:underline underline-offset-[3px] decoration-white decoration-[1.5px] transition-colors duration-[120ms]"
                        >
                          {lk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // CLICKABLE heading
            if (sec.href) {
              return (
                <div key={sec.heading} className="flex flex-col gap-1">
                  <Link
                    href={sec.href}
                    onClick={onClose}
                    className="group flex items-center gap-[5px] text-[11px] font-extrabold uppercase tracking-[0.1em] text-white no-underline pb-[6px] border-b-2 border-white/40 hover:border-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-1"
                  >
                    <span className="group-hover:underline underline-offset-[2px]">{sec.heading}</span>
                    <span className="flex items-center opacity-70 group-hover:opacity-100 group-hover:translate-x-[3px] transition-all duration-150 flex-shrink-0">
                      <IcoArrow />
                    </span>
                  </Link>
                  <ul className="list-none m-0 p-0">
                    {sec.links.map((lk) => (
                      <li key={lk.label}>
                        <Link
                          href={lk.href}
                          onClick={onClose}
                          className="block text-[13.5px] font-normal text-[#e8eef8] no-underline py-[5px] border-b border-white/10 last:border-b-0 leading-snug hover:text-white hover:underline underline-offset-[3px] decoration-white decoration-[1.5px] transition-colors duration-[120ms]"
                        >
                          {lk.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // NON-CLICKABLE heading
            return (
              <div key={sec.heading} className="flex flex-col gap-1">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.1em] text-white/60 pb-[6px] border-b-2 border-white/20 select-none">
                  {sec.heading}
                </span>
                <ul className="list-none m-0 p-0">
                  {sec.links.map((lk) => (
                    <li key={lk.label}>
                      <Link
                        href={lk.href}
                        onClick={onClose}
                        className="block text-[13.5px] font-semibold text-[#e8eef8] no-underline py-[5px] border-b border-white/10 last:border-b-0 leading-snug hover:text-white hover:underline underline-offset-[3px] decoration-white decoration-[1.5px] transition-colors duration-[120ms]"
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

// ─── Mobile section ───────────────────────────────────────────────────────────
function MobileSectionFromSections({ sec }) {
  const [open, setOpen] = useState(false);

  // Orphan links
  if (!sec.heading) {
    return (
      <div className="border-b border-white/10">
        {sec.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center gap-2 px-8 py-[10px] text-[#c8d8f0] text-[13.5px] leading-snug no-underline hover:text-white hover:bg-white/[0.07] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
            style={{ minHeight: '44px' }}
          >
            <svg className="flex-shrink-0 w-[5px] h-[9px] opacity-60" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  // CLICKABLE heading — split row: link + chevron
  if (sec.href) {
    return (
      <div className="border-b border-white/10">
        <div className="flex items-stretch">
          <Link
            href={sec.href}
            className="flex-1 flex items-center gap-[6px] px-5 py-[13px] text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-white underline hover:bg-white/[0.09] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
            style={{ minHeight: '44px' }}
          >
            {sec.heading}
            <span className="opacity-70 flex items-center flex-shrink-0"><IcoArrow /></span>
          </Link>
          <button
            className="flex items-center justify-center px-4 text-white/70 hover:text-white hover:bg-white/[0.09] cursor-pointer transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
            style={{ minWidth: '44px' }}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={`${open ? 'Collapse' : 'Expand'} ${sec.heading} links`}
          >
            <ChevronDown />
          </button>
        </div>
        {open && (
          <ul className="list-none m-0 p-0" style={{ background: 'rgba(0,0,0,0.18)' }}>
            {sec.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-8 py-[10px] text-[#c8d8f0] text-[13.5px] leading-snug no-underline hover:text-white hover:bg-white/[0.07] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
                  style={{ minHeight: '44px' }}
                >
                  <svg className="flex-shrink-0 w-[5px] h-[9px] opacity-60" viewBox="0 0 6 10" fill="none" aria-hidden="true">
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

  // NON-CLICKABLE heading — full-width accordion button
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between gap-2 px-5 py-[13px] text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-white/60 text-left bg-transparent border-none border-l-[3px] border-l-white/30 cursor-pointer hover:text-white/80 hover:bg-white/[0.06] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
        style={{ minHeight: '44px' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{sec.heading}</span>
        <ChevronDown />
      </button>
      {open && (
        <ul className="list-none m-0 p-0" style={{ background: 'rgba(0,0,0,0.18)' }}>
          {sec.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-2 px-8 py-[10px] text-[#c8d8f0] text-[13.5px] leading-snug no-underline hover:text-white hover:bg-white/[0.07] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
                style={{ minHeight: '44px' }}
              >
                <svg className="flex-shrink-0 w-[5px] h-[9px] opacity-60" viewBox="0 0 6 10" fill="none" aria-hidden="true">
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

// ─── Mobile top-level item ────────────────────────────────────────────────────
function MobileAccordionItemA({ item }) {
  const [open, setOpen] = useState(false);
  const hasSections = item.sections?.length > 0;

  if (!hasSections) {
    return (
      <div className="border-b border-white/[0.12]">
        <Link
          href={item.href}
          className="flex items-center px-5 py-[15px] text-[15px] font-semibold text-white no-underline hover:bg-white/[0.08] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
          style={{ minHeight: '52px' }}
        >
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-white/[0.12]">
      <button
        className="w-full flex items-center justify-between px-5 text-[15px] font-semibold text-white text-left bg-transparent border-none cursor-pointer hover:bg-white/[0.08] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px]"
        style={{
          minHeight: '52px',
          paddingTop: '14px',
          paddingBottom: '14px',
          background: open ? 'rgba(255,255,255,0.1)' : undefined,
        }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="bg-[#023369] border-t border-white/10" role="region" aria-label={`${item.label} submenu`}>
          {item.sections.map((sec, i) => (
            <MobileSectionFromSections key={i} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function VariationD() {
  const [activeId, setActiveId] = useState(null);
  const [mobOpen,  setMobOpen]  = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const fn = (e) => { if (e.key === 'Escape') { setActiveId(null); setMobOpen(false); } };
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
    <header className={['relative sticky top-0 bg-[#0573D7]', scrolled || activeId ? 'shadow-[0_2px_20px_rgba(0,0,0,0.22)]' : ''].join(' ')}>

      {/* ── Main bar ── */}
      <div className="border-b border-white/15">
        <div className="max-w-[1280px] mx-auto px-8 py-[6px] flex items-center">

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
                        'inline-flex items-center h-full px-[14px] py-[10px] text-[13.5px] font-medium text-white whitespace-nowrap gap-[6px]',
                        'bg-transparent border-none cursor-pointer',
                        'underline-offset-[4px] decoration-white decoration-[1.5px]',
                        'hover:bg-white/[0.1] transition-colors duration-[120ms]',
                        'focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-3px] rounded-sm',
                        activeId === item.id ? 'bg-white/[0.15] underline' : 'no-underline',
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
                      className="inline-flex items-center h-full px-[14px] py-[10px] text-[13.5px] font-medium text-white whitespace-nowrap no-underline hover:underline hover:bg-white/[0.1] underline-offset-[4px] decoration-white decoration-[1.5px] transition-colors duration-[120ms] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-3px] rounded-sm"
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
              className="flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2 w-10 h-10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-1 rounded"
              onClick={() => { setMobOpen(!mobOpen); setActiveId(null); }}
              aria-label={mobOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobOpen}
              aria-controls="mobile-nav-d"
            >
              <span className="block w-[22px] h-[2px] bg-white rounded-sm" style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span className="block w-[22px] h-[2px] bg-white rounded-sm" style={{ transition: 'opacity 0.2s', opacity: mobOpen ? 0 : 1 }} aria-hidden="true" />
              <span className="block w-[22px] h-[2px] bg-white rounded-sm" style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>

        </div>
      </div>

      {/* Desktop mega panel */}
      {activeId && activeItem?.sections && (
        <div className="absolute left-0 right-0 z-[400]" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <Desktop item={activeItem} onClose={() => setActiveId(null)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobOpen && (
        <div id="mobile-nav-d" className="lg:hidden overflow-y-auto bg-[#004A8A]" style={{ maxHeight: 'calc(100vh - 52px)' }}>
          <nav aria-label="Mobile navigation">
            {NAV.map((item) => (
              <MobileAccordionItemA key={item.id || item.label} item={item} />
            ))}
          </nav>
          <div className="h-[4px] bg-[#0573D7]" aria-hidden="true" />
        </div>
      )}

    </header>
  );
}