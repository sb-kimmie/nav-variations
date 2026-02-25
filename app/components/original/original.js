'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const menuData = [
  {
    label: 'Home',
    href: '/join-the-pack',
  },
  {
    label: 'Future Students',
    href: '/join-the-pack/future-students',
    columns: [
      {
        heading: 'Explore CSUSB',
        headingHref: '/join-the-pack/future-students/explore-csusb',
        items: [
          { label: 'Why Choose CSUSB', href: '/join-the-pack/future-students/explore-csusb/why-choose-csusb' },
          { label: 'Campus Tours', href: '/join-the-pack/future-students/explore-csusb/campus-tours' },
          { label: 'Education Abroad', href: '/join-the-pack/future-students/explore-csusb/education-abroad' },
          { label: 'Visit San Bernardino', href: '/join-the-pack/future-students/explore-csusb/visit-san-bernardino' },
          { label: 'CSUSB Traditions and Landmarks', href: '/join-the-pack/future-students/explore-csusb/csusb-traditions-and-landmarks' },
        ],
      },
      {
        heading: 'Apply',
        headingHref: '/join-the-pack/future-students/apply',
        items: [
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
        headingHref: '/join-the-pack/future-students/program-specific-requirements',
        items: [
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
        headingHref: '/join-the-pack/future-students/campus-life',
        items: [
          { label: 'Student Recreation & Wellness Center', href: '/join-the-pack/future-students/campus-life/student-recreation-wellness-center' },
          { label: 'Living on Campus', href: '/join-the-pack/future-students/living-campus' },
          { label: 'Connect with an Outreach Counselor', href: '/join-the-pack/future-students/connect-outreach-counselor' },
          { label: 'Learn about Palm Desert Campus', href: '/join-the-pack/future-students/learn-about-palm-desert-campus', isActive: true },
          { label: 'Cost of Attendance', href: '/join-the-pack/future-students/cost-attendance', isSubheading: true },
          { label: 'CSUSB Net Price Calculator / Tuition Calculator', href: 'https://app.meadowfi.com/csusb', indent: true },
        ],
      },
    ],
  },
  {
    label: 'Newly Admitted Students',
    href: '/join-the-pack/newly-admitted-students',
    columns: [
      {
        items: [
          { label: 'First-year Students', href: '/join-the-pack/newly-admitted-students/first-year-students', isSubheading: true },
          { label: 'EOP First-year Students', href: '/join-the-pack/newly-admitted-students/eop-first-year-students', isSubheading: true },
          { label: 'International Students', href: 'https://www.csusb.edu/international-education/programs/partnership-programs/students/new-students', isSubheading: true },
        ],
      },
      {
        items: [
          { label: 'Transfer Students', href: '/join-the-pack/newly-admitted-students/transfer-students', isSubheading: true },
          { label: 'Returning Students', href: '/join-the-pack/newly-admitted-students/returning-students', isSubheading: true },
          { label: 'Graduate Students', href: '/join-the-pack/newly-admitted-students/graduate-students', isSubheading: true },
        ],
      },
      {
        items: [
          { label: 'Financial Aid, Scholarships & Grants', href: '/join-the-pack/newly-admitted-students/financial-aid-scholarships-grants', isSubheading: true },
          { label: 'Orientation Overview', href: '/join-the-pack/newly-admitted-students/orientation-overview', isSubheading: true },
          { label: 'Join Nearpeer', href: '/join-the-pack/newly-admitted-students/join-the-nearpeer', isSubheading: true },
        ],
      },
    ],
  },
  {
    label: 'Parents & Guardians',
    href: '/join-the-pack/parents-guardians',
    columns: [
      { items: [{ label: 'Financial Aid Overview', href: '/join-the-pack/parents-guardians/financial-aid-overview', isSubheading: true }] },
      { items: [{ label: 'Campus Tours & Virtual Visits', href: '/join-the-pack/parents-guardians/campus-tours-virtual-visits', isSubheading: true }] },
      { items: [{ label: 'Campus Safety', href: '/join-the-pack/parents-guardians/campus-safety', isSubheading: true }] },
    ],
  },
  {
    label: 'Counselors',
    href: '/join-the-pack/counselors',
    columns: [
      {
        heading: 'Apply and Admissions Requirements',
        headingHref: 'https://www.csusb.edu/join-the-pack/future-students/apply',
        items: [
          { label: 'Freshman Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/freshmen-admissions-requirements' },
          { label: 'Transfer Admissions Requirements', href: 'https://www.csusb.edu/join-the-pack/future-students/apply/transfer-admissions-requirements' },
        ],
      },
      {
        heading: 'Available Programs',
        headingHref: '/join-the-pack/counselors/available-programs',
        items: [
          { label: 'Direct Admissions Program', href: '/join-the-pack/counselors/available-programs/direct-admissions-program' },
          { label: 'High School Dual Enrollment', href: 'https://www.csusb.edu/join-the-pack/counselors/available-programs#hsdualenrollment' },
          { label: 'Transfer Pathways & Articulation', href: '/join-the-pack/counselors/available-programs/transfer-pathways-articulation' },
          { label: 'Making College Happen', href: '/join-the-pack/counselors/making-college-happen', isSubheading: true },
          { label: 'Affordability & Financial Aid', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#affordability-financial-aid', indent: true },
          { label: 'Parent & Family Communication', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#parent-family-communication', indent: true },
          { label: 'Visiting CSUSB', href: 'https://www.csusb.edu/join-the-pack/counselors/making-college-happen#campus-tours', indent: true },
        ],
      },
      {
        items: [
          { label: 'Palm Desert Campus', href: '/join-the-pack/counselors/palm-desert-campus', isSubheading: true },
          { label: 'Resources', href: '/join-the-pack/counselors/resources', isSubheading: true },
          { label: 'Request an Outreach Counselor', href: '/join-the-pack/counselors/request-outreach-counselor', isSubheading: true },
        ],
      },
    ],
  },
  {
    label: 'Admissions Forms',
    href: '/join-the-pack/admissions-forms',
  },
  {
    label: 'Program Finder',
    href: 'https://www.csusb.edu/join-the-pack/program-finder',
    columns: [
      {
        heading: 'Why Earn a Certificate at CSUSB?',
        headingHref: '/join-the-pack/future-students/explore-csusb',
        items: [
          { label: '', href: '/join-the-pack/counselors/palm-desert-campus', isSubheading: true },
        ],
      },
    ],
  },
];

function renderItem(item, ii) {
  if (item.isSubheading) {
    return (
      <Link
        key={ii}
        href={item.href}
        className="block text-white font-bold text-[14px] mt-4 mb-1 hover:underline no-underline"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <Link
      key={ii}
      href={item.href}
      className={[
        'block py-1.5 px-3 rounded text-[13px] text-white/90 no-underline',
        'bg-[#00346a] hover:bg-[#01346A] transition-colors duration-100',
        item.indent ? 'ml-4' : '',
        item.isActive ? 'font-semibold text-white' : '',
      ].join(' ')}
    >
      {item.label}
    </Link>
  );
}

export default function OriginalNav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);

  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const activeItem = menuData.find((n) => n.label === activeMenu);

  return (
    <nav role="navigation" aria-label="Join the Pack" className="relative bg-[#0273d7] w-full">

      {/* Mobile toggle — visible below lg (1024px) */}
      <button
        className="lg:hidden flex items-center justify-center w-full gap-2 text-white rounded px-3 py-2 text-sm"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <span>☰</span>
        Page Menu
      </button>

      {/* Desktop menu — visible at lg and above */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-8 py-2">
        <ul className="flex flex-row items-stretch list-none m-0 p-0 flex-wrap">
          {menuData.map((item, i) => {
            const hasDropdown = !!item.columns?.length;
            const isActive = activeMenu === item.label;
            return (
              <li
                key={i}
                onMouseEnter={() => { cancelClose(); if (hasDropdown) setActiveMenu(item.label); }}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={item.href}
                  className={[
                    'inline-flex items-center gap-1 text-white no-underline h-full whitespace-nowrap',
                    'text-[13.5px] lg:text-[13.5px] font-medium transition-colors duration-150',
                    'px-[14px] lg:px-[14px] border-b-[3px] border-b-transparent',
                    isActive ? 'bg-[#01346A]' : 'hover:bg-[#01346A]',
                  ].join(' ')}
                >
                  {item.label}
                  {hasDropdown && (
                    <span className="text-[11px] opacity-80 select-none">▾</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Dropdown panel */}
      {activeMenu && activeItem?.columns && (
        <div
          className="absolute top-full left-0 right-0 bg-[#003f7e] shadow-2xl z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="flex w-full mx-auto px-20 lg:px-32 xl:px-40 pt-[22px] lg:pt-8 pb-7 lg:pb-10 gap-8 lg:gap-12">
            {activeItem.columns.map((col, ci) => (
              <div key={ci} className="flex-1 min-w-[180px]">
                {col.heading && (
                  <Link
                    href={col.headingHref}
                    className="block text-white font-bold text-[14px] mb-3 hover:underline no-underline"
                  >
                    {col.heading}
                  </Link>
                )}
                {col.items.map((item, ii) => renderItem(item, ii))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu — visible below lg (1024px) */}
      {mobileOpen && (
        <div className="lg:hidden">
          <ul className="list-none m-0 p-0">
            {menuData.map((item, i) => {
              const hasDropdown = !!item.columns?.length;
              const isExpanded = mobileOpenIndex === i;
              return (
                <li key={i}>
                  <div className="flex items-center px-4 py-2">
                    <Link
                      href={item.href}
                      className="text-white no-underline text-[15px] font-medium"
                    >
                      {item.label}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() => setMobileOpenIndex(isExpanded ? null : i)}
                        className="text-white text-[12px] ml-2 border border-white/40 rounded px-2 py-1"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? '▴' : '▾'}
                      </button>
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="bg-[#003f7e] px-4 pb-4">
                      {item.columns.map((col, ci) => (
                        <div key={ci} className="pt-4">
                          {col.heading && (
                            <Link
                              href={col.headingHref}
                              className="block text-white font-bold text-[14px] mb-3 hover:underline no-underline"
                            >
                              {col.heading}
                            </Link>
                          )}
                          {col.items.map((sub, si) => renderItem(sub, si))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}