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

export interface BasicBoatFeature {
  value: string | number,
  dealBreaker: boolean,
  comments: CommentsStructure[],
}

export interface BoatFeature extends BasicBoatFeature{
  // Section is like the title of the feature
  section: string,
  // this can  be the type or brand
  name: string,
  quality?: Quality,
  replacementCost?: number,
}

export interface Sail extends BoatFeature {
  type: SailType,
}

export interface EngineDetails extends BoatFeature {
  power: number,
  nbrHours: number,
}

export interface BoatDimension {
  length: BasicBoatFeature,
  beam: BasicBoatFeature,
  draft: BasicBoatFeature
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
  location: BasicBoatFeature,
  price: BasicBoatFeature,
  dimension: BoatDimension,
  engine: EngineDetails,
  autopilot: BoatFeature,
  battery: BoatFeature,
  solarPower: BoatFeature,
  sails: BoatSails,
  insideEquipment: BoatInsideEquipment,
  bimini: BoatFeature,
  digny: BoatFeature,
  year: BasicBoatFeature,
}
