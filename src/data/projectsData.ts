import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mercer-residence',
    slug: 'the-mercer-island-residence',
    title: 'The Mercer Island Residence',
    category: 'Custom Homes',
    location: 'Mercer Island, Washington',
    year: '2024',
    squareFootage: '8,450 sq ft',
    architect: 'Olson Kundig Architects',
    leadTime: '22 Months',
    heroImage: '/src/assets/images/hero_modern_residence_1790156520352.jpg',
    galleryImages: [
      '/src/assets/images/hero_modern_residence_1790156520352.jpg',
      '/src/assets/images/interior_living_space_1790156546780.jpg',
      '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
      '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg'
    ],
    tagline: 'A cantilevered modern sanctuary uniting board-formed concrete, western red cedar, and triple-glazed curtain walls.',
    concept: 'Conceived to blur the distinction between interior living and the native Pacific Northwest topography, this home steps down a steep 28-degree waterfront embankment on 32 deep-drilled cast-in-place concrete friction pilings.',
    description: 'Commissioned as a multi-generational legacy estate, The Mercer Island Residence required extreme structural engineering to anchor into waterfront bedrock without disturbing the shoreline root systems. Vander & Cole fabricated and erected 74 tons of architectural structural steel, seamlessly marrying thermal-break Swiss guillotine glass walls with monolithic board-formed concrete walls cured over 45 days.',
    materials: [
      'Board-Formed Architectural Concrete (Class 1 Finish)',
      'Clear Vertical-Grain Western Red Cedar',
      'Sky-Frame Triple-Glazed Sliding Glass Systems',
      'Blackened Structural Steel Moment Framing',
      'Honed Roman Classico Travertine Paving'
    ],
    scope: [
      'Full Site Civil Engineering & Deep Foundation Piling',
      'Architectural Steel Fabrication & Erection',
      'Custom Millwork & Integrated Architectural Lighting',
      'Geothermal Closed-Loop Heating & Hydronic Cooling',
      'Museum-Grade Low-Voltage Automation System'
    ],
    awardsOrFeatures: [
      'AIA Northwest Honor Award for Craftsmanship 2025',
      'Architectural Record Custom Residence of the Year'
    ],
    featured: true
  },
  {
    id: 'belvedere-residence',
    slug: 'belvedere-lagoon-modern',
    title: 'Belvedere Lagoon Modern',
    category: 'Custom Homes',
    location: 'Belvedere Island, California',
    year: '2024',
    squareFootage: '6,900 sq ft',
    architect: 'Marmol Radziner',
    leadTime: '18 Months',
    heroImage: '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
    galleryImages: [
      '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
      '/src/assets/images/interior_living_space_1790156546780.jpg',
      '/src/assets/images/primary_bath_spa_1790156569510.jpg'
    ],
    tagline: 'Horizontal minimalism overlooking San Francisco Bay with bookmatched Calacatta marble and fumed white oak.',
    concept: 'A series of interlocking pavilions arranged around an internal contemplative reflection garden, channeling coastal light through acoustic fluted oak ceilings and oversized bronze sliding doors.',
    description: 'This bayfront estate required zero-tolerance floor flatness tolerances (+/- 1.5mm) across 40-foot unobstructed clear spans. Every interior cabinet was custom-built in our architectural millwork shop, with touch-latch hardware, seamless shadow reveals, and concealed climate plenum registers.',
    materials: [
      'Bookmatched Calacatta Belgia Honed Marble',
      'Fumed European White Oak Flooring (12-inch Planks)',
      'Architectural Bronze Window Frames',
      'Micro-Cement Floor Surfaces',
      'Charred Shou Sugi Ban Accents'
    ],
    scope: [
      'Seismic Foundation Retrofit & Grade Beam Construction',
      'Zero-Threshold Indoor-Outdoor Floor Transitions',
      'Custom Architectural Millwork & Cabinetry',
      'Integrated Marine-Grade Acoustic Insulation',
      'Private Deep-Water Dock Renovation'
    ],
    awardsOrFeatures: [
      'California Architecture Forum Feature 2024'
    ],
    featured: true
  },
  {
    id: 'presidio-landmark',
    slug: 'presidio-heights-restoration',
    title: 'Presidio Heights Restoration',
    category: 'Luxury Renovations',
    location: 'San Francisco, California',
    year: '2023',
    squareFootage: '7,200 sq ft',
    architect: 'Studio VARA & Vander & Cole Historic Division',
    leadTime: '20 Months',
    heroImage: '/src/assets/images/historic_restoration_estate_1790156620150.jpg',
    galleryImages: [
      '/src/assets/images/historic_restoration_estate_1790156620150.jpg',
      '/src/assets/images/primary_bath_spa_1790156569510.jpg',
      '/src/assets/images/interior_living_space_1790156546780.jpg'
    ],
    tagline: 'Meticulous 1928 Beaux-Arts manor fully modernized with subterranean wellness suite and historic steel fenestration.',
    concept: 'Honoring the classical symmetry of 1920s Northern California architecture while completely gutting the structural core to introduce open sightlines, earthquake-proof shear walls, and a new basement spa level.',
    description: 'Working under strict historic preservation guidelines, our team hand-restored original hand-carved limestone exterior balustrades while excavating 18 feet below the existing brick foundation. The result is a home that looks eternally historic from the street yet operates with the quiet energy efficiency of an airtight modern passive structure.',
    materials: [
      'Indiana Bedford Limestone',
      'Custom Hope’s Hot-Rolled Steel Windows',
      'French Chevron White Oak Parquetry',
      'Venetian Plaster Wall Finishes',
      'Unlacquered Architectural Brass Hardware'
    ],
    scope: [
      'Under-Foundational Underpinning & Basement Excavation',
      'Historic Facade & Stone Cornice Restoration',
      'Subterranean Wine Vault & Wellness Plunge Pools',
      'Full MEP Infrastructure & VRF Heat Pumps',
      'Acoustically Decoupled Media Room'
    ],
    awardsOrFeatures: [
      'San Francisco Heritage Craftsmanship Award 2024'
    ],
    featured: true
  },
  {
    id: 'sovereign-cellars',
    slug: 'sovereign-cellars-pavilion',
    title: 'Sovereign Cellars Pavilion',
    category: 'Commercial',
    location: 'Rutherford, Napa Valley, California',
    year: '2024',
    squareFootage: '11,200 sq ft',
    architect: 'Walker Warner Architects',
    leadTime: '16 Months',
    heroImage: '/src/assets/images/commercial_architectural_winery_1790156608539.jpg',
    galleryImages: [
      '/src/assets/images/commercial_architectural_winery_1790156608539.jpg',
      '/src/assets/images/hero_modern_residence_1790156520352.jpg',
      '/src/assets/images/construction_framing_craft_1790156533745.jpg'
    ],
    tagline: 'A commercial wine tasting sanctuary anchored by rammed-earth walls, solar canopies, and deep shade trellises.',
    concept: 'Designed to harmonize with the volcanic soils and rowed vines of the Napa Valley floor, utilizing passive thermal mass and raw industrial steel.',
    description: 'Vander & Cole served as general contractor for this ultra-high-end hospitality project. The building features 18-inch thick rammed earth structural spine walls made from excavated site soil, topped with exposed Douglas Fir glulam heavy timber trusses spanning 60 feet without intermediate columns.',
    materials: [
      'Engineered Stabilized Rammed Earth',
      'Pacific Douglas Fir Glulam Beams',
      'Hot-Rolled Structural Black Steel',
      'Thermal-Break Glass Curtain Walls',
      'Polished Terrazzo Flooring'
    ],
    scope: [
      'Commercial Hospitality Site Infrastructure & Water Treatment',
      'Heavy Timber Structural Framework',
      'Precision Climate-Controlled Barrel Storage Rooms',
      'Custom Commercial Chef Kitchen & Sommelier Tasting Tables',
      'AIA Committee on the Environment (COTE) Compliance'
    ],
    awardsOrFeatures: [
      'Napa Valley Design Council Excellence Award 2024'
    ],
    featured: true
  },
  {
    id: 'bainbridge-cantilever',
    slug: 'the-bainbridge-cantilever',
    title: 'The Bainbridge Cantilever',
    category: 'Architectural Builds',
    location: 'Bainbridge Island, Washington',
    year: '2023',
    squareFootage: '5,800 sq ft',
    architect: 'Cutler Anderson Architects',
    leadTime: '19 Months',
    heroImage: '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg',
    galleryImages: [
      '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg',
      '/src/assets/images/construction_framing_craft_1790156533745.jpg',
      '/src/assets/images/interior_living_space_1790156546780.jpg'
    ],
    tagline: 'A 34-foot structural steel cantilever floating over coastal bluff pines with an infinity reflection basin.',
    concept: 'Suspended above the fragile marine ecosystem, touching the earth in only four engineered footing points to minimize tree canopy disturbance.',
    description: 'An extraordinary engineering achievement requiring custom box-girder steel bridge beams hauled by marine barge to the island. Our team built the structure during winter storms while maintaining an immaculate safety record and delivering zero water-runoff into the protected salmon estuary.',
    materials: [
      'Corten Steel Weathering Panels',
      'Cast Concrete Cantilever Piers',
      'Western Larch Decking and Soffits',
      'Thermally Broken Curtain Wall Glazing',
      'Black Granite Hearth Slab'
    ],
    scope: [
      'Specialty Marine Barge Logistics & Crane Erection',
      'Micropile Foundation Anchoring to Glacial Till',
      'Custom Heated Concrete Pool & Thermal Runoff Catchment',
      'Integrated High-Performance Building Envelope',
      '10kW Rooftop Bifacial Solar Array'
    ],
    awardsOrFeatures: [
      'Pacific Northwest Structural Engineering Guild Citation'
    ],
    featured: true
  },
  {
    id: 'olympic-retreat',
    slug: 'olympic-peninsula-retreat',
    title: 'Olympic Peninsula Forest Retreat',
    category: 'Custom Homes',
    location: 'Port Townsend, Washington',
    year: '2024',
    squareFootage: '4,600 sq ft',
    architect: 'Bohlin Cywinski Jackson',
    leadTime: '15 Months',
    heroImage: '/src/assets/images/primary_bath_spa_1790156569510.jpg',
    galleryImages: [
      '/src/assets/images/primary_bath_spa_1790156569510.jpg',
      '/src/assets/images/hero_modern_residence_1790156520352.jpg',
      '/src/assets/images/construction_framing_craft_1790156533745.jpg'
    ],
    tagline: 'Quiet Japanese-influenced forest dwelling centered around private stone onsen baths and cedar courtyards.',
    concept: 'A celebration of simplicity and natural stone textures nestled into an old-growth cedar grove.',
    description: 'This home was built with sustainable non-toxic building materials, featuring an airtight continuous envelope with an air-change rate of 0.4 ACH50 (Passive House standard). The monolithic spa suite features one-piece carved granite bathtubs and concealed linear slot drains.',
    materials: [
      'Alaskan Yellow Cedar Rain-Screen',
      'Honed Roman Travertine Stone Slabs',
      'Triple-Pane Passive House Wood-Alu Windows',
      'Clay Plaster & Lime Wash Finishes',
      'Blackened Copper Rain Chains'
    ],
    scope: [
      'Off-Grid Capable Battery & Geothermal Wells',
      'Certified Passive House Envelope Construction',
      'Custom Stone Vessel & Onsen Bath Carving',
      'Native Moss & Lichen Rooftop Living Garden',
      'Custom Joinery with Exposed Mortise & Tenon'
    ],
    awardsOrFeatures: [
      'Passive House Builder of the Year Nominee 2025'
    ],
    featured: false
  },
  {
    id: 'madrona-modern',
    slug: 'madrona-ridge-residence',
    title: 'Madrona Ridge Modern',
    category: 'Luxury Renovations',
    location: 'Seattle, Washington',
    year: '2023',
    squareFootage: '5,100 sq ft',
    architect: 'SHED Architecture & Design',
    leadTime: '14 Months',
    heroImage: '/src/assets/images/interior_living_space_1790156546780.jpg',
    galleryImages: [
      '/src/assets/images/interior_living_space_1790156546780.jpg',
      '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
      '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg'
    ],
    tagline: 'Full transformation of a 1964 mid-century post-and-beam home with panoramic Lake Washington views.',
    concept: 'Re-imagining mid-century Pacific Northwest architecture through contemporary seismic engineering and modern thermal performance.',
    description: 'We preserved the home’s iconic cedar tongue-and-groove ceiling while completely re-engineering the structural posts to allow a 50-foot glass opening facing Mt. Rainier. Includes a chef kitchen with waterfall Calacatta marble and integrated custom wine gallery.',
    materials: [
      'Original Restored Western Red Cedar',
      'Structural Steel Moment Frames',
      'Honed Dolomite Countertops',
      'Radiant Heated Polished Concrete Floors',
      'Architectural Zinc Exterior Fascia'
    ],
    scope: [
      'Seismic Post-and-Beam Reinforcement',
      'Full Architectural Glass Envelope Replacement',
      'Kitchen & Primary Suite Complete Remodel',
      'Smart Home Lighting & Climate Automation',
      'Terraced Native Stone Landscape Hardscaping'
    ],
    awardsOrFeatures: [
      'Seattle Met Home of the Year 2024'
    ],
    featured: false
  },
  {
    id: 'st-helena-modern',
    slug: 'st-helena-estate',
    title: 'St. Helena Vineyard Estate',
    category: 'Architectural Builds',
    location: 'St. Helena, California',
    year: '2024',
    squareFootage: '9,100 sq ft',
    architect: 'Backen & Backen Architecture',
    leadTime: '24 Months',
    heroImage: '/src/assets/images/hero_modern_residence_1790156520352.jpg',
    galleryImages: [
      '/src/assets/images/hero_modern_residence_1790156520352.jpg',
      '/src/assets/images/commercial_architectural_winery_1790156608539.jpg',
      '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg'
    ],
    tagline: 'A stone-and-timber modern farm estate with detached guest pavilion, lap pool, and working olive orchard.',
    concept: 'Rooted in Napa Valley agrarian heritage, balancing monumental quarried stone masses with delicate glass connectors.',
    description: 'Over 600 tons of local Napa fieldstone were cut and laid by our in-house masons. The estate encompasses a main residence, 2-bedroom guest pavilion, 75-foot infinity lap pool, and a private subterranean tasting cellar featuring an underground barrel vault.',
    materials: [
      'Hand-Chiseled Napa Valley Fieldstone',
      'Reclaimed White Oak Heavy Timber',
      'Steel-Framed Multi-Slide Pocket Doors',
      'Standing-Seam Zinc Roofing',
      'Natural Honed Bluestone Pavers'
    ],
    scope: [
      'Comprehensive Multi-Structure Estate Construction',
      'In-House Architectural Stone Masonry',
      'Underground Wine Cave Excavation & Shotcrete Lining',
      'Commercial-Grade Fire Suppression & Water Storage',
      'Full Estate Automation & Off-Grid Solar Microgrid'
    ],
    awardsOrFeatures: [
      'Western Living Master Builder Excellence'
    ],
    featured: false
  }
];
