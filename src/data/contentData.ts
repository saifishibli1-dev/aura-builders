import { ProcessStep, JournalArticle, FAQItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Vander & Cole',
  subtitle: 'Architectural Construction & Fine Building',
  establishedYear: '2002',
  phone: '(206) 892-4400',
  secondaryPhone: '(415) 678-2100',
  email: 'inquiries@vandercolebuilders.com',
  clientPortal: 'https://portal.vandercolebuilders.com',
  headquarters: {
    address: '1420 5th Avenue, Suite 2800',
    city: 'Seattle',
    state: 'WA',
    zip: '98101',
    description: 'Pacific Northwest Studio & Executive Offices'
  },
  californiaOffice: {
    address: '100 Larkspur Landing Circle, Suite 210',
    city: 'Larkspur / Marin County',
    state: 'CA',
    zip: '94939',
    description: 'California Operations & Napa Valley Atelier'
  },
  licenseNumbers: {
    wa: 'VANDERC*914B8',
    ca: 'CSLB #984210 (Class B General Building & A Engineering)'
  },
  stats: [
    { value: '24', label: 'Years of Architectural Building' },
    { value: '310+', label: 'Landmark Projects Delivered' },
    { value: '99.2%', label: 'On-Time Handover Record' },
    { value: '42', label: 'In-House Master Craftsmen & Staff' }
  ],
  serviceAreas: [
    'Seattle & Greater Puget Sound, WA',
    'Bellevue, Medina & Mercer Island, WA',
    'San Juan Islands & Bainbridge Island, WA',
    'San Francisco & Marin County, CA',
    'Napa Valley & Sonoma Wine Country, CA',
    'Palo Alto & Silicon Valley, CA'
  ]
};

export const FOUNDERS_DATA = [
  {
    name: 'Marcus Vander, AIA',
    role: 'Co-Founder & Principal Builder',
    bio: 'Trained both as an architect at Cornell and as an apprentice framing carpenter in the Pacific Northwest, Marcus bridges the critical divide between pure design ambition and jobsite physics. With over 26 years of construction management experience, he personally reviews all structural moment connections and building envelope assemblies for every Vander & Cole commission.',
    image: '/src/assets/images/construction_framing_craft_1790156533745.jpg'
  },
  {
    name: 'Eleanor Cole, PE',
    role: 'Co-Founder & Director of Preconstruction',
    bio: 'Holding a Master of Science in Civil Engineering from UC Berkeley and registered as a Professional Engineer in California and Washington, Eleanor leads estimating, structural feasibility, and procurement logistics. Her rigorous cost modeling and transparent trade auditing ensure clients and architects experience zero financial surprises.',
    image: '/src/assets/images/hero_modern_residence_1790156520352.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phaseName: 'Initial Consultation',
    title: 'Vision, Feasibility & Alignment',
    duration: 'Weeks 1 – 3',
    description: 'Every enduring project begins with listening. We analyze your site topography, local zoning constraints, design aspirations, and investment framework before a single dollar is committed to detailed engineering.',
    deliverables: [
      'Comprehensive Site Topography & Geotechnical Review',
      'Preliminary Zoning & Jurisdictional Permitting Roadmap',
      'Target Budget Framework & Value Benchmarking',
      'Architectural Collaboration Protocol'
    ],
    details: 'We meet at your building site or existing residence to evaluate solar pathing, soil conditions, wind loads, utility connections, and access logistics. We establish open communication lines with you and your architect from day one.',
    image: '/src/assets/images/hero_modern_residence_1790156520352.jpg'
  },
  {
    number: '02',
    phaseName: 'Planning & Preconstruction',
    title: 'Constructability & Detailed Cost Modeling',
    duration: 'Weeks 4 – 10',
    description: 'Where other builders estimate with broad square-foot allowances, we deconstruct the entire building into hundreds of discrete trade bid packages with transparent line-item sub-tier quotes.',
    deliverables: [
      'Itemized Open-Book Cost Accounting Schedule',
      'Critical-Path Construction Master Gantt Schedule',
      'Long-Lead Procurement Matrix (Steel, Custom Glazing, Millwork)',
      'Subcontractor Trade Prequalification Dossier'
    ],
    details: 'Our preconstruction team tests building assemblies in 3D BIM models to detect MEP clashes, verifies structural deflection tolerances, and locks in material procurement early to shield clients against supply price volatility.',
    image: '/src/assets/images/construction_framing_craft_1790156533745.jpg'
  },
  {
    number: '03',
    phaseName: 'Architectural Detailing & Engineering',
    title: 'Building Science & Mockup Verification',
    duration: 'Weeks 11 – 16',
    description: 'Prior to full jobsite mobilization, we build physical 1:1 scale mockups of critical exterior wall assemblies, window jamb reveals, and stone miters to review with the client and architect.',
    deliverables: [
      '1:1 Scale Exterior Wall & Glazing Water-Test Mockup',
      'Detailed Building Envelope Flashing & Sealant Schedules',
      'Acoustic Decoupling & Vibration Isolation Plan',
      'Permit Issuance with Municipal Building Departments'
    ],
    details: 'Physical mockups are subjected to rigorous water spray testing to prove airtightness and drainage. We test stain samples on exact lumber species under natural sunlight on the property.',
    image: '/src/assets/images/interior_living_space_1790156546780.jpg'
  },
  {
    number: '04',
    phaseName: 'Precision Construction',
    title: 'Daily Rigor & Master Craftsmanship',
    duration: 'Months 5 – 20',
    description: 'A full-time, dedicated Vander & Cole Site Superintendent manages the jobsite every single working day. Our jobsites are clean, secure, quiet, and operated with absolute discipline.',
    deliverables: [
      'Daily Photo & Progress Logs via Secure Client Portal',
      'Weekly In-Person or Video Site Walkthrough Meetings',
      'Bi-Weekly Itemized Cost Reconciliation',
      'Milestone Structural, Envelope & MEP Inspections'
    ],
    details: 'Our in-house master carpenters handle heavy timber joinery, custom concrete formwork, and fine architectural millwork. We enforce a zero-smoking, music-restricted, spotless jobsite standard that respects neighbors and clients.',
    image: '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg'
  },
  {
    number: '05',
    phaseName: 'Commissioning & Handover',
    title: 'Final Walkthrough & Enduring Warranty',
    duration: 'Weeks 80 – 84',
    description: 'We do not simply hand over a set of keys. We conduct full system commissioning: balancing airflows, calibrating lighting automation, testing floor temperatures, and handing over a digital Home Operations Manual.',
    deliverables: [
      'Blower-Door Air Tightness Verification Certificate',
      'Digital As-Built CAD/BIM File Package & Appliance Warranties',
      'Personal System Training Session for Homeowners',
      'Vander & Cole 10-Year Structural & 2-Year Comprehensive Warranty'
    ],
    details: 'Our Dedicated Estate Care team schedules 30-day, 6-month, 1-year, and 2-year warranty checkups to touch up any seasonal wood settlement and service mechanical filters.',
    image: '/src/assets/images/primary_bath_spa_1790156569510.jpg'
  }
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    title: 'Sub-Millimeter Tolerances',
    description: 'We utilize Leica laser-scanning stations to verify wall squareness, slab elevation, and ceiling planes before and after framing. While standard residential code permits 1/4" deviation over 10 feet, our standard is 1/16".',
    stat: '1/16"',
    statLabel: 'Maximum Framing Tolerance'
  },
  {
    title: 'Continuous Thermal Envelopes',
    description: 'Eliminating thermal bridges through thermally broken structural steel clips, continuous exterior mineral wool, and Swiss triple-pane glass that retains warmth in winter and cool air during heatwaves.',
    stat: '0.45 ACH',
    statLabel: 'Blower-Door Air Permeability'
  },
  {
    title: 'In-House Joinery & Millwork',
    description: 'We operate our own 14,000 sq ft custom cabinet and architectural millwork shop in Seattle, crafting fluted oak wall paneling, integrated pivot doors, and custom steel staircase stringers.',
    stat: '14,000 sq ft',
    statLabel: 'Dedicated Millwork Facility'
  },
  {
    title: 'Lifetime Structural Transparency',
    description: 'Every plumbing run, electrical conduit, and structural shear strap is photographed with high-definition lidar before insulation and uploaded to your secure digital archive.',
    stat: '100%',
    statLabel: 'Digital As-Built Documentation'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'building-science-pnw',
    slug: 'building-for-pacific-northwest-climates',
    title: 'Building for the Pacific Northwest: Rain-Screens, Concrete Curing & Thermal Breaks',
    category: 'Building Science',
    date: 'February 2025',
    readTime: '6 min read',
    author: 'Marcus Vander',
    excerpt: 'How coastal humidity, marine soils, and seismic requirements dictate every decision from foundation chemistry to exterior cedar cladding ventilation.',
    content: [
      'In high-end architectural construction, beauty is inseparable from moisture physics. When designing homes with expanses of glass and flat rooflines in the Pacific Northwest, water management cannot rely on caulk or sealants alone.',
      'A true ventilated rain-screen creates an uninterrupted air gap between the exterior cladding and the vapor-permeable weather barrier. This allows any driving rain that passes through cedar slats or stone joints to drain away harmlessly via gravity while capillary pressure evaporates residual moisture.',
      'Similarly, board-formed concrete in cold damp climates requires precise water-to-cement ratios and extended formwork dwell times to avoid micro-fracturing and achieve that satiny, architectural Class 1 finish that lasts generations.'
    ],
    image: '/src/assets/images/construction_framing_craft_1790156533745.jpg'
  },
  {
    id: 'open-book-contracting',
    slug: 'why-fixed-fee-open-book-construction-protects-clients',
    title: 'The Truth About Construction Contracts: Why Open-Book Transparency Prevents Cost Creep',
    category: 'Finance & Contracts',
    date: 'January 2025',
    readTime: '5 min read',
    author: 'Eleanor Cole',
    excerpt: 'Deconstructing the risks of traditional low-bid contracting versus transparent Cost-Plus with a Guaranteed Maximum Price (GMP) framework.',
    content: [
      'The most painful experience a homeowner can face during a multi-million-dollar custom build is the adversarial relationship created by vague contractor allowances and aggressive change orders.',
      'At Vander & Cole, every project operates under an Open-Book accounting protocol. Our clients inspect every trade invoice, lumber receipt, and sub-tier bid. Our builder fee is fixed and transparent.',
      'When the builder and client sit on the same side of the financial table, value engineering becomes an honest collaborative exercise in preserving architectural intent without inflating margins.'
    ],
    image: '/src/assets/images/hero_modern_residence_1790156520352.jpg'
  },
  {
    id: 'acoustic-engineering-residences',
    slug: 'the-art-of-quiet-architecture',
    title: 'The Art of Quiet Architecture: Acoustic Decoupling in Modern Minimalist Homes',
    category: 'Interior Craft',
    date: 'November 2024',
    readTime: '4 min read',
    author: 'Marcus Vander',
    excerpt: 'How modern open floor plans with concrete floors and glass walls can achieve cathedral-like stillness through hidden acoustic engineering.',
    content: [
      'Minimalist residences with polished concrete floors, drywall reveals, and walls of sliding glass face a unique architectural challenge: acoustic resonance. Without soft traditional moldings and carpets, sound waves reflect relentlessly.',
      'To achieve serenity, we engineer acoustic mitigation directly into the building bones. We install resilient isolation clips that decouple drywall from wall studs, pack partitions with high-density mineral wool, and wrap drain lines in lead-lined acoustic lagging.',
      'Ceiling planes incorporate micro-perforated acoustic wood veneers with sound-absorbing backing, granting spaces the visual sharpness of clean oak while whispering with serene quietness.'
    ],
    image: '/src/assets/images/interior_living_space_1790156546780.jpg'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Cost & Contracts',
    question: 'How do you structure your construction contracts and pricing?',
    answer: 'We believe the adversarial contractor-client model is fundamentally broken. We operate primarily under transparent Cost-Plus with a Guaranteed Maximum Price (GMP) or negotiated Fixed-Fee Preconstruction agreements. Every trade subcontractor quote, material ticket, and equipment bill is presented open-book with zero hidden markups. You always know exactly where every dollar is allocated.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'At what stage should we engage Vander & Cole?',
    answer: 'The optimal time to engage us is during the schematic design phase, at the same time you are selecting or beginning work with your architect. Early contractor involvement allows us to perform constructability analysis, test structural steel spans, model preliminary budgets, and secure long-lead materials before permit submission, saving months of redesign and permitting delays.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'Do you provide architectural design services, or do you work with independent architects?',
    answer: 'We collaborate frequently with the country’s leading independent architects, including Olson Kundig, Marmol Radziner, Bohlin Cywinski Jackson, Cutler Anderson, and Walker Warner. If you already have an architect, we serve as their trusted building science partner. If you are starting fresh, we can also manage an integrated Design-Build delivery, pairing you with an architect whose aesthetic matches your exact vision.'
  },
  {
    id: 'faq-4',
    category: 'Process',
    question: 'Who will actually manage our construction site on a day-to-day basis?',
    answer: 'Every Vander & Cole project is assigned a dedicated full-time on-site Superintendent who is physically present on your site 100% of working hours. They are supported by a dedicated Project Manager and Project Engineer who handle submittals, schedules, and accounting. Marcus Vander and Eleanor Cole also personally conduct weekly site walks on every active build.'
  },
  {
    id: 'faq-5',
    category: 'Warranties',
    question: 'What warranties do you provide after move-in?',
    answer: 'We provide an industry-leading 10-Year Structural Warranty on all foundations, framing, and load-bearing assemblies, along with an all-inclusive 2-Year Comprehensive Craftsmanship Warranty covering finishes, millwork, and mechanical systems. Our Dedicated Estate Care concierge conducts proactive scheduled visits at 30 days, 6 months, 1 year, and 2 years.'
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'How do you ensure projects finish on schedule?',
    answer: 'We utilize Primavera P6 and Procore critical-path scheduling with weekly 3-week lookaheads. We secure materials and specialty trades months before they are needed on site. Because we employ an in-house core crew of master carpenters, we are never at the mercy of sub-tier labor shortages for crucial framing, formwork, or millwork phases.'
  }
];
