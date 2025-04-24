import { NavItem, ServiceItem, ExperienceItem, PortfolioItem, TrustItem } from '../types';

export const navItems: NavItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '#home',
  },
  {
    id: 'services',
    title: 'Services',
    href: '#services',
  },
  {
    id: 'experience',
    title: 'Experience',
    href: '#experience',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    href: '#portfolio',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
  },
];

export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Content Architecture',
    description: 'Structured frameworks for organizing and categorizing content across platforms.',
    icon: 'LayoutGrid',
    color: 'accent-red',
  },
  {
    id: 2,
    title: 'Metadata Frameworks',
    description: 'Comprehensive metadata schemas to enhance discoverability and management.',
    icon: 'Tags',
    color: 'accent-green',
  },
  {
    id: 3,
    title: 'Multi-Platform Distribution',
    description: 'Streamlined systems for content delivery across diverse platforms and devices.',
    icon: 'Share2',
    color: 'accent-blue',
  },
  {
    id: 4,
    title: 'Content Analytics',
    description: 'Data-driven insights to optimize content performance and engagement.',
    icon: 'BarChart2',
    color: 'accent-red',
  },
  {
    id: 5,
    title: 'Workflow Optimization',
    description: 'Enhanced processes to streamline content creation and distribution pipelines.',
    icon: 'GitMerge',
    color: 'accent-green',
  },
  {
    id: 6,
    title: 'Team Training',
    description: 'Knowledge transfer and skill development for effective content management.',
    icon: 'Users',
    color: 'accent-blue',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Fox Corporation',
    role: 'Senior Content Architect',
    description: 'Led digital transformation initiatives for content management across broadcast networks.',
    color: 'accent-blue',
    icon: 'Tv',
  },
  {
    id: 2,
    company: 'SDI Media',
    role: 'Metadata Systems Director',
    description: 'Developed global metadata frameworks for multi-language content distribution.',
    color: 'bg-gray-900',
    icon: 'Globe',
  },
  {
    id: 3,
    company: 'Warner Bros. Entertainment',
    role: 'Content Distribution Lead',
    description: 'Managed digital content delivery systems for global film and television properties.',
    color: 'gold',
    icon: 'Film',
  },
  {
    id: 4,
    company: 'FUEL TV',
    role: 'Digital Content Strategist',
    description: 'Implemented cross-platform content strategy for action sports programming.',
    color: 'accent-red',
    icon: 'Flame',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'FIFA Men\'s World Cup',
    description: 'Global content distribution architecture for live sports broadcasting.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    icon: 'Trophy',
  },
  {
    id: 2,
    title: 'Feature Film Digital Distribution',
    description: 'Streamlined delivery systems for major studio feature film releases.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    icon: 'Film',
  },
  {
    id: 3,
    title: 'CMS and Metadata Architecture',
    description: 'Custom content management solutions for enterprise media libraries.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    icon: 'Database',
  },
  {
    id: 4,
    title: 'QC and Testing',
    description: 'Quality control frameworks ensuring consistent content delivery across platforms.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
    icon: 'CheckCircle',
  },
];

export const trustItems: TrustItem[] = [
  {
    id: 1,
    name: 'Fox',
    logo: 'https://images.pexels.com/photos/8761752/pexels-photo-8761752.jpeg',
  },
  {
    id: 2,
    name: 'Warner Bros.',
    logo: 'https://images.pexels.com/photos/249345/pexels-photo-249345.jpeg',
  },
  {
    id: 3,
    name: 'Netflix',
    logo: 'https://images.pexels.com/photos/7676406/pexels-photo-7676406.jpeg',
  },
  {
    id: 4,
    name: 'HBO',
    logo: 'https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg',
  },
  {
    id: 5,
    name: 'Apple',
    logo: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
  },
];