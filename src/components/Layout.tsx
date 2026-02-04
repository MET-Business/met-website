import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#000' }}>
      <div className="ambient-bg" aria-hidden="true" />
      <Header />
      <main className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-24 pt-12">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
