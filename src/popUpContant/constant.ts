import { GenericBoatInformation, Quality, SailType } from './types';

export const getInitialDefaultValue = (): GenericBoatInformation => ({
  id: '',
  version: 1,
  name: '',
  url: '',
  year: {
    value: 0,
    dealBreaker: true,
    comments: [],
  },
  price: {
    value: 0,
    dealBreaker: true,
    comments: [],
  },
  location: {
    value: 0,
    dealBreaker: true,
    comments: [],
  },
  dimension: {
    length: {
      value: 0,
      dealBreaker: true,
      comments: [],
    },
    beam: {
      value: 0,
      dealBreaker: true,
      comments: [],
    },
    draft: {
      value: 0,
      dealBreaker: true,
      comments: [],
    },
  },
  engine: {
    name: '',
    power: 0,
    nbrHours: 0,
    section: 'Engine',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 20000,
    comments: [],
  },
  autopilot: {
    section: 'Autopilot',
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  battery: {
    section: 'Battery',
    name: '',
    value: '0KWH',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  solarPower: {
    section: 'Solar',
    name: '',
    value: '0WH',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  sails: {
    mainsail: {
      section: 'MainSail',
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: true,
      replacementCost: 10000,
      comments: [],
    },
    genoa: {
      section: 'Genoa',
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    jib: {
      section: 'Jib',
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    spinaker: {
      section: 'Spinaker',
      name: '',
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    rigging: {
      section: 'Rigging',
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
    section: 'Bimini',
    name: '',
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 5000,
    comments: [],
  },
  digny: {
    section: 'Digny',
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
