import PouchDB from 'pouchdb';
import { matchers } from './extact/yachtworld';

function extract({
  keyword,
  text,
}) {
  return text.match(keyword);
}
const dbname = 'cesine-akaton';

// this expects you have logged into the db in another window and have an open session
const db = new PouchDB(`https://corpus.fielddb.org/${dbname}`);
db.info()
  .then((info) => {
    console.log('DB info:', info);
  })
  .catch(console.log);

// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     if (msg.color) {
//         console.log('Receive color = ' + msg.color);
//         document.body.style.backgroundColor = msg.color;
//         console.log(document.body.innerText)
//         sendResponse('Change color to ' + msg.color);
//     } else {
//         sendResponse('Color message is none.');
//     }
// });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('im in the listener again 2');
  const contentMain = document.body; // document.getElementsByClassName('content_main')[0] as HTMLElement;
  const text = contentMain.innerText;
  // console.log('text', text);
  const boatFeatures = Object.keys(matchers).map((key) => ({
    key,
    matcher: matchers[key] || new RegExp(`${key}..+\n..+\n`, 'gi'),
  }));
  console.log('boatFeatures', boatFeatures);

  const docId = `test_${window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    .replace(/[^a-z0-9-]/i, '_') // force aphanumeric
    .replace(/\..+/, '')}`;

  db.get(docId)
    .then((doc) => {
      console.log('doc', doc);
      const boat = {
        ...doc,
        title: document.title,
        fields: boatFeatures.map((feature) => ({
          key: feature.key,
          descriptions: extract({
            keyword: feature.matcher,
            text,
          }),
        })),
        text,
      };
      console.log('boat', boat);
      return db.put(boat)
        .then((res) => {
          console.log('res', res);
          // eslint-disable-next-line no-underscore-dangle
          boat._rev = res.rev;
          return boat;
        });
    })
    .then((boat) => {
      sendResponse(JSON.stringify(boat));
    })
    .catch(console.log);
  // sendResponse(text);
  // sendResponse('results ' + result? result.join('\n') : 'nothing');
});
