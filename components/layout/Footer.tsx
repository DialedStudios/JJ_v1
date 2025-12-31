import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="container">
        Dialed Studios — Crafted with intent.{' '}
        <Link href="mailto:hello@dialedstudios.com">Say hello</Link>.
      </div>
    </footer>
  );
}
