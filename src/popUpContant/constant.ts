import { GenericBoatInformation, Quality, SailType } from './types';

export const getInitialDefaultValue = (): GenericBoatInformation => ({
  id: '',
  version: 1,
  name: 'Beneteau',
  url: '',
  dimension: {
    length: 43,
    beam: 13,
    draft: 6,
  },
  engine: {
    name: '',
    power: 55,
    nbrHours: 2340,
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 20000,
    comments: [],
  },
  autopilot: {
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  battery: {
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  solarPower: {
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  sails: {
    mainsail: {
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: true,
      replacementCost: 10000,
      comments: [],
    },
    genoa: {
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    jib: {
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    spinaker: {
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    rigging: {
      name: '',
      value: '',
      quality: Quality.NA,
      dealBreaker: true,
      replacementCost: 10000,
      comments: [],
    },
  },
  insideEquipment: {
    waterTank: 0,
    fuelTank: 0,
  },
  bimini: {
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  digny: {
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: true,
    replacementCost: 10000,
    comments: [],
  },
});

export const saveDefaultValueToStorage = (value: GenericBoatInformation): Promise<void> => new Promise((resolve) => {
  // add deppmerge
  const mergedValue = { ...getInitialDefaultValue(), ...value }; // TODO change to a deepJSON merge.
  chrome.storage.sync.set({ defaultValue: mergedValue }, () => {
    resolve();
  });
});

export const loadDefaultValueFromStorage = (): Promise<GenericBoatInformation> => new Promise((resolve) => {
  chrome.storage.sync.get(['defaultValue'], (result) => {
    resolve(result.defaultValue as GenericBoatInformation);
  });
});
