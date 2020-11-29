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
  name: string,
  value: string | number
  quality: Quality,
  dealBreaker: boolean,
  replacementCost: number,
  comments: CommentsStructure[] | []
}

export interface Sail extends BoatFeature {
  type: SailType,
}

export interface EngineDetails extends BoatFeature {
  power: number,
  nbrHours: number,
}

export interface BoatDimension {
  length: number,
  beam: number,
  draft: number
}

export interface BoatElectronic {
  autopilot: BoatFeature
  battery: BoatFeature,
  solarPower: BoatFeature
}

export interface BoatSails {
  mainsail: Sail,
  genoa: Sail,
  jib: Sail,
  spinaker: Sail,
  rigging: BoatFeature,
}

export interface BoatInsideEquipment {
  waterTank: number,
  fuelTank: number,
}

export interface GenericBoatInformation {
  version: number,
  name: string,
  id: string,
  url: string,
  dimension: BoatDimension,
  engine: EngineDetails,
  electronics: BoatElectronic,
  sails: BoatSails,
  insideEquipment: BoatInsideEquipment,
  comfort: {
    bimini: BoatFeature
  }
  extra: {
    digny: BoatFeature
  }
}
