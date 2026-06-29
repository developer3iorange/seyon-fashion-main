import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import AboutPage from '../pages/about/page';
import CapabilitiesPage from '../pages/capabilities/page';
import ServicesPage from '../pages/services/page';
import QualityPage from '../pages/quality/page';
import SustainabilityPage from '../pages/sustainability/page';
import CatalogPage from '../pages/catalog/page';
import ContactPage from '../pages/contact/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/capabilities', element: <CapabilitiesPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/quality', element: <QualityPage /> },
  { path: '/sustainability', element: <SustainabilityPage /> },
  { path: '/catalog', element: <CatalogPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
