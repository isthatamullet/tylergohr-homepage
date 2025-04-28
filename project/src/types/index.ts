export interface NavItem {
  id: string;
  title: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  description: string;
  color: string;
  icon: string;
  details: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  details: string[];
}

export interface TrustItem {
  id: number;
  name: string;
  logo: string;
}

export interface SkillGroup {
  id: number;
  title: string;
  skills: string[];
}