// src/data/projectsData.ts
// Centralized data for the portfolio project sections.

export type ProjectSectionKey = 'web' | 'design' | 'erd' | 'uiux';

export interface WebProject {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  demo: string;
  source: string;
  category: 'web';
}

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  externalUrl?: string;
  category: 'design';
}

export interface ErdProject {
  id: string;
  title: string;
  description: string;
  previewImage?: string;
  externalUrl?: string;
  category: 'erd';
}

export interface UiUxProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  externalUrl?: string;
  category: 'uiux';
}

export interface ProjectTab {
  key: ProjectSectionKey;
  label: string;
}

export const projectTabs: ProjectTab[] = [
  { key: 'web', label: 'Web' },
  { key: 'design', label: 'Design' },
  { key: 'erd', label: 'ERD' },
  { key: 'uiux', label: 'UI/UX' }
];

export const webProjects: WebProject[] = [
  {
    id: 'eduNest',
    title: 'EduNest',
    imageSrc: '/my-protfolio-main/public/EdueNest.webp',
    description: 'EduNest — Learn. Mentor. Grow. EduNest is a modern mentoring and learning platform designed to connect students with professional mentors through a secure, scalable, and interactive learning experience.',
    demo: 'https://drive.google.com/drive/folders/1j498h_RKjgPbMeZVflGgyk_g0_E-B5Y4',
    source: 'https://github.com/elsayed-elsadek/edunest',
    category: 'web'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    imageSrc: '/my-protfolio-main/public/ecommerce.png',
    description: 'An e-commerce app showcasing modern design and functionality.',
    demo: 'https://cosmic-buttercream-47f4a2.netlify.app/',
    source: 'https://github.com/elsayed-elsadek/ecommerce',
    category: 'web'
  },
  {
    id: 'gym',
    title: 'Power House Gym',
    imageSrc: '/my-protfolio-main/public/gym.png',
    description: 'A responsive gym website built with React and TypeScript',
    demo: 'https://powerhouse-gym-menoufia.netlify.app',
    source: 'https://github.com/elsayed-elsadek/Gym-Website',
    category: 'web'
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboard',
    imageSrc: '/my-protfolio-main/public/dashboard.png',
    description: 'Built a responsive admin dashboard for user management systems',
    demo: 'https://wasla-dash-board.netlify.app/',
    source: 'https://github.com/elsayed-elsadek/DashBoard',
    category: 'web'
  },
  {
    id: 'landing',
    title: 'Landing Page',
    imageSrc: '/my-protfolio-main/public/landing.png',
    description: 'Landing Page for Photographer',
    demo: 'https://ragnar-photography.netlify.app/',
    source: 'https://github.com/elsayed-elsadek/photographer',
    category: 'web'
  },
  {
    id: 'zcompany',
    title: 'zcompany Website',
    imageSrc: '/my-protfolio-main/public/zcompany.png',
    description: 'Ziad Agency Website A modern, responsive website built with React and Tailwind CSS',
    demo: 'https://zcompany.netlify.app',
    source: 'https://github.com/elsayed-elsadek/Zcompany-',
    category: 'web'
  },
  {
    id: 'youtube',
    title: 'Youtube Clone',
    imageSrc: '/my-protfolio-main/public/youtube.png',
    description: 'A responsive YouTube clone built using React and MUI (Material-UI',
    demo: 'https://shiny-creponne-54b6d7.netlify.app/',
    source: 'https://github.com/elsayed-elsadek/Youtube-clone',
    category: 'web'
  },
  {
    id: 'shoppingcart',
    title: 'Shopping Cart',
    imageSrc: '/my-protfolio-main/public/shoppingcart.png',
    description: 'Simple shopping cart system that allows users to register, log in, add products to a cart, and view the cart\'s content',
    demo: 'https://elsayed-elsadek.github.io/Shopping-Cart/#home',
    source: 'https://github.com/elsayed-elsadek/Shopping-Cart',
    category: 'web'
  }
];

export const designProjects: DesignProject[] = [
  {
    id: 'design-1',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design3.webp',
    ],
    category: 'design'
  },
  {
    id: 'design-2',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design1.webp',
    ],
    category: 'design'
  },
  {
    id: 'design-3',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design5.webp',
    ],
    category: 'design'
  },
  {
    id: 'design-4',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design6.webp',
    ],
    category: 'design'
  },
  {
    id: 'design-5',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design2.webp',
    ],
    category: 'design'
  },
  {
    id: 'design-6',
    title: '',
    description: '',
    images: [
      '/otherWorks/design/design4.webp',
    ],
    externalUrl: 'https://canva.link/qfb9g0cvlxfaop1',
    category: 'design'
  },
];

export const erdProjects: ErdProject[] = [
  {
    id: 'edunest-erd',
    title: 'EDUNEST ERD',
    description: 'A structured data model showing relationships between mentors, learners, sessions, and progress.',
    previewImage: '/otherWorks/erd/erd1.webp',
    externalUrl: 'https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=EDUNEST_ERD_Diagrame.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1oHCw-wmfvxBXrtpjAw6H6V0WG4qa-pD7%26export%3Ddownload',
    category: 'erd'
  },

];

export const uiUxProjects: UiUxProject[] = [
  {
    id: 'edunest-ui-ux',
    title: 'Edunest UX Journey',
    description: 'A curated experience flow for onboarding, mentorship selection, and progress tracking.',
    images: ['/otherWorks/ui-ux/ui-ux1.webp'],
    externalUrl: 'https://stitch.withgoogle.com/projects/12096177411082131196',
    category: 'uiux'
  }
];

export const projectSections = {
  web: webProjects,
  design: designProjects,
  erd: erdProjects,
  uiux: uiUxProjects
};

export const projects = webProjects;
