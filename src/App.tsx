import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import HowItWorks from './pages/HowItWorks';
import Partners from './pages/Partners';
import Book from './pages/Book';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/book" element={<Book />} />
      </Route>
    </Routes>
  );
}