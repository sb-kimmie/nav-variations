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
        href: '/join-the-pack/parents-guardians',
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
        href: '/join-the-pack/program-finder',
        links: [
          { label: 'Why Earn a Certificate at CSUSB?', href: '/join-the-pack/program-finder/certificates' },
        ],
      },
    ],
  },
];

const IcoClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IcoMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IcoArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Chevron({ open }) {
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

function Desktop({ item, onClose }) {
  return (
    <div className="bg-white border-t border-[#004a8a] border-b-4 border-b-[#004a8a] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1280px] mx-auto px-8 pt-9 pb-10 grid grid-cols-[260px_1px_1fr] gap-x-10 items-start">
        {/* Left: title + description + view-all link */}
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

        {/* Divider */}
        <div className="bg-[#e0e0e0] self-stretch min-h-[100px]" aria-hidden="true" />

        {/* Right: sections grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-x-6 gap-y-5 content-start">
          {item.sections.map((sec) => (
            <div key={sec.heading} className="flex flex-col gap-2">
              <Link
                href={sec.href}
                onClick={onClose}
                className="block text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#002060] no-underline pb-[6px] border-b-2 border-[#004a8a] hover:text-[#003DA5]"
              >
                {sec.heading}
              </Link>
              <ul className="list-none m-0 p-0">
                {sec.links.map((lk) => (
                  <li key={lk.label}>
                    <Link
                      href={lk.href}
                      onClick={onClose}
                      className="block text-[13.5px] font-semibold text-[#333] no-underline py-[5px] border-b border-[#efefef] last:border-b-0 leading-snug hover:text-[#003DA5] hover:border-b hover:border-[#efefef] "
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

// ─── Mobile Components ────────────────────────────────────────────────────────

function MobileSection({ sec }) {
  if (!sec.heading) {
    return (
      <div className="pt-2">
        {sec.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center pl-6 pr-5 py-[10px] text-[14.5px] font-semibold text-white no-underline hover:bg-[rgba(255,255,255,0.1)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-1">
      <div className="px-5 pt-5 pb-2">
        <p className="m-0 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7eb3e8]">
          {sec.heading}
        </p>
        <div className="mt-[10px] h-px bg-[#0255a3]" />
      </div>
      <div>
        {sec.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center pl-6 pr-5 py-[10px] text-[14.5px] font-semibold text-white no-underline hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileAccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasSections = item.sections?.length > 0;

  if (!hasSections) {
    return (
      <div className="border-b border-[#0462bc]">
        <Link
          href={item.href}
          className="flex items-center justify-between px-5 py-2.5 text-[14px] font-bold text-white no-underline bg-[#0573D7] hover:bg-[#0462bc]"
        >
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-[#0462bc]">
      <button
        className={`w-full flex items-center justify-between px-5 py-2.5 text-[14px] font-bold text-white text-left border-none cursor-pointer font-[inherit] ${
          open ? 'bg-[#0462bc]' : 'bg-[#0573D7] hover:bg-[#0462bc]'
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <div className="bg-[#013F7E] border-t border-[#0255a3] pb-4">
          {item.sections.map((sec, i) => (
            <MobileSection key={i} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────

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
    const fn = () => { if (window.innerWidth > 767) setMobOpen(false); };
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
                        'inline-flex items-center h-full px-[14px] text-[13.5px] font-medium text-white no-underline whitespace-nowrap border-b-[3px] border-b-transparent hover:border-b-[#004a8a] gap-[6px]',
                        activeId === item.id ? 'border-b-[#C8A84B]' : 'border-b-transparent hover:border-b-[#004a8a]',
                      ].join(' ')}
                      aria-expanded={activeId === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <Chevron open={false} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center h-full px-[14px] text-[13.5px] font-medium text-white no-underline whitespace-nowrap border-b-[3px] border-b-transparent hover:border-b-[#004a8a]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger — mobile only */}
          <div className="flex items-center flex-shrink-0 ml-auto">
            <button
              className="lg:hidden flex items-center justify-center bg-none border-none cursor-pointer text-white rounded"
              onClick={() => { setMobOpen((o) => !o); setActiveId(null); }}
              aria-label={mobOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobOpen}
            >
              {mobOpen ? <IcoClose /> : <IcoMenu />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Desktop mega panel ── */}
      {activeId && activeItem?.sections && (
        <div
          className="absolute left-0 right-0"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <Desktop item={activeItem} onClose={() => setActiveId(null)} />
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobOpen && (
        <div className="lg:hidden bg-[#0573D7] overflow-y-auto max-h-[calc(100vh-68px)]">
          <nav aria-label="Mobile navigation">
            {NAV.map((item) => (
              <MobileAccordionItem key={item.id || item.label} item={item} />
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}