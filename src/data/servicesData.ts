import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'custom-homes',
    slug: 'custom-home-construction',
    title: 'Custom Home Construction',
    shortDescription: 'Ground-up architectural construction for visionary private residences, waterfront retreats, and multi-generational estates.',
    fullDescription: 'We specialize in realizing architecturally demanding single-family homes that push structural boundaries. From complex hillside foundations to multi-story steel cantilevers and razor-thin window frames, our master builders treat every architectural drawing as a sacred blueprint for enduring craftsmanship.',
    heroImage: '/src/assets/images/hero_modern_residence_1790156520352.jpg',
    idealFor: 'Clients holding architectural plans seeking an uncompromising builder who works in seamless partnership with top-tier design architects.',
    keyDeliverables: [
      'Comprehensive Preconstruction & Constructability Analysis',
      'Advanced Civil, Geotechnical & Foundation Engineering',
      'Architectural Steel & Heavy Timber Framing',
      'High-Performance Building Envelope & Passive House Standards',
      'In-House Architectural Millwork & Custom Fine Finishing'
    ],
    typicalTimeline: '14 – 24 Months',
    investmentTier: '$3.5M – $25M+',
    craftDetails: [
      {
        title: 'Millimeter-Accurate Framing',
        description: 'We dry-dry and laser-level every framing stud, plumb walls with optical lasers, and use engineered LVL studs to eliminate warping or drywall cracking for decades.'
      },
      {
        title: 'Building Envelope Science',
        description: 'Vapor-open air barriers, continuous exterior insulation, rain-screen cladding, and blower-door testing target air infiltration rates below 0.6 ACH50.'
      },
      {
        title: 'Acoustic Decoupling',
        description: 'Resilient isolation clips, double-stud walls, and cast-iron acoustic drain piping ensure interior spaces remain church-quiet.'
      }
    ]
  },
  {
    id: 'luxury-renovations',
    slug: 'luxury-renovations',
    title: 'Luxury Home Transformations & Renovations',
    shortDescription: 'Full-scale structural transformations of existing premier residences, mid-century icons, and landmark estates.',
    fullDescription: 'Transforming an established home requires even greater engineering precision than starting from raw ground. We remove load-bearing masonry cores, install hidden steel moment frames to open uninterrupted panoramic views, and modernize infrastructure without sacrificing character.',
    heroImage: '/src/assets/images/interior_living_space_1790156546780.jpg',
    idealFor: 'Homeowners in established luxury neighborhoods desiring modern spatial flow, seismic hardening, and museum-grade finishes.',
    keyDeliverables: [
      'Structural Load Re-Engineering & Shoring',
      'Seismic Retrofitting & Foundation Reinforcement',
      'Full MEP (Mechanical, Electrical, Plumbing) Overhauls',
      'Historic Fabric Preservation & Matching Milled Profiles',
      'Zero-Threshold Indoor-Outdoor Window Installations'
    ],
    typicalTimeline: '8 – 16 Months',
    investmentTier: '$1.8M – $8M+',
    craftDetails: [
      {
        title: 'Surgical Demolition & Shoring',
        description: 'Hydraulic jacking systems and temporary steel trusses keep upper stories stable while whole ground floor walls are removed.'
      },
      {
        title: 'Heritage Profile Replication',
        description: 'We custom-grind cutter knives to mill molding and window profiles that match century-old original details to within 1/64 of an inch.'
      }
    ]
  },
  {
    id: 'kitchen-bath',
    slug: 'kitchen-and-bathroom-architecture',
    title: 'Architectural Kitchen & Bath Suites',
    shortDescription: 'Bespoke culinary spaces, primary spa sanctuaries, and private onsen retreats crafted with monolithic stone and custom millwork.',
    fullDescription: 'The most intimate spaces of a home demand the highest level of craftsmanship. We curate stone slabs directly from Italian and Portuguese quarries, perform computerized vein-matching, and construct custom European cabinetry with concealed German hardware.',
    heroImage: '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
    idealFor: 'Discerning clients who value quiet luxury, architectural joinery, integrated chef appliances, and steam shower wellness spaces.',
    keyDeliverables: [
      'Bookmatched Slab Countertops & Full-Height Marble Backsplashes',
      'Custom Rift-Cut White Oak & Fumed Walnut Cabinetry',
      'Seamless Flush Floor Drains & Wet Room Waterproofing',
      'Sub-Zero, Wolf, Gaggenau & La Cornue Certified Installation',
      'Dornbracht, Waterworks & Fantini Architectural Fixtures'
    ],
    typicalTimeline: '4 – 7 Months',
    investmentTier: '$450K – $1.8M+',
    craftDetails: [
      {
        title: 'Vein-Matched Continuous Marble',
        description: 'Full 3D dry-layout slab previews prior to waterjet fabrication, ensuring veins flow seamlessly across island tops down mitered waterfall drops.'
      },
      {
        title: 'Hospital-Grade Waterproofing',
        description: 'Double-membrane Schluter Kerdi waterproofing tested by 72-hour static flood testing before setting a single tile.'
      }
    ]
  },
  {
    id: 'commercial',
    slug: 'commercial-construction',
    title: 'Commercial & Hospitality Construction',
    shortDescription: 'Landmark winery tasting rooms, boutique hotels, creative headquarters, and Michelin-caliber restaurant buildouts.',
    fullDescription: 'We bring the obsessive detail of luxury residential construction into high-profile commercial and hospitality spaces. Our commercial division manages complex code compliance, heavy structural spans, commercial fire systems, and aggressive deadlines with military precision.',
    heroImage: '/src/assets/images/commercial_architectural_winery_1790156608539.jpg',
    idealFor: 'Hospitality operators, winery founders, and corporate leaders who demand a physical space that embodies their brand prestige.',
    keyDeliverables: [
      'Commercial Ground-Up & Tenant Improvement Construction',
      'Heavy Timber, Rammed Earth & Exposed Concrete Construction',
      'Commercial Kitchen & Bar MEP Engineering',
      'Acoustic Engineering for High-Occupancy Dining & Lounges',
      'Fixed-Price Guaranteed Maximum Price (GMP) Contracts'
    ],
    typicalTimeline: '10 – 20 Months',
    investmentTier: '$4M – $20M+',
    craftDetails: [
      {
        title: 'High-Traffic Durability',
        description: 'Specifying commercial-grade sealers, hard-wax oils, and structural alloys that patina gracefully under thousands of daily visitors.'
      },
      {
        title: 'Acoustic Control',
        description: 'Engineered micro-perforated wood wall panels and hidden sound baffles maintain serene conversational sound levels in open spaces.'
      }
    ]
  },
  {
    id: 'outdoor-living',
    slug: 'outdoor-living-and-pavilions',
    title: 'Outdoor Living & Architectural Pavilions',
    shortDescription: 'Infinity pools, cantilevered view terraces, pool pavilions, open-air outdoor kitchens, and landscaped hardscapes.',
    fullDescription: 'Extending the comfort and refinement of the home outdoors. We build architectural concrete terraces, negative-edge swimming pools, outdoor fireplace pavilions, and marine-grade stainless outdoor culinary stations that endure all seasonal elements.',
    heroImage: '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg',
    idealFor: 'Estates with expansive grounds, ocean bluff settings, or wine country views designed for year-round entertaining.',
    keyDeliverables: [
      'Architectural Concrete Pools & Vanishing Edge Basins',
      'Covered Pavilions with Radiant Infratech Heaters',
      'Outdoor Chef Kitchens & Kalamazoo Wood-Fired Grills',
      'Engineered Retaining Walls & Terraced Stone Hardscaping',
      'Architectural Low-Voltage Landscape Illumination'
    ],
    typicalTimeline: '5 – 9 Months',
    investmentTier: '$600K – $3M+',
    craftDetails: [
      {
        title: 'Structural Retaining & Drainage',
        description: 'Over-engineered hydrostatic relief valves, deep gravel drainage trenches, and micropile anchors protect bluff edges from erosion.'
      }
    ]
  },
  {
    id: 'design-build',
    slug: 'design-build-services',
    title: 'Integrated Design-Build Collaboration',
    shortDescription: 'A single point of accountability from initial site feasibility through architectural design, permitting, and final handover.',
    fullDescription: 'For clients seeking a streamlined, unified process, we partner with world-renowned independent architectural studios under our unified Design-Build project delivery umbrella. Budgets, engineering, and architectural drawings evolve in real-time synergy, eliminating redesign costs.',
    heroImage: '/src/assets/images/construction_framing_craft_1790156533745.jpg',
    idealFor: 'Busy executives and family offices who want one accountable partner managing budget, architect, engineers, permits, and construction.',
    keyDeliverables: [
      'Site Selection & Feasibility Feasibility Studies',
      'Architect & Interior Designer Selection & Retainer',
      'Zoning, Environmental & Permitting Expediting',
      'Real-Time Value Engineering & Transparent Cost Modeling',
      'Turnkey Delivery with 10-Year Comprehensive Warranty'
    ],
    typicalTimeline: '18 – 30 Months Total',
    investmentTier: '$4M – $30M+',
    craftDetails: [
      {
        title: 'Continuous Cost Modeling',
        description: 'Every sketch is priced by our estimators within 48 hours, ensuring design choices never outpace the client’s capital plan.'
      }
    ]
  }
];
