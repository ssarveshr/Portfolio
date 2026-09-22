import { Project, SkillCategory, ExperienceItem, EducationItem, LeadershipItem, CertificationItem } from '../types/portfolio';

// Link to resume stored in Google Drive (User can edit this URL anytime)
export const GOOGLE_DRIVE_RESUME_URL = 'https://drive.google.com/file/d/1h8xqSjzrvi2qqKEwDjLitEKXxj9S4PYl/view?usp=sharing';

export const PERSONAL_INFO = {
  name: 'SAI SARVESH R',
  title: 'Computer Science & Engineering Student',
  subTitle: 'Backend Developer Trainee | Full Stack Developer | GDG Technical Head',
  phone: '+91-7829122658',
  email: '1rn23cs178.saisarveshr@gmail.com',
  linkedin: 'https://linkedin.com/in/sai-sarvesh-r',
  github: 'https://github.com/ssarveshr',
  location: 'Bangalore, Karnataka - 560075, India',
  objective: 'Computer Science and Engineering student seeking internships and project opportunities to apply and strengthen programming and software development skills while gaining hands-on industry experience.',
  ieeeMembership: '100890383 (Nov 2024 - Present)',
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Tamil', level: 'Conversational' },
    { name: 'Kannada', level: 'Conversational' },
  ],
  interests: ['Adventure motorcycling', 'Traveling', 'Photography', 'Video games'],
};

export const PROJECTS: Project[] = [
    {
    id: 'reposense',
    title: 'RepoSense',
    subtitle: 'Semantic Repository Intelligence Platform',
    category: 'AI & Full-Stack',
    date: 'September 2026',
    tools: [
      'React',
      'Python',
      'FastAPI',
      'ChromaDB',
      'Ollama',
      'Sentence-Transformers',
      'GitHub API'
    ],
    featured: true,

    description:
      'An AI-powered repository discovery and intelligence platform that uses semantic search and local LLMs to help developers discover and understand open-source projects by meaning rather than keywords.',

    problemStatement:
      'Finding relevant open-source repositories through keyword-based GitHub search can make it difficult to discover projects based on their actual purpose, architecture, or functionality, while understanding a repository often requires manually exploring its metadata, README, and files.',

    keyFeatures: [
      'Built a decoupled full-stack architecture using React (Vite), FastAPI, ChromaDB, Sentence-Transformers, and a local Qwen2.5-Coder:3b model served through Ollama.',
      'Developed semantic repository discovery using vector embeddings and ChromaDB, enabling developers to search repositories based on meaning rather than keywords.',
      'Implemented an AI summarization pipeline that fetches GitHub repository metadata and README content without cloning repositories.',
      'Generated structured AI summaries covering repository purpose, technology stack, architecture, and notable files.',
      'Built a crawler service for indexing trending GitHub repositories to support semantic discovery.'
    ],

    architecture:
      'Decoupled full-stack architecture with a React (Vite) frontend communicating with a FastAPI backend. Repository data is obtained through the GitHub API, embeddings are generated using Sentence-Transformers and stored in ChromaDB for semantic search, while a local Qwen2.5-Coder:3b model served through Ollama powers repository summarization.',

    engineeringChallenges: [
      'Building semantic repository discovery using vector embeddings instead of traditional keyword-based search.',
      'Generating useful repository summaries without cloning repositories by efficiently fetching GitHub metadata and README content.',
      'Integrating a locally hosted Qwen2.5-Coder:3b model with the backend AI summarization pipeline.'
    ],
    
    futureImprovements: [
      'Expand repository indexing beyond trending repositories for broader semantic discovery.',
      'Improve summarization and retrieval quality through optimized chunking, caching, and embedding strategies.',
      'Support deeper repository analysis by incorporating additional source files and project structure.'
    ],
    
    githubUrl: 'https://github.com/ssarveshr/RepoSense-Intelligent-Repository-Discovery-and-Collaboration-Platform'
  },
  {
    id: 'eventx',
    title: 'EventX',
    subtitle: 'Campus Event Management System',
    category: 'Fullstack',
    date: 'June 2025',
    tools: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Bootstrap'],
    featured: true,
    description: 'A full-stack campus event operations platform enabling automated event creation, participant registration, and real-time attendance tracking.',
    problemStatement: 'Campus events suffered from fragmented registration spreadsheets, long physical queues for attendance verification, and high manual coordination friction across multiple departments.',
    keyFeatures: [
      'Architected and delivered a full-stack platform for campus event operations, enabling event setup, participant onboarding, and attendance monitoring across 10+ events with 800+ registrations.',
      'Implemented role-based authorization for administrators, organizers, and participants, streamlining coordination and real-time oversight across 5+ departments.',
      'Engineered secure authentication and automated registration pipelines, improving operational efficiency and reducing manual coordination by 60% during department-level fests.'
    ],
    architecture: 'Single-Page Application (React.js) coupled with Node.js/Express API gateway and MongoDB document storage for fast horizontal read scaling during peak registration surges.',
    engineeringChallenges: [
      'Handling sudden registration spikes during fest launches without database locking or race conditions.',
      'Designing flexible schema models for diverse event types and ticket structures.'
    ],
    futureImprovements: [
      'QR Code badge scanning integration for instant check-in verification.',
      'Automated email & WhatsApp notification triggers for event reminders.'
    ],
    githubUrl: 'https://github.com/ssarveshr/DBMS-project-',
  },
  {
    id: 'tenant-bridge',
    title: 'Tenant Bridge',
    subtitle: 'An End-to-End Rental Management System for Tenants and Landlords',
    category: 'Backend & Blockchain',
    date: 'April 2026',
    tools: ['React Native', 'Node.js', 'Express.js', 'Supabase', 'Blockchain', 'Solidity', 'Ethers.js', 'Razorpay'],
    featured: true,
    description: 'A decentralized and secure digital rental management system integrating smart contracts, role-based workflows, and automated payment gateways.',
    problemStatement: 'Traditional rental management suffers from lack of transparency in lease agreements, delayed rent collection, manual verification overhead, and vulnerability to contract tampering.',
    keyFeatures: [
      'Architected a backend platform integrating Supabase, Ethereum blockchain, and Razorpay for digital rental management.',
      'Established JWT-based authentication and role-based authorization for tenants and property owners.',
      'Engineered RESTful APIs with Node.js and Express.js for property management, tenant onboarding, and agreement workflows.',
      'Integrated Razorpay payment gateway with secure transaction verification for rent collection.',
      'Developed Ethereum smart contracts using Solidity and integrated them with Ethers.js to enable transparent, immutable rental agreements.'
    ],
    architecture: 'Modular 3-Tier Architecture: Frontend client built in React Native communicating with a Node.js/Express REST microservice layer. Database state managed in Supabase while lease contract hashes & immutable agreements are deployed directly on Ethereum via Solidity smart contracts.',
    engineeringChallenges: [
      'Synchronizing off-chain database transactions (Supabase/Razorpay) with on-chain smart contract events efficiently.',
      'Enforcing strict role-based access control (RBAC) across public blockchain calls and backend REST APIs.'
    ],
    futureImprovements: [
      'Implement Layer-2 scaling solutions (Polygon/Arbitrum) to reduce gas fees for smart contract creation.',
      'Add automated security deposit lock & refund automation powered by Escrow smart contracts.'
    ],
    githubUrl: 'https://github.com/ssarveshr/Tenant-Bridge',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'C' },
      { name: 'C++' }
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'HTML5' },
      { name: 'CSS' }
    ]
  },
  {
    category: 'Database Systems',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Oracle SQL' }
    ]
  },
  {
    category: 'Data Science & Machine Learning',
    skills: [
      { name: 'Python (NumPy, Pandas)' },
      { name: 'Matplotlib' },
      { name: 'Scikit-learn' },
      { name: 'NLP' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' }
    ]
  },
  {
    category: 'Specialized Areas',
    skills: [
      { name: 'Backend Web Development' },
      { name: 'API Design' },
      { name: 'Python Scripting' }
    ]
  },
  {
    category: 'Mathematical & Statistical Tools',
    skills: [
      { name: 'MATLAB' },
      { name: 'Excel' },
      { name: 'SciPy' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'sofzenix',
    role: 'Backend Developer Trainee',
    company: 'SOFZENIX IT SOLUTIONS LLP',
    location: 'Bangalore, India',
    period: '04 Mar 2026 – 04 Jun 2026',
    highlights: [
      'Built backend services for two production-ready web applications using Node.js, Express.js, and MongoDB.',
      'Developed RESTful APIs supporting authentication, user management, and core business workflows.',
      'Designed scalable MongoDB schemas and backend architecture for maintainability and efficient data management.',
      'Implemented JWT-based authentication, request validation, and centralized error handling to improve security and reliability.',
      'Collaborated in an Agile team with senior developers, using Git for version control, code reviews, feature development, and debugging.'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Git', 'Agile']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'RNS Institute Of Technology',
    degree: 'Bachelor of Engineering in Computer Science',
    period: 'Sep 2023 - Present',
    location: 'Bangalore, India',
    score: 'GPA: 8.5/10'
  },
  {
    institution: 'CMR National Public School',
    degree: 'Pre-University Education',
    period: 'March 2023',
    location: 'Bangalore, India',
    score: 'Grade: 89.8%'
  },
  {
    institution: 'Bishop Cotton Boys School',
    degree: 'Secondary Education',
    period: 'March 2021',
    location: 'Bangalore, India',
    score: 'Grade: 88%'
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: 'Technical Head',
    organization: 'GDG on Campus – RNS Institute of Technology',
    period: 'August 2024 - Present',
    highlights: [
      'Led technical planning and execution of 5+ workshops and technical talks, collaborating with speakers, faculty, and student teams.',
      'Managed end-to-end organization and live-streaming of technical sessions attended by 150+ students, ensuring smooth delivery and audience engagement.',
      'Conducted hands-on sessions on Data Structures and Algorithms for 60+ students, strengthening core problem-solving and coding fundamentals.'
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Google Cloud Career Launchpad – Cloud Engineer Track',
    issuer: 'Google Cloud',
    date: 'May 2026'
  },
  {
    title: 'Design and Analysis of Algorithms',
    issuer: 'NPTEL',
    date: 'March 2025'
  },
  {
    title: 'Demystifying Networking',
    issuer: 'NPTEL',
    date: 'September 2025'
  }
];
