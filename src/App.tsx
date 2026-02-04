import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Partners = lazy(() => import('./pages/Partners'));
const Book = lazy(() => import('./pages/Book'));

function PageSkeleton() {
  return (
    <div className="flex flex-col gap-6 pt-4" aria-label="Loading page">
      <div className="skeleton h-8 w-48 rounded-lg" />
      <div className="skeleton h-4 w-72 rounded-md" />
      <div className="grid gap-4 mt-4 md:grid-cols-3">
        <div className="skeleton h-40 rounded-2xl" />
        <div className="skeleton h-40 rounded-2xl" />
        <div className="skeleton h-40 rounded-2xl" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <HowItWorks />
            </Suspense>
          }
        />
        <Route
          path="/partners"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <Partners />
            </Suspense>
          }
        />
        <Route
          path="/book"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <Book />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
