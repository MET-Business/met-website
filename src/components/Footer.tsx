export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-offwhite/70">
        <p className="text-offwhite">MET  Ministry of Enjoyment Taxi, Nairobi.</p>
        <p>Operating: ThuSun, 5 PM5 AM</p>
        <p>Zones: Westlands, Kilimani, Ngong Road</p>
        <div className="text-xs text-offwhite/50">
          <p>Driver vetting and safety escalation protocols are enforced during operating hours.</p>
          <p>Service availability depends on operating zones and hours.</p>
        </div>
      </div>
    </footer>
  );
}
