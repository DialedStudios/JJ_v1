'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/constants';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand">
          <Image
            src="/images/logo.jpg"
            alt="Dialed Studios logo"
            width={40}
            height={40}
          />
          <span>Dialed Studios</span>
        </Link>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav__link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav__cta">
          <Link href="mailto:hello@dialedstudios.com" className="btn btn--ghost">
            Book a build
          </Link>
        </div>
      </div>
    </header>
  );
}
