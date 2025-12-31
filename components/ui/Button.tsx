import Link from 'next/link';
import { ButtonProps } from '@/types';

export function Button({
  variant = 'primary',
  href,
  type = 'button',
  children,
  className = '',
}: ButtonProps) {
  const classes = `btn ${variant === 'ghost' ? 'btn--ghost' : ''} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
