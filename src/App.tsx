import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/HomeElite'));
const Experience = lazy(() => import('./pages/Experience'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Partners = lazy(() => import('./pages/Partners'));
const Book = lazy(() => import('./pages/Book'));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
