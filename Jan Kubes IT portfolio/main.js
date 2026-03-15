const translations = {
    cs: {
        nav: {
            projects: 'Projekty',
            certificates: 'Certifikáty',
            about: 'O mně',
            contact: 'Kontakt'
        },
        hero: {
            badge: 'IT Portfolio pro přijetí na SŠ',
            title: 'Jan Kubeš Cesta k IT & Projektům',
            subtitle: 'Prezentace mých technických dovedností, dokončených projektů a certifikátů pro přijímací řízení na střední školu se zaměřením na IT.',
            cta: 'Zobrazit projekty'
        },
        projects: {
            title: 'Moje Projekty',
            subtitle: 'Výběr projektů, na kterých jsem pracoval, od webových aplikací po opravy hardwaru.',
            prijimacky: {
                title: 'Přijímačky v kapse',
                desc: 'Webová aplikace navržená pro trénink na přijímací zkoušky na střední školy. Postaveno na moderních webových technologiích.',
                link: 'Navštívit aplikaci'
            },
            hardware: {
                title: 'Hardware & Servis',
                desc: 'Zkušenosti s diagnostikou, opravami a údržbou počítačového hardwaru a elektroniky.'
            },
            repair: {
                title: 'Hardware & Servis',
                desc: 'Dlouhodobě se věnuji opravám elektroniky, mikropájení a diagnostice závad u zařízení s procesory.'
            },
            programming: {
                title: 'Programování & Vývoj',
                desc: 'Základy programování v Pythonu a JavaScriptu, tvorba jednoduchých skriptů a automatizace.'
            }
        },
        certificates: {
            title: 'Diplomy & Certifikáty',
            subtitle: 'Důkazy mých dovedností a úspěchů v oblasti IT a technologií.',
            comingSoon: 'Certifikáty budou brzy nahrány...'
        },
        about: {
            title: 'Kdo je Jan Kubeš?',
            content: 'Jmenuji se Jan Kubeš a IT je mou vášní už od dětství. Od opravování hardwaru až po vývoj webových aplikací se neustále snažím posouvat své hranice. Tento web slouží jako mé portfolio pro přijímací řízení na střední školu se zaměřením na IT.',
            software: 'Software'
        },
        contact: {
            title: 'Máte dotaz?',
            subtitle: 'Neváhejte mě kontaktovat, rád odpovím na jakékoli dotazy ohledně mých projektů.',
            name: 'Vaše Jméno',
            email: 'Váš E-mail',
            message: 'Vaše Zpráva',
            send: 'Odeslat zprávu',
            sending: 'Odesílám...',
            success: 'Zpráva byla úspěšně odeslána!',
            error: 'Chyba při odesílání zprávy. Zkuste to prosím znovu.'
        },
        footer: {
            desc: 'Jan Kubeš - Student a IT nadšenec. Moje cesta do světa technologií.',
            rights: 'Všechna práva vyhrazena.'
        }
    },
    en: {
        nav: {
            projects: 'Projects',
            certificates: 'Certificates',
            about: 'About Me',
            contact: 'Contact'
        },
        hero: {
            badge: 'IT Portfolio for High School Admission',
            title: 'Jan Kubeš IT Journey & Projects',
            subtitle: 'Showcasing my technical skills, completed projects, and certificates for admission to an IT high school.',
            cta: 'View My Projects'
        },
        projects: {
            title: 'My Projects',
            subtitle: 'A selection of projects I\'ve worked on, from web apps to hardware repairs.',
            prijimacky: {
                title: 'Přijímačky v kapse',
                desc: 'A web application designed for training for high school entrance exams. Built with modern web technologies.',
                link: 'Visit App'
            },
            hardware: {
                title: 'Hardware & Service',
                desc: 'Experience with diagnostics, repair, and maintenance of computer hardware and electronics.'
            },
            repair: {
                title: 'Hardware & Service',
                desc: 'Experience with diagnostics, repair, and maintenance of computer hardware and electronics.'
            },
            programming: {
                title: 'Programming & Development',
                desc: 'Basics of programming in Python and JavaScript, creating simple scripts and automation.'
            }
        },
        certificates: {
            title: 'Diplomas & Certificates',
            subtitle: 'Evidence of my skills and achievements in IT and technology.',
            comingSoon: 'Certificates will be uploaded soon...'
        },
        about: {
            title: 'Who is Jan Kubeš?',
            content: 'My name is Jan Kubeš and IT has been my passion since childhood. From hardware repair to web development, I am constantly pushing my limits. This website serves as my portfolio for high school admission with an IT focus.',
            software: 'Software'
        },
        contact: {
            title: 'Have a Question?',
            subtitle: 'Feel free to contact me, I\'ll be happy to answer any questions about my projects.',
            name: 'Your Name',
            email: 'Your Email',
            message: 'Your Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Error sending message. Please try again.'
        },
        footer: {
            desc: 'Jan Kubeš - Student and IT enthusiast. My journey into the world of technology.',
            rights: 'All rights reserved.'
        }
    }
};

// Mapování kódů jazyků pro zobrazení v přepínači
const langMap = {
    cs: 'CZ', en: 'EN'
};

let currentLang = 'cs';

// Global functions for HTML onclick handlers
window.setLanguage = function(lang) {
    currentLang = lang;
    const label = document.getElementById('currentLangLabel');
    if (label) label.innerText = langMap[lang] || lang.toUpperCase();
    
    const mobileLabel = document.getElementById('langBtnMobile');
    if (mobileLabel) mobileLabel.innerText = langMap[lang] || lang.toUpperCase();

    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.add('hidden');
    updateUI();
};

window.closeMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) {
            menuIcon.setAttribute('data-lucide', 'menu');
            if (window.lucide) window.lucide.createIcons();
        }
    }
};

function updateUI() {
    const t = translations[currentLang] || translations['cs'];
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
        const key = el.getAttribute('data-t');
        const value = key.split('.').reduce((obj, i) => (obj ? obj[i] : null), t);
        if (value) el.innerText = value;
    });

    const badge = document.getElementById('heroBadge');
    if (badge) badge.innerText = t.hero.badge;
    
    // Custom Hero Title Logic
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        if (currentLang === 'cs') {
            heroTitle.innerHTML = `
                <div class="mb-1 lg:mb-2 flex flex-wrap justify-center lg:justify-start items-baseline gap-x-2 lg:gap-x-3">
                    <span class="text-blue-600 text-2xl sm:text-4xl lg:text-6xl font-black">Jan Kubeš</span>
                    <span class="text-slate-900 text-xl sm:text-3xl lg:text-5xl font-black">Cesta k</span>
                </div>
                <div class="leading-tight">
                    <span class="gradient-text text-3xl sm:text-5xl lg:text-7xl font-black">IT & Projektům</span>
                </div>
            `;
        } else {
            heroTitle.innerHTML = `
                <div class="mb-1 lg:mb-2 flex flex-wrap justify-center lg:justify-start items-baseline gap-x-2 lg:gap-x-3">
                    <span class="text-blue-600 text-2xl sm:text-4xl lg:text-6xl font-black">Jan Kubeš</span>
                    <span class="text-slate-900 text-xl sm:text-3xl lg:text-5xl font-black">IT Journey</span>
                </div>
                <div class="leading-tight">
                    <span class="gradient-text text-3xl sm:text-5xl lg:text-7xl font-black">& Projects</span>
                </div>
            `;
        }
    }

    if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();

    const langBtn = document.getElementById('langBtn');
    const langBtnMobile = document.getElementById('langBtnMobile');
    const langDropdown = document.getElementById('langDropdown');

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
    }

    if (langBtnMobile) {
        langBtnMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            const newLang = currentLang === 'cs' ? 'en' : 'cs';
            window.setLanguage(newLang);
        });
    }

    document.addEventListener('click', () => {
        if (langDropdown) langDropdown.classList.add('hidden');
    });

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
                if (window.lucide) window.lucide.createIcons();
            }
        });
    }

    updateUI();
});

// Navbar is now always solid, so we don't need the scroll listener to change its background
window.addEventListener('scroll', () => {
    // Keep it simple
});
