
import { Translations } from './types';

export const translations: Record<'cs' | 'en' | 'de' | 'sk', Translations> = {
  cs: {
    nav: { services: 'Služby', pricing: 'Ceník', about: 'O nás', contact: 'Kontakt' },
    hero: {
      title: 'Technologie v harmonii s designem',
      subtitle: 'Komplexní servis veškeré elektroniky, precizní digitální design a IT podpora pro firmy i jednotlivce.',
      cta: 'Nezávazná poptávka',
    },
    services: {
      title: 'Moje Specializace',
      repair: { title: 'Servis veškeré elektroniky', desc: 'Opravuji vše od mobilů a tabletů přes herní konzole až po průmyslové moduly. Žádná závada není překážkou.' },
      design: { title: 'Digitální Design & Photoshop', desc: 'Čistě digitální tvorba: loga, retuše fotografií, vizuální styl a grafika pro web. Design bez kompromisů.' },
      itHelp: { title: 'IT Podpora & Řešení', desc: 'Pomoc se softwarem, sítěmi i hardwarem. Odvirování, optimalizace a zabezpečení vašich dat.' },
    },
    pricing: {
      title: 'Transparentní ceny',
      subtitle: 'Orientační ceny mých nejčastějších digitálních a technických služeb.',
      items: [
        { name: 'Diagnostika', price: 'Zdarma', features: ['Zjištění závady', 'Cenový odhad', 'Do 24 hodin'] },
        { name: 'Digitální design', price: 'od 500 Kč', features: ['Logo / Branding', 'Retuš 5 foto', 'Social Media set'] },
        { name: 'Servis / Práce', price: 'od 400 Kč', features: ['Práce technika', 'Mikropájení', 'Záruka na díly'] },
      ],
    },
    about: {
      title: 'Kdo stojí za MyDesign?',
      content: 'Jsem technologický nadšenec, pro kterého je elektronika vášní. V MyDesign s.r.o. spojuji preciznost technického servisu s neomezenou kreativitou v Photoshopu. Zaměřuji se na digitální design a opravy čehokoliv, co má tištěný spoj. Neřeším výrobu, ale vracím věcem život a dávám jim vizuální řád.',
    },
    contact: {
      title: 'Napište mi',
      email: 'E-mail',
      phone: 'Telefon',
      formName: 'Vaše jméno',
      formEmail: 'Váš e-mail',
      formMessage: 'Popište, jak vám mohu pomoci',
      formSubmit: 'Odeslat poptávku',
      success: 'Děkuji! Brzy se vám ozvu s návrhem řešení.',
    },
    footer: { rights: 'Všechna práva vyhrazena.' },
  },
  en: {
    nav: { services: 'Services', pricing: 'Pricing', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Technology in Harmony with Design',
      subtitle: 'Comprehensive repair of all electronics, precise digital design, and IT support for businesses and individuals.',
      cta: 'Free Quote',
    },
    services: {
      title: 'My Expertise',
      repair: { title: 'All Electronics Service', desc: 'I repair everything from mobile phones and tablets to game consoles and industrial modules.' },
      design: { title: 'Digital Design & Photoshop', desc: 'Purely digital creation: logos, photo retouching, visual styles, and web graphics. Design without compromise.' },
      itHelp: { title: 'IT Support & Solutions', desc: 'Software, network, and hardware assistance. Virus removal, optimization, and data security.' },
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Indicative prices for my digital and technical services.',
      items: [
        { name: 'Diagnostics', price: 'Free', features: ['Fault detection', 'Price estimation', 'Within 24 hours'] },
        { name: 'Digital Design', price: 'from €20', features: ['Logo / Branding', '5 photo retouches', 'Social Media set'] },
        { name: 'Service / Labor', price: 'from €15', features: ['Technician labor', 'Micro-soldering', 'Parts warranty'] },
      ],
    },
    about: {
      title: 'Who is MyDesign?',
      content: 'I am a technology enthusiast for whom electronics is a passion. At MyDesign s.r.o., I combine the precision of technical service with the endless creativity of Photoshop.',
    },
    contact: {
      title: 'Write to Me',
      email: 'Email',
      phone: 'Phone',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Describe how I can help you',
      formSubmit: 'Send Inquiry',
      success: 'Thank you! I will get back to you soon.',
    },
    footer: { rights: 'All rights reserved.' },
  },
  de: {
    nav: { services: 'Leistungen', pricing: 'Preise', about: 'Über uns', contact: 'Kontakt' },
    hero: {
      title: 'Technik trifft kreatives Design',
      subtitle: 'Komplettservice für alle Elektronikgeräte, präzises Digitaldesign und IT-Support.',
      cta: 'Anfrage senden',
    },
    services: {
      title: 'Meine Expertise',
      repair: { title: 'Elektronik-Reparaturservice', desc: 'Ich repariere alles von Smartphones und Tablets bis hin zu Industriemodulen.' },
      design: { title: 'Digitaldesign & Photoshop', desc: 'Rein digitale Kreation: Logos, Fotoretusche, visuelle Stile und Webgrafiken.' },
      itHelp: { title: 'IT-Support & Lösungen', desc: 'Software-, Netzwerk- und Hardware-Unterstützung. Virenentfernung und Optimierung.' },
    },
    pricing: {
      title: 'Faire Preise',
      subtitle: 'Unverbindliche Preisliste für gängige Leistungen.',
      items: [
        { name: 'Diagnose', price: 'Kostenlos', features: ['Fehlererkennung', 'Kostenvoranschlag', 'Innerhalb 24h'] },
        { name: 'Digitaldesign', price: 'ab €20', features: ['Logo / Branding', '5 Fotoretuschen', 'Social Media Set'] },
        { name: 'Service / Arbeit', price: 'ab €15', features: ['Technikerarbeit', 'Mikrolöten', 'Teilegarantie'] },
      ],
    },
    about: {
      title: 'Wer ist MyDesign?',
      content: 'Ich bin ein Technik-Enthusiast, der technische Präzision mit kreativer Photoshop-Gestaltung verbindet.',
    },
    contact: {
      title: 'Kontaktieren Sie mich',
      email: 'E-Mail',
      phone: 'Telefon',
      formName: 'Name',
      formEmail: 'E-Mail',
      formMessage: 'Wie kann ich Ihnen helfen?',
      formSubmit: 'Anfrage senden',
      success: 'Danke! Ich melde mich bald bei Ihnen.',
    },
    footer: { rights: 'Alle Rechte vorbehalten.' },
  },
  sk: {
    nav: { services: 'Služby', pricing: 'Cenník', about: 'O nás', contact: 'Kontakt' },
    hero: {
      title: 'Technológie v harmónii s dizajnom',
      subtitle: 'Komplexný servis všetkej elektroniky, precízny digitálny design a IT podpora.',
      cta: 'Nezáväzný dopyt',
    },
    services: {
      title: 'Moja Špecializácia',
      repair: { title: 'Servis všetkej elektroniky', desc: 'Opravujem všetko od mobilov a tabletov cez herné konzoly až po priemyselné moduly.' },
      design: { title: 'Digitálny Design & Photoshop', desc: 'Čisto digitálna tvorba: logá, retuše fotografií, vizuálny štýl a grafika pre web.' },
      itHelp: { title: 'IT Podpora & Riešenia', desc: 'Pomoc so softvérom, sieťami aj hardvérom. Odvirovanie a optimalizácia.' },
    },
    pricing: {
      title: 'Transparentné ceny',
      subtitle: 'Orientačné ceny mojich najčastejších služieb.',
      items: [
        { name: 'Diagnostika', price: 'Zadarmo', features: ['Zistenie závady', 'Cenový odhad', 'Do 24 hodín'] },
        { name: 'Digitálny design', price: 'od €20', features: ['Logo / Branding', 'Retuš 5 foto', 'Social Media set'] },
        { name: 'Servis / Práca', price: 'od €15', features: ['Práca technika', 'Spájkovanie', 'Záruka na diely'] },
      ],
    },
    about: {
      title: 'Kto stojí za MyDesign?',
      content: 'Som technologický nadšenec, ktorý spája precíznosť technického servisu s nekonečnou kreativitou v Photoshopu.',
    },
    contact: {
      title: 'Napíšte mi',
      email: 'E-mail',
      phone: 'Telefón',
      formName: 'Vaše meno',
      formEmail: 'Váš e-mail',
      formMessage: 'Popíšte, ako vám môžem pomôcť',
      formSubmit: 'Odoslať dopyt',
      success: 'Ďakujem! Čoskoro sa vám ozvem.',
    },
    footer: { rights: 'Všetky práva vyhradené.' },
  },
};
