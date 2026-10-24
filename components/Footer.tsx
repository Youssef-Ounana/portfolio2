import { site } from "@/data/site";

const Footer = () => (
  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
    <p>
      © {new Date().getFullYear()} {site.name} · Conçu et développé avec Next.js, Tailwind CSS et Motion
    </p>
  </footer>
);

export default Footer;
