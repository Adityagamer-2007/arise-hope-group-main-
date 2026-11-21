export interface Sector {
  id: string;
  number: number;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  officialActivities: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  strategicAdvantage: string;
  image: string;
  imageType: 'ai-generated' | '3d-composition';
  accentColor: string;
  keyStats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface StrategicSynergy {
  id: string;
  title: string;
  sectorsInvolved: string[];
  description: string;
  impact: string;
}

export interface FuturePriority {
  number: number;
  title: string;
  horizon: string;
  description: string;
  pillar: string;
}

export interface GovernanceRole {
  title: string;
  mandate: string;
  committee: string;
  reportingTo: string;
}
