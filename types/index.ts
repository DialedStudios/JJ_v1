export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  badge?: string;
  title: string;
  body: string;
}

export interface PricingTier {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface HeroProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: {
    label: string;
    description: string;
  }[];
}

export interface CardProps {
  badge?: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'ghost';
  href?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
}
