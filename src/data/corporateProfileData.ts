// Content for the Corporate Profile & Business Plan page (/corporate-profile).
// All figures are illustrative planning assumptions, as stated in the document.

export type Block =
  | { t: 'p'; text: string; label?: string }
  | { t: 'h'; text: string }
  | { t: 'list'; items: string[]; title?: string; cols?: boolean }
  | { t: 'table'; head: string[]; rows: string[][]; title?: string; numeric?: boolean; totalRow?: boolean }
  | { t: 'note'; text: string; title?: string; tone?: 'warn' | 'info' }
  | { t: 'groups'; groups: { title: string; sub?: string; items: string[] }[]; title?: string; cols?: 2 | 3 }
  | { t: 'cards'; items: { title: string; text: string }[]; title?: string; cols?: 2 | 3 | 4 }
  | { t: 'steps'; items: string[]; title?: string }
  | { t: 'quote'; text: string }
  | { t: 'links'; items: { label: string; url: string }[] }
  | { t: 'visual'; name: VisualName };

export type VisualName =
  | 'structure' | 'ecosystem' | 'organogram' | 'checklist'
  | 'timeline' | 'revenueChart' | 'ebitdaChart' | 'capitalChart';

export interface Section {
  no: string;
  title: string;
  blocks: Block[];
  // Division-only fields (Part B)
  icon?: string;
  mandate?: string;
  tags?: string[];
}

export interface Part {
  id: string;
  letter: string;
  title: string;
  tocTitle: string;
  sections: Section[];
}

/* ------------------------------------------------------------------ */
/* Cover / overview                                                    */
/* ------------------------------------------------------------------ */

export const COVER = {
  company: 'ARISE HOPE GROUP (PTY) LTD',
  title: 'Corporate Profile & Business Plan',
  slogan: 'Building Businesses. Connecting Markets. Creating Opportunities.',
  regions: 'SOUTH AFRICA | AFRICAN MARKETS | GLOBAL TRADE',
  status: 'Registered – Pre-operational development stage',
};

export const OVERVIEW: Block[] = [
  {
    t: 'p',
    label: 'Document purpose',
    text: 'This document establishes the proposed corporate identity, business model, subsidiary structure, strategic direction, operational framework, regulatory requirements, commercial activities and financial projections of Arise Hope Group.',
  },
  {
    t: 'list',
    title: 'Intended stakeholders',
    items: [
      'Shareholders and directors',
      'Investors and financial institutions',
      'Government departments and public institutions',
      'Corporate clients and business partners',
      'Suppliers and international trading partners',
      'Employees and communities',
    ],
    cols: true,
  },
  {
    t: 'table',
    head: ['Item', 'Particulars'],
    rows: [
      ['Corporate status', 'Registered but not yet fully operational.'],
      ['Proposed planning period', '2026–2030.'],
      ['Geographical focus', 'South Africa, the Southern African Development Community (SADC), wider African markets and international trading markets.'],
    ],
  },
  {
    t: 'note',
    tone: 'warn',
    title: 'Important corporate qualification',
    text: 'This is the proposed official business strategy for the registered group. Legal registration particulars, actual subsidiary ownership, licences, directors, addresses and financial information must be verified and inserted before external publication. The group must not represent proposed activities as already licensed or operational.',
  },
];

/* ------------------------------------------------------------------ */
/* Part C visual data                                                  */
/* ------------------------------------------------------------------ */

export const STRUCTURE_GROUPS = [
  { title: 'Commercial & Professional Services', subs: ['Arise Hope Business Solutions', 'Arise Hope Projects & Infrastructure'] },
  { title: 'Investment & Financial Services', subs: ['Arise Hope Investments & Assets', 'Arise Hope Digital Finance & Currency'] },
  { title: 'International Trade & Energy', subs: ['Arise Hope Trading & Commodities', 'Arise Hope Petroleum & Energy'] },
  { title: 'Transport & Supply Chain', subs: ['Arise Hope Logistics & Freight', 'Arise Hope Clearing & Forwarding'] },
  { title: 'Agriculture & Development', subs: ['Arise Hope Agriculture & Agro-processing', 'Arise Hope Foundation & Community Development'] },
];

export const ECOSYSTEM = [
  { name: 'Business Solutions', role: 'Advisory and opportunities' },
  { name: 'Trading', role: 'Sourcing and sales' },
  { name: 'Freight & Clearing', role: 'International movement' },
  { name: 'Logistics', role: 'Transport and delivery' },
  { name: 'Investments & Assets', role: 'Capital and infrastructure' },
  { name: 'Petroleum & Energy', role: 'Commercial energy supply' },
  { name: 'Digital Finance', role: 'Financial technology' },
  { name: 'Agriculture', role: 'Production and commodities' },
];

export const ORGANOGRAM = [
  { role: 'Finance & Administration', head: 'CFO' },
  { role: 'Operations', head: 'COO' },
  { role: 'Commercial & Marketing', head: 'Commercial Director' },
  { role: 'Investments & Assets', head: 'Investment Director' },
  { role: 'Risk & Compliance', head: 'Compliance Officer' },
  { role: 'People & Development', head: 'HR Manager' },
];

/* ------------------------------------------------------------------ */
/* Part G: 90-day plan                                                 */
/* ------------------------------------------------------------------ */

export const NINETY_DAY = [
  { period: 'Days 1–15', title: 'Corporate foundation', items: [
    'Verify CIPC company details and directors',
    'Confirm shareholder and beneficial ownership records',
    'Review the company’s registered business activities',
    'Approve the group vision, mission and strategy',
    'Identify initial commercial divisions',
  ] },
  { period: 'Days 16–30', title: 'Financial and compliance readiness', items: [
    'Review SARS tax and registration status',
    'Open or verify corporate banking arrangements',
    'Prepare financial policies and budgets',
    'Create a compliance register',
    'Obtain professional regulatory advice',
  ] },
  { period: 'Days 31–60', title: 'Commercial preparation', items: [
    'Complete corporate profile and website',
    'Prepare company capability statements',
    'Identify customers and suppliers',
    'Develop business proposals',
    'Establish strategic service-provider partnerships',
  ] },
  { period: 'Days 61–90', title: 'Market entry', items: [
    'Launch approved initial services',
    'Submit suitable supplier applications',
    'Approach corporate clients',
    'Negotiate initial contracts',
    'Implement monthly financial reporting',
  ] },
];

/* ------------------------------------------------------------------ */
/* Part H: financial data                                              */
/* ------------------------------------------------------------------ */

export const YEARS = ['2027', '2028', '2029', '2030', '2031'];

export const REVENUE_BY_DIVISION: { name: string; values: (number | null)[] }[] = [
  { name: 'Consulting and projects', values: [1.2, 2.0, 3.5, 5.0, 7.0] },
  { name: 'Trading and commodities', values: [1.5, 3.0, 5.0, 7.0, 9.0] },
  { name: 'Logistics and freight', values: [0.8, 2.0, 4.0, 7.0, 10.0] },
  { name: 'Petroleum and energy', values: [0.5, 2.0, 4.0, 7.0, 10.0] },
  { name: 'Investments and assets', values: [0.5, 1.0, 2.0, 4.0, 6.0] },
  { name: 'Agriculture', values: [0.5, 1.0, 2.0, 3.0, 4.0] },
  { name: 'Digital finance and technology', values: [null, 1.0, 1.5, 2.0, 4.0] },
];
export const REVENUE_TOTAL = [5.0, 12.0, 22.0, 35.0, 50.0];

export const INCOME_STATEMENT = {
  revenue: [5.0, 12.0, 22.0, 35.0, 50.0],
  direct: [3.5, 8.4, 15.4, 24.5, 35.0],
  gross: [1.5, 3.6, 6.6, 10.5, 15.0],
  opex: [1.3, 2.6, 4.2, 6.0, 8.5],
  ebitda: [0.2, 1.0, 2.4, 4.5, 6.5],
};

export const CAPITAL_ALLOCATION = [
  { purpose: 'Working capital', pct: 35, amount: 1400000 },
  { purpose: 'Technology and systems', pct: 20, amount: 800000 },
  { purpose: 'Logistics and equipment', pct: 20, amount: 800000 },
  { purpose: 'Staff and professional services', pct: 15, amount: 600000 },
  { purpose: 'Marketing and business development', pct: 10, amount: 400000 },
];

/* ------------------------------------------------------------------ */
/* Part J: roadmap                                                     */
/* ------------------------------------------------------------------ */

export const ROADMAP = [
  { year: '2026', title: 'Corporate establishment', target: null as string | null, items: [
    'Verify and strengthen the registered company structure.',
    'Finalise the corporate business plan.',
    'Develop the corporate brand.',
    'Complete compliance assessments.',
    'Establish the initial operating budget.',
    'Identify commercial partners.',
  ] },
  { year: '2027', title: 'Commercial launch', target: 'R5 million', items: [
    'Launch consulting and business solutions.',
    'Begin general trading and procurement.',
    'Develop project management services.',
    'Establish third-party logistics partnerships.',
    'Build the customer and supplier network.',
  ] },
  { year: '2028', title: 'Operational diversification', target: 'R12 million', items: [
    'Expand international trade.',
    'Develop freight forwarding partnerships.',
    'Build logistics capacity.',
    'Develop agricultural operations.',
    'Establish investment and asset partnerships.',
  ] },
  { year: '2029', title: 'Strategic expansion', target: 'R22 million', items: [
    'Pursue petroleum wholesale opportunities subject to licensing.',
    'Develop the digital finance partnership model.',
    'Expand warehousing and distribution.',
    'Strengthen commercial investments.',
    'Develop larger corporate contracts.',
  ] },
  { year: '2030', title: 'Regional development', target: 'R35 million', items: [
    'Expand into selected SADC markets.',
    'Strengthen import/export capabilities.',
    'Develop cross-border logistics relationships.',
    'Expand the asset portfolio.',
    'Introduce approved digital services.',
  ] },
  { year: '2031', title: 'Consolidation and maturity', target: 'R50 million', items: [
    'Strengthen the subsidiary portfolio.',
    'Expand into additional African markets.',
    'Pursue strategic acquisitions.',
    'Improve operational profitability.',
    'Build a sustainable investment portfolio.',
  ] },
];

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */

export const PARTS: Part[] = [
  /* ============================ PART A ============================ */
  {
    id: 'part-a', letter: 'A', title: 'Corporate Profile', tocTitle: 'Corporate Profile',
    sections: [
      {
        no: '1', title: 'Executive corporate introduction',
        blocks: [
          { t: 'p', text: 'Arise Hope Group is a diversified business group established with the objective of developing, managing and investing in a portfolio of commercial enterprises across multiple economic sectors.' },
          { t: 'p', text: 'The Group’s business philosophy is based on identifying opportunities, building sustainable enterprises, facilitating trade, developing strategic partnerships, managing assets and contributing to economic and community development.' },
          { t: 'p', text: 'The Group intends to establish a structured corporate ecosystem comprising specialised business divisions and subsidiaries operating in consulting, investment, project development, trading, agriculture, digital finance, digital currency, asset management, international trade, logistics, petroleum products, freight forwarding and customs clearing.' },
          { t: 'p', text: 'Through this integrated structure, Arise Hope Group aims to become a trusted business partner connecting suppliers, customers, investors, institutions and markets.' },
          { t: 'p', text: 'The Group will pursue sustainable profitability while supporting enterprise development, employment creation, skills development and economic participation.' },
        ],
      },
      {
        no: '2', title: 'Vision, mission and corporate philosophy',
        blocks: [
          { t: 'cards', cols: 3, items: [
            { title: 'Vision', text: 'To become a respected, competitive and sustainable diversified African business group with an international presence, recognised for innovation, investment, commercial excellence and economic transformation.' },
            { title: 'Mission', text: 'To establish and grow profitable businesses, deliver quality services, facilitate local and international trade, develop innovative financial and digital solutions, invest in productive assets and create opportunities that improve people’s lives.' },
            { title: 'Corporate philosophy', text: 'Arise Hope Group believes that sustainable economic development is achieved through responsible investment, entrepreneurship, innovation, collaboration and effective management of resources.' },
          ] },
          { t: 'list', title: 'Strategic objectives', items: [
            'Establish a sustainable diversified group with independently managed business divisions.',
            'Develop profitable local and international trading operations.',
            'Facilitate imports, exports, logistics and freight forwarding.',
            'Participate in the petroleum products value chain.',
            'Develop responsible digital finance and digital currency business opportunities.',
            'Build an investment and asset portfolio.',
            'Provide professional consulting and project management services.',
            'Develop agricultural and agro-processing enterprises.',
            'Establish community development and empowerment initiatives.',
            'Expand into regional and international markets.',
          ] },
        ],
      },
      {
        no: '3', title: 'Corporate values',
        blocks: [
          { t: 'table', head: ['Value', 'Corporate commitment'], rows: [
            ['Integrity', 'Ethical and transparent business practices'],
            ['Excellence', 'High standards of service and delivery'],
            ['Innovation', 'Modern solutions and new business opportunities'],
            ['Accountability', 'Responsible leadership and reporting'],
            ['Sustainability', 'Long-term commercial viability'],
            ['Partnership', 'Strong local and international relationships'],
            ['Empowerment', 'Economic participation and job creation'],
            ['Compliance', 'Respect for laws and regulatory requirements'],
          ] },
        ],
      },
      {
        no: '4', title: 'Corporate positioning',
        blocks: [
          { t: 'p', text: 'Arise Hope Group will position itself as a diversified commercial enterprise and investment group with capabilities across business services, trade, finance, logistics, assets and development.' },
          { t: 'p', text: 'Its market positioning will be built around four pillars:' },
          { t: 'cards', cols: 4, items: [
            { title: 'Global connectivity', text: 'Connecting African businesses with international suppliers and markets.' },
            { title: 'Investment', text: 'Building sustainable assets and commercial enterprises.' },
            { title: 'Diversification', text: 'Operating complementary businesses across several sectors.' },
            { title: 'Transformation', text: 'Supporting employment, entrepreneurship and communities.' },
          ] },
        ],
      },
      {
        no: '5', title: 'Corporate structure and subsidiary framework',
        blocks: [
          { t: 'p', text: 'The recommended structure is a holding company supported by specialised operating subsidiaries.' },
          { t: 'visual', name: 'structure' },
          { t: 'note', tone: 'info', text: 'Proposed group structure. These are proposed business names, not confirmation of separately registered legal entities.' },
          { t: 'p', text: 'The holding company will provide strategic leadership, group governance, capital allocation, financial oversight and performance management.' },
          { t: 'list', title: 'Each operating subsidiary should have', cols: true, items: [
            'A defined business mandate.',
            'A business plan and annual budget.',
            'A designated management team.',
            'Its own operational bank account where appropriate.',
            'Independent financial records.',
            'Relevant licences and registrations.',
            'Performance targets.',
            'Risk management and compliance procedures.',
          ] },
          { t: 'p', text: 'The Group should not create all subsidiaries immediately. It should initially operate through the parent company and introduce separately incorporated subsidiaries when justified by regulatory requirements, operational scale, liability management and investment needs.' },
        ],
      },
    ],
  },

  /* ============================ PART B ============================ */
  {
    id: 'part-b', letter: 'B', title: 'Detailed Business Divisions', tocTitle: 'Business Divisions',
    sections: [
      {
        no: '6', title: 'Arise Hope Business Solutions & Consulting', icon: 'briefcase', tags: ['Phase 1'],
        mandate: 'To provide professional business advisory, consulting, management and enterprise development services to public and private sector organisations.',
        blocks: [
          { t: 'list', title: 'Core services', cols: true, items: [
            'Business plan development.', 'Corporate strategy and restructuring.', 'Business feasibility studies.',
            'Financial and operational planning.', 'Tender and proposal development.', 'Business registration support.',
            'Project management consultancy.', 'Procurement advisory.', 'Market research.',
            'Corporate training and development.', 'Enterprise and supplier development.',
          ] },
          { t: 'p', label: 'Target customers', text: 'Government institutions, municipalities, SMEs, corporates, entrepreneurs, investors and development organisations.' },
          { t: 'p', label: 'Revenue model', text: 'Consulting fees, retainers, professional service contracts, training fees and project advisory fees.' },
          { t: 'p', label: 'Strategic objective', text: 'Establish Arise Hope Group as a trusted corporate solutions provider and use this division to build relationships that support the wider group.' },
        ],
      },
      {
        no: '7', title: 'Arise Hope Investments & Asset Management', icon: 'landmark', tags: ['Phase 2'],
        mandate: 'To identify, acquire, manage and develop income-generating investments and productive assets.',
        blocks: [
          { t: 'list', title: 'Investment activities', cols: true, items: [
            'Equity investments in private businesses.', 'Strategic joint ventures.', 'Acquisition of operating businesses.',
            'Commercial property investments.', 'Industrial and agricultural assets.', 'Transport and logistics assets.',
            'Equipment and machinery investments.', 'Infrastructure partnerships.', 'Long-term asset development.',
          ] },
          { t: 'p', label: 'Asset portfolio strategy', text: 'The Group intends to build an asset portfolio consisting of:' },
          { t: 'table', head: ['Asset category', 'Strategic purpose'], rows: [
            ['Commercial property', 'Rental income and capital appreciation'],
            ['Warehouses', 'Storage and distribution'],
            ['Trucks and trailers', 'Logistics capacity'],
            ['Agricultural land', 'Food production'],
            ['Industrial equipment', 'Commercial operations'],
            ['Digital infrastructure', 'Technology services'],
            ['Business equity', 'Long-term investment returns'],
            ['Petroleum infrastructure', 'Energy supply opportunities'],
          ] },
          { t: 'list', title: 'Revenue streams', cols: true, items: [
            'Rental income.', 'Dividends.', 'Capital gains.', 'Joint venture profits.', 'Equipment leasing.',
            'Asset utilisation fees.', 'Returns from wholly owned operating businesses.',
          ] },
          { t: 'p', label: 'Investment policy', text: 'All investments should undergo commercial, financial, legal and technical due diligence. The Group should avoid speculative investments that expose operating capital to unacceptable losses.' },
          { t: 'note', tone: 'warn', title: 'Regulatory authorisation', text: 'Where the division provides investment advice, portfolio management, financial products or intermediary services to external customers, it must first establish the applicable regulatory authorisations.' },
        ],
      },
      {
        no: '8', title: 'Arise Hope Projects & Infrastructure Development', icon: 'hardhat', tags: ['Phase 1'],
        mandate: 'To identify, develop, coordinate and manage commercial, infrastructure and development projects.',
        blocks: [
          { t: 'list', title: 'Areas of operation', cols: true, items: [
            'Commercial property development.', 'Construction project coordination.', 'Infrastructure development partnerships.',
            'Industrial development.', 'Community infrastructure.', 'Renewable energy projects.',
            'Water and sanitation project opportunities.', 'Supply and installation projects.',
            'Government and corporate project implementation.', 'Project monitoring and evaluation.',
          ] },
          { t: 'p', label: 'Operating model', text: 'The division will identify opportunities, conduct feasibility studies, form partnerships, prepare proposals, secure contracts and oversee project implementation.' },
          { t: 'list', title: 'Revenue streams', cols: true, items: [
            'Project management fees.', 'Contract income.', 'Development management fees.',
            'Procurement and supply margins.', 'Joint venture returns.', 'Professional consultancy fees.',
          ] },
          { t: 'p', text: 'The division may subcontract specialist construction and engineering services to appropriately registered and qualified contractors.' },
        ],
      },
      {
        no: '9', title: 'Arise Hope Trading & International Commodities', icon: 'globe', tags: ['Phase 1 / 2'],
        mandate: 'To conduct local and international trade in general merchandise, commodities, industrial products and commercial supplies.',
        blocks: [
          { t: 'list', title: 'Product categories', cols: true, items: [
            'Agricultural products.', 'Food commodities.', 'Industrial raw materials.', 'Building and construction materials.',
            'Machinery and equipment.', 'Office and commercial supplies.', 'Consumer goods.', 'Packaging materials.',
            'Cleaning products.', 'Selected energy-related products, subject to applicable licensing.',
          ] },
          { t: 'list', title: 'Trading activities', cols: true, items: [
            'Wholesale distribution.', 'Import and export.', 'Supplier representation.', 'Commodity sourcing.',
            'Bulk purchasing.', 'Distribution agreements.', 'Commercial procurement.', 'International trading partnerships.',
          ] },
          { t: 'p', label: 'Target markets', text: 'South Africa, SADC countries, selected African markets, Asia, Europe and the Middle East, subject to product-specific trade controls and commercially viable routes.' },
          { t: 'list', title: 'Revenue model', cols: true, items: [
            'Wholesale trading margins.', 'Import and export margins.', 'Supply agreements.',
            'Distribution commissions.', 'Sourcing and procurement fees.', 'Agency and representation fees.',
          ] },
          { t: 'steps', title: 'International trade operating process', items: [
            'International supplier identification',
            'Product verification and due diligence',
            'Purchase agreement and payment arrangements',
            'Shipping, customs and logistics',
            'Delivery and customer acceptance',
            'Invoice settlement and profit realisation',
          ] },
          { t: 'p', text: 'The Group should use written purchase orders, verified supplier bank details, commercial invoices, appropriate shipping documentation and independent inspection where required.' },
        ],
      },
      {
        no: '10', title: 'Arise Hope Logistics & Supply Chain Management', icon: 'truck', tags: ['Phase 1'],
        mandate: 'To provide integrated transport, cargo handling, warehousing, distribution and supply chain solutions.',
        blocks: [
          { t: 'list', title: 'Services', cols: true, items: [
            'Road freight.', 'Cargo transportation.', 'General logistics.', 'Warehousing.', 'Distribution.', 'Fleet management.',
            'Transport coordination.', 'Supply chain management.', 'Cargo tracking.', 'Third-party logistics (3PL).',
            'Cross-border transport coordination.', 'Contract logistics.',
          ] },
          { t: 'p', label: 'Operational options', text: 'The division can initially operate using third-party transport providers before acquiring its own vehicles.' },
          { t: 'p', text: 'This approach reduces capital requirements while enabling the Group to build a customer base and establish reliable transport partnerships.' },
          { t: 'list', title: 'Revenue streams', cols: true, items: [
            'Freight charges.', 'Transport management fees.', 'Warehousing fees.', 'Distribution charges.',
            'Logistics contracts.', 'Fleet and equipment leasing.', 'Cargo handling fees.',
          ] },
        ],
      },
      {
        no: '11', title: 'Arise Hope Clearing & Freight Forwarding', icon: 'ship', tags: ['Phase 2', 'Regulated activity'],
        mandate: 'To facilitate the movement of imported and exported goods through international shipping, freight forwarding, customs documentation and clearing services.',
        blocks: [
          { t: 'list', title: 'Services', cols: true, items: [
            'Import customs clearance.', 'Export customs clearance.', 'International freight forwarding.', 'Sea freight coordination.',
            'Air freight coordination.', 'Road freight coordination.', 'Customs documentation.', 'Cargo insurance facilitation.',
            'Port and terminal coordination.', 'Shipment tracking.', 'Customs tariff classification support.',
            'Import and export documentation.', 'Cross-border cargo coordination.',
          ] },
          { t: 'list', title: 'Revenue model', cols: true, items: [
            'Customs clearance service fees.', 'Freight forwarding commissions.', 'Documentation fees.',
            'Cargo coordination fees.', 'Shipment handling fees.', 'Logistics management fees.',
          ] },
          { t: 'note', tone: 'warn', title: 'Operating requirements', text: 'The company must obtain the appropriate SARS customs clearing-agent licence before lodging customs declarations for reward on behalf of clients. SARS specifies application documentation and relevant industry experience requirements.' },
          { t: 'p', text: 'Initially, Arise Hope Group can partner with existing licensed customs clearing agents while building its experience, systems and compliance capacity.' },
          { t: 'p', text: 'It should clearly distinguish freight forwarding, which may be arranged through service providers, from the regulated customs declaration and clearing functions.' },
        ],
      },
      {
        no: '12', title: 'Arise Hope Petroleum & Energy Products', icon: 'fuel', tags: ['Phase 2', 'Regulated activity'],
        mandate: 'To participate in the petroleum and energy products supply chain through lawful sourcing, wholesale distribution, commercial supply and strategic partnerships.',
        blocks: [
          { t: 'list', title: 'Proposed product categories', cols: true, items: [
            'Diesel.', 'Petrol.', 'Paraffin.', 'Lubricants.', 'Industrial fuel products.', 'Approved petroleum-related products.',
          ] },
          { t: 'list', title: 'Potential customers', cols: true, items: [
            'Transport companies.', 'Mining companies.', 'Agricultural businesses.', 'Industrial customers.',
            'Construction companies.', 'Commercial fleet operators.', 'Licensed fuel retailers.', 'Approved distributors.',
          ] },
          { t: 'list', title: 'Business activities', cols: true, items: [
            'Petroleum product sourcing.', 'Wholesale supply.', 'Commercial fuel distribution.', 'Fuel procurement contracts.',
            'Supplier and distributor partnerships.', 'Petroleum logistics coordination.', 'Energy-sector investment opportunities.',
          ] },
          { t: 'list', title: 'Revenue model', cols: true, items: [
            'Wholesale distribution margins.', 'Supply contract income.', 'Procurement and agency fees where permitted.',
            'Logistics coordination fees.', 'Approved storage and distribution income.',
          ] },
          { t: 'note', tone: 'warn', title: 'Petroleum compliance and operating model', text: 'South African petroleum activities are regulated under the Petroleum Products Act and related licensing requirements.' },
          { t: 'p', text: 'The Group must establish which activities require wholesale, retail, manufacturing or other authorisation before commencing them. A wholesale licence is relevant to the licensed wholesale activities described by the Department, while retail sales to the public involve separate site and retail licensing requirements.' },
          { t: 'p', text: 'The recommended initial model is to operate through licensed petroleum suppliers and distributors, with Arise Hope Group acting only within the legal scope of its own activities.' },
          { t: 'p', text: 'The Group should not purchase, store, transport or resell controlled petroleum products without confirming the relevant permissions, safety requirements, insurance and environmental obligations.' },
        ],
      },
      {
        no: '13', title: 'Arise Hope Digital Finance, Digital Banking & Currency', icon: 'coins', tags: ['Phase 3', 'Regulated activity'],
        mandate: 'To explore and develop technology-driven financial solutions that support digital commerce, financial accessibility and secure transactions.',
        blocks: [
          { t: 'note', tone: 'warn', text: 'This is a strategically important but highly regulated division.' },
          { t: 'groups', title: 'Proposed business activities', cols: 2, groups: [
            { title: 'A. Digital finance', items: ['Digital payment technology partnerships.', 'Electronic payment solutions.', 'Digital transaction platforms.', 'Business payment integrations.', 'Digital financial literacy.'] },
            { title: 'B. Digital currency and blockchain', items: ['Blockchain-based commercial solutions.', 'Digital asset technology.', 'Crypto-asset-related services where authorised.', 'Digital asset information and education.', 'Blockchain transaction infrastructure partnerships.', 'Tokenisation research and development.'] },
            { title: 'C. Digital banking', items: ['Digital financial interfaces.', 'Financial technology applications.', 'Payment account integration.', 'Business financial management tools.', 'Partnerships with licensed banks and payment providers.'] },
            { title: 'D. Digital commerce', items: ['E-commerce payment integration.', 'Business transaction platforms.', 'International payment technology partnerships.', 'Digital invoicing and reconciliation.'] },
          ] },
          { t: 'p', label: 'Recommended launch model', text: 'Arise Hope Group should not initially attempt to establish a full commercial bank or independently operate an unlicensed cryptocurrency exchange.' },
          { t: 'steps', title: 'Instead, it should adopt a partnership-led fintech model', items: [
            'Develop a digital financial services strategy.',
            'Identify licensed banking and payment partners.',
            'Establish the technology and cybersecurity infrastructure.',
            'Obtain specialist regulatory advice.',
            'Apply for required licences and registrations where applicable.',
            'Launch services only after the necessary approvals and agreements are in place.',
          ] },
          { t: 'p', text: 'The FSCA requires relevant financial services providers to obtain authorisation, and crypto-asset service providers must obtain the applicable licence.' },
          { t: 'p', text: 'The FIC also imposes anti-money-laundering and customer due diligence obligations on relevant crypto-asset service providers.' },
          { t: 'p', text: 'Digital banking activities must be distinguished from providing software or payment technology to a licensed bank. Conducting the business of a bank requires appropriate authorisation through the Prudential Authority.' },
          { t: 'list', title: 'Potential revenue model', cols: true, items: [
            'Software licensing.', 'Technology service fees.', 'Platform subscriptions.', 'Business-to-business integration fees.',
            'Authorised digital asset service fees.', 'Financial technology partnerships.', 'Enterprise technology consulting.',
          ] },
          { t: 'note', tone: 'warn', title: 'Regulatory boundary', text: 'No customer deposits, payment services, investment products, exchange services or custody services should be offered outside the applicable regulatory framework.' },
        ],
      },
      {
        no: '14', title: 'Arise Hope Agriculture & Agro-processing', icon: 'sprout', tags: ['Phase 1 / 2'],
        mandate: 'To develop commercial agricultural operations and contribute to food production, processing and agricultural supply chains.',
        blocks: [
          { t: 'list', title: 'Activities', cols: true, items: [
            'Crop production.', 'Livestock production.', 'Agricultural commodity trading.', 'Food processing.', 'Agro-processing.',
            'Agricultural equipment supply.', 'Farmer partnerships.', 'Agricultural distribution.', 'Food security programmes.', 'Agricultural land development.',
          ] },
          { t: 'list', title: 'Commercial opportunities', cols: true, items: [
            'Supply of fresh produce.', 'Grain and commodity sales.', 'Livestock trading.', 'Processed food products.',
            'Agricultural inputs.', 'Wholesale food distribution.', 'Contract farming.',
          ] },
          { t: 'p', label: 'Revenue model', text: 'Produce sales, processing margins, distribution income, agricultural supply contracts and farming partnerships.' },
          { t: 'p', text: 'The division should begin with commercially viable contract farming and trading arrangements before committing significant capital to land and large-scale farming infrastructure.' },
        ],
      },
      {
        no: '15', title: 'Arise Hope Foundation & Community Development', icon: 'heart', tags: ['Separately governed'],
        mandate: 'To implement structured social development and empowerment programmes that support disadvantaged communities and promote economic participation.',
        blocks: [
          { t: 'table', title: 'Flagship programmes', head: ['Programme', 'Main objective'], rows: [
            ['Arise Youth Empowerment', 'Youth development and entrepreneurship'],
            ['Women in Business', 'Women-owned enterprise development'],
            ['Skills for Employment', 'Workplace and vocational readiness'],
            ['Community Enterprise', 'Small business development'],
            ['Education for Hope', 'Education and learner support'],
            ['Agricultural Empowerment', 'Community farming initiatives'],
            ['Digital Inclusion', 'Access to digital skills'],
          ] },
          { t: 'list', title: 'Funding model', cols: true, items: [
            'Corporate social investment.', 'Donations.', 'Philanthropic funding.', 'Eligible development grants.',
            'Sponsorships.', 'Fundraising.', 'Approved partnership programmes.',
          ] },
          { t: 'p', text: 'The Foundation should be governed separately from the commercial holding company. Funds received for charitable purposes must be used according to the funding conditions and applicable law.' },
          { t: 'p', text: 'The Group should consider registering the Foundation as a separate non-profit company or other suitable legal entity, and pursue NPO registration and PBO approval where appropriate.' },
        ],
      },
    ],
  },

  /* ============================ PART C ============================ */
  {
    id: 'part-c', letter: 'C', title: 'Group Business Model', tocTitle: 'Group Business Model',
    sections: [
      {
        no: '16', title: 'How the divisions work together',
        blocks: [
          { t: 'p', text: 'The competitive strength of Arise Hope Group will come from the ability of its divisions to support one another while maintaining independent financial accountability.' },
          { t: 'list', title: 'For example', items: [
            'Trading identifies an international product supplier.',
            'Freight Forwarding coordinates international cargo movement.',
            'Clearing manages authorised customs procedures.',
            'Logistics coordinates inland distribution.',
            'Investments provide capital for appropriate assets and expansion.',
            'Petroleum supplies support eligible commercial customers.',
            'Consulting develops commercial strategies and project proposals.',
            'Digital Finance develops technology solutions through authorised partnerships.',
            'Agriculture provides opportunities for commodity trading and agro-processing.',
            'The Foundation supports community empowerment through separate programmes.',
          ] },
          { t: 'visual', name: 'ecosystem' },
        ],
      },
      {
        no: '17', title: 'Revenue diversification model',
        blocks: [
          { t: 'p', text: 'The Group will generate revenue through several independent and complementary income streams.' },
          { t: 'table', head: ['Income stream', 'Source of revenue'], rows: [
            ['Consulting', 'Professional service fees'],
            ['Investments', 'Dividends, gains and returns'],
            ['Projects', 'Contract and management fees'],
            ['Trading', 'Wholesale and retail trading margins'],
            ['Import/export', 'International trading margins'],
            ['Logistics', 'Transport and warehousing fees'],
            ['Freight forwarding', 'Freight coordination fees'],
            ['Customs clearing', 'Licensed clearing fees'],
            ['Petroleum', 'Approved wholesale and distribution margins'],
            ['Digital finance', 'Technology and authorised service fees'],
            ['Assets', 'Rentals, leasing and asset returns'],
            ['Agriculture', 'Produce and commodity sales'],
            ['Community development', 'Restricted grants and donations'],
          ] },
          { t: 'p', text: 'The commercial divisions will maintain their own profit-and-loss statements. The Foundation will have separate financial statements and funding controls.' },
        ],
      },
      {
        no: '18', title: 'Target customers and markets',
        blocks: [
          { t: 'table', head: ['Market', 'Customer opportunities'], rows: [
            ['Government', 'Supply contracts and development projects'],
            ['Mining', 'Fuel, equipment, transport and logistics'],
            ['Agriculture', 'Agricultural inputs, equipment and distribution'],
            ['Manufacturing', 'Raw materials, machinery and freight'],
            ['Retail', 'Consumer goods and distribution'],
            ['Construction', 'Building materials and project services'],
            ['International trade', 'Importers, exporters and commodity buyers'],
            ['Financial technology', 'Banks, merchants and digital businesses'],
            ['SMEs', 'Consulting, trade and business support'],
            ['NGOs and communities', 'Development programmes and partnerships'],
          ] },
        ],
      },
      {
        no: '19', title: 'Competitive advantage',
        blocks: [
          { t: 'list', title: 'Arise Hope Group intends to compete through', cols: true, items: [
            'Integrated service capabilities.', 'Strong supplier relationships.', 'Local and international market connections.',
            'A diversified portfolio of commercial activities.', 'Asset ownership and strategic partnerships.', 'Efficient project management.',
            'Technology adoption.', 'Responsible governance.', 'Long-term stakeholder relationships.',
          ] },
          { t: 'p', text: 'Its principal advantage should not simply be the number of divisions, but the quality, reliability and commercial integration of the businesses it operates.' },
        ],
      },
    ],
  },

  /* ============================ PART D ============================ */
  {
    id: 'part-d', letter: 'D', title: 'South African Legal and Regulatory Compliance', tocTitle: 'Legal & Regulatory Compliance',
    sections: [
      {
        no: '20', title: 'Corporate registration and governance compliance',
        blocks: [
          { t: 'p', text: 'Arise Hope Group is registered but not yet fully operational. The next priority is to ensure that the company is commercially, legally and administratively ready to conduct business.' },
          { t: 'h', text: '20.1 Company compliance checklist' },
          { t: 'table', head: ['Compliance area', 'Required action'], rows: [
            ['CIPC', 'Verify company registration and status'],
            ['Company records', 'Maintain MOI, director and shareholder records'],
            ['Beneficial ownership', 'Submit and maintain required disclosures'],
            ['SARS', 'Verify income tax registration and tax status'],
            ['VAT', 'Register when legally required or where appropriate'],
            ['PAYE', 'Register when employing qualifying staff'],
            ['UIF', 'Register and comply with applicable contributions'],
            ['COIDA', 'Register where applicable'],
            ['B-BBEE', 'Obtain appropriate evidence of B-BBEE status'],
            ['POPIA', 'Establish personal information protection policies'],
            ['Employment', 'Comply with applicable labour legislation'],
            ['Accounting', 'Maintain proper accounting records'],
            ['Insurance', 'Obtain suitable corporate and operational cover'],
          ] },
          { t: 'p', text: 'The company should maintain a central compliance register with responsible persons, renewal dates, application statuses and supporting documents.' },
        ],
      },
      {
        no: '21', title: 'Sector-specific regulatory requirements',
        blocks: [
          { t: 'note', tone: 'info', text: 'The following is a preliminary regulatory roadmap. The exact requirements will depend on the precise products, services, business model and legal entities used.' },
          { t: 'groups', cols: 2, groups: [
            { title: 'A. Holding company and business consulting', items: ['CIPC corporate compliance.', 'SARS tax compliance.', 'Employment and labour compliance.', 'POPIA.', 'Appropriate professional indemnity cover.', 'Additional authorisations where the consulting work involves regulated financial or professional services.'] },
            { title: 'B. Investments and assets', items: ['FSCA authorisation where regulated financial services are offered.', 'Appropriate legal structuring of investment vehicles.', 'FIC registration and AML obligations where applicable.', 'Exchange-control compliance for relevant international transactions.', 'Proper asset ownership, valuation and tax records.'] },
            { title: 'C. Digital currency and digital banking', items: ['FSCA CASP licensing where crypto-asset services are provided.', 'FIC registration and AML/CFT compliance.', 'FAIS compliance where financial advice or intermediary services are provided.', 'Prudential Authority authorisation if carrying on the business of a bank.', 'SARB/National Payment System requirements where payment activities fall within the applicable framework.', 'Cybersecurity, data protection and consumer protection.'] },
            { title: 'D. Import, export and clearing', items: ['SARS importer/exporter registration.', 'Customs clearing-agent licence for relevant clearing services.', 'Customs registration and electronic systems access.', 'Product-specific import/export permits.', 'Customs valuation and tariff classification.', 'Applicable foreign-exchange controls.'] },
            { title: 'E. Logistics and freight', items: ['Relevant vehicle and operator requirements.', 'Driver licensing and professional requirements.', 'Road transport compliance.', 'Vehicle insurance and goods-in-transit cover.', 'Occupational health and safety.', 'Cross-border permits where applicable.', 'Dangerous goods requirements where applicable.'] },
            { title: 'F. Petroleum and energy', items: ['Applicable petroleum wholesale, retail or manufacturing licences.', 'Petroleum storage and distribution compliance.', 'Environmental authorisations where required.', 'Fire and occupational safety requirements.', 'Dangerous goods transport requirements.', 'Product quality and supplier verification.'] },
            { title: 'G. Agriculture', items: ['Land-use and zoning requirements.', 'Water-use authorisations where applicable.', 'Agricultural product and food safety requirements.', 'Livestock movement and veterinary requirements.', 'Environmental and waste-management requirements.', 'Import/export permits for controlled agricultural products.'] },
            { title: 'H. Foundation', items: ['Separate legal registration.', 'NPO registration where appropriate.', 'PBO approval and tax treatment where eligible.', 'Independent financial reporting.', 'Donor and grant agreements.', 'Governance and beneficiary protection.'] },
          ] },
          { t: 'h', text: '21.1 Important regulatory distinctions' },
          { t: 'cards', cols: 2, items: [
            { title: 'Digital currency and banking', text: 'A technology business is not automatically a bank. Providing software to an authorised financial institution differs from accepting deposits or conducting banking business. The SARB’s Prudential Authority regulates bank licensing, while the National Payment System framework applies to relevant payment activities. The SARB’s Directive 2 of 2024 provides for registration requirements for specified payment-related activities.' },
            { title: 'Crypto assets', text: 'The FSCA has established a licensing framework for relevant crypto-asset service providers. The Group should obtain a formal regulatory assessment of its proposed services before launching any exchange, custody, brokerage or intermediary activity.' },
            { title: 'Customs clearing', text: 'SARS requires a licence for a person lodging customs clearance declarations for reward on behalf of another client, subject to the applicable rules.' },
            { title: 'Petroleum', text: 'Petroleum wholesale and retail activities have separate licensing requirements. The Group should not assume that a general company registration permits petroleum trading.' },
          ] },
          { t: 'h', text: '21.2 Official regulatory resources' },
          { t: 'p', text: 'The following resources should form part of the Group’s compliance reference library.' },
          { t: 'links', items: [
            { label: 'FSCA – Financial services provider and crypto-asset licensing', url: 'https://www.fsca.co.za/New-Financial-Service-Provider/' },
            { label: 'SARB – Prudential Authority and banking regulation', url: 'https://www.resbank.co.za/en/home/what-we-do/Prudentialregulation/functions-of-the-prudential-authority' },
            { label: 'SARB – Directive 2 of 2024', url: 'https://www.resbank.co.za/content/dam/sarb/what-we-do/payments-and-settlements/regulation-oversight/Directive%202%20of%202024.pdf' },
            { label: 'SARS – Customs clearing agents', url: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/clearing-agents/' },
            { label: 'SARS – Customs registration, licensing and accreditation', url: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/' },
            { label: 'South African Government – Petroleum wholesale licence', url: 'https://www.gov.za/node/727470' },
            { label: 'Department of Mineral and Petroleum Resources – Legislation', url: 'https://www.dmpr.gov.za/DOCUMENTS/Legislation/Acts' },
            { label: 'Financial Intelligence Centre – Annual Report 2025/26', url: 'https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026-1.pdf' },
          ] },
        ],
      },
    ],
  },

  /* ============================ PART E ============================ */
  {
    id: 'part-e', letter: 'E', title: 'Governance and Management', tocTitle: 'Governance & Management',
    sections: [
      {
        no: '22', title: 'Group governance framework',
        blocks: [
          { t: 'p', text: 'Arise Hope Group will operate according to a centralised corporate governance structure with decentralised operational management.' },
          { t: 'p', text: 'The Board of Directors will provide oversight, while each business division will be responsible for its own commercial performance.' },
          { t: 'h', text: '22.1 Proposed governance organogram' },
          { t: 'visual', name: 'organogram' },
        ],
      },
      {
        no: '23', title: 'Board committees',
        blocks: [
          { t: 'p', text: 'The Group should establish the following committees as its size and governance requirements justify them.' },
          { t: 'table', head: ['Committee', 'Responsibility'], rows: [
            ['Audit and Risk', 'Financial oversight, internal controls and risk'],
            ['Investment Committee', 'Capital allocation and investment approvals'],
            ['Compliance Committee', 'Regulatory compliance and legal risks'],
            ['Remuneration Committee', 'Executive remuneration and succession'],
            ['Social and Ethics Committee', 'Ethical conduct and social impact, where applicable'],
          ] },
        ],
      },
      {
        no: '24', title: 'Management responsibilities',
        blocks: [
          { t: 'groups', cols: 3, groups: [
            { title: 'Group CEO', items: ['Overall group leadership.', 'Business strategy execution.', 'Corporate partnerships.', 'Subsidiary performance.', 'Stakeholder relationships.'] },
            { title: 'Chief Financial Officer', items: ['Financial strategy.', 'Group budgets.', 'Financial statements.', 'Tax and accounting oversight.', 'Treasury and cash management.'] },
            { title: 'Chief Operating Officer', items: ['Operational performance.', 'Service delivery.', 'Procurement.', 'Business processes.', 'Operational systems.'] },
            { title: 'Commercial Director', items: ['Sales and marketing.', 'Tender management.', 'Customer acquisition.', 'Commercial contracts.', 'Strategic partnerships.'] },
            { title: 'Investment Director', items: ['Investment opportunities.', 'Asset acquisitions.', 'Due diligence.', 'Portfolio performance.', 'Investment risk.'] },
            { title: 'Compliance Officer', items: ['Regulatory monitoring.', 'Licence management.', 'Compliance reporting.', 'AML controls where applicable.', 'Corporate policy management.'] },
          ] },
        ],
      },
      {
        no: '25', title: 'Group policies and procedures',
        blocks: [
          { t: 'p', text: 'The following policies should be approved before full commercial operations:' },
          { t: 'list', cols: true, items: [
            'Corporate governance policy.', 'Financial management policy.', 'Procurement policy.', 'Delegation of authority.',
            'Anti-fraud and anti-corruption policy.', 'Conflict of interest policy.', 'Risk management policy.', 'Human resources policy.',
            'Information security policy.', 'POPIA and privacy policy.', 'Customer due diligence policy.', 'Anti-money laundering policy where applicable.',
            'Investment policy.', 'Asset management policy.', 'Supplier management policy.', 'Occupational health and safety policy.',
            'Business continuity policy.', 'Environmental and social responsibility policy.',
          ] },
        ],
      },
      {
        no: '26', title: 'Financial management and internal controls',
        blocks: [
          { t: 'p', text: 'The Group will implement a central financial reporting framework supported by separate accounting records for each subsidiary.' },
          { t: 'list', title: 'Key controls will include', cols: true, items: [
            'Annual budgets approved by the Board.', 'Monthly management accounts.', 'Bank reconciliations.', 'Segregation of financial duties.',
            'Dual authorisation of significant payments.', 'Documented procurement approvals.', 'Customer credit assessments.', 'Contract approval controls.',
            'Fixed-asset registers.', 'Monthly cash-flow forecasts.', 'Annual independent financial review or audit where required.',
          ] },
          { t: 'p', text: 'Related-party transactions between the parent company and subsidiaries must be documented, commercially justifiable and approved under an appropriate governance framework.' },
        ],
      },
    ],
  },

  /* ============================ PART F ============================ */
  {
    id: 'part-f', letter: 'F', title: 'Marketing and Commercial Development', tocTitle: 'Marketing & Commercial',
    sections: [
      {
        no: '27', title: 'Brand and marketing strategy',
        blocks: [
          { t: 'p', text: 'The Group will develop one strong parent brand supported by specialist division identities.' },
          { t: 'p', label: 'Master brand', text: 'Arise Hope Group.' },
          { t: 'p', label: 'Proposed slogan', text: '' },
          { t: 'quote', text: 'Building Businesses. Connecting Markets. Creating Opportunities.' },
          { t: 'list', title: 'Brand personality', cols: true, items: ['Professional.', 'Reliable.', 'Innovative.', 'Ethical.', 'International.', 'Development-oriented.'] },
          { t: 'table', title: 'Marketing strategy', head: ['Channel', 'Commercial purpose'], rows: [
            ['Corporate website', 'Credibility and lead generation'],
            ['LinkedIn', 'Corporate networking'],
            ['Email marketing', 'Business development'],
            ['Direct sales', 'Corporate customer acquisition'],
            ['Industry exhibitions', 'Market visibility'],
            ['Tender platforms', 'Public-sector opportunities'],
            ['Supplier networks', 'Trade relationships'],
            ['International business networks', 'Export and import partnerships'],
            ['Social media', 'Brand awareness'],
          ] },
        ],
      },
      {
        no: '28', title: 'Corporate website structure',
        blocks: [
          { t: 'list', title: 'The proposed website should have the following sections', cols: true, items: [
            'Home.', 'About Arise Hope Group.', 'Vision and Mission.', 'Leadership and Governance.', 'Business Divisions.',
            'Investments and Assets.', 'International Trade.', 'Logistics and Freight.', 'Petroleum and Energy.', 'Digital Finance.',
            'Agriculture.', 'Projects and Consulting.', 'Community Development.', 'Partnerships.', 'Careers.', 'Contact.',
          ] },
          { t: 'note', tone: 'info', text: 'The website should clearly distinguish operating services from proposed services that are awaiting regulatory approval or operational launch.' },
        ],
      },
      {
        no: '29', title: 'Business development and customer acquisition',
        blocks: [
          { t: 'p', text: 'The Group will establish a commercial development function responsible for identifying opportunities and generating sustainable revenue.' },
          { t: 'list', title: 'Key activities', cols: true, items: [
            'Develop a corporate client database.', 'Register on relevant supplier and procurement platforms.', 'Identify procurement and tender opportunities.',
            'Develop a supplier network.', 'Establish international trading contacts.', 'Negotiate commercial partnerships.',
            'Prepare corporate capability statements.', 'Build repeat customer relationships.', 'Monitor customer satisfaction.',
            'Measure conversion rates and commercial performance.',
          ] },
          { t: 'list', title: 'Strategic partnership categories', cols: true, items: [
            'Banks and financial institutions.', 'Licensed payment providers.', 'International suppliers.', 'Manufacturers.', 'Petroleum wholesalers.',
            'Freight companies.', 'Shipping lines and agents.', 'Customs clearing firms.', 'Warehousing companies.', 'Agricultural producers.',
            'Development finance institutions.', 'Government and private-sector organisations.',
          ] },
        ],
      },
    ],
  },

  /* ============================ PART G ============================ */
  {
    id: 'part-g', letter: 'G', title: 'Operational Implementation', tocTitle: 'Operational Implementation',
    sections: [
      {
        no: '30', title: 'Recommended launch strategy',
        blocks: [
          { t: 'p', text: 'Because Arise Hope Group is registered but not yet fully operational, its launch must be staged. Three categories are recommended.' },
          { t: 'groups', cols: 3, groups: [
            { title: 'Phase 1 – Initial commercial launch', sub: 'Lower regulatory complexity and relatively accessible entry', items: ['Business Solutions.', 'Projects and Consulting.', 'General Trading.', 'Sourcing and Procurement.', 'Logistics through qualified third-party providers.', 'Agricultural commodity trading, subject to product requirements.'] },
            { title: 'Phase 2 – Operational expansion', sub: 'Capital, contracts and specialist capacity required', items: ['Import and Export.', 'Freight Forwarding.', 'Licensed Customs Clearing.', 'Warehousing.', 'Agricultural Production.', 'Asset Investments.', 'Petroleum Wholesale.'] },
            { title: 'Phase 3 – Regulated strategic expansion', sub: 'Specialist licensing, governance and substantial investment', items: ['Digital Currency Services.', 'Digital Banking.', 'Regulated Payment Services.', 'Digital Asset Custody or Exchange.', 'Larger Petroleum Infrastructure.', 'International Investment Platforms.'] },
          ] },
          { t: 'p', text: 'This sequence is intended to protect the Group’s initial capital and reputation while allowing the company to develop the necessary experience and regulatory capacity.' },
        ],
      },
      {
        no: '31', title: 'First 12-month implementation plan',
        blocks: [
          { t: 'p', text: 'The first full operating year should be dedicated to establishing a credible, revenue-generating corporate platform.' },
          { t: 'table', head: ['Period', 'Key activities', 'Expected outcome'], rows: [
            ['Month 1', 'Corporate review and planning', 'Approved strategy'],
            ['Month 2', 'Compliance and financial setup', 'Operational readiness'],
            ['Month 3', 'Brand, website and corporate profile', 'Market presence'],
            ['Month 4', 'Supplier and client development', 'Business pipeline'],
            ['Month 5', 'Commercial proposals and partnerships', 'Initial agreements'],
            ['Month 6', 'Launch initial service divisions', 'First revenue'],
            ['Months 7–8', 'Trading and project expansion', 'Increased sales'],
            ['Months 9–10', 'Logistics and import/export partnerships', 'Expanded services'],
            ['Months 11–12', 'Performance review and budgeting', 'Second-year plan'],
          ] },
        ],
      },
      { no: '32', title: 'First 90-day action plan', blocks: [{ t: 'visual', name: 'checklist' }] },
    ],
  },

  /* ============================ PART H ============================ */
  {
    id: 'part-h', letter: 'H', title: 'Financial Plan and Five-Year Projections', tocTitle: 'Financial Plan',
    sections: [
      {
        no: '33', title: 'Financial strategy',
        blocks: [
          { t: 'p', text: 'The Group will pursue a disciplined growth strategy that prioritises cash flow, profitability, capital preservation and sustainable investment.' },
          { t: 'list', title: 'The initial financial strategy will focus on three objectives', items: [
            'Generate operating income through service delivery, consulting, trading and commercial projects.',
            'Reinvest a proportion of profits into productive assets and expansion.',
            'Develop capital-intensive and regulated divisions through partnerships, external investment and phased funding.',
          ] },
          { t: 'h', text: '33.1 Financial management principles' },
          { t: 'list', cols: true, items: [
            'No business division should expand without an approved budget.', 'All subsidiaries should maintain separate financial records.',
            'Operating cash must be protected.', 'Customer credit must be controlled.', 'Investments must be supported by feasibility studies.',
            'Capital-intensive projects must have identified funding.', 'The Group must maintain adequate working capital.',
            'Financial projections must be reviewed quarterly.',
          ] },
        ],
      },
      {
        no: '34', title: 'Five-year financial projections',
        blocks: [
          { t: 'note', tone: 'warn', title: 'Illustrative planning scenario', text: 'The following projections are an illustrative planning scenario for the first five operating years, 2027–2031. They are not actual company results, guaranteed returns or audited forecasts. They assume that Arise Hope Group successfully secures customers, establishes supplier relationships and introduces its divisions progressively.' },
          { t: 'h', text: '34.1 Projected annual revenue by division' },
          { t: 'visual', name: 'revenueChart' },
          { t: 'p', text: 'The forecast assumes that the digital division begins generating commercial revenue only after an appropriately authorised or partnership-based operating model has been established.' },
          { t: 'p', text: 'Revenue from the Foundation’s restricted grants and donations is excluded.' },
          { t: 'h', text: '34.2 Projected group income statement' },
          { t: 'visual', name: 'ebitdaChart' },
          { t: 'p', text: 'EBITDA represents earnings before interest, taxation, depreciation and amortisation. It is not the same as net profit or available cash.' },
          { t: 'p', text: 'The forecast excludes depreciation, finance charges, tax, exceptional items and any additional impairment adjustments. These must be included in a detailed accountant-prepared financial model.' },
          { t: 'h', text: '34.3 Key financial performance targets' },
          { t: 'table', head: ['Indicator', 'Target'], rows: [
            ['Revenue growth', 'Progressive annual growth'],
            ['Gross margin', 'Approximately 30% planning assumption'],
            ['EBITDA margin', 'Improve towards 13%'],
            ['Working capital', 'Maintain sufficient operating liquidity'],
            ['Customer concentration', 'Reduce reliance on one major client'],
            ['Bad debts', 'Minimise overdue receivables'],
            ['Financial reporting', 'Monthly management accounts'],
            ['Investment returns', 'Positive risk-adjusted returns'],
          ] },
        ],
      },
      {
        no: '35', title: 'Start-up capital and funding requirements',
        blocks: [
          { t: 'p', text: 'The initial capital requirement should be determined by the actual launch scope rather than by attempting to finance every proposed division simultaneously.' },
          { t: 'p', text: 'For initial planning, it is recommended to test a funding envelope of R3 million to R5 million, subject to feasibility studies, supplier quotations and working capital requirements.' },
          { t: 'note', tone: 'warn', text: 'This is an illustrative funding scenario, not an existing funding commitment or confirmed company requirement.' },
          { t: 'h', text: 'Proposed allocation of initial capital' },
          { t: 'visual', name: 'capitalChart' },
          { t: 'p', text: 'This initial funding envelope would support the first commercial operating platform. It does not assume that R4 million is sufficient to establish a bank, cryptocurrency exchange, major petroleum infrastructure or a large logistics fleet.' },
          { t: 'p', text: 'Those activities require separate feasibility studies, capital plans and regulatory approvals.' },
        ],
      },
      {
        no: '36', title: 'Potential funding sources',
        blocks: [
          { t: 'p', text: 'The Group should explore a combination of the following funding options:' },
          { t: 'table', head: ['Funding source', 'Proposed application'], rows: [
            ['Shareholder capital', 'Initial establishment and operating costs'],
            ['Private investors', 'Business expansion and subsidiary capital'],
            ['Strategic partners', 'Joint ventures and commercial projects'],
            ['Bank facilities', 'Working capital and trade finance'],
            ['Asset finance', 'Trucks, machinery and equipment'],
            ['Trade finance', 'Qualifying import/export transactions'],
            ['Development finance', 'Eligible industrial and agricultural projects'],
            ['Retained profits', 'Internal growth and reinvestment'],
            ['Grants', 'Eligible community development activities'],
          ] },
          { t: 'list', title: 'Potential South African institutions to investigate', items: [
            'Industrial Development Corporation.', 'National Empowerment Fund.', 'Small Enterprise Finance Agency.', 'National Youth Development Agency.',
          ] },
          { t: 'p', text: 'Funding applications must be matched to each institution’s current eligibility criteria and the particular business project.' },
        ],
      },
    ],
  },

  /* ============================ PART I ============================ */
  {
    id: 'part-i', letter: 'I', title: 'Risk Management and Sustainability', tocTitle: 'Risk & Sustainability',
    sections: [
      {
        no: '37', title: 'Group risk management framework',
        blocks: [
          { t: 'p', text: 'The Group’s diversified activities create opportunities, but also expose it to different commercial, regulatory, operational and financial risks.' },
          { t: 'table', head: ['Risk category', 'Potential exposure', 'Mitigation'], rows: [
            ['Financial', 'Cash shortages and debt exposure', 'Cash-flow controls and budgeting'],
            ['Regulatory', 'Operating without required permissions', 'Compliance register and legal reviews'],
            ['International trade', 'Customs and foreign exchange exposure', 'Due diligence and trade controls'],
            ['Logistics', 'Cargo loss and delivery delays', 'Insurance and qualified operators'],
            ['Petroleum', 'Safety, product and environmental risks', 'Licensed partners and safety controls'],
            ['Digital finance', 'Cybercrime and financial crime', 'Security controls and regulatory compliance'],
            ['Investment', 'Loss of invested capital', 'Investment committee and due diligence'],
            ['Agriculture', 'Weather and market risks', 'Insurance and diversified production'],
            ['Projects', 'Cost overruns and delays', 'Contract controls and project monitoring'],
            ['Reputation', 'Poor service delivery', 'Quality assurance and customer protection'],
          ] },
        ],
      },
      {
        no: '38', title: 'Environmental, social and governance commitments',
        blocks: [
          { t: 'p', text: 'Arise Hope Group will adopt responsible business practices across its divisions.' },
          { t: 'groups', cols: 3, groups: [
            { title: 'Environmental responsibility', items: ['Responsible fuel and petroleum handling.', 'Waste reduction and management.', 'Sustainable agricultural practices.', 'Energy efficiency.', 'Responsible transport and logistics.', 'Compliance with environmental requirements.'] },
            { title: 'Social responsibility', items: ['Employment opportunities.', 'Youth and women empowerment.', 'Skills development.', 'Supplier development.', 'Community partnerships.', 'Fair employment practices.'] },
            { title: 'Governance responsibility', items: ['Transparent reporting.', 'Ethical leadership.', 'Anti-corruption measures.', 'Accountability.', 'Independent financial controls.', 'Responsible investment.'] },
          ] },
        ],
      },
      {
        no: '39', title: 'Key performance indicators',
        blocks: [
          { t: 'p', text: 'The Board should receive a monthly management dashboard.' },
          { t: 'table', head: ['Performance area', 'Measurement'], rows: [
            ['Revenue', 'Monthly and annual turnover'],
            ['Profitability', 'Gross profit and EBITDA'],
            ['Cash flow', 'Available cash and operating cash flow'],
            ['Sales', 'Number and value of contracts'],
            ['Trade', 'Import/export transaction volumes'],
            ['Freight', 'Cargo handled and on-time delivery'],
            ['Petroleum', 'Approved sales volume and margins'],
            ['Investments', 'Portfolio performance'],
            ['Assets', 'Utilisation and income generated'],
            ['Digital', 'Active customers and platform revenue'],
            ['Agriculture', 'Production and sales volumes'],
            ['Community', 'Number of beneficiaries and programmes'],
          ] },
        ],
      },
    ],
  },

  /* ============================ PART J ============================ */
  {
    id: 'part-j', letter: 'J', title: 'Strategic Growth Roadmap', tocTitle: 'Strategic Growth Roadmap',
    sections: [
      {
        no: '40', title: 'Five-year corporate expansion plan',
        blocks: [
          { t: 'visual', name: 'timeline' },
          { t: 'note', tone: 'info', text: 'The 2031 milestone extends the original 2026–2030 establishment strategy into a fifth operating-year projection. All revenue targets are illustrative.' },
        ],
      },
    ],
  },

  /* ============================ PART K ============================ */
  {
    id: 'part-k', letter: 'K', title: 'Stakeholder Relationships and Corporate Partnerships', tocTitle: 'Stakeholder Relationships',
    sections: [
      {
        no: '41', title: 'Stakeholder engagement strategy',
        blocks: [
          { t: 'p', text: 'Arise Hope Group recognises that sustainable growth depends on building meaningful relationships with all stakeholders.' },
          { t: 'table', head: ['Stakeholder', 'Relationship objective'], rows: [
            ['Shareholders', 'Protect ownership interests and grow company value'],
            ['Investors', 'Attract capital and strategic investment'],
            ['Government', 'Develop compliant commercial relationships'],
            ['Banks', 'Access banking and financial services'],
            ['Suppliers', 'Establish reliable supply arrangements'],
            ['Customers', 'Deliver value and maintain long-term relationships'],
            ['Employees', 'Build a professional and productive workforce'],
            ['International partners', 'Expand global trading opportunities'],
            ['Communities', 'Promote economic empowerment'],
            ['Regulators', 'Maintain transparent regulatory relationships'],
          ] },
          { t: 'list', title: 'Strategic partnership objectives — the Group will seek partnerships that provide', cols: true, items: [
            'Access to new markets.', 'Technology and specialist expertise.', 'Capital and financing.', 'International supplier networks.',
            'Distribution infrastructure.', 'Operational capacity.', 'Industry knowledge.', 'Joint venture opportunities.',
          ] },
          { t: 'p', text: 'Partnerships will be documented through appropriate agreements that define responsibilities, financial arrangements, risk allocation and performance expectations.' },
        ],
      },
    ],
  },

  /* ============================ PART L ============================ */
  {
    id: 'part-l', letter: 'L', title: 'Corporate Conclusion', tocTitle: 'Corporate Conclusion',
    sections: [
      {
        no: '42', title: 'The future of Arise Hope Group',
        blocks: [
          { t: 'p', text: 'Arise Hope Group is being positioned as a diversified African business group with the ambition to participate in multiple sectors of the economy through specialised business divisions and strategic subsidiaries.' },
          { t: 'p', text: 'Its proposed business portfolio combines traditional commercial activities with emerging opportunities in international trade, logistics, petroleum, investment, digital finance, digital currency and agriculture.' },
          { t: 'p', text: 'The Group’s long-term success will depend on its ability to establish a strong corporate foundation, secure sustainable funding, build credible partnerships, comply with applicable regulatory requirements and execute its business strategy with discipline.' },
          { t: 'p', text: 'Rather than pursuing all business opportunities simultaneously, Arise Hope Group will follow a phased development strategy that prioritises early revenue generation, operational excellence, capital preservation and responsible expansion.' },
          { t: 'p', text: 'The Group seeks to build lasting value for shareholders, customers, investors, employees, partners and communities.' },
          { t: 'p', label: 'Our corporate commitment', text: '' },
          { t: 'quote', text: 'We believe in the power of enterprise to transform lives. Through innovation, investment, international trade, responsible leadership and strategic partnerships, Arise Hope Group is committed to building businesses that create opportunities, connect markets and contribute to a stronger African economy.' },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Appendix                                                            */
/* ------------------------------------------------------------------ */

export const APPENDIX: Block[] = [
  { t: 'p', text: 'Before this document is adopted as the final externally published corporate profile, the following corporate information must be verified and inserted.' },
  { t: 'table', head: ['Information to be verified and inserted', 'Status'], rows: [
    ['Legal registration particulars', 'To be inserted'],
    ['Actual subsidiary ownership', 'To be inserted'],
    ['Licences', 'To be inserted'],
    ['Directors', 'To be inserted'],
    ['Addresses', 'To be inserted'],
    ['Financial information', 'To be inserted'],
  ] },
  { t: 'h', text: 'Proposed Board resolutions' },
  { t: 'p', text: 'The Board resolves to:' },
  { t: 'steps', items: [
    'Adopt the Group’s proposed vision, mission, corporate values and strategic objectives.',
    'Approve the proposed diversified business model and subsidiary framework, subject to appropriate legal and regulatory review.',
    'Authorise management to develop detailed operational plans and budgets for the initial business divisions.',
    'Authorise management to explore commercial partnerships, investment opportunities and appropriate funding arrangements.',
    'Require compliance with applicable South African legislation and regulatory requirements before any regulated business activity commences.',
    'Require regular financial and operational performance reporting.',
  ] },
  { t: 'h', text: 'Final recommendation for Arise Hope Group' },
  { t: 'p', text: 'There is an important strategic decision to be made now: establish Arise Hope Group as the parent company, but develop its commercial divisions according to their actual ability to generate income and their regulatory requirements.' },
  { t: 'list', title: 'Recommended priorities', items: [
    'Business consulting and projects.',
    'Trading, import and export.',
    'Logistics and freight forwarding.',
    'Investments and asset development.',
    'Petroleum products.',
    'Agriculture.',
    'IT.',
    'Digital currency and digital banking through properly authorised structures.',
    'Community development through a separately governed Foundation.',
  ] },
];
