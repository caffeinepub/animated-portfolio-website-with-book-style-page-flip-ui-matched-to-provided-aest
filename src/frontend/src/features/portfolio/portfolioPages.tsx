import { CoverPage } from './pages/CoverPage';
import { TableOfContentsPage } from './pages/TableOfContentsPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsServicesPage } from './pages/SkillsServicesPage';
import { ProjectPage } from './pages/ProjectPage';
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
    title: 'Skills & Services',
    component: <SkillsServicesPage />,
  },
  {
    id: 'project-1',
    title: 'Featured Project',
    component: (
      <ProjectPage
        title="Brand Identity & Packaging"
        description="A comprehensive branding project for a luxury skincare line, featuring minimalist packaging design and cohesive visual identity across all touchpoints."
        role="Lead Designer"
        techStack={['Adobe Illustrator', 'Photoshop', 'InDesign']}
        year="2025"
      />
    ),
  },
  {
    id: 'project-2',
    title: 'Editorial Design',
    component: (
      <ProjectPage
        title="Magazine Layout Design"
        description="Editorial design for a quarterly lifestyle magazine, emphasizing typography, grid systems, and visual hierarchy to create engaging reader experiences."
        role="Art Director"
        techStack={['InDesign', 'Photoshop', 'Typography']}
        year="2024"
      />
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    component: <ContactPage />,
  },
];
