import { NavItem, ServiceItem, ExperienceItem, PortfolioItem, TrustItem, SkillGroup } from '../types';

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
    id: 'skills',
    title: 'Skills',
    href: '#skills',
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
    details: [
      'Structuring content frameworks for complex platforms, ensuring logical organization and scalability (e.g., for global sports event distribution).',
      'Defining relationships and models for optimal content reuse and management.',
    ],
  },
  {
    id: 2,
    title: 'Metadata Frameworks',
    description: 'Comprehensive metadata schemas to enhance discoverability and management.',
    icon: 'Tags',
    color: 'accent-green',
    details: [
      'Designing comprehensive metadata schemas tailored to specific platforms and discovery needs.',
      'Addressing multi-lingual requirements and ensuring compliance with international standards.',
    ],
  },
  {
    id: 3,
    title: 'Multi-Platform Distribution',
    description: 'Streamlined systems for content delivery across diverse platforms and devices.',
    icon: 'Share2',
    color: 'accent-blue',
    details: [
      'Developing streamlined systems for delivering content consistently across diverse devices and platforms.',
      'Expertise in handling various technical formats and platform-specific delivery protocols.',
    ],
  },
  {
    id: 4,
    title: 'Content Analytics',
    description: 'Data-driven insights to optimize content performance and engagement.',
    icon: 'BarChart2',
    color: 'accent-red',
    details: [
      'Implementing data tracking strategies to measure content performance and user engagement.',
      'Analyzing data to provide insights for content optimization and demonstrating ROI.',
    ],
  },
  {
    id: 5,
    title: 'Workflow Optimization',
    description: 'Enhanced processes to streamline content creation and distribution pipelines.',
    icon: 'GitMerge',
    color: 'accent-green',
    details: [
      'Analyzing existing content creation, management, and distribution processes using root cause analysis.',
      'Identifying bottlenecks and implementing automated or improved workflows (e.g., using AI-driven tools) to increase efficiency and reduce costs.',
    ],
  },
  {
    id: 6,
    title: 'Team Training',
    description: 'Knowledge transfer and skill development for effective content management.',
    icon: 'Users',
    color: 'accent-blue',
    details: [
      'Creating clear technical documentation, operational standards guides, and educational materials.',
      'Conducting training sessions to onboard teams effectively onto new systems and processes.',
    ],
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
    details: [
      'Led requirements definition for an end-to-end content distribution platform (handling ingest, user management, monetization, DRM, publishing, processing).',
      'Developed and implemented an AI tool to automate ad break timecode detection, significantly increasing high-volume output.',
      'Supported launch of major monetized offerings including Fox Nation, Fox Weather, and PPV events.',
      'Implemented new CMS for streaming video distribution during the 2018 FIFA World Cup.',
      'Managed and trained a team of 10 content specialists.',
    ],
  },
  {
    id: 2,
    company: 'SDI Media',
    role: 'Metadata Systems Director',
    description: 'Developed global metadata frameworks for multi-language content distribution.',
    color: 'bg-gray-900',
    icon: 'Globe',
    details: [
      'Developed and implemented global metadata frameworks supporting multi-language content distribution.',
      'Ensured metadata compliance across diverse international standards and platforms.',
    ],
  },
  {
    id: 3,
    company: 'Warner Bros. Entertainment',
    role: 'Content Distribution Lead',
    description: 'Managed digital content delivery systems for global film and television properties.',
    color: 'gold',
    icon: 'Film',
    details: [
      'Managed digital content delivery systems for high-profile global film and television properties.',
      'Oversaw workflows involving complex physical media formats (e.g., Betacam, 1-inch tape) and digitization processes.',
      'Handled intricate post-production requirements, including director-specified chapter points for major releases (e.g., The Hobbit, Lord of the Rings).',
    ],
  },
  {
    id: 4,
    company: 'FUEL TV',
    role: 'Digital Content Strategist',
    description: 'Implemented cross-platform content strategy for action sports programming.',
    color: 'accent-red',
    icon: 'Flame',
    details: [
      'Implemented cross-platform content strategy for action sports programming.',
      'Optimized content delivery across various digital endpoints.',
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'FIFA Men\'s World Cup',
    description: 'Global content distribution architecture for live sports broadcasting.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    icon: 'Trophy',
    details: [
      'Architected and implemented scalable CMS to handle high-volume live streaming for global audience.',
      'Ensured robust, reliable content delivery across diverse devices under high-visibility conditions.',
    ],
  },
  {
    id: 2,
    title: 'Feature Film Digital Distribution',
    description: 'Streamlined delivery systems for major studio feature film releases.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    icon: 'Film',
    details: [
      'Managed end-to-end distribution workflows, ensuring compliance with strict platform specifications (e.g., iTunes Store).',
      'Successfully navigated complex asset requirements including multi-lingual audio/subtitle sync, metadata variations, artwork localization, and global ratings.',
    ],
  },
  {
    id: 3,
    title: 'CMS and Metadata Architecture',
    description: 'Custom content management solutions for enterprise media libraries.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    icon: 'Database',
    details: [
      'Designed and enhanced Content Management Systems for large-scale media libraries.',
      'Developed comprehensive metadata strategies and schemas to improve discoverability and platform compliance.',
      'Collaborated with development teams (e.g., Comcast VCP) on CMS feature enhancements.',
    ],
  },
  {
    id: 4,
    title: 'QC and Testing',
    description: 'Quality control frameworks ensuring consistent content delivery across platforms.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
    icon: 'CheckCircle',
    details: [
      'Established rigorous Quality Control frameworks for video, audio, timed text, metadata, and image assets.',
      'Ensured consistency and compliance across multiple platforms and territories.',
      'Expertise in identifying and resolving issues related to audio sync, video standards, file formats, and metadata accuracy.',
    ],
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

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: 'Strategy & Systems',
    skills: [
      'Content Management Systems (CMS)',
      'Digital Asset Management (DAM)',
      'Metadata Architecture & Strategy',
      'Digital Media Supply Chain Optimization',
    ],
  },
  {
    id: 2,
    title: 'Workflows',
    skills: [
      'Multi-Lingual Content Workflows',
      'Workflow Automation (incl. AI)',
      'Video Post-Production & Encoding',
      'Audio/Video/Timed Text QC & Sync',
    ],
  },
  {
    id: 3,
    title: 'Technical Skills',
    skills: [
      'XML & Schema Definition',
      'FFmpeg Scripting & Automation',
      'Platform Compliance & Specifications',
      'Technical Documentation & Training',
    ],
  },
  {
    id: 4,
    title: 'Process & Management',
    skills: [
      'Vendor & Stakeholder Management',
      'Product Management (Media Platforms)',
      'Team Leadership & Training',
      'Project Management & Delivery',
    ],
  },
];