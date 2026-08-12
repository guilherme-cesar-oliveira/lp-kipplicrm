import { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../data/content';
import logo from '../assets/logo.png';
import './Header.css';

const NAV_LINKS = [
  { label: 'Produto', href: '#produto' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand">
          <img src={logo} alt="Kippli CRM" className="brand__logo" />
        </a>

        <nav className="site-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={WHATSAPP_URL} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
