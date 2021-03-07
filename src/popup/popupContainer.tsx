import * as React from 'react';

import './popup';
import styles from './styles.module.css';
import {
  GenericBoatInformation,
  BoatDimension,
  EngineDetails,
  BoatSails,
  BoatInsideEquipment,
  BoatFeature,
} from '../popUpContant/types';
import { getInitialDefaultValue } from '../popUpContant/constant';
import { extractText } from './popup';
import { BoatDimensionSection } from './boatDimension';
import { EngineDetailsSection } from './engineDetails';
import { BoatSailsSection } from './boatSails';
import { BoatInsideEquipmentSection } from './boatInsideEquipement';
import { StringBoatFeatureEdit, StringBoatFeature } from './stringBoatFeatureEdit';

enum Section {
  EDIT_AUTOPILOT = 'EDIT_AUTOPILOT',
  EDIT_BATTERIY = 'EDIT_BATTERIY',
  EDIT_SOLAR = 'EDIT_SOLAR',
  EDIT_BIMINI = 'EDIT_BIMINI',
  EDIT_DIGNY = 'EDIT_DIGNY',
  NA = 'NA',
}

export const PopupContainer = () => {
  const [completeData, setCompleteData] = React.useState<GenericBoatInformation | null>();
  const [boatDimension, setBoatDimension] = React.useState<BoatDimension | null>();
  const [engineDetails, setEngineDetails] = React.useState<EngineDetails | null>();

  // Electronic
  const [boatAutopilot, setBoatAutopilot] = React.useState<BoatFeature | null>();
  const [boatBattery, setBoatBattery] = React.useState<BoatFeature | null>();
  const [boatSolarPower, setBoatSolarPower] = React.useState<BoatFeature | null>();
  // Sails
  const [boatSails, setBoatSails] = React.useState<BoatSails | null>();
  // comfort
  const [boatBimini, setBoatBimini] = React.useState<BoatFeature | null>();
  // extra
  const [boatDigny, setBoatDigny] = React.useState<BoatFeature | null>();

  const [boatInsideEquipment, setBoatInsideEquipment] = React.useState<BoatInsideEquipment | null>();
  const [dataRetreived, setDataRetreived] = React.useState(false);
  const [editSection, setEditSection] = React.useState('');

  const fetchPageInformation = async () => {
    const data = getInitialDefaultValue();
    const datafromPage = await extractText();
    console.log('datafromPage', datafromPage);
    const {
      dimension,
      engine,
      autopilot,
      battery,
      solarPower,
      sails,
      insideEquipment,
      bimini,
      digny,
      price,
      location,
    } = data;

    data.name = datafromPage.title;

    const notes = datafromPage.fields
      .filter(({ descriptions }) => !!descriptions);

    const today = Date.now();
    notes.forEach(({ key, descriptions }) => {
      if (key === 'location') {
        const extracted = descriptions.join();
        location.value = extracted;
        location.comments.push({
          date: today,
          text: extracted,
          user: 'akaton extract 1.0',
        });
      }

      if (key === 'price') {
        const extracted = descriptions.join();
        price.value = parseInt(extracted, 10);
        price.comments.push({
          date: today,
          text: extracted,
          user: 'akaton extract 1.0',
        });
      }

      if (key === 'length') {
        const extracted = descriptions.join();
        dimension.length.value = parseInt(extracted, 10);
        dimension.length.comments.push({
          date: today,
          text: extracted,
          user: 'akaton extract 1.0',
        });
      }

      if (key === 'engine') {
        const extracted = descriptions.join();
        engine.comments.push({
          date: today,
          text: extracted,
          user: 'akaton extract 1.0',
        });
      }

      if (key === 'rigging') {
        const extracted = descriptions.join();
        sails.rigging.comments.push({
          date: today,
          text: extracted,
          user: 'akaton extract 1.0',
        });
      }
    });

    setBoatDimension(dimension);
    setEngineDetails(engine);
    setBoatAutopilot(autopilot);
    setBoatBattery(battery);
    setBoatSolarPower(solarPower);
    setBoatSails(sails);

    setBoatBimini(bimini);
    setBoatDigny(digny);

    setBoatInsideEquipment(insideEquipment);
    setCompleteData(data);
    setDataRetreived(true);
  };

  const boatDimensionUpdate = (value) => {
    console.log('PARENT RECEIVED:', value);
    setBoatDimension(value);
  };

  const UpdatePage = (ActiveSection: Section, value: BoatFeature): void => {
    console.log('UpDATE DATA:', ActiveSection, value);
    setEditSection(Section.NA);
    switch (ActiveSection) {
      case Section.EDIT_AUTOPILOT:
        setBoatAutopilot(value);
        break;
      case Section.EDIT_BATTERIY:
        setBoatBattery(value);
        break;
      case Section.EDIT_BIMINI:
        setBoatBimini(value);
        break;
      case Section.EDIT_DIGNY:
        setBoatDigny(value);
        break;
      default:
    }
  };

  const showSection = (item: BoatFeature, ActiveSection: Section) => {
    if (ActiveSection === editSection) {
      return (<StringBoatFeatureEdit item={item} onUpdate={(value) => UpdatePage(ActiveSection, value)} />);
    }
    return (
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div onClick={() => setEditSection(ActiveSection)} onKeyPress={() => setEditSection(ActiveSection)} role="row">
        <StringBoatFeature item={item} />
      </div>
    );
  };

  const showData = () => {
    if (dataRetreived) {
      return (
        <>
          <div className={styles.headerRow}>
            <h1>
              {' '}
              Boat:
              {completeData.name}
            </h1>
            <button type="button" id="discard">Discard</button>
            <button type="button" id="saveData">Save Data</button>
          </div>
          <div className={styles.tableContainer}>
            <BoatDimensionSection
              dimension={boatDimension}
              onUpdate={boatDimensionUpdate}
            />

            <hr />
            <EngineDetailsSection
              engine={engineDetails}
              onUpdate={setEngineDetails}
            />

            <hr />
            {showSection(boatAutopilot, Section.EDIT_AUTOPILOT)}
            {showSection(boatBattery, Section.EDIT_BATTERIY)}
            {showSection(boatSolarPower, Section.EDIT_SOLAR)}

            <hr />
            <BoatSailsSection
              sails={boatSails}
              onUpdate={setBoatSails}
            />

            <hr />
            <BoatInsideEquipmentSection
              insideEquipement={boatInsideEquipment}
              onUpdate={setBoatInsideEquipment}
            />

            <hr />
            {showSection(boatBimini, Section.EDIT_BIMINI)}

            <hr />
            {showSection(boatDigny, Section.EDIT_DIGNY)}
          </div>
        </>
      );
    }
    return <button type="button" id="discard" onClick={() => fetchPageInformation()}>Import</button>;
  };

  return (
    <div className={styles.mainContainer}>
      {showData()}
    </div>
  );
};
