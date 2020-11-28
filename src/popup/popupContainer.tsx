import * as React from 'react';

const { popupClass } = require('./styles.css');
// import './popup';

export const PopupContainer = () => (
  <div className={popupClass}>
    <ul>
      <li>
        Current URL:
        <span id="url" />
      </li>
      <li>
        Current Time:
        <span id="time" />
      </li>
    </ul>
    <button type="button" id="countUp">Count up</button>
    <button type="button" id="changeBackground">Change background</button>
    <script src="//cdn.jsdelivr.net/npm/pouchdb@7.2.1/dist/pouchdb.min.js" />
    <script src="./popup.js" />
    <script>
      const dbname = 'cesine-akaton';
      console.log('dbname', dbname);
      const db = new PouchDB(`https://corpus.fielddb.org/cesine-akaton`);
      db.info()
      .then(console.log);
      window.db = db;
      console.log('db', db);
    </script>
  </div>
);
