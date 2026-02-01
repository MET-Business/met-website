import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const placeholder = 'h-20 w-32 rounded-xl border border-white/10 bg-charcoal/70';

export default function Partners() {
  return (
    <div className="flex flex-col gap-12">
      <Seo
        title="Partners"
        description="MET integrates into Nairobi's nightlife ecosystem through disciplined partnerships."
      />

      <section className="grid gap-6">
        <p className="section-subtitle">Partners</p>
        <h1 className="section-title">Partners</h1>
        <p className="max-w-3xl text-base text-offwhite/75">
          MET integrates into Nairobis nightlife ecosystem through disciplined partnerships clubs, event organizers, and
          vehicle partners.
        </p>
      </section>

      <section className="grid gap-8">
        <div>
          <h2 className="text-lg font-semibold">Clubs & Events</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className={placeholder} />
            <div className={placeholder} />
            <div className={placeholder} />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Vehicle & Garage Partners</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className={placeholder} />
            <div className={placeholder} />
            <div className={placeholder} />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Private Hosts & Promoters</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className={placeholder} />
            <div className={placeholder} />
            <div className={placeholder} />
          </div>
        </div>
      </section>

      <Link to="/book?intent=partner" className="button-primary">
        Partner with MET
      </Link>
    </div>
  );
}