export interface PlanetResult {
    count: number
    next: string
    previous: any
    results: Planet[]
  }
  
  export interface Planet {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: string[]
    films: string[]
    created: string
    edited: string
    url: string
  }

  export interface PlanetData {
    planetInfo: PlanetData;
  }
  