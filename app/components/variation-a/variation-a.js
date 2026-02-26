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

function MobileColumn({ col }) {
  const [open, setOpen] = useState(false);

  if (col.heading) {
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
            <span className="truncate">{col.heading}</span>
          </span>
          <Chevron />
        </button>

        {open && (
          <ul
            className="list-none m-0 p-0 pb-2"
            style={{ background: 'linear-gradient(to bottom, #f0f4fc, #f8f9fd)' }}
            role="list"
          >
            {col.links.map((link) => (
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
      {col.links.map((link) => (
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

function MobileAccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasRows = item.rows?.length > 0;

  if (!hasRows) {
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
          <Chevron />
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
          {item.rows.map((row, ri) =>
            row.columns.map((col, ci) => <MobileColumn key={`${ri}-${ci}`} col={col} />)
          )}
        </div>
      )}
    </div>
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
    const fn = (e) => { if (e.key === 'Escape') setActiveMenu(null); };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
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
          <div className="ml-auto lg:hidden flex items-center">
            <button
              className="flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2 w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#0273D7] rounded"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'opacity 0.2s', opacity: mobileOpen ? 0 : 1 }}
                aria-hidden="true"
              />
              <span
                className="block w-[22px] h-[2px] bg-white rounded-sm"
                style={{ transition: 'transform 0.2s, opacity 0.2s', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </div>
        </div>

        {activeMenu && activeItem?.rows && (
          <div
            className="absolute top-full left-0 right-0 bg-[#F5F5F5] shadow-[0_10px_30px_rgba(0,0,0,0.13)]"
            role="region"
            aria-label={`${activeItem.label} menu`}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-[1380px] mx-auto px-6 pt-[22px] pb-7">
              {activeItem.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`grid gap-x-8 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] ${rowIdx > 0 ? 'mt-5 pt-5 border-t border-[#eef0f6]' : ''}`}
                >
                  {row.columns.map((col, colIdx) => (
                    <div key={colIdx} className="min-w-0">
                      {col.heading && (
                        col.href ? (
                          <Link href={col.href} className="block text-[13px] font-bold uppercase tracking-[0.09em] text-[#013f7e] no-underline mb-2 pb-[6px] border-b border-[#dde3f0] hover:text-[#024988]">
                            {col.heading}
                          </Link>
                        ) : (
                          <span className="block text-[13px] font-bold uppercase tracking-[0.09em] text-[#013f7e] mb-2 pb-[6px] border-b border-[#dde3f0]">
                            {col.heading}
                          </span>
                        )
                      )}
                      <ul className="list-none m-0 p-0 flex flex-col gap-[2px]">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="block px-[6px] py-1 text-[#333] text-[13.5px] font-semibold leading-snug rounded-[3px] no-underline hover:bg-[rgba(0,61,165,0.07)] hover:text-[#003DA5]">
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
          id="mobile-nav"
          className="lg:hidden overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 52px)', background: '#0057a8' }}
        >
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <MobileAccordionItem key={item.label} item={item} />
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