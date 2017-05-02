export interface Fluxes {
  flux: Flux;
  date: boolean;
  category: boolean;
  description: boolean;
  flux_nb: number;
  rank: number;
  style: string;
}

export interface Flux {
  id: number;
  name: string;
  slug: string;
  site: any;
  url: string;
  description: string;
  display: boolean;
  active: boolean;
  'new': boolean;
  created_at: Date;
  updated_at: Date;
}


export interface AllItems {
  [key: string]: Item[];
}

export interface Item {
  title: string;
  url: string;
  description: string;
  date: Date;
}

export interface FluxSettings {
  description: boolean;
  flux_nb: number;
  style: string;
}

