import PouchDB from 'pouchdb';

function extract({
  keyword,
  text,
}) {
  return text.match(keyword);
}
const dbname = 'cesine-akaton';

// this expects you have logged into the db in another window and have an open session
const db = new PouchDB(`https://corpus.fielddb.org/${dbname}`, {
  // fetch: function (url, opts) {
  //   opts.headers['Cookie'] = 'AuthSession=abc-';
  //   console.log('fetch opts', opts);
  //   return fetch(url, {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     redirect: 'error', // manual, *follow, error
  //     referrerPolicy: 'no-referrer-when-downgrade',
  //   });
  // },
});
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
  const boatFeatures = [{
    key: 'engine',
    matcher: /engine..+\n..+\n/gi,
  }, {
    key: 'hull',
    matcher: /hull..+\n..+\n/gi,
  }, {
    key: 'length',
    matcher: /length..+\n..+\n/gi,
  }, {
    key: 'location',
    matcher: /located in..+\n..+\n/gi,
  }, {
    key: 'price',
    matcher: /price..+\n..+\n/gi,
  }];
  const doc = {
    _id: 'test_' + window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
      .replace(/[^a-z0-9-]/i, '_') // force aphanumeric
      .replace(/\..+/, ''),
    title: document.title,
    fields: boatFeatures.map((feature) => ({
      key: feature.key,
      descriptions: extract({
        keyword: feature.matcher,
        text,
      }),
      text,
    })),
  };
  console.log('doc', doc);
  db.put(doc)
    .catch(console.log);
  sendResponse(JSON.stringify(doc));
  // sendResponse(text);
  // sendResponse('results ' + result? result.join('\n') : 'nothing');
});
