import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Eye,
  DollarSign,
  Check,
  CheckSquare,
  Users,
  Share2,
  BarChart3,
  ArrowRight,
  Lock,
  Zap,
  Menu,
  X,
  Send,
  Sparkles,
  Globe,
  Award,
  ChevronRight,
  TrendingUp,
  FolderKanban,
  Briefcase
} from 'lucide-react';
import './App.css';

// Custom Hook to manage Scroll Reveal animations
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
}

// Team Card Component with image fallback
function TeamCard({ name, role, image }) {
  const [imgError, setImgError] = React.useState(false);
  
  const isExternal = image && (image.startsWith('http://') || image.startsWith('https://'));
  const imgUrl = isExternal ? image : (import.meta.env.BASE_URL + `team/${image}`);

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="team-card">
      <div className="avatar-wrapper">
        {image && !imgError ? (
          <img
            src={imgUrl}
            alt={name}
            className="team-avatar-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="avatar-initials">{initials}</span>
        )}
      </div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <div className="team-role">{role}</div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Mourchid FOLARIN",
    role: "Fondateur & Directeur technique / Cybersecurité & Developpement Backend",
    image: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1781228322/224025435_j7qhdz_szccjx.webp",
    specialty: "Architecture logicielle & et Sécurité",
    quote: "Le code est une forme d'art qui doit d'abord servir l'humain tout en garantissant la sécurité des données.",
    portfolio: "https://mourchidfolarin.vercel.app/"
  },
  {
    id: 2,
    name: "Octave BAHOUN-HOUTOUKPE",
    role: "Cofondateur / Ingenieur IA , Fullstack Web (Orienté Frontend)",
    image: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1781010145/octave_j928uo.webp",
    specialty: "Direction artistique & UX Premium",
    quote: "L'excellence réside dans les détails que l'on ne voit pas, mais que l'on ressent.",
    portfolio: "https://octavebahoun-houtoukpe.vercel.app/"
  },
  {
    id: 3,
    name: "Ezechiel TADAGBE",
    role: "Ingénieur Cloud /Infrastructure & IA",
    image: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1781228322/ezedev_ycavef_ztuq1a.webp",
    specialty: "DevOps & Cloud Architect",
    quote: "Bâtir des socles robustes pour libérer le potentiel de l'innovation.",
    portfolio: "https://ezeckiel.netlify.app/"
  },
  {
    id: 4,
    name: "Jean-Baptiste VIGNONFODE",
    role: "Architecte Cybersécurité",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    specialty: "Pentest & Sécurité des S.I",
    quote: "Dans le monde digital, la confiance est le fruit d'une vigilance invisible.",
    portfolio: "https://jbportfolio-tau.vercel.app/"
  },
  {
    id: 5,
    name: "Wasfade TONOUKOIN",
    role: "Développeur Senior Fullstack",
    image: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1781228322/wafade_iajqor_hmdpsn.webp",
    specialty: "Expert Web & Mobile",
    quote: "Donner vie au digital par le mouvement et l'interaction fluide.",
    portfolio: "https://wasfolio.vercel.app"
  },
  {
    id: 6,
    name: "Cosme MISSIKPODE",
    role: "Architecte Cybersécurité / Réseau",
    image: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1781228322/cosme_csvugm_yf4nvs.webp",
    specialty: "Tests d'intrusion & Pentesting",
    quote: "La sécurité n'est pas une option, c'est la fondation de toute innovation.",
    portfolio: "#"
  }
];

const projectsData = [
  {
    id: 1,
    topLabel: "Août 2025 • INGÉNIERIE DIGITALE",
    title: "Le TWIN",
    description: "Plateforme e-commerce pour une marque de mode urbaine béninoise. Expérience d'achat immersive et gestion de catalogue produits.",
    mainImage: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1773366626/WhatsApp_Image_2026-02-07_at_13.55.04_jb8uve.jpg",
    thumb1: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1773383601/WhatsApp_Image_2026-03-13_at_07.27.56_3_tng9hq.jpg",
    thumb2: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1773383601/WhatsApp_Image_2026-03-13_at_07.27.56_nukyzh.jpg",
    side: "left",
    url: "https://le-twin.vercel.app/"
  },
  {
    id: 2,
    topLabel: "Fév 2025 • SAAS & MÉTIER",
    title: "Academix",
    description: "Système de gestion scolaire : notes, bulletins automatisés et portail parents pour établissements d'enseignement secondaire.",
    mainImage: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955345/academix_fn4oat.png",
    thumb1: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955350/master_kbxpmf.avif",
    thumb2: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955383/winner_rfjzdb.avif",
    side: "right",
    url: "https://team-d-excellence-hackbyifri-2026.vercel.app/"
  },
  {
    id: 3,
    topLabel: "Mars 2026 • RECHERCHE TECH",
    title: "Fieri Research",
    description: "Plateforme collaborative pour la recherche scientifique étudiante. Hub central pour les publications et événements académiques.",
    mainImage: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955620/fieri_pjxyof.webp",
    thumb1: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955702/fieri1_yxrrja.jpg",
    thumb2: "",
    side: "left",
    url: "https://fieri-research.org"
  },
  {
    id: 4,
    topLabel: "Nov 2023 • ÉVÉNEMENTIEL",
    title: "La Nuit du Cœur",
    description: "Vitrine digitale pour un événement artistique à Lokossa. Mise en valeur des talents locaux et billetterie en ligne.",
    mainImage: "https://res.cloudinary.com/dla8wr5qj/image/upload/v1775955767/nuit_de_coeur_jx18zr.avif",
    thumb1: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=200",
    thumb2: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=200",
    side: "right",
    url: "https://nightheart.rf.gd/"
  }
];


export default function App() {
  useScrollReveal();

  // State Declarations
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [betaEmail, setBetaEmail] = useState('');
  const [isBetaSubmitted, setIsBetaSubmitted] = useState(false);
  const [activeMockupTab, setActiveMockupTab] = useState('kanban'); // 'kanban' or 'chat'
  const [mockupTaskCount, setMockupTaskCount] = useState(4);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);

  // Monitor Scroll for Sticky Navbar background shifts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form Submissions
  const handleBetaSubmit = (e) => {
    e.preventDefault();
    if (betaEmail.trim()) {
      setIsBetaSubmitted(true);
    }
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (demoEmail.trim()) {
      setIsDemoSubmitted(true);
    }
  };

  // Mockup Interactive action: add a completed task
  const handleAddMockupTask = () => {
    setMockupTaskCount(prev => prev + 1);
  };

  // Smooth Scroll Helper
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toolMarqueeList = [
    "Notion", "Trello", "Slack", "Google Workspace", "WhatsApp Business", "Figma", "GitHub"
  ];

  return (
    <div className="app">

      {/* 1. NAVBAR */}
      <nav className={`navbar ${isNavbarScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,12 83,31 83,69 50,88 17,69 17,31" stroke="#6C47FF" strokeWidth="8" strokeLinejoin="round" fill="none" />
              <circle cx="50" cy="40" r="8" fill="#6C47FF" />
              <circle cx="40" cy="50" r="8" fill="#6C47FF" />
              <circle cx="60" cy="50" r="8" fill="#6C47FF" />
              <circle cx="50" cy="60" r="8" fill="#F5A623" />
            </svg>
            <span>WINE</span>
          </a>

          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-active' : ''}`}>
            <li><a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Fonctionnalités</a></li>
            <li><a href="#pricing" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Tarifs</a></li>
            <li><a href="#roadmap" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('roadmap'); }}>Roadmap</a></li>
            <li><a href="#team" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>L'Équipe</a></li>
            <li className="mobile-only" style={{ marginTop: '1.5rem', width: '100%' }}>
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => scrollToSection('cta')}>Rejoindre la Beta</button>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-primary desktop-only" onClick={() => scrollToSection('cta')}>Rejoindre la Beta</button>
            <button className="burger-menu" aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div className="container">
          <div className="hero-grid">

            <div className="hero-content reveal">
              <div className="eyebrow">
                <Sparkles size={14} style={{ marginRight: '0.5rem', color: 'var(--accent-gold)' }} /> Conçu pour les équipes africaines
              </div>
              <h1 className="hero-title">
                Votre équipe.<br />Un seul espace.<br /><span>Zéro friction.</span>
              </h1>
              <p className="hero-desc">
                WINE unifie vos projets, tâches, communications et réseaux dans un hub intelligent. Un espace de travail performant et économique, pensé pour la réalité des startups, agences et équipes digitales d'Afrique francophone.
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollToSection('cta')}>
                  Rejoindre la Beta <ArrowRight size={18} />
                </button>
                <button className="btn btn-secondary" onClick={() => setShowDemoModal(true)}>
                  Voir la démo
                </button>
              </div>
            </div>

            <div className="hero-visual reveal delay-2">
              <div className="dashboard-mockup">

                <div className="mockup-header">
                  <div className="dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="mockup-title">wine-workspace (Lokossa, Benin)</div>
                  <div className="card-tag tag-violet" style={{ width: '10px', height: '10px', borderRadius: '50%' }}></div>
                </div>

                <div className="mockup-body">

                  <div className="mockup-sidebar">
                    <div className="sb-item active" style={{ height: '20px', borderRadius: '6px', background: 'var(--accent-violet)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setActiveMockupTab('kanban')}>
                      <CheckSquare size={10} color="#fff" />
                    </div>
                    <div className="sb-item" style={{ height: '20px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setActiveMockupTab('chat')}>
                      <MessageSquare size={10} color="var(--text-secondary)" />
                    </div>
                    <div className="sb-item"></div>
                    <div className="sb-item"></div>
                    <div style={{ marginTop: 'auto' }} className="sb-item"></div>
                  </div>

                  <div className="mockup-main">

                    <div className="mockup-top">
                      <div className="mockup-top-bar"></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)' }}>
                          {mockupTaskCount} Tâches Finies
                        </span>
                        <button
                          onClick={handleAddMockupTask}
                          style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.55rem', color: '#fff', fontWeight: 'bold' }}
                          title="Simuler une tâche terminée"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {activeMockupTab === 'kanban' ? (
                      <div className="mockup-grid">
                        <div className="mockup-col">
                          <div className="col-header">
                            <span>À FAIRE</span>
                            <span>2</span>
                          </div>

                          <div className="mockup-card">
                            <span className="mockup-card-title">Sprint Planning</span>
                            <p className="mockup-card-desc">Backlog produit & répartition.</p>
                            <div className="card-meta">
                              <span className="card-tag tag-violet">Design</span>
                              <div className="card-avatars">
                                <span className="card-avatar">S</span>
                                <span className="card-avatar">K</span>
                              </div>
                            </div>
                          </div>

                          <div className="mockup-card">
                            <span className="mockup-card-title">Setup Database</span>
                            <p className="mockup-card-desc">Migrations PostgreSQL initiales.</p>
                            <div className="card-meta">
                              <span className="card-tag tag-gold">Backend</span>
                              <div className="card-avatars">
                                <span className="card-avatar">F</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mockup-col">
                          <div className="col-header">
                            <span>EN COURS</span>
                            <span>1</span>
                          </div>

                          <div className="mockup-card card-in-progress">
                            <span className="mockup-card-title">Intégration API</span>
                            <p className="mockup-card-desc">Connecter le Kanban à FastAPI.</p>
                            <div className="card-meta">
                              <span className="card-tag tag-violet">API</span>
                              <div className="card-avatars">
                                <span className="card-avatar">M</span>
                                <span className="card-avatar">F</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mockup-chat">
                        <div className="chat-bubble chat-left">
                          <strong>Mawuli:</strong> Est-ce que le MVP pour le module de gestion des réseaux est stable ?
                        </div>
                        <div className="chat-bubble chat-right">
                          <strong>Femi:</strong> Oui, les webhooks Socket.io et FastAPI fonctionnent parfaitement !
                        </div>
                        <div className="chat-bubble chat-left">
                          <strong>Kofi:</strong> Super, je finalise l'intégration UI. On déploie ce soir.
                        </div>
                        <div className="chat-input">
                          <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>Message #général...</span>
                          <span className="chat-input-indicator"></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. SIGNATURE MARQUEE */}
        <div className="marquee-container">
          <div className="marquee-title">WINE CONNECTE TOUT VOTRE UNIVERS DE TRAVAIL</div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {toolMarqueeList.map((tool, idx) => (
                <div className="marquee-item" key={idx}>
                  <span className="marquee-dot">·</span>
                  {tool}
                </div>
              ))}
              {toolMarqueeList.map((tool, idx) => (
                <div className="marquee-item" key={`dup-${idx}`}>
                  <span className="marquee-dot">·</span>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 3. PROBLEM SECTION */}
      <section className="section-padding reveal">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">Le Constat</span>
            <h2 className="section-title">Votre énergie créative mérite mieux que le chaos.</h2>
            <p>Piloter une équipe de développement ou une agence en Afrique francophone impose des défis uniques de coût, d'organisation et de connectivité.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <MessageSquare size={24} />
              </div>
              <h3>Dispersion & Pertes</h3>
              <p>Les informations, décisions et retours clients s'éparpillent continuellement entre les groupes WhatsApp, les chaînes d'emails et les notes personnelles.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <Eye size={24} />
              </div>
              <h3>Zéro Visibilité</h3>
              <p>Impossible d'obtenir une vue d'ensemble fiable sur l'avancement global des sprints. Vos collaborateurs et clients manquent de transparence.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper">
                <DollarSign size={24} />
              </div>
              <h3>Abonnements prohibitifs</h3>
              <p>Notion, Slack, Trello, Jira : des prix en devises étrangères inadaptés, des fonctionnalités superflues et aucun support de paiement local.</p>
            </div>
          </div>

          <div className="problem-conclusion">
            "Les outils existent. Le problème, c'est leur <span>éparpillement</span>."
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="section-padding reveal" id="features" style={{ background: 'rgba(20, 23, 38, 0.3)', borderY: '1px solid var(--border)' }}>
        <div className="container">
          <div className="solution-grid">

            <div className="solution-left">
              <span className="section-tag">La Solution</span>
              <h2 className="section-title">Un hub ouvert. Natif ou connecté. Toujours unifié.</h2>

              <p className="solution-desc">
                WINE ne vous force pas à choisir. Soit vous utilisez nos outils natifs ultra-performants et légers, soit vous importez vos tableaux et espaces de travail existants en un clic.
              </p>

              <p className="solution-accent-text">
                Un système d'exploitation de travail pensé pour minimiser la consommation de bande passante et maximiser l'efficacité.
              </p>

              <div className="solution-pills">
                <span className="solution-pill">
                  <FolderKanban size={15} />
                  Gestion de projets
                </span>
                <span className="solution-pill">
                  <CheckSquare size={15} />
                  Suivi de tâches
                </span>
                <span className="solution-pill">
                  <MessageSquare size={15} />
                  Collaboration directe
                </span>
                <span className="solution-pill">
                  <Share2 size={15} />
                  Planification réseaux
                </span>
                <span className="solution-pill">
                  <BarChart3 size={15} />
                  Rapports analytiques
                </span>
                <span className="solution-pill">
                  <Briefcase size={15} />
                  Modules RH &amp; Talents
                </span>
              </div>
            </div>

            <div className="solution-right">
              <div className="solution-feature-box">
                <Zap className="feature-box-icon" size={24} />
                <h4>Rapidité extrême</h4>
                <p>Architecture optimisée pour les connexions mobiles instables et chargement instantané.</p>
              </div>

              <div className="solution-feature-box">
                <Lock className="feature-box-icon" size={24} />
                <h4>Sécurité & RGPD</h4>
                <p>Authentification robuste par tokens JWT cryptés et hébergement cloud ultra-sécurisé.</p>
              </div>

              <div className="solution-feature-box">
                <Globe className="feature-box-icon" size={24} />
                <h4>100% Francophone</h4>
                <p>Une interface entièrement traduite en français avec des termes adaptés à la culture business locale.</p>
              </div>

              <div className="solution-feature-box">
                <Award className="feature-box-icon" size={24} />
                <h4>Paiements simplifiés</h4>
                <p>Intégration future de moyens de paiement mobile money pour faciliter les abonnements.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MODULES SECTION */}
      <section className="section-padding reveal">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">Les Fonctionnalités</span>
            <h2 className="section-title">Tout ce dont votre équipe a besoin.</h2>
            <p>6 modules interconnectés pour rationaliser vos opérations quotidiennes et libérer le potentiel de vos collaborateurs.</p>
          </div>

          <div className="modules-grid">

            {/* Card 1 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <CheckSquare size={20} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span className="module-badge badge-native">Natif</span>
                  <span className="module-badge badge-connected">Connecté</span>
                </div>
              </div>
              <h3>Gestion de projets</h3>
              <p>Créez, suivez et livrez vos projets en temps réel avec des tableaux Kanban interactifs. Synchronisation bidirectionnelle instantanée avec Notion et Trello.</p>
            </div>

            {/* Card 2 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <CheckSquare size={20} />
                </div>
                <span className="module-badge badge-native">Natif</span>
              </div>
              <h3>Suivi des tâches</h3>
              <p>Chaque tâche assignée possède ses sous-tâches, sa date d'échéance et son fil de discussion interne. Suivi rigoureux de l'avancement individuel.</p>
            </div>

            {/* Card 3 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <Users size={20} />
                </div>
                <span className="module-badge badge-connected">Connecté</span>
              </div>
              <h3>Collaboration Live</h3>
              <p>Messagerie instantanée d'équipe intégrée et canaux de discussion thématiques. Connecté à vos salons Slack et Google Workspace.</p>
            </div>

            {/* Card 4 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <Share2 size={20} />
                </div>
                <span className="module-badge badge-native">Natif</span>
              </div>
              <h3>Gestion des réseaux</h3>
              <p>Planifiez, rédigez et programmez automatiquement vos publications sur vos canaux sociaux (LinkedIn, Facebook) depuis un calendrier central.</p>
            </div>

            {/* Card 5 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <BarChart3 size={20} />
                </div>
                <span className="module-badge badge-connected">Connecté</span>
              </div>
              <h3>Analytique intégrée</h3>
              <p>Des tableaux de bord complets pour visualiser la productivité de l'équipe et les statistiques clés de vos plateformes tierces connectées.</p>
            </div>

            {/* Card 6 */}
            <div className="module-card">
              <div className="module-top">
                <div className="module-icon">
                  <Award size={20} />
                </div>
                <span className="module-badge badge-native">Natif</span>
              </div>
              <h3>RH & Business</h3>
              <p>Suivez les opportunités commerciales de vos agences (pipeline CRM) et gérez les fiches de vos talents internes dans une interface unifiée.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="section-padding reveal" id="pricing" style={{ background: 'rgba(20, 23, 38, 0.2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-tag">Les Prix</span>
            <h2 className="section-title">Un tarif qui respecte votre réalité.</h2>
            <p>Débutez gratuitement avec nos modules essentiels ou passez à la vitesse supérieure en débloquant toute la puissance de nos intégrations.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="pricing-toggle">
              <button
                className={`pricing-toggle-btn ${!isYearlyBilling ? 'active' : ''}`}
                onClick={() => setIsYearlyBilling(false)}
              >
                Mensuel
              </button>
              <button
                className={`pricing-toggle-btn ${isYearlyBilling ? 'active' : ''}`}
                onClick={() => setIsYearlyBilling(true)}
              >
                Annuel (-20%)
              </button>
            </div>
          </div>

          <div className="pricing-grid">

            {/* Plan 1 */}
            <div className="pricing-card">
              <h3 className="pricing-name">Freemium</h3>
              <p className="pricing-desc">Idéal pour tester WINE en équipe réduite et poser les bases de son organisation.</p>

              <div className="pricing-price">
                <span className="price-currency"></span>
                <span className="price-amount">Gratuit</span>
                <span className="price-period"></span>
              </div>

              <ul className="pricing-features">
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Jusqu'à 5 utilisateurs</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Modules Tâches & Projets natifs</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Messagerie d'équipe basique</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>1 intégration active</span>
                </li>
              </ul>

              <button className="btn btn-secondary pricing-cta" onClick={() => scrollToSection('cta')}>
                Démarrer gratuitement
              </button>
            </div>

            {/* Plan 2 */}
            <div className="pricing-card pricing-card-popular">
              <span className="popular-badge">Populaire</span>
              <h3 className="pricing-name">Plan Team</h3>
              <p className="pricing-desc">Pour les agences et startups en croissance qui nécessitent une collaboration poussée.</p>

              <div className="pricing-price">
                <span className="price-currency">$</span>
                <span className="price-amount">{isYearlyBilling ? '12' : '15'}</span>
                <span className="price-period">/ équipe / mois</span>
              </div>

              <ul className="pricing-features">
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Utilisateurs illimités</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Les 6 modules WINE débloqués</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Intégrations tierces illimitées</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Support prioritaire 24/7</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Fichiers partagés illimités</span>
                </li>
              </ul>

              <button className="btn btn-gold pricing-cta" onClick={() => scrollToSection('cta')}>
                Rejoindre la Beta
              </button>
            </div>

            {/* Plan 3 */}
            <div className="pricing-card">
              <h3 className="pricing-name">Enterprise</h3>
              <p className="pricing-desc">Pour les grandes structures et incubateurs exigeant un contrôle maximal.</p>

              <div className="pricing-price">
                <span className="price-currency"></span>
                <span className="price-amount">Sur devis</span>
                <span className="price-period"></span>
              </div>

              <ul className="pricing-features">
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Instance cloud privée ou sur site</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>SLA garanti à 99.9%</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Sécurité renforcée (SSO/SAML)</span>
                </li>
                <li className="pricing-feature">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>Responsable de compte dédié</span>
                </li>
              </ul>

              <button className="btn btn-secondary pricing-cta" onClick={() => scrollToSection('cta')}>
                Contacter l'équipe
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ROADMAP SECTION */}
      <section className="section-padding reveal" id="roadmap">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">Roadmap</span>
            <h2 className="section-title">L'évolution de WINE.</h2>
            <p>Suivez le cycle de développement de notre plateforme. Nous construisons en public avec nos utilisateurs.</p>
          </div>

          <div className="roadmap-container">
            {/* Desktop Timeline */}
            <div className="roadmap-line-desktop"></div>

            <div className="roadmap-grid-desktop">

              <div className="roadmap-item">
                <div className="roadmap-node node-done"><Check size={16} /></div>
                <div className="roadmap-phase-tag">Phase 1</div>
                <h3 className="roadmap-title">Spécifications & Design</h3>
                <p className="roadmap-desc">Conception de l'architecture backend, maquettage UI/UX des modules de base.</p>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-node node-active">
                  <TrendingUp size={16} />
                </div>
                <div className="roadmap-phase-tag">Phase 2</div>
                <h3 className="roadmap-title">Développement MVP</h3>
                <p className="roadmap-desc">Développement actif des modules de gestion de projet, des tâches et de la collaboration synchrone.</p>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-node node-todo">3</div>
                <div className="roadmap-phase-tag">Phase 3</div>
                <h3 className="roadmap-title">Beta fermée</h3>
                <p className="roadmap-desc">Déploiement expérimental auprès de 3 startups et agences partenaires clés.</p>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-node node-future">4</div>
                <div className="roadmap-phase-tag">Phase 4</div>
                <h3 className="roadmap-title">Lancement public</h3>
                <p className="roadmap-desc">Sortie publique, activation des modules réseaux, analytique et RH avancés.</p>
              </div>

            </div>

            {/* Mobile Timeline */}
            <div className="roadmap-timeline-mobile">

              <div className="roadmap-item-mobile">
                <div className="roadmap-node-mobile node-done"><Check size={16} /></div>
                <div className="roadmap-content-mobile">
                  <div className="roadmap-phase-tag">Phase 1 · Terminée</div>
                  <h3 className="roadmap-title">Spécifications & Design</h3>
                  <p className="roadmap-desc">Conception de l'architecture backend, maquettage UI/UX des modules de base.</p>
                </div>
              </div>

              <div className="roadmap-item-mobile">
                <div className="roadmap-node-mobile node-active">
                  <TrendingUp size={16} />
                </div>
                <div className="roadmap-content-mobile">
                  <div className="roadmap-phase-tag">Phase 2 · En Cours</div>
                  <h3 className="roadmap-title">Développement MVP</h3>
                  <p className="roadmap-desc">Développement actif des modules de gestion de projet, des tâches et de la collaboration synchrone.</p>
                </div>
              </div>

              <div className="roadmap-item-mobile">
                <div className="roadmap-node-mobile node-todo">3</div>
                <div className="roadmap-content-mobile">
                  <div className="roadmap-phase-tag">Phase 3 · À Venir</div>
                  <h3 className="roadmap-title">Beta fermée</h3>
                  <p className="roadmap-desc">Déploiement expérimental auprès de 3 startups et agences partenaires clés.</p>
                </div>
              </div>

              <div className="roadmap-item-mobile">
                <div className="roadmap-node-mobile node-future">4</div>
                <div className="roadmap-content-mobile">
                  <div className="roadmap-phase-tag">Phase 4 · À Venir</div>
                  <h3 className="roadmap-title">Lancement public</h3>
                  <p className="roadmap-desc">Sortie publique, activation des modules réseaux, analytique et RH avancés.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. L'EQUIPE (TEAM) SECTION */}
      <section className="section-padding reveal" id="team">
        <div className="container">

          <div className="section-header">
            <span className="section-tag">L'Équipe</span>
            <h2 className="section-title">Les créateurs derrière WINE.</h2>
            <p>Un collectif passionné d'étudiants en informatique et télécoms de Lokossa, Bénin, unis pour redéfinir la productivité.</p>
          </div>
          <div className="team-subtitle">Lokossa, Bénin</div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>

          <div className="previous-projects">
            <h3 className="prev-title">Nos Réalisations Précédentes</h3>
            <div className="prev-list">
              {projectsData.map(project => (
                project.url && project.url !== '#' ? (
                  <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prev-project"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span key={project.id} className="prev-project">
                    {project.title}
                  </span>
                )
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* 9. FINAL CTA SECTION */}
      <section className="section-padding reveal" id="cta">
        <div className="container">
          <div className="cta-box">

            <h2 className="cta-title">Prêt à travailler avec excellence ?</h2>
            <p className="cta-subtitle">
              Rejoignez dès aujourd'hui les premières équipes africaines à piloter leur travail autrement. Inscrivez-vous à la version Beta privée gratuite.
            </p>

            {!isBetaSubmitted ? (
              <form onSubmit={handleBetaSubmit} className="cta-form">
                <input
                  type="email"
                  required
                  placeholder="Entrez votre adresse email..."
                  className="cta-input"
                  value={betaEmail}
                  onChange={(e) => setBetaEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary cta-btn-submit">
                  Rejoindre la Beta
                </button>
              </form>
            ) : (
              <div className="cta-success-message">
                <Sparkles size={20} />
                <span>Merci ! Bienvenue dans la Beta WINE. Nous vous écrirons bientôt à {betaEmail}.</span>
              </div>
            )}

            <div style={{ marginTop: '2.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Vous avez des questions ? Contactez-nous à <a href="mailto:teamexcellence@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>teamexcellence@gmail.com</a>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-brand">
              <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,12 83,31 83,69 50,88 17,69 17,31" stroke="#6C47FF" strokeWidth="8" strokeLinejoin="round" fill="none" />
                  <circle cx="50" cy="40" r="8" fill="#6C47FF" />
                  <circle cx="40" cy="50" r="8" fill="#6C47FF" />
                  <circle cx="60" cy="50" r="8" fill="#6C47FF" />
                  <circle cx="50" cy="60" r="8" fill="#F5A623" />
                </svg>
                <span>WINE</span>
              </a>
              <p className="footer-tagline">Work IN Excellence — La plateforme de productivité unifiée pour les équipes digitales d'Afrique.</p>

              <div className="social-links">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>in</span>
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>gh</span>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>fb</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">Plateforme</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Fonctionnalités</a></li>
                <li className="footer-link-item"><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Tarifs</a></li>
                <li className="footer-link-item"><a href="#roadmap" onClick={(e) => { e.preventDefault(); scrollToSection('roadmap'); }}>Roadmap</a></li>
                <li className="footer-link-item"><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>L'Équipe</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="mailto:teamexcellence@gmail.com">teamexcellence@gmail.com</a></li>
                <li className="footer-link-item"><a href="#" onClick={(e) => { e.preventDefault(); alert("WINE v1.0.0-beta - Développé à Lokossa, Bénin."); }}>Version Beta</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Légal</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="#" onClick={(e) => { e.preventDefault(); alert("Hébergement sécurisé RGPD. Vos données restent privées."); }}>Confidentialité</a></li>
                <li className="footer-link-item"><a href="#" onClick={(e) => { e.preventDefault(); alert("Conditions générales de vente et d'utilisation."); }}>Conditions d'utilisation</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">© 2026 Excellence Team · Lokossa, Bénin</span>
            <span className="footer-extra">Fait avec excellence <Zap size={12} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px', color: 'var(--accent-gold)' }} /></span>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {showDemoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(13, 15, 26, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1100,
          animation: 'fade-in 0.3s ease'
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '2.5rem',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            boxShadow: 'var(--violet-shadow)'
          }}>
            <button
              onClick={() => { setShowDemoModal(false); setIsDemoSubmitted(false); setDemoEmail(''); }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: 'var(--text-secondary)'
              }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>Voir la Démo WINE</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Entrez votre adresse email pour recevoir instantanément un lien d'accès à notre environnement de démonstration interactif.
            </p>

            {!isDemoSubmitted ? (
              <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="email"
                  required
                  placeholder="votre.email@domaine.com"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '0.9rem 1.25rem',
                    color: '#fff',
                    outline: 'none',
                    fontFamily: 'var(--font-body)'
                  }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem' }}>
                  Recevoir mon lien de Démo
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gold-glow)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justify: 'center', margin: '0 auto 1rem' }}>
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Lien Envoyé !</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Un email contenant vos accès démo vient d'être envoyé à <strong>{demoEmail}</strong>. Vérifiez votre boîte de réception (et vos spams).
                </p>
                <button
                  onClick={() => { setShowDemoModal(false); setIsDemoSubmitted(false); setDemoEmail(''); }}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem', width: '100%' }}
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
