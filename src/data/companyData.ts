import { Sector, StrategicSynergy, FuturePriority, GovernanceRole } from '../types';

export const COMPANY_INFO = {
  name: "ARISE HOPE GROUP",
  legalName: "Arise Hope Group (Pty) Ltd",
  established: "2020",
  tagline: "A light that shines above Everything",
  heroHeadline: "Building Tomorrow. Creating Lasting Value.",
  heroSupportingText: "An integrated ecosystem of specialised businesses driving innovation, sustainable growth, and economic progress across Southern Africa and beyond.",
  overview: "Arise Hope Group is a dynamic holding company that unites specialised businesses under a single strategic umbrella. Since its founding in 2020, the Group has built a diversified portfolio spanning engineering, resources, agriculture, real estate, automotive services, petroleum distribution, import/export and freight forwarding, finance, and technology. Its integrated model delivers comprehensive solutions, drives sustainable growth, and creates lasting value for stakeholders.",
  executiveSummary: "Arise Hope Group oversees ten industry-leading subsidiaries, each with dedicated leadership and P&L accountability. By combining deep sector expertise with centralised support functions in finance, legal, compliance, and human resources, the Group achieves resilience, scalability, and continuous innovation across all operations.",
  mission: "To empower specialised businesses through unified governance, operational excellence, and strategic investment, delivering sustainable value to clients, communities, and investors.",
  vision: "To be a globally recognised ecosystem that transforms industries and uplifts economies by integrating expertise, innovation, and responsible business practices.",
  coreValues: [
    {
      title: "Collaboration",
      description: "Fostering active cross-subsidiary collaboration for mutual resilience, knowledge transfer, and collective market strength."
    },
    {
      title: "Integrity & Transparency",
      description: "Upholding uncompromising governance, regulatory compliance, and total transparency in all stakeholder transactions."
    },
    {
      title: "Technology Innovation",
      description: "Deploying data-driven systems, advanced engineering, and digital enablement to lead sectoral transformation."
    },
    {
      title: "Environmental & Social Stewardship",
      description: "Anchoring all operations in ESG principles, responsible resource stewardship, and community upliftment."
    }
  ],
  contact: {
    headquarters: "Arise Hope Group Headquarters",
    address: "59 Kentucky Crescent Cosmo City, Johannesburg, Gauteng, South Africa",
    phone: "+27 10 3351262",
    mobileWhatsApp: "+27 81 702 4865",
    email: "info@arisehopegroup.co.za",
    corporateEmail: "corporate@arisehopegroup.co.za",
    website: "www.arisehopegroup.co.za",
    coordinates: "Johannesburg, South Africa (-26.0267, 27.9348)"
  }
};

export const MOTTO = {
  full: "Rise Above, Inspired Changes, We are the Movement.",
  parts: [
    { title: "Rise Above", meaning: "We aim higher than limits and circumstances, building businesses with excellence, integrity and ambition." },
    { title: "Inspired Changes", meaning: "We create positive change through innovation, enterprise, investment and opportunities that improve lives." },
    { title: "We are the Movement", meaning: "We are a growing community of partners, employees and communities moving forward together." }
  ]
};

export const SECTORS: Sector[] = [
  {
    id: "construction-engineering",
    number: 1,
    title: "Construction Engineering",
    tagline: "Large-Scale Structural Delivery & Turnkey Engineering",
    shortDescription: "Specialised in complex commercial structures, industrial facilities, and mega-scale infrastructure engineering with end-to-end design-build governance.",
    fullDescription: "Arise Hope Group's Construction Engineering division operates as an engineering anchor within the group, executing demanding structural, commercial, and industrial undertakings across Southern Africa. Through integrated project management, rigorous safety protocols, and modern modular methodologies, the division delivers turnkey capital projects from structural concept through commissioning.",
    officialActivities: [
      "Project management",
      "Design-build contracts",
      "Infrastructure delivery",
      "Commercial & industrial developments",
      "Structural engineering supervision"
    ],
    capabilities: [
      {
        title: "Integrated Design-Build",
        description: "Unified structural engineering and construction execution reducing schedule drift and contractor interfaces."
      },
      {
        title: "Capital Project Governance",
        description: "Institutional project controls, Earned Value Management (EVM), and real-time site telematics."
      },
      {
        title: "Industrial & Commercial Scale",
        description: "High-spec fabrication, precast installations, and heavy foundation engineering for industrial parks and corporate towers."
      }
    ],
    strategicAdvantage: "Directly synergistic with Civil Engineering and Property Investment, enabling self-reliant development from site civil works to premium structural delivery.",
    image: "/assets/images/construction_engineering.jpg",
    imageType: "ai-generated",
    accentColor: "#FF8A00",
    keyStats: [
      { label: "Delivery Model", value: "Turnkey EPC", subtext: "Design-Build Integrated" },
      { label: "P&L Model", value: "Dedicated Subsidiary", subtext: "Independent Governance" },
      { label: "Standards", value: "ISO & OHS", subtext: "Strict Safety & Compliance" }
    ]
  },
  {
    id: "civil-engineering",
    number: 2,
    title: "Civil Engineering",
    tagline: "Arterial Transportation, Hydraulic Structures & Public Works",
    shortDescription: "Essential civil works spanning national highways, interchange viaducts, water treatment reservoirs, and public works infrastructure.",
    fullDescription: "The Civil Engineering division shapes critical civic infrastructure across Southern Africa. From heavy transport road corridors and bridge engineering to urban storm-water reticulation and bulk water reservoirs, this subsidiary partners with municipal and national infrastructure programmes to establish enduring arterial foundations.",
    officialActivities: [
      "Roads & highway construction",
      "Bridges & viaduct engineering",
      "Water management & bulk treatment plants",
      "Public works & municipal infrastructure",
      "Earthworks & bulk ground stabilization"
    ],
    capabilities: [
      {
        title: "High-Volume Transportation Corridors",
        description: "Multi-lane arterial roadways, asphalt paving, and structural interchanges built for heavy regional transit."
      },
      {
        title: "Hydraulic & Water Engineering",
        description: "Reservoirs, weir structures, and bulk water pipelines securing municipal clean water distribution."
      },
      {
        title: "Public Infrastructure Modernisation",
        description: "Comprehensive public works delivery adhering to rigorous environmental and structural compliance standards."
      }
    ],
    strategicAdvantage: "Shares fleet mechanics and logistics with Wholesale Petroleum for uninterrupted fuel supply across isolated infrastructure corridors.",
    image: "/assets/images/civil_engineering.jpg",
    imageType: "ai-generated",
    accentColor: "#1FD2FF",
    keyStats: [
      { label: "Scope", value: "Arterial Civil", subtext: "Bridges, Roads & Water" },
      { label: "Synergy", value: "Turnkey Works", subtext: "With Construction & Petroleum" },
      { label: "Quality", value: "Tier 1 Spec", subtext: "Public & Enterprise Grade" }
    ]
  },
  {
    id: "mining-energy",
    number: 3,
    title: "Mining & Energy Resources",
    tagline: "Responsible Resource Extraction & Integrated Power Generation",
    shortDescription: "Comprehensive mineral exploration, extraction, beneficiation, and sustainable energy generation powering industrial growth.",
    fullDescription: "Operating at the core of Southern Africa's industrial resource economy, the Mining & Energy Resources subsidiary combines modern extraction technologies with forward-looking clean power development. The division explores, extracts, and beneficiates vital industrial minerals while driving internal captive power generation through solar arrays and hybrid power infrastructure.",
    officialActivities: [
      "Mineral exploration & geological surveying",
      "Open-pit & underground extraction",
      "Mineral processing & beneficiation",
      "Power generation & captive energy plants",
      "Environmental rehabilitation & mine closure"
    ],
    capabilities: [
      {
        title: "Strategic Minerals & Extraction",
        description: "Advanced mechanized extraction with geological grade control and automated haulage monitoring."
      },
      {
        title: "Captive Energy Transition",
        description: "Developing dedicated solar and hybrid microgrids supporting remote operations and advancing the Group's 2027 renewable goal."
      },
      {
        title: "Critical Minerals Roadmap",
        description: "Targeted expansion into energy-transition critical minerals essential for next-generation battery manufacturing."
      }
    ],
    strategicAdvantage: "Works in close synergy with IT for automated telematics and Banking for structured trade finance and commodity hedging.",
    image: "/assets/images/mining_energy.jpg",
    imageType: "ai-generated",
    accentColor: "#FFC400",
    keyStats: [
      { label: "Energy Target", value: "40% Renewable", subtext: "Target by 2027" },
      { label: "Roadmap", value: "Critical Minerals", subtext: "Battery Transition Minerals" },
      { label: "Governance", value: "Zero Waste", subtext: "Target Horizon 2030" }
    ]
  },
  {
    id: "agriculture",
    number: 4,
    title: "Agriculture",
    tagline: "Precision Farming, Agri-Processing & Regional Food Security",
    shortDescription: "Large-scale commercial crop production, automated processing facilities, and regional export logistics safeguarding food sovereignty.",
    fullDescription: "Arise Hope Group's Agriculture subsidiary champions modern agro-industrial stewardship. Integrating precision farming, telemetry-guided irrigation, and post-harvest industrial processing, the company produces high-yield food crops and agro-commodities for domestic markets and regional export routes throughout the Southern African Development Community (SADC).",
    officialActivities: [
      "Commercial crop production",
      "Agri-processing & post-harvest packaging",
      "Export logistics & cold-chain distribution",
      "Sustainable soil & water management",
      "Biofuel R&D in collaboration with Energy"
    ],
    capabilities: [
      {
        title: "Telemetry-Guided Precision Cropping",
        description: "Satellite soil moisture mapping, drone crop surveillance, and variable-rate nutrient dispersion."
      },
      {
        title: "Value-Add Industrial Processing",
        description: "Milling, sorting, and packaging facilities converting raw farm yields into value-added food products."
      },
      {
        title: "Agro-Energy Biofuel Collaborations",
        description: "Active R&D exploring agricultural biomass and sustainable feedstocks in partnership with the Energy division."
      }
    ],
    strategicAdvantage: "Leverages proprietary group IT fleet platforms and group cold-chain logistics to maximize freshness and eliminate supply delays.",
    image: "/assets/images/agriculture.jpg",
    imageType: "ai-generated",
    accentColor: "#48BB78",
    keyStats: [
      { label: "Focus", value: "Precision Agronomy", subtext: "Commercial Yield Optimization" },
      { label: "Vision", value: "Zero Waste", subtext: "Agri-Operation Target 2030" },
      { label: "Reach", value: "SADC Corridors", subtext: "Regional Food Logistics" }
    ]
  },
  {
    id: "property-investment",
    number: 5,
    title: "Property Investment",
    tagline: "High-Yield Real Estate Acquisition, Development & Asset Management",
    shortDescription: "Strategic institutional property portfolio management across prime commercial developments, logistics hubs, and mixed-use urban assets.",
    fullDescription: "The Property Investment division acquires, develops, and manages premium real estate assets across major commercial nodes in South Africa. Anchored by rigorous capital allocation and active tenant asset management, the portfolio comprises AAA-grade commercial towers, distribution logistics warehouses, and high-growth mixed-use developments.",
    officialActivities: [
      "Commercial real estate acquisition",
      "High-yield asset development",
      "Institutional property & asset management",
      "Logistics & warehousing real estate",
      "Corporate real estate structuring"
    ],
    capabilities: [
      {
        title: "Strategic Land Banking & Acquisition",
        description: "Data-led site identification along high-growth urban transport nodes and industrial development corridors."
      },
      {
        title: "Turnkey Asset Development",
        description: "Flawless collaboration with Construction Engineering to take developments from architectural blueprint to tenancy."
      },
      {
        title: "Yield & Asset Optimization",
        description: "Energy-efficient building management systems lowering operational costs while ensuring steady long-term capital yields."
      }
    ],
    strategicAdvantage: "Financed through syndicated facilities with the Banking division and constructed by the in-house Construction Engineering arm.",
    image: "/assets/images/property_investment.jpg",
    imageType: "ai-generated",
    accentColor: "#1FD2FF",
    keyStats: [
      { label: "Asset Class", value: "Commercial & Logistics", subtext: "High-Growth Corridors" },
      { label: "Model", value: "Acquire & Develop", subtext: "Long-Term Value Creation" },
      { label: "Synergy", value: "Banking & Build", subtext: "Internal Turnkey Execution" }
    ]
  },
  {
    id: "automotive-repair",
    number: 6,
    title: "Automotive Repair (Panel Beater)",
    tagline: "Advanced Collision Repair, Factory Restoration & Fleet Maintenance",
    shortDescription: "State-of-the-art vehicle restoration, electronic chassis re-alignment, robotic spray booths, and dedicated corporate fleet care.",
    fullDescription: "Setting benchmark standards in automotive collision repair, this division operates modern repair facilities equipped with digital chassis measuring systems, down-draft robotic paint booths, and computerized structural alignment. The subsidiary delivers precision factory restorations for private vehicle owners, insurance panels, and the Group's extensive commercial fleet.",
    officialActivities: [
      "Major collision repair & structural panel beating",
      "Factory-finish vehicle restoration & repainting",
      "Commercial fleet maintenance & servicing",
      "Laser chassis alignment & electronic diagnostics",
      "Insurance claim & warranty repairs"
    ],
    capabilities: [
      {
        title: "Precision Structural Realignment",
        description: "3D computerized frame jigs restoring damaged vehicle monocoques to original factory tolerances."
      },
      {
        title: "Eco-Friendly Downdraft Refinishing",
        description: "Waterborne computerized paint-matching systems within climate-controlled cleanroom booths."
      },
      {
        title: "Fleet Service SLA Management",
        description: "Dedicated rapid-turnaround maintenance contracts for group logistical transports and external corporate fleets."
      }
    ],
    strategicAdvantage: "Maintains operational uptime for the heavy transport fleets of Petroleum, Civil Engineering, and Agriculture subsidiaries.",
    image: "/assets/images/automotive_repair.svg",
    imageType: "3d-composition",
    accentColor: "#FF8A00",
    keyStats: [
      { label: "Specialty", value: "Major Collision", subtext: "Laser 3D Chassis Alignment" },
      { label: "Fleet Role", value: "Zero Downtime", subtext: "Internal Group Fleet Servicing" },
      { label: "Quality", value: "Factory Finish", subtext: "Climate Controlled Spraying" }
    ]
  },
  {
    id: "petroleum-products",
    number: 7,
    title: "Wholesale Petroleum Products",
    tagline: "Bulk Fuel Procurement, Terminal Storage & Regional Distribution",
    shortDescription: "Strategic bulk procurement, secure bulk terminal storage, and wholesale distribution of liquid fuels powering regional industry.",
    fullDescription: "As a premier fuel supply partner across Southern Africa, the Wholesale Petroleum Products division oversees the bulk procurement, storage, and cross-border distribution of refined petroleum products, including diesel 50ppm, petrol, and specialized industrial lubricants. With rigorous quality compliance and secure supply chains, the subsidiary fuels mining, transport, and agricultural sectors.",
    officialActivities: [
      "Bulk fuel procurement & wholesale trading",
      "Terminal storage & tank farm logistics",
      "Regional liquid fuel distribution & haulage",
      "Commercial fleet bulk refueling solutions",
      "Fuel quality monitoring & compliance testing"
    ],
    capabilities: [
      {
        title: "Wholesale Bulk Distribution",
        description: "Dedicated fleet of metered road tankers delivering millions of liters directly to remote mine sites and industrial depots."
      },
      {
        title: "Terminal Storage & Security",
        description: "Secure, high-capacity tank storage ensuring regional buffer stocks against global fuel market volatility."
      },
      {
        title: "Real-Time Telematics & Tracking",
        description: "Custom IT monitoring tracking fuel volumes, GPS routes, and tank levels to guarantee zero contamination and loss."
      }
    ],
    strategicAdvantage: "Secures preferential wholesale energy pricing for the entire group while powering external commercial transport hubs.",
    image: "/assets/images/petroleum_products.jpg",
    imageType: "ai-generated",
    accentColor: "#FF8A00",
    keyStats: [
      { label: "Products", value: "Diesel 50ppm & Fuels", subtext: "Refined Liquid Petroleum" },
      { label: "Network", value: "Regional Bulk", subtext: "Terminals & Transport Haulage" },
      { label: "Security", value: "Quality Tested", subtext: "Zero-Loss Telematics" }
    ]
  },
  {
    id: "banking-financial",
    number: 8,
    title: "Banking & Financial Services",
    tagline: "Corporate Lending, Structured Trade Finance & Treasury Solutions",
    shortDescription: "Sophisticated corporate financial architectures, capital syndication, trade finance instruments, and institutional treasury advisory.",
    fullDescription: "The Banking & Financial Services arm provides the financial backbone for Arise Hope Group's expansive commercial endeavors and external corporate clients. Specialising in structured trade finance, asset-backed lending, project funding syndication, and risk management, the division accelerates capital deployment across Southern Africa's high-growth sectors.",
    officialActivities: [
      "Corporate lending & structured credit facilities",
      "Trade finance & international letters of credit",
      "Treasury solutions & foreign exchange risk hedging",
      "Capital project syndication & debt structuring",
      "Digital banking platforms & working capital credit"
    ],
    capabilities: [
      {
        title: "Structured Project Syndication",
        description: "Structuring capital for mega-infrastructure, mining expansions, and commercial real estate assets."
      },
      {
        title: "Cross-Border Trade Facilities",
        description: "Letters of credit and export guarantees facilitating agricultural and petroleum cross-border commodity trade."
      },
      {
        title: "Digital Financial Architecture",
        description: "Cloud-native banking interfaces delivering agile corporate cash management and enterprise credit assessment."
      }
    ],
    strategicAdvantage: "Directly funds group infrastructure pipelines, reducing external banking costs and accelerating investment horizons.",
    image: "/assets/images/banking_financial.svg",
    imageType: "3d-composition",
    accentColor: "#FFC400",
    keyStats: [
      { label: "Mandate", value: "Corporate & Trade", subtext: "Asset-Backed Syndication" },
      { label: "Synergy", value: "Capital Catalyst", subtext: "Funds Group Megaprojects" },
      { label: "Roadmap", value: "Digital Platforms", subtext: "Mobile Enterprise Banking" }
    ]
  },
  {
    id: "information-technology",
    number: 9,
    title: "Information Technology",
    tagline: "Enterprise Software, Systems Integration & Resilient Cybersecurity",
    shortDescription: "Custom cloud-native architectures, enterprise resource integration, AI-driven operational telemetry, and robust cyber defense.",
    fullDescription: "Arise Hope Group's Information Technology division acts as the digital engine driving automation and intelligence across all ten subsidiaries. Developing custom ERP platforms, IoT telemetry sensors, and bank-grade cybersecurity frameworks, this division equips the entire Group with proprietary technological superiority.",
    officialActivities: [
      "Custom enterprise software development",
      "Cloud systems integration & architecture",
      "Cybersecurity defense & SOC management",
      "Industrial IoT telemetry & fleet analytics",
      "AI-driven predictive data intelligence"
    ],
    capabilities: [
      {
        title: "Proprietary Group Enterprise Stack",
        description: "Integrated real-time financial, supply chain, and operational telemetry dashboards connecting all 10 subsidiaries."
      },
      {
        title: "Bank-Grade Cyber Defense",
        description: "24/7 Security Operations Centre (SOC) safeguarding financial transactions, sensitive IP, and industrial control systems."
      },
      {
        title: "IoT & Predictive Analytics",
        description: "Sensor deployments across mining trucks, petroleum storage tanks, and agricultural fields for predictive maintenance."
      }
    ],
    strategicAdvantage: "Digital nervous system uniting all group operations, eliminating third-party software licensing overheads.",
    image: "/assets/images/information_technology.svg",
    imageType: "3d-composition",
    accentColor: "#1FD2FF",
    keyStats: [
      { label: "Architecture", value: "Cloud-Native", subtext: "Custom ERP & Telemetry" },
      { label: "Security", value: "Bank-Grade SOC", subtext: "Zero-Trust Cyber Defense" },
      { label: "Roadmap", value: "AI Analytics", subtext: "Predictive Enterprise Intelligence" }
    ]
  },
  {
    id: "import-export-freight",
    number: 10,
    title: "Import, Export & Freight Forwarding",
    tagline: "International Trade, Freight Forwarding & Cross-Border Cargo Coordination",
    shortDescription: "Import and export trading, international freight forwarding and cargo coordination connecting South African and African businesses with global suppliers and markets.",
    fullDescription: "The Import, Export & Freight Forwarding division connects African businesses with international suppliers and markets. It coordinates sourcing, shipping, documentation and cross-border cargo movement by sea, air and road. Customs clearing and other regulated activities are carried out through licensed partners until the required authorisations are held.",
    officialActivities: [
      "Import and export of goods and commodities",
      "International freight forwarding (sea, air and road)",
      "Customs documentation and clearing through licensed agents",
      "Cross-border cargo and shipment coordination",
      "Supplier sourcing, verification and procurement"
    ],
    capabilities: [
      {
        title: "Import & Export Trading",
        description: "Sourcing and supplying agricultural, industrial and commercial products between South Africa, SADC, Asia, Europe and the Middle East."
      },
      {
        title: "Freight Forwarding",
        description: "Coordinated sea, air and road freight with shipment tracking and port and terminal coordination."
      },
      {
        title: "Documentation & Compliance",
        description: "Commercial invoices, shipping documents and customs support, with regulated clearing handled by licensed customs clearing agents."
      }
    ],
    strategicAdvantage: "Gives the Group and its clients a single, coordinated route from international supplier to final delivery.",
    image: "/assets/images/import_export_freight.svg",
    imageType: "3d-composition",
    accentColor: "#2E86DE",
    keyStats: [
      { label: "Services", value: "Import & Export", subtext: "Sea, Air & Road Freight" },
      { label: "Markets", value: "SADC & Global", subtext: "Africa, Asia, Europe, Middle East" },
      { label: "Compliance", value: "Licensed Partners", subtext: "Customs via Authorised Agents" }
    ]
  }
];

export const STRATEGIC_SYNERGIES: StrategicSynergy[] = [
  {
    id: "integrated-project-delivery",
    title: "Integrated Project Delivery",
    sectorsInvolved: ["Construction Engineering", "Civil Engineering", "Mining & Energy Resources"],
    description: "Combine engineering and resource capabilities to execute turnkey infrastructure programmes with zero contractor interface friction.",
    impact: "Reduces procurement cycle time by up to 35% while ensuring end-to-end quality control from earthworks to structural commissioning."
  },
  {
    id: "supply-chain-logistics",
    title: "Supply Chain & Logistics Optimisation",
    sectorsInvolved: ["Wholesale Petroleum Products", "Automotive Repair", "Agriculture", "Information Technology"],
    description: "Leverage petroleum distribution networks and proprietary IT platforms to streamline resource flow, reduce lead times, and optimize fleet uptime.",
    impact: "Uninterrupted bulk fuel delivery and in-house fleet maintenance maintain continuous 24/7 operating rhythms across all logistics nodes."
  },
  {
    id: "financial-investment-leverage",
    title: "Financial & Investment Leverage",
    sectorsInvolved: ["Banking & Financial Services", "Property Investment", "Construction Engineering"],
    description: "Use the banking arm to structure financing solutions for internal projects, strategic acquisitions, and real estate development.",
    impact: "Eliminates prohibitive third-party syndication fees and unlocks flexible balance sheet leverage for capital development."
  },
  {
    id: "technology-enablement",
    title: "Technology Enablement",
    sectorsInvolved: ["Information Technology", "All 10 Subsidiaries"],
    description: "Deploy custom software, IoT telemetry, and data analytics group-wide to enhance operational efficiency, safety, and quality.",
    impact: "Real-time visibility across supply chains, fleet locations, treasury positions, and project completion milestones."
  },
  {
    id: "cross-sector-innovation",
    title: "Cross-Sector Innovation",
    sectorsInvolved: ["Agriculture", "Mining & Energy Resources", "Information Technology"],
    description: "Foster R&D collaborations between agriculture and energy divisions on biofuel, sustainable farming practices, and captive clean power.",
    impact: "Accelerates progress toward the Group's 40% renewable target by 2027 while unlocking circular economy revenues."
  }
];

export const SUSTAINABILITY_COMMITMENTS = {
  title: "Sustainability & Social Responsibility",
  subtitle: "Corporate Commitments & ESG Targets",
  disclaimer: "These targets represent company commitments and forward-looking strategic initiatives actively managed under group governance.",
  pillars: [
    {
      title: "Renewable Energy Transition",
      target: "40% Renewable Electricity by 2027",
      description: "Targeted deployment of captive solar photovoltaic farms and hybrid power systems across mining operations and agricultural hubs to supply 40% of Group electrical consumption.",
      metric: "40%",
      timeframe: "By 2027",
      sdg: "SDG 7: Affordable & Clean Energy"
    },
    {
      title: "Zero-Waste Industrial Ambition",
      target: "Zero-Waste Operations by 2030",
      description: "Implementing circular industrial processes, agricultural composting, scrap metal recycling in automotive repairs, and effluent water re-treatment.",
      metric: "Zero-Waste",
      timeframe: "Target Horizon 2030",
      sdg: "SDG 12: Responsible Consumption"
    },
    {
      title: "Community Upliftment & Human Capital",
      target: "Education, Healthcare & Vocational Training",
      description: "Direct community partnerships investing in accredited technical apprenticeships, rural primary health clinics, and STEM education scholarships in operating regions.",
      metric: "Tri-Pillar",
      timeframe: "Ongoing Active Programme",
      sdg: "SDG 4: Quality Education & SDG 8: Decent Work"
    },
    {
      title: "Governance & ESG Transparency",
      target: "Annual Sustainability Report",
      description: "Publishing transparent annual sustainability reporting tracking emissions intensity, gender diversity, safety incident rates, and local supplier participation.",
      metric: "Annual",
      timeframe: "Published Annually",
      sdg: "SDG 16: Peace, Justice & Strong Institutions"
    }
  ]
};

export const FUTURE_PRIORITIES: FuturePriority[] = [
  {
    number: 1,
    title: "Critical Minerals Expansion for Battery Production",
    horizon: "2025 – 2028",
    pillar: "Natural Resources",
    description: "Expand the mining portfolio to include critical minerals (lithium, nickel, manganese) essential for global energy transition batteries and renewable storage."
  },
  {
    number: 2,
    title: "Regional Food Security & Agricultural Processing",
    horizon: "2025 – 2027",
    pillar: "Agro-Industry",
    description: "Scale agricultural processing capacity and bulk storage silos to strengthen Southern African regional food reserves and export corridors."
  },
  {
    number: 3,
    title: "Digital Banking & Mobile Financial Inclusion",
    horizon: "2026 – 2029",
    pillar: "Financial Services",
    description: "Grow digital banking services across urban and rural enterprise markets via mobile platforms, facilitating MSME working capital credit."
  },
  {
    number: 4,
    title: "AI-Driven Enterprise Analytics & Cloud-Native Architectures",
    horizon: "2025 – 2027",
    pillar: "Information Technology",
    description: "Enhance IT offerings with proprietary AI-driven operational telemetry, predictive asset maintenance, and cloud-native group infrastructure."
  },
  {
    number: 5,
    title: "Cross-Border Infrastructure Joint Ventures",
    horizon: "2026 – 2030",
    pillar: "Civil & Construction",
    description: "Pursue strategic public-private partnerships (PPP) and joint ventures in major transport, energy, and water infrastructure across neighbouring SADC countries."
  }
];

export const GOVERNANCE_FRAMEWORK = {
  boardDescription: "Arise Hope Group operates under a rigorous governance framework featuring an independent board of directors chaired by the founder, ensuring long-term shareholder value creation, regulatory adherence, and strict ethical standards.",
  committees: [
    {
      name: "Audit Committee",
      mandate: "Oversees internal financial controls, quarterly reporting accuracy, external audit compliance, and enterprise risk accounting."
    },
    {
      name: "Risk Committee",
      mandate: "Evaluates systemic market risk, workplace safety standards, geological volatility, foreign exchange exposures, and regulatory developments."
    },
    {
      name: "Remuneration Committee",
      mandate: "Ensures executive compensation aligns with long-term ESG benchmarks, sustainable profitability, and talent retention."
    }
  ],
  executiveLeadershipRoles: [
    {
      title: "Chief Executive Officer (CEO)",
      focus: "Group strategic vision, capital allocation, institutional stakeholder relations, and overall conglomerate leadership."
    },
    {
      title: "Chief Operating Officer (COO)",
      focus: "Cross-sector operational synergy, subsidiary performance benchmarks, procurement efficiency, and safety standards."
    },
    {
      title: "Chief Financial Officer (CFO)",
      focus: "Treasury management, debt syndication, financial reporting compliance, and balance sheet resilience."
    },
    {
      title: "Group Head of Strategy & M&A",
      focus: "Portfolio expansion, cross-border joint ventures, critical mineral acquisitions, and strategic partnerships."
    },
    {
      title: "Group Head of Sustainability & ESG",
      focus: "Carbon reduction targets, 40% renewable energy roadmap, community development initiatives, and annual ESG reporting."
    },
    {
      title: "Managing Directors (Subsidiaries)",
      focus: "Operational autonomy and dedicated P&L accountability across each of the ten specialized subsidiary businesses."
    }
  ]
};
