import * as React from 'react';

import styles from './styles.module.css';
import {
  GenericBoatInformation,
  BoatDimension,
  EngineDetails,
  BoatElectronic,
  BoatSails,
  BoatInsideEquipment,
} from '../popUpContant/types';
import { getInitialDefaultValue } from '../popUpContant/constant';

import { BoatDimensionSection } from './boatDimension';
import { BoatElectronicSection } from './boatElectronic';
import { EngineDetailsSection } from './engineDetails';
import { BoatSailsSection } from './boatSails';
import { BoatInsideEquipmentSection } from './boatInsideEquipement';

export const PopupContainer = () => {
  const [completeData, setCompleteData] = React.useState<GenericBoatInformation | null>();
  const [boatDimension, setBoatDimension] = React.useState<BoatDimension | null>();
  const [engineDetails, setEngineDetails] = React.useState<EngineDetails | null>();
  const [boatElectronic, setBoatElectronic] = React.useState<BoatElectronic | null>();
  const [boatSails, setBoatSails] = React.useState<BoatSails | null>();
  const [boatInsideEquipment, setBoatInsideEquipment] = React.useState<BoatInsideEquipment | null>();
  const [dataRetreived, setDataRetreived] = React.useState(false);

  const fetchPageInformation = () => {
    const data = getInitialDefaultValue();
    const {
      dimension, engine, electronics, sails, insideEquipment,
    } = data;
    setBoatDimension(dimension);
    setEngineDetails(engine);
    setBoatElectronic(electronics);
    setBoatSails(sails);
    setBoatInsideEquipment(insideEquipment);
    setCompleteData(data);
    setDataRetreived(true);
  };

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
              onUpdate={setBoatDimension}
            />

            <hr />
            <EngineDetailsSection
              engine={engineDetails}
              onUpdate={setEngineDetails}
            />

            <hr />
            <BoatElectronicSection
              electronics={boatElectronic}
              onUpdate={setBoatElectronic}
            />

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
            bimini:

            <hr />
            extra
            digny:
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
