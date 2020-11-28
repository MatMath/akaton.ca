export const enum Quality {
  REPLACE_NOW = 'REPLACE_NOW',
  REPLACE_LATER = 'REPLACE_LATER',
  GOOD = 'GOOD',
  NA = 'NA',
}

export const enum SailType {
  FURLING = 'FURLING',
  STANDARD = 'STANDARD',
  NA = 'NA',
}

export interface CommentsStructure {
  user: string,
  text: string,
  date: number // timestamp format
}

export interface BoatFeature {
  value: string | number
  quality: Quality,
  dealBreaker: boolean,
  replacementCost: number,
  comments: CommentsStructure[] | []
}

interface Sail extends BoatFeature {
  type: SailType,
}

interface EngineDetails extends BoatFeature {
  power: number,
  nbrHours: number,
}

export interface GenericBoatInformation {
  version: number,
  name: string,
  id: string,
  url: string,
  dimension: {
    length: number,
    beam: number,
    draft: number
  },
  engine: EngineDetails
  electronics: {
    autopilot: BoatFeature
    battery: BoatFeature,
    solarPower: BoatFeature
  }
  sails: {
    mainsail: Sail,
    genoa: Sail,
    jib: Sail,
    spinaker: Sail,
    rigging: BoatFeature,
  },
  insideEquipment: {
    waterTank: number,
    fuelTank: number,
  },
  comfort: {
    bimini: BoatFeature
  }
  extra: {
    digny: BoatFeature
  }
}
