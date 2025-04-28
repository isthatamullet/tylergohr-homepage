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
    description: 'We design scalable content frameworks that align with your business objectives, ensuring efficient organization and retrieval of assets across all platforms. Why This Matters: A well-defined content architecture is the foundation for effective content management, enabling seamless workflows and maximizing content reuse.',
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
    description: 'We develop robust metadata schemas that drive content discoverability, streamline search, and automate content lifecycle management. Why This Matters: Accurate and consistent metadata is essential for efficient content operations, enabling powerful search capabilities and data-driven decision-making.',
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
    description: 'We implement automated distribution systems to deliver your content seamlessly across all platforms and devices, optimizing for format, resolution, and platform-specific requirements. Why This Matters: Maximize audience reach and engagement by ensuring your content is accessible everywhere, in the right format, at the right time.',
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
    description: 'We provide actionable data insights into content performance, audience engagement, and ROI, empowering you to make informed decisions and optimize your content strategy. Why This Matters: Data analytics transforms content from a cost center into a strategic asset that drives business growth.',
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
    description: 'We analyze and redesign your content workflows to eliminate bottlenecks, automate repetitive tasks, and accelerate time-to-market. Why This Matters: Streamlined workflows reduce operational costs, improve team productivity, and enable faster content delivery.',
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
    description: 'We empower your team with the skills and knowledge to effectively use new content management systems and workflows, ensuring successful adoption and maximizing efficiency. Why This Matters: Well-trained teams are essential for successful implementation and long-term ROI of content management solutions.',
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
    description: 'Spearheaded digital transformation initiatives across broadcast networks, resulting in a 20% increase in content delivery efficiency and a 15% reduction in operational costs.',
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
    description: 'Architected and implemented global metadata frameworks that improved content discoverability by 30% and streamlined multi-language content workflows.',
    color: 'accent-green',
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
    description: 'Oversaw the delivery of high-profile film and television properties to global audiences, ensuring seamless and timely distribution across diverse platforms.',
    color: 'gold',
    icon: 'Film',
    details: [
      'Managed digital content delivery systems for high-profile global film and television properties.',
      'Oversaw workflows involving complex physical media formats (e.g., Betacam, 1-inch tape) and digitization processes.',
      'Handled intricate post-production requirements, including director-specified chapter points for major releases (e.g., The Harry Potter Franchise, The Hobbit, Lord of the Rings).',
    ],
  },
  {
    id: 4,
    company: 'FUEL TV',
    role: 'Digital Content Strategist',
    description: 'Developed and executed a cross-platform content strategy for action sports programming, resulting in a 250% increase in viewership and significant growth in audience engagement.',
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
    description: 'Designed and implemented a highly scalable content distribution architecture to support live streaming for a global audience of millions.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    icon: 'Trophy',
    details: [
      'The solution handled unprecedented traffic spikes and ensured 99.99% uptime, resulting in record-breaking viewership and advertiser satisfaction.',
      'Implemented real-time content synchronization across multiple delivery platforms.',
      'Developed automated quality control systems for live content verification.',
    ],
  },
  {
    id: 2,
    title: 'Feature Film Digital Distribution',
    description: 'Developed and managed end-to-end delivery systems for major studio film releases, ensuring compliance with strict platform specifications (e.g., iTunes).',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    icon: 'Film',
    details: [
      'Our optimized workflows reduced delivery times by 40% and minimized rejections due to technical errors.',
      'Successfully navigated complex asset requirements including multi-lingual audio/subtitle sync, metadata variations, artwork localization, and global ratings.',
      'Implemented automated quality control processes that reduced manual QC time by 60%.',
    ],
  },
  {
    id: 3,
    title: 'CMS and Metadata Architecture',
    description: 'Developed custom Content Management Systems (CMS) and metadata architectures for enterprise media libraries, improving content organization, searchability, and platform compliance.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    icon: 'Database',
    details: [
      'These solutions increased content discoverability by 50% and streamlined content management workflows.',
      'Developed comprehensive metadata strategies and schemas to improve discoverability and platform compliance.',
      'Collaborated with development teams (e.g., Comcast VCP) on CMS feature enhancements.',
    ],
  },
  {
    id: 4,
    title: 'QC and Testing',
    description: 'Implemented rigorous Quality Control (QC) frameworks to ensure consistent and high-quality content delivery across diverse platforms.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
    icon: 'CheckCircle',
    details: [
      'Our QC processes reduced content errors by 90%, resulting in improved user experience and minimized customer complaints.',
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
    title: 'Strategy & Systems: Our strategic approach to content management ensures robust and scalable systems.',
    skills: [
      'Content Management Systems (CMS)',
      'Digital Asset Management (DAM)',
      'Metadata Architecture & Strategy',
      'Digital Media Supply Chain Optimization',
    ],
  },
  {
    id: 2,
    title: 'Workflows: We optimize content workflows to maximize efficiency and quality.',
    skills: [
      'Multi-Lingual Content Workflows',
      'Workflow Automation (incl. AI)',
      'Video Post-Production & Encoding',
      'Audio/Video/Timed Text QC & Sync',
    ],
  },
  {
    id: 3,
    title: 'Technical Skills: Our technical expertise ensures seamless integration and implementation.',
    skills: [
      'XML & Schema Definition',
      'FFmpeg Scripting & Automation',
      'Platform Compliance & Specifications',
      'Technical Documentation & Training',
    ],
  },
  {
    id: 4,
    title: 'Process & Management: Our management skills guarantee successful project delivery and stakeholder satisfaction.',
    skills: [
      'Vendor & Stakeholder Management',
      'Product Management (Media Platforms)',
      'Team Leadership & Training',
      'Project Management & Delivery',
    ],
  },
];