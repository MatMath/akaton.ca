interface Field {
  key: string,
  descriptions: string[],
};

interface ExtractText {
  _id: string,
  _rev: string,
  title: string,
  fields: Field[],
  text: string,
  url: string,
};

function extractText() : Promise<ExtractText> {
  return new Promise((resolve, reject) => {
    const queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(queryInfo, ([{ id, url }]) => {
      console.log('url is ', url);
      chrome.tabs.sendMessage(id, {
        extract: true
      },
        (msg) => {
          // Callbck to update the UI
          // if msg is undefined https://stackoverflow.com/questions/54126343
          // /how-to-fix-unchecked-runtime-lasterror-the-message-port-closed-before-a-respon
          console.log('result message:', msg);
          resolve(msg ? JSON.parse(msg): {});
        });
    });

    chrome.browserAction.setBadgeText({ text: '1' });
  })
}

export {
  extractText,
}