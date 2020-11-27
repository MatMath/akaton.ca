import { GenericBoatInformation, Quality, SailType } from './types';

export const getInitialDefaultValue = (): GenericBoatInformation => ({
  id: '',
  version: 1,
  name: '',
  url: '',
  dimension: {
    length: null,
    beam: null,
    draft: null,
  },
  engine: {
    power: null,
    nbrHours: null,
    value: '',
    quality: Quality.NA,
    dealBreaker: false,
    replacementCost: 20000,
    comments: [],
  },
  electronics: {
    autopilot: {
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    battery: {
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    solarPower: {
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
  },
  sails: {
    mainsail: {
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: true,
      replacementCost: 10000,
      comments: [],
    },
    genoa: {
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    jib: {
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    spinaker: {
      type: SailType.NA,
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
    rigging: {
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
  comfort: {
    bimini: {
      value: '',
      quality: Quality.NA,
      dealBreaker: false,
      replacementCost: 5000,
      comments: [],
    },
  },
  extra: {
    digny: {
      value: '',
      quality: Quality.NA,
      dealBreaker: true,
      replacementCost: 10000,
      comments: [],
    },
  },
});

export const saveDefaultValueToStorage = (value: GenericBoatInformation): Promise<void> =>
  // add deppmerge
  new Promise((resolve) => {
    const mergedValue = { ...getInitialDefaultValue(), ...value }; // TODO change to a deepJSON merge.
    chrome.storage.sync.set({ defaultValue: mergedValue }, () => {
      resolve()
    });
  });

export const loadDefaultValueFromStorage = (): Promise<GenericBoatInformation> => new Promise((resolve) => {
  chrome.storage.sync.get(['defaultValue'], (result) => {
    resolve(result.defaultValue as GenericBoatInformation);
  });
});
