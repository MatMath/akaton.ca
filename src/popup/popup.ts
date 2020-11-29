import PouchDB from 'pouchdb';
// import { extractPageContent } from './exractPageContent';

const count = 0;
const dbname = 'cesine-akaton';

(function loadPopup() {
  const queryInfo = {
    active: true,
    currentWindow: true,
  };

  // this expects you have logged into the db in another window and have an open session
  const db = new PouchDB(`https://corpus.fielddb.org/${dbname}`);
  db.info().then((info) => {
    console.log('DB info:', info);
  });

  chrome.tabs.query(queryInfo, ([{ id, url }]) => {
    const doc = {
      _id: url.substring(url.lastIndexOf('/') + 1)
        .replace(/[^a-z0-9-]/i, '_') // force aphanumeric
        .replace(/\..+/, ''),
    };
    console.log('Doc:', doc);

    chrome.tabs.sendMessage(id, {
      // TO run a querry/function to the Tab ID
      // Call extract & parse info
      color: '#555555',
    },
    (msg) => {
      // Callbck to update the UI
      console.log('result message:', msg);
      const extractedData = JSON.parse(msg);
      const updatedDoc = {
        ...doc,
        ...extractedData,
      };
      console.log('updatedDoc:', updatedDoc);
    });
  });

  chrome.browserAction.setBadgeText({ text: count.toString() });
  /*
  document.getElementById('countUp').onclick = () => {
    chrome.browserAction.setBadgeText({ text: (count += 1).toString() });
  };

  document.getElementById('changeBackground').onclick = () => {
    // chrome.tabs.executeScript({code: 'console.log("running this")' ,file: './extractPageContent'})
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tab[0].id, {
        // TO run a querry/function to the Tab ID
        // Call extract & parse info
        color: '#555555',
      },
      (msg) => {
        // Callbck to update the UI
        console.log('result message:', msg);
      });
    });
  };
  */
}());
