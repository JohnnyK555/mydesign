
export type Language = 'cs' | 'en' | 'de' | 'sk';

export interface Translations {
  nav: {
    services: string;
    pricing: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    repair: {
      title: string;
      desc: string;
    };
    design: {
      title: string;
      desc: string;
    };
    itHelp: {
      title: string;
      desc: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      price: string;
      features: string[];
    }[];
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    success: string;
  };
  footer: {
    rights: string;
  };
}
