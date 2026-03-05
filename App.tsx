
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import { 
  Cpu, 
  Palette, 
  Monitor, 
  Mail, 
  Phone, 
  Send, 
  Menu, 
  X,
  ChevronRight,
  Globe,
  CheckCircle2,
  Wrench,
  Laptop,
  Image as ImageIcon,
  Zap,
  Star,
  HardDrive,
  Camera
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('cs');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [langDropdown, setLangDropdown] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    setLangDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(t.contact.success);
    setTimeout(() => setFormStatus(null), 5000);
  };

  const languageFlags: Record<Language, string> = {
    cs: 'CZ',
    en: 'EN',
    de: 'DE',
    sk: 'SK'
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              MyDesign <span className="text-blue-600">s.r.o.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">{t.nav.services}</a>
            <a href="#pricing" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">{t.nav.pricing}</a>
            <a href="#about" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">{t.nav.about}</a>
            <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">{t.nav.contact}</a>
            
            <div className="relative">
              <button 
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors font-bold text-sm border border-slate-200"
              >
                <Globe className="w-4 h-4 text-blue-600" />
                <span>{languageFlags[lang]}</span>
              </button>
              
              {langDropdown && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {(Object.keys(languageFlags) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => changeLang(l)}
                      className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-blue-50 transition-colors ${lang === l ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'}`}
                    >
                      {l === 'cs' ? 'Čeština' : l === 'en' ? 'English' : l === 'de' ? 'Deutsch' : 'Slovenčina'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button onClick={() => setLangDropdown(!langDropdown)} className="p-2.5 bg-slate-100 rounded-xl border border-slate-200">
              <Globe className="w-5 h-5 text-blue-600" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[90] animate-in slide-in-from-right duration-300">
            <div className="flex flex-col p-8 space-y-6">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">{t.nav.services}</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">{t.nav.pricing}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">{t.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-4">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-8 animate-pulse">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-black uppercase tracking-widest">Opravy všeho s procesorem</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                {t.hero.title.split(' ').map((word, i) => (
                  i > 1 ? <span key={i} className="gradient-text inline-block"> {word}</span> : <span key={i} className="inline-block"> {word}</span>
                ))}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="group px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:translate-y-[-4px] transition-all flex items-center justify-center space-x-3 text-lg">
                  <span>{t.hero.cta}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-lg shadow-sm">
                  {t.nav.services}
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative">
              <div className="relative z-10 p-4 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 group">
                <img 
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" 
                  alt="General Electronics Circuit" 
                  className="rounded-[2rem] w-full aspect-square object-cover shadow-inner"
                />
                <div className="absolute -bottom-8 -left-8 p-6 bg-blue-600 rounded-3xl shadow-2xl border border-blue-500 animate-bounce">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">{t.services.title}</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { icon: <Cpu className="w-10 h-10 text-blue-600" />, ...t.services.repair, bg: 'bg-blue-50', border: 'hover:border-blue-200' },
              { icon: <Palette className="w-10 h-10 text-purple-600" />, ...t.services.design, bg: 'bg-purple-50', border: 'hover:border-purple-200' },
              { icon: <Monitor className="w-10 h-10 text-emerald-600" />, ...t.services.itHelp, bg: 'bg-emerald-50', border: 'hover:border-emerald-200' }
            ].map((s, idx) => (
              <div key={idx} className={`p-10 rounded-[2.5rem] border-2 border-transparent hover-card ${s.bg} ${s.border} hover:bg-white hover:shadow-2xl`}>
                <div className="mb-8 inline-block p-5 bg-white rounded-2xl shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16">
             <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Kreativita & Preciznost</h2>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Digitální tvorba a technický servis v akci</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 group">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Design workflow" />
              <div className="absolute inset-0 image-overlay flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black uppercase text-xs tracking-widest">Digitální Logotypy</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 group">
              <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Electronics repair" />
              <div className="absolute inset-0 image-overlay flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black uppercase text-xs tracking-widest">Pájení čipů</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 group">
              <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Photoshop retouching" />
              <div className="absolute inset-0 image-overlay flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black uppercase text-xs tracking-widest">Retuše & Postprodukce</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 group">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Modern Tech" />
              <div className="absolute inset-0 image-overlay flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black uppercase text-xs tracking-widest">IT Diagnostika</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-white relative">
         <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">{t.pricing.title}</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{t.pricing.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing.items.map((plan, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] bg-white border-2 border-slate-100 shadow-xl flex flex-col hover-card ${i === 1 ? 'border-blue-600 relative z-10 scale-105' : ''}`}>
                {i === 1 && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Doporučeno</span>}
                <div className="mb-8">
                  <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest mb-4">{plan.name}</h3>
                  <div className="text-4xl font-black text-slate-900 tracking-tight">{plan.price}</div>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center space-x-3 text-slate-600 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={`w-full py-4 rounded-xl font-black text-center transition-all ${i === 1 ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {lang === 'cs' ? 'Mám zájem' : 'Select Plan'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Precision Engineering" 
                  className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white/5 object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center border-8 border-slate-900 shadow-2xl rotate-12">
                  <span className="text-4xl font-black text-white">100%</span>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-100">Kvalita</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-none tracking-tighter">{t.about.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10">
                {t.about.content}
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Hardware', icon: <Cpu className="w-6 h-6" /> },
                  { label: 'Photoshop', icon: <Palette className="w-6 h-6" /> },
                  { label: 'Service', icon: <Wrench className="w-6 h-6" /> },
                  { label: 'Digital', icon: <Monitor className="w-6 h-6" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="font-black uppercase tracking-widest text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-slate-900 overflow-hidden shadow-2xl flex flex-col lg:flex-row border-8 border-slate-800">
            <div className="lg:w-2/5 p-12 lg:p-20 bg-blue-600 text-white">
              <h2 className="text-4xl font-black mb-10 tracking-tight">{t.contact.title}</h2>
              
              <div className="space-y-10">
                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-5">
                    <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase font-black tracking-widest mb-1">{t.contact.email}</p>
                      <p className="text-lg font-black break-all">mydesign.mydesign@post.cz</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-center space-x-5">
                    <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase font-black tracking-widest mb-1">{t.contact.phone}</p>
                      <p className="text-lg font-black">+420 722 415 315</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/20">
                <p className="font-bold text-blue-100 mb-2 italic">"Vaše technika v nejlepších rukou."</p>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-20 bg-slate-900">
              {formStatus ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/50 rotate-6">
                    <Send className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{t.contact.success}</h3>
                  <button onClick={() => setFormStatus(null)} className="text-blue-400 font-bold hover:text-white transition-colors underline decoration-2 underline-offset-8">Zpět k formuláři</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-500 uppercase tracking-widest">{t.contact.formName}</label>
                      <input required type="text" className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors font-bold" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-500 uppercase tracking-widest">{t.contact.formEmail}</label>
                      <input required type="email" className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors font-bold" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-500 uppercase tracking-widest">{t.contact.formMessage}</label>
                    <textarea required rows={5} className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-colors font-bold resize-none"></textarea>
                  </div>
                  <button type="submit" className="group w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 hover:translate-y-[-4px] transition-all flex items-center justify-center space-x-3 text-lg shadow-xl shadow-blue-900/40">
                    <span>{t.contact.formSubmit}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-900 p-3 rounded-2xl">
                 <Zap className="text-white w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-black text-slate-900">MyDesign <span className="text-blue-600">s.r.o.</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
              <a href="#services" className="text-sm font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{t.nav.services}</a>
              <a href="#pricing" className="text-sm font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{t.nav.pricing}</a>
              <a href="#about" className="text-sm font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{t.nav.about}</a>
              <a href="#contact" className="text-sm font-black text-slate-500 hover:text-blue-600 uppercase tracking-widest transition-colors">{t.nav.contact}</a>
            </div>
            
            <div className="text-slate-400 font-bold text-sm">
              © {new Date().getFullYear()} MyDesign s.r.o. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
