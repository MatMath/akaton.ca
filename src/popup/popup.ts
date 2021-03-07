// import { extractPageContent } from './exractPageContent';

const count = 0;

(function loadPopup() {
  const queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(queryInfo, ([{ id, url }]) => {
    console.log('url is ', url);
    chrome.tabs.sendMessage(id, {
      // TO run a querry/function to the Tab ID
      // Call extract & parse info
      color: '#555555',
    },
    (msg) => {
      // Callbck to update the UI
      // if msg is undefined https://stackoverflow.com/questions/54126343
      // /how-to-fix-unchecked-runtime-lasterror-the-message-port-closed-before-a-respon
      console.log('result message:', msg);
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
      chrome.tabs.sendMessage(tabs[0].id, {
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
