export interface StarshipResult {
  count: number
  next: string
  previous: any
  results: Starship[]
}

export interface Starship {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
}
export interface StarshipData {
  starshipInfo: Starship;
}
