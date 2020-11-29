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
  NA = 'NA'
}

export const PopupContainer = () => {
  const [completeData, setCompleteData] = React.useState<GenericBoatInformation | null>();
  const [boatDimension, setBoatDimension] = React.useState<BoatDimension | null>();
  const [engineDetails, setEngineDetails] = React.useState<EngineDetails | null>();
  
  // Electronic
  const [autopilot, setAutopilot] = React.useState<BoatFeature | null>();
  const [battery, setBattery] = React.useState<BoatFeature | null>();
  const [solarPower, setSolarPower] = React.useState<BoatFeature | null>();
  // Sails
  const [boatSails, setBoatSails] = React.useState<BoatSails | null>();

  // comfort
  const [ bimini, setBimini ] = React.useState<BoatFeature | null>();
  // extra
  const [ digny, setDigny ] = React.useState<BoatFeature | null>();

  const [boatInsideEquipment, setBoatInsideEquipment] = React.useState<BoatInsideEquipment | null>();
  const [dataRetreived, setDataRetreived] = React.useState(false);
  const [editSection, setEditSection] = React.useState('')

  const fetchPageInformation = () => {
    const data = getInitialDefaultValue();
    const {
      dimension,
      engine,
      autopilot,
      battery,
      solarPower,
      sails,
      insideEquipment,
      bimini,
      digny
    } = data;
    setBoatDimension(dimension);
    setEngineDetails(engine);
    setAutopilot(autopilot)
    setBattery(battery)
    setSolarPower(solarPower)
    setBoatSails(sails);
    
    setBimini(bimini)
    setDigny(digny)

    setBoatInsideEquipment(insideEquipment);
    setCompleteData(data);
    setDataRetreived(true);
  };

  const boatDimensionUpdate = (value) => {
    console.log('PARENT RECEIVED:', value);
    setBoatDimension(value)
  }

  const tmpUpdatePage = (ActiveSection: Section, value: BoatFeature) => {
    console.log('UPDATE ', ActiveSection, value);
    setEditSection(Section.NA);
  }
  
  const showSection = (item:BoatFeature, ActiveSection: Section) => {
    if(ActiveSection === editSection) {
      return (<StringBoatFeatureEdit item={item} onUpdate={(value) => tmpUpdatePage(ActiveSection, value)} />)
    }
    return (
      <div onClick={() => setEditSection(ActiveSection)}>
        <StringBoatFeature item={item}/>
      </div>
    )
  }

  const showData = () => {
    if (dataRetreived) {
      return (
        <>
          <div>
            <h1>
              BOAT:
              {completeData.name}
            </h1>
          </div>
          <div className={styles.tableContainer}>
            <hr />
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
            {showSection(autopilot, Section.EDIT_AUTOPILOT)}
            {showSection(battery, Section.EDIT_BATTERIY)}
            {showSection(solarPower, Section.EDIT_SOLAR)}

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
            comfort:
            {showSection(bimini, Section.EDIT_BIMINI)}

            <hr />
            extra
            {showSection(digny, Section.EDIT_DIGNY)}
          </div>
          <button type="button" id="discard">Discard</button>
          <button type="button" id="saveData">Save Data</button>
        </>
      );
    }
    return <button type="button" id="discard" onClick={() => fetchPageInformation()}>FETCH DATA</button>;
  };

  return (
    <div className={styles.mainContainer}>
      {showData()}
    </div>
  );
};
