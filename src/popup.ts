// import { extractPageContent } from './exractPageContent';

let count = 0;

(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    document.getElementById('url').innerText = tabs[0].url;
    document.getElementById('time').innerText = new Date().toLocaleString();
  });

  chrome.browserAction.setBadgeText({text: count.toString()});
  document.getElementById('countUp').onclick  = () =>{
    chrome.browserAction.setBadgeText({text: (++count).toString()});
  };

  document.getElementById('changeBackground').onclick  = () =>{
    // chrome.tabs.executeScript({code: 'console.log("running this")' ,file: './extractPageContent'})
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        // TO run a querry/function to the Tab ID
        // Call extract & parse info
        color: '#555555'
      },
      function(msg) {
        // Callbck to update the UI
        console.log("result message:", msg);
      });
    });
  };
})();
