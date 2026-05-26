'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import nav from '@/app/data/menu-links.json';

// ─── Icons ────────────────────────────────────────────────────────────────────

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

const ChevronIcon = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 12 8" fill="none" aria-hidden="true"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Desktop section ──────────────────────────────────────────────────────────

function DesktopAccordionSection({ sec, onClose }) {
  const renderChildLink = (lk) => {
    if (lk.disabled) {
      return (
        // non-clickable child links
        // gray hex = #9aa5b4
        <div
          key={lk.label}
          className="flex items-start gap-[5px] py-[4px] leading-snug mb-1"
          style={{ color: '#9aa5b4', fontSize: '16px', lineHeight: '1' }}
        >
          <span className="flex-shrink-0" style={{ color: '#6b7a90' }} aria-hidden="true">›</span>
          <span>{lk.label}</span>
        </div>
      );
    }
    return (
      // child links
      <Link
        key={lk.label}
        href={lk.href}
        onClick={onClose}
        className="flex items-start gap-[5px] py-[4px] leading-snug no-underline text-[#0273D7] hover:text-[#003d7a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0273D7] group mb-1"
        style={{ fontSize: '16px', lineHeight: '1' }}
      >
        <span className="flex-shrink-0" style={{ color: '#6b7a90' }} aria-hidden="true">›</span>
        <span className="group-hover:underline">{lk.label}</span>
      </Link>
    );
  };

  // stadalone links
  const renderStandaloneLink = (lk) => {
    if (lk.disabled) {
      return (
        <p key={lk.label} className="text-[16.5px] font-bold leading-none mb-2 py-[5px]" style={{ color: '#9aa5b4' }}>
          {lk.label}
        </p>
      );
    }
    return (
      <Link
        key={lk.label}
        href={lk.href}
        onClick={onClose}
        className="block text-[16.5px] font-bold leading-none py-[5px] no-underline text-[#0273D7] mb-2 hover:underline hover:text-[#003d7a]"
      >
        {lk.label}
      </Link>
    );
  };

  const hasHeading = !!sec.heading;

  // headers
  return (
    <div className="mb-3 last:mb-0">
      {hasHeading && (
        sec.disabled ? (
          <p className="text-[16.5px] font-bold leading-none mb-2 m-0" style={{ color: '#9aa5b4' }}>
            {sec.heading}
          </p>
        ) : sec.href ? (
          <Link
            href={sec.href}
            onClick={onClose}
            className="block text-[16.5px] font-bold leading-none mb-2 no-underline text-[#0273D7] hover:underline hover:text-[#003d7a] underline-offset-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0273D7]"
          >
            {sec.heading}
          </Link>
        ) : (
          <p className="text-[16.5px] font-bold leading-none mb-2 m-0" style={{ color: '#6b7a90' }}>
            {sec.heading}
          </p>
        )
      )}

      {!sec.disabled && (
        <div className="flex flex-col gap-0">
          {sec.links.map((lk) =>
            hasHeading ? renderChildLink(lk) : renderStandaloneLink(lk)
          )}
        </div>
      )}
    </div>
  );
}

// ─── Desktop dropdown panel ───────────────────────────────────────────────────

function Desktop({ item, onClose }) {
  const hasLeftPanel = !!(item.left_title || item.description || item.cta);

  let fallback = 1;
  const assigned = item.sections.map((sec) => ({
    ...sec,
    _col: sec.col ?? fallback++,
  }));
  const colMap = new Map();
  assigned.forEach((sec) => {
    if (!colMap.has(sec._col)) colMap.set(sec._col, []);
    colMap.get(sec._col).push(sec);
  });
  const columns = Array.from(colMap.values());

  return (
    // Outer div — no py-2
<div className="bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)] border-t border-b border-[#dde3ec]" style={{ position: 'relative' }}>

  {hasLeftPanel && (
    <div style={{
      position: 'absolute', top: 0, bottom: 0, left: 0,
      width: 'calc((100% - 1280px) / 2 + 220px)',
      background: '#f3f5f8',
      zIndex: 0,
      pointerEvents: 'none',
    }} aria-hidden="true" />
  )}

  <div className="max-w-[1280px] mx-auto px-8 flex items-stretch" style={{ position: 'relative', zIndex: 1 }}>

    {hasLeftPanel && (
      <>
        <div
          className="flex flex-col gap-2 py-8 flex-shrink-0 self-stretch"
          style={{ width: '220px', paddingRight: '2rem', background: '#f3f5f8' }}
        >
          {item.left_title && (
            <h2 className="font-bold mb-2" style={{ fontSize: '18px', lineHeight: '1.3', color: '#1a2a4a' }}>
              {item.left_title}
            </h2>
          )}
          {item.description && (
            <p className="mb-2" style={{ fontSize: '15px', lineHeight: '1.3', color: '#555' }}>
              {item.description}
            </p>
          )}
          {item.cta && (
            <Link
              href={item.cta.href}
              onClick={onClose}
              className="inline-flex items-center gap-1 font-bold no-underline text-[#0273D7] hover:underline hover:text-[#003d7a] underline-offset-[2px] mt-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0273D7]"
              style={{ fontSize: '15px', lineHeight: '1.3' }}
            >
              {item.cta.label}
            </Link>
          )}
        </div>
        <div className="w-px flex-shrink-0" style={{ background: '#dde3ec' }} aria-hidden="true" />
      </>
    )}

    {/* py-8 here gives top/bottom space on the right column only */}
    <div className="py-8 pl-8">
      <div
        className="grid gap-x-8 items-start"
        style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, 220px)` }}
      >
        {columns.slice(0, 4).map((secs, colIdx) => (
          <div key={colIdx}>
            {secs.map((sec, i) => (
              <DesktopAccordionSection key={i} sec={sec} onClose={onClose} />
            ))}
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────

function MobileSectionFromSections({ sec }) {
  const [open, setOpen] = useState(false);

  const MobileLink = ({ link }) =>
    link.disabled ? (
      <span
        className="flex items-center gap-2 px-8 py-[10px] text-[13.5px] leading-snug"
        style={{ minHeight: '44px', color: '#9aa5b4' }}
      >
        <svg className="flex-shrink-0 w-[6px] h-[10px] opacity-40" viewBox="0 0 6 10" fill="none" aria-hidden="true">
          <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {link.label}
      </span>
    ) : (
      <Link
        href={link.href}
        className="flex items-center gap-2 px-8 py-[10px] text-[#1a2a4a] text-[13.5px] leading-snug no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7] hover:underline"
        style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#0273D7'; e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
      >
        <svg className="flex-shrink-0 w-[6px] h-[10px] text-[#0273D7] opacity-60" viewBox="0 0 6 10" fill="none" aria-hidden="true">
          <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {link.label}
      </Link>
    );

  const LinkList = ({ links }) => (
    <ul className="list-none m-0 p-0 pb-2" style={{ background: 'linear-gradient(to bottom, #f0f4fc, #f8f9fd)' }} role="list">
      {links.map((link) => (
        <li key={link.label} role="listitem">
          <MobileLink link={link} />
        </li>
      ))}
    </ul>
  );

  if (!sec.heading) {
    return (
      <div className="border-b border-[#dde3f0]">
        {sec.links.map((link) => <MobileLink key={link.label} link={link} />)}
      </div>
    );
  }

  if (sec.href && !sec.links?.length) {
    return (
      <div className="border-b border-[#dde3f0]">
        <Link
          href={sec.href}
          className="flex items-center justify-between px-5 py-[14px] text-[14px] font-semibold text-[#0273D7] no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7] hover:underline"
          style={{ minHeight: '44px' }}
        >
          {sec.heading}
          <ArrowIcon />
        </Link>
      </div>
    );
  }

  if (sec.href) {
    return (
      <div className="border-b border-[#dde3f0]">
        <div className="flex items-stretch">
          <Link
            href={sec.href}
            className="flex-1 flex items-center gap-2 px-5 py-[14px] text-[14px] font-semibold text-[#0273D7] no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7] hover:underline"
            style={{ minHeight: '44px', transition: 'color 0.15s, background 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(2,115,215,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; }}
          >
            <span className="flex-shrink-0 w-[3px] self-stretch" style={{ background: '#0273D7' }} aria-hidden="true" />
            <span>{sec.heading}</span>
            <ArrowIcon />
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
            <ChevronIcon open={open} />
          </button>
        </div>
        {open && <LinkList links={sec.links} />}
      </div>
    );
  }

  return (
    <div className="border-b border-[#dde3f0]">
      <button
        className="w-full flex items-center justify-between px-5 py-[14px] text-[14px] font-semibold text-[#1a2a4a] text-left bg-transparent border-none cursor-pointer font-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0273D7] hover:underline"
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
        <ChevronIcon open={open} />
      </button>
      {open && <LinkList links={sec.links} />}
    </div>
  );
}

function MobileAccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasSections = item.sections?.length > 0;

  if (!hasSections) {
    return (
      <div className="border-b border-[#0057a8]">
        <Link
          href={item.href}
          className="flex items-center justify-between px-5 py-[15px] text-[15px] font-bold text-white no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white hover:underline"
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
        className="w-full flex items-center justify-between px-5 text-[15px] font-bold text-white text-left bg-transparent border-none cursor-pointer font-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white hover:underline"
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
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div
          className="border-t border-[#0057a8]"
          style={{ background: '#ffffff' }}
          role="region"
          aria-label={`${item.label} submenu`}
        >
          {item.description && (
            <div className="px-5 py-4 border-b border-[#dde3f0]" style={{ background: '#f0f5fb' }}>
              <p className="text-[13px] leading-[1.6] text-[#4a5a6e] m-0">{item.description}</p>
            </div>
          )}
          {item.sections.map((sec, i) => (
            <MobileSectionFromSections key={i} sec={sec} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function VariationA() {
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
    closeTimer.current = setTimeout(() => setActiveId(null), 150);
  };

  const activeItem = nav.find((n) => n.id === activeId);

  // top level nav
  return (
    <header
      className={[
        'sticky top-0 bg-[#0273D7] font-["Source_Sans_Pro",Helvetica,Arial,sans-serif] z-999',
        scrolled || activeId ? 'shadow-[0_2px_16px_rgba(0,0,0,0.12)]' : '',
      ].join(' ')}
    >
      <div className="border-b border-black/[0.08]">
        <div className="max-w-[1280px] mx-auto px-8 py-1 flex items-center">
          <nav className="flex-1 overflow-hidden hidden lg:block" aria-label="Primary navigation">
            <ul className="list-none m-0 p-0 flex items-stretch flex-wrap" role="menubar">
              {nav.map((item) => (
                <li
                  key={item.id || item.label}
                  role="none"
                  onMouseEnter={() => {
                    cancelClose();
                    if (item.sections) setActiveId(item.id);
                    else setActiveId(null);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  {item.sections ? (
                    <button
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={activeId === item.id}
                      className={[
                        'inline-flex items-center h-full px-[14px] py-2 text-[15px] font-medium text-white whitespace-nowrap gap-[5px]',
                        'bg-transparent border-none cursor-default font-[inherit]',
                        activeId === item.id ? 'underline' : 'no-underline hover:underline',
                      ].join(' ')}
                    >
                      {item.label}
                      <ChevronIcon open={activeId === item.id} />
                    </button>
                  ) : (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className="inline-flex items-center h-full px-[14px] py-2 text-[15px] font-medium text-white whitespace-nowrap no-underline hover:underline"
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
              className="flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#0273D7] rounded"
              onClick={() => { setMobOpen(!mobOpen); setActiveId(null); }}
              aria-label={mobOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobOpen}
              aria-controls="mobile-nav"
            >
              {mobOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      {activeId && activeItem?.sections && (
        <div
          className="absolute left-0 right-0 z-999"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          role="region"
          aria-label={`${activeItem.label} menu`}
        >
          <Desktop item={activeItem} onClose={() => setActiveId(null)} />
        </div>
      )}

      {mobOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 52px)', background: '#0057a8' }}
        >
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <MobileAccordionItem key={item.id || item.label} item={item} />
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