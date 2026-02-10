import { CoverPage } from './pages/CoverPage';
import { TableOfContentsPage } from './pages/TableOfContentsPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsServicesPage } from './pages/SkillsServicesPage';
import { ContactPage } from './pages/ContactPage';

export interface PortfolioPage {
  id: string;
  title: string;
  component: React.ReactNode;
}

export const portfolioPages: PortfolioPage[] = [
  {
    id: 'cover',
    title: 'Cover',
    component: <CoverPage />,
  },
  {
    id: 'toc',
    title: 'Table of Contents',
    component: <TableOfContentsPage />,
  },
  {
    id: 'about',
    title: 'About Me',
    component: <AboutPage />,
  },
  {
    id: 'skills',
    title: 'Skills',
    component: <SkillsServicesPage />,
  },
  {
    id: 'contact',
    title: 'Contact',
    component: <ContactPage />,
  },
];
