import { Camera, Code, Globe, MessageCircle } from 'lucide-react';

const icons = [Code, MessageCircle, Globe, Camera];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/40 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-3xl font-black uppercase text-white">Omnikon</div>
          <div className="code-font mt-1 text-xs uppercase tracking-[0.22em] text-text-muted">National Hackathon 2026</div>
        </div>

        <div className="flex gap-3">
          {icons.map((Icon, index) => (
            <a
              key={index}
              href="#home"
              aria-label={`Omnikon link ${index + 1}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-text-secondary transition-colors hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="code-font text-sm text-text-muted">© 2026 Omnikon Hackathon. All rights reserved.</div>
      </div>
    </footer>
  );
}
