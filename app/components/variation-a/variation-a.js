'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/join-the-pack' },
  {
    label: 'Future Students',
    href: '/join-the-pack/future-students',
    rows: [
      {
        columns: [
          {
            heading: 'Explore CSUSB',
            links: [
              { label: 'Why Choose CSUSB', href: '/join-the-pack/future-students/explore-csusb/why-choose-csusb' },
              { label: 'Campus Tours', href: '/join-the-pack/future-students/explore-csusb/campus-tours' },
              { label: 'Education Abroad', href: '/join-the-pack/future-students/explore-csusb/education-abroad' },
              { label: 'Visit San Bernardino', href: '/join-the-pack/future-students/explore-csusb/visit-san-bernardino' },
              { label: 'CSUSB Traditions and Landmarks', href: '/join-the-pack/future-students/explore-csusb/csusb-traditions-and-landmarks' },
            ],
          },
          {
            heading: 'Apply',
            links: [
              { label: 'Application Workshops', href: '/join-the-pack/future-students/apply/application-workshops' },
              { label: 'Freshmen Admissions Requirements', href: '/join-the-pack/future-students/apply/freshmen-admissions-requirements' },
              { label: 'Transfer Admissions Requirements', href: '/join-the-pack/future-students/apply/transfer-admissions-requirements' },
              { label: 'Returning Students', href: '/join-the-pack/future-students/apply/returning-students' },
              { label: 'Graduate Admissions Requirements', href: '/join-the-pack/future-students/apply/graduate-admissions-requirements' },
              { label: 'International Admissions Requirements', href: 'https://www.csusb.edu/node/540620' },
              { label: 'After Admission: Your Next Steps', href: '/join-the-pack/future-students/apply/after-admission-your-next-steps' },
            ],
          },
          {
            heading: 'Program Specific Requirements',
            links: [
              { label: 'Transfer Success Pathway', href: '/join-the-pack/future-students/program-specific-requirements/transfer-success-pathway-tsp' },
              { label: 'Veteran Admissions Requirements', href: '/join-the-pack/future-students/program-specific-requirements/military-veteran-students' },
              { label: 'EOP', href: '/join-the-pack/future-students/program-specific-requirements/educational-opportunity-program-eop' },
              { label: 'High School Dual Enrollment', href: '/join-the-pack/future-students/program-specific-requirements/high-school-dual-enrollment' },
              { label: 'Non-degree Programs', href: '/join-the-pack/future-students/program-specific-requirements/non-degree-programs' },
              { label: 'Over 60 Program', href: '/join-the-pack/future-students/program-specific-requirements/over-60-program' },
              { label: 'University Honors College', href: '/join-the-pack/future-students/program-specific-requirements/university-honors-college' },
            ],
          },
          {
            heading: 'Campus Life',
            links: [
              { label: 'Student Recreation & Wellness Center', href: '/join-the-pack/future-students/campus-life/student-recreation-wellness-center' },
              { label: 'Living on Campus', href: '/join-the-pack/future-students/living-campus' },
              { label: 'Connect with an Outreach Counselor', href: '/join-the-pack/future-students/connect-outreach-counselor' },
              { label: 'Learn about Palm Desert Campus', href: '/join-the-pack/future-students/learn-about-palm-desert-campus' },
              { label: 'Cost of Attendance', href: '/join-the-pack/future-students/cost-attendance' },
              { label: 'Tuition Calculator', href: 'https://app.meadowfi.com/csusb' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Newly Admitted Students',
    href: '/join-the-pack/newly-admitted-students',
    rows: [
      {
        columns: [
          {
            heading: null, href: null,
            links: [
              { label: 'First-year Students', href: '/join-the-pack/newly-admitted-students/first-year-students' },
              { label: 'EOP First-year Students', href: '/join-the-pack/newly-admitted-students/eop-first-year-students' },
              { label: 'International Students', href: 'https://www.csusb.edu/international-education/programs/partnership-programs/students/new-students' },
            ],
          },
          {
            heading: null, href: null,
            links: [
              { label: 'Transfer Students', href: '/join-the-pack/newly-admitted-students/transfer-students' },
              { label: 'Returning Students', href: '/join-the-pack/newly-admitted-students/returning-students' },
              { label: 'Graduate Students', href: '/join-the-pack/newly-admitted-students/graduate-students' },
            ],
          },
          {
            heading: null, href: null,
            links: [
              { label: 'Financial Aid, Scholarships & Grants', href: '/join-the-pack/newly-admitted-students/financial-aid-scholarships-grants' },
              { label: 'Orientation Overview', href: '/join-the-pack/newly-admitted-students/orientation-overview' },
              { label: 'Join Nearpeer', href: '/join-the-pack/newly-admitted-students/join-the-nearpeer' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Parents & Guardians',
    href: '/join-the-pack/parents-guardians',
    rows: [
      {
        columns: [
          { heading: null, href: null, links: [{ label: 'Financial Aid Overview', href: '/join-the-pack/parents-guardians/financial-aid-overview' }] },
          { heading: null, href: null, links: [{ label: 'Campus Tours & Virtual Visits', href: '/join-the-pack/parents-guardians/campus-tours-virtual-visits' }] },
          { heading: null, href: null, links: [{ label: 'Campus Safety', href: '/join-the-pack/parents-guardians/campus-safety' }] },
        ],
      },
    ],
  },
  {
    label: 'Counselors',
    href: '/join-the-pack/counselors',
    rows: [
      {
        columns: [
          {
            heading: 'Apply and Admissions Requirements',
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
              { label: 'Direct Admissions Program', href: '/join-the-pack/counselors/available-programs/direct-admissions-program' },
              { label: 'High School Dual Enrollment', href: 'https://www.csusb.edu/join-the-pack/counselors/available-programs#hsdualenrollment' },
              { label: 'Transfer Pathways & Articulation', href: '/join-the-pack/counselors/available-programs/transfer-pathways-articulation' },
              { label: 'Making College Happen', href: '/join-the-pack/counselors/making-college-happen' },
              { label: 'Affordability & Financial Aid', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#affordability-financial-aid' },
              { label: 'Parent & Family Communication', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#parent-family-communication' },
              { label: 'Visiting CSUSB', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#campus-tours' },
            ],
          },
          {
            heading: null, href: null,
            links: [
              { label: 'Palm Desert Campus', href: '/join-the-pack/counselors/palm-desert-campus' },
              { label: 'Resources', href: '/join-the-pack/counselors/resources' },
              { label: 'Request an Outreach Counselor', href: '/join-the-pack/counselors/request-outreach-counselor' },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Admissions Forms', href: '/join-the-pack/admissions-forms' },
  {
    label: 'Program Finder',
    href: 'https://www.csusb.edu/join-the-pack/program-finder',
    rows: [
      {
        columns: [
          {
            heading: null, href: null,
            links: [{ label: 'Why Earn a Certificate at CSUSB?', href: '/join-the-pack/program-finder/certificates' }],
          },
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

function MobileSectionFromRows({ col }) {
  if (col.heading) {
    return (
      <div className="mb-1">
        <div className="px-5 pt-5 pb-2">
          <p className="m-0 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#7eb3e8]">
            {col.heading}
          </p>
          <div className="mt-[10px] h-px bg-[#0255a3]" />
        </div>
        <div>
          {col.links.map((link) => (
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

  return (
    <div className="pt-2">
      {col.links.map((link) => (
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

function MobileAccordionItemB({ item }) {
  const [open, setOpen] = useState(false);
  const hasRows = item.rows?.length > 0;

  if (!hasRows) {
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
        <ChevronB open={open} />
      </button>

      {open && (
        <div className="bg-[#013F7E] border-t border-[#0255a3] pb-4">
          {item.rows.map((row, ri) =>
            row.columns.map((col, ci) => (
              <MobileSectionFromRows key={`${ri}-${ci}`} col={col} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      className="w-[10px] h-[7px] flex-shrink-0"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navItemBase =
  'inline-flex items-center gap-1 px-3 py-2 h-full text-[13.3px] text-white whitespace-nowrap border-b-4 border-b-transparent hover:bg-[#004A8A] hover:border-b-[#003DA5]';
const navItemActive = 'bg-[#004A8A] border-b-[#003DA5]';

export default function VariationA() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') { setActiveMenu(null); setMobileOpen(false); } };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 1023) setMobileOpen(false); };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const activeItem = navItems.find((n) => n.label === activeMenu);

  return (
    <header className="font-['Source_Sans_Pro',Helvetica,Arial,sans-serif] top-0 shadow-[0_2px_10px_rgba(0,0,0,0.18)]">

      {/* Nav bar */}
      <div className="bg-[#0273D7] relative">
        <div className="max-w-[1280px] mx-auto px-8 flex items-stretch">
          <nav className="flex-1 hidden lg:block" aria-label="Primary navigation">
            <ul className="list-none m-0 p-0 flex items-stretch h-full">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-stretch"
                  onMouseEnter={() => { cancelClose(); setActiveMenu(item.rows?.length ? item.label : null); }}
                  onMouseLeave={scheduleClose}
                >
                  {item.rows ? (
                    <button
                      className={`${navItemBase} bg-transparent border-none cursor-pointer font-[inherit] ${activeMenu === item.label ? navItemActive : ''}`}
                      onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                      aria-expanded={activeMenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <Chevron />
                    </button>
                  ) : (
                    <Link href={item.href} className={navItemBase}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center flex-shrink-0 ml-auto lg:hidden">
            <button
              className="flex items-center justify-center bg-transparent border-none cursor-pointer text-white rounded p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => { setMobileOpen((o) => !o); setActiveMenu(null); }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-a"
            >
              {mobileOpen ? <IcoClose /> : <IcoMenu />}
            </button>
          </div>
        </div>

        {/* Desktop dropdown */}
        {activeMenu && activeItem?.rows && (
          <div
            className="absolute top-full left-0 right-0 shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
            style={{ background: '#004A8A' }}
            role="region"
            aria-label={`${activeItem.label} menu`}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-[1380px] mx-auto px-6 pt-[22px] pb-7">
              {activeItem.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`grid gap-x-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] ${rowIdx > 0 ? 'mt-5 pt-5' : ''}`}
                  style={rowIdx > 0 ? { borderTop: '1px solid rgba(255,255,255,0.18)' } : {}}
                >
                  {row.columns.map((col, colIdx) => (
                    <div key={colIdx} className="min-w-0">
                      {col.heading && (
                        col.href ? (
                          <Link
                            href={col.href}
                            className="block text-[13px] font-bold uppercase tracking-[0.09em] no-underline mb-2 pb-[6px]"
                            style={{ color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.30)' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#7ec8ff'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#ffffff'; }}
                          >
                            {col.heading}
                          </Link>
                        ) : (
                          <span
                            className="block text-[13px] font-bold uppercase tracking-[0.09em] mb-2 pb-[6px]"
                            style={{ color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.30)' }}
                          >
                            {col.heading}
                          </span>
                        )
                      )}
                      <ul className="list-none m-0 p-0 flex flex-col gap-[2px]">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="block px-[6px] py-1 text-[13.5px] font-semibold leading-snug rounded-[3px] no-underline focus:outline-none"
                              style={{ color: '#d9e8ff', transition: 'background 0.15s, color 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#ffffff'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#d9e8ff'; }}
                              onFocus={e => { e.currentTarget.style.outline = '2px solid #7ec8ff'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#ffffff'; }}
                              onBlur={e => { e.currentTarget.style.outline = ''; e.currentTarget.style.outlineOffset = ''; e.currentTarget.style.background = ''; e.currentTarget.style.color = '#d9e8ff'; }}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-a"
          className="lg:hidden bg-[#0573D7] overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 52px)' }}
        >
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <MobileAccordionItemB key={item.label} item={item} />
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}