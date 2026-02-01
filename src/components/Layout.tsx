import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen bg-ink text-offwhite">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" />
      <Header />
      <main className="relative w-full pb-20 pt-10">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
