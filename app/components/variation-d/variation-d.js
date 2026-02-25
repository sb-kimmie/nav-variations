'use client';

import { useState, useRef, useEffect, useId } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV = [
  { label: 'Home', href: '/join-the-pack' },
  {
    id: 'future-students',
    label: 'Future Students',
    href: '/join-the-pack/future-students',
    sections: [
      {
        heading: 'Explore CSUSB',
        href: '/join-the-pack/future-students/explore-csusb',
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
        href: '/join-the-pack/future-students/apply',
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
        href: '/join-the-pack/future-students/program-specific-requirements',
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
        href: '/join-the-pack/future-students/campus-life',
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
    label: 'Newly Admitted',
    href: '/join-the-pack/newly-admitted-students',
    sections: [
      {
        heading: 'By Student Type',
        href: '/join-the-pack/newly-admitted-students',
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
        href: '/join-the-pack/newly-admitted-students',
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
    sections: [
      {
        heading: 'Apply & Admissions',
        href: 'https://www.csusb.edu/join-the-pack/future-students/apply',
        links: [
          { label: 'Freshman Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/freshmen-admissions-requirements' },
          { label: 'Transfer Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/transfer-admissions-requirements' },
        ],
      },
      {
        heading: 'Available Programs',
        href: '/join-the-pack/counselors/available-programs',
        links: [
          { label: 'Direct Admissions Program',        href: '/join-the-pack/counselors/available-programs/direct-admissions-program' },
          { label: 'High School Dual Enrollment',      href: 'https://www.csusb.edu/join-the-pack/counselors/available-programs#hsdualenrollment' },
          { label: 'Transfer Pathways & Articulation', href: '/join-the-pack/counselors/available-programs/transfer-pathways-articulation' },
        ],
      },
      {
        heading: 'Making College Happen',
        href: '/join-the-pack/counselors/making-college-happen',
        links: [
          { label: 'Affordability & Financial Aid', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#affordability-financial-aid' },
          { label: 'Parent & Family Communication', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#parent-family-communication' },
          { label: 'Visiting CSUSB',                href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#campus-tours' },
        ],
      },
      {
        heading: 'More',
        href: '/join-the-pack/counselors',
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

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const ChevronIcon = ({ open }) => (
  <svg
    width="11" height="11" viewBox="0 0 24 24" fill="none"
    aria-hidden="true" focusable="false"
    className={`shrink-0 ${open ? 'rotate-180' : 'rotate-0'}`}
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="shrink-0">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const isExternal = (href) => href?.startsWith('http');

/* ─────────────────────────────────────────────
   MEGA PANEL
───────────────────────────────────────────── */
function MegaPanel({ item, isOpen, onMouseEnter, onMouseLeave, onClose }) {
  return (
    <div
      id={`mega-${item.id}`}
      role="region"
      aria-label={`${item.label} menu`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        absolute left-0 right-0 top-full z-[400]
        ${isOpen
          ? 'pointer-events-auto opacity-100 translate-y-0'
          : 'pointer-events-none opacity-0 -translate-y-1.5'}
      `}
    >
      <div className="bg-[#004a8a] border-t border-white/10 border-b-4 border-b-white/30">
        <div className="max-w-[1280px] mx-auto px-8 py-10">

          {/* Section columns — full width */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-x-10">
            {item.sections.map((sec) => (
              <div key={sec.heading} className="flex flex-col">

                {/* Heading */}
                <Link
                  href={sec.href}
                  onClick={onClose}
                  className="
                    flex items-center
                    text-[10.5px] font-extrabold tracking-[0.14em] uppercase leading-none
                    text-white bg-[#01346a]
                    px-3 py-[9px] mb-0
                    border-l-4 border-l-white
                    no-underline transition-colors duration-150
                    hover:bg-black/20
                    focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[2px]
                  "
                  {...(isExternal(sec.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {sec.heading}
                </Link>

                {/* Sub-links */}
                <ul
                  className="list-none m-0 p-0 border-l-4 border-l-white/15 mb-4"
                  aria-label={`${sec.heading} links`}
                >
                  {sec.links.map((lk) => (
                    <li key={lk.label} className="border-b border-b-white/[0.07] last:border-b-0">
                      <Link
                        href={lk.href}
                        onClick={onClose}
                        className="
                          block text-[13px] font-normal text-white/80 no-underline leading-[1.4]
                          px-3 py-[6px]
                          transition-all duration-[120ms]
                          hover:text-white hover:pl-5 hover:bg-white/[0.08]
                          focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-1px] focus-visible:rounded-sm
                        "
                        {...(isExternal(lk.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE — section accordion
───────────────────────────────────────────── */
function MobSection({ sec }) {
  const [open, setOpen] = useState(false);
  const uid = useId();

  return (
    <div className="border-b border-white/[0.04]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`mobsec-${uid}`}
        className="
          w-full flex items-center justify-between gap-2
          text-[11px] font-extrabold tracking-[0.12em] uppercase text-left
          text-white/75 bg-[#01346a]/60 border-l-[3px] border-l-white/50 border-y-0 border-r-0
          px-[18px] py-[11px] cursor-pointer
          transition-colors duration-[120ms]
          hover:text-white hover:bg-[#01346a]/80
          focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-2px]
        "
      >
        {sec.heading}
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul
          id={`mobsec-${uid}`}
          className="list-none m-0 p-0 bg-black/[0.15]"
          aria-label={`${sec.heading} links`}
        >
          {sec.links.map((lk) => (
            <li key={lk.label} className="border-b border-white/[0.04] last:border-b-0">
              <Link
                href={lk.href}
                className="
                  block px-[22px] py-[9px] pl-[34px]
                  text-[13.5px] font-normal text-white/60 no-underline
                  transition-all duration-[120ms]
                  hover:text-white hover:pl-[40px] hover:bg-white/[0.05]
                  focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-2px]
                "
                {...(isExternal(lk.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {lk.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE — top-level item
───────────────────────────────────────────── */
function MobItem({ item }) {
  const [open, setOpen] = useState(false);
  const uid = useId();

  if (!item.sections) {
    return (
      <div className="">
        <Link
          href={item.href}
          className="
            w-full flex items-center justify-between
            text-[15px] font-semibold text-white/[0.88] no-underline
            px-[22px] py-[10px]
            transition-colors duration-[120ms]
            hover:bg-white/[0.05] hover:text-white
            focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-2px]
          "
        >
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`mobitem-${uid}`}
        aria-haspopup="true"
        className="
          w-full flex items-center justify-between gap-2
          text-[15px] font-semibold text-white/[0.88] text-left
          bg-transparent border-none px-[22px] py-[10px] cursor-pointer
          transition-colors duration-[120ms]
          hover:bg-white/[0.05] hover:text-white
          focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-2px]
        "
      >
        {item.label}
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div
          id={`mobitem-${uid}`}
          className="bg-black/[0.25] border-t border-white/[0.05]"
        >

          {item.sections.map((sec) => (
            <MobSection key={sec.heading} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT COMPONENT
───────────────────────────────────────────── */
export default function VariationD() {
  const [activeId, setActiveId] = useState(null);
  const [mobOpen,  setMobOpen]  = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 860) setMobOpen(false); };
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
    closeTimer.current = setTimeout(() => setActiveId(null), 140);
  };

  return (
    <header role="banner" className="sticky top-0 z-[500]">
      {/* ── Primary nav bar ── */}
      <div className="bg-[#0573D7] relative">
        <div className="max-w-[1280px] mx-auto px-8 flex items-stretch py-2">

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="flex-1 flex items-stretch">
            <ul role="list" className="hidden md:flex items-stretch list-none m-0 p-0 flex-1">
              {NAV.map((item) => (
                <li
                  key={item.id || item.label}
                  className="flex items-stretch"
                  onMouseEnter={() => { cancelClose(); if (item.sections) setActiveId(item.id); }}
                  onMouseLeave={scheduleClose}
                >
                  {item.sections ? (
                    <button
                      aria-haspopup="true"
                      aria-expanded={activeId === item.id}
                      aria-controls={`mega-${item.id}`}
                      onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                      className={`
                        inline-flex items-center gap-1.5
                        px-4 bg-transparent border-0 border-b-[3px] border-t-[3px] cursor-pointer
                        text-[14.5px] text-white/85 whitespace-nowrap
                        hover:text-white hover:bg-white/[0.08] hover:border-b-white
                        focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-4px]
                        ${activeId === item.id
                          ? 'text-white bg-white/[0.12] border-b-white border-t-transparent'
                          : 'border-b-transparent border-t-transparent'}
                      `}
                    >
                      {item.label}
                      <ChevronIcon open={activeId === item.id} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="
                        inline-flex items-center gap-1.5
                        px-4 border-b-[3px] border-t-[3px] border-transparent
                        text-[14.5px] text-white/85 whitespace-nowrap no-underline
                        hover:text-white hover:bg-white/[0.08] hover:border-b-white
                        focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[-4px]
                      "
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            aria-label={mobOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobOpen}
            aria-controls="csusb-mobile-nav"
            onClick={() => { setMobOpen((o) => !o); setActiveId(null); }}
            className="
              md:hidden flex items-center justify-center self-center ml-auto
              text-white cursor-pointer
            "
          >
            {mobOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mega panels */}
        {NAV.filter((n) => n.sections).map((item) => (
          <MegaPanel
            key={item.id}
            item={item}
            isOpen={activeId === item.id}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            onClose={() => setActiveId(null)}
          />
        ))}
      </div>

      {/* ── Mobile drawer ── */}
      {mobOpen && (
        <nav
          id="csusb-mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden bg-[#004a8a] border-t-4 border-t-white/20 max-h-[calc(100vh-102px)] overflow-y-auto"
          style={{ animation: 'mobSlide 0.22s ease' }}
        >
          {NAV.map((item) => (
            <MobItem key={item.id || item.label} item={item} />
          ))}
        </nav>
      )}
    </header>
  );
}