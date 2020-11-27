import * as moment from 'moment';
import * as $ from 'jquery';
// import { extractPageContent } from './exractPageContent';

let count = 0;

$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    $('#url').text(tabs[0].url);
    $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
  });

  chrome.browserAction.setBadgeText({text: count.toString()});
  $('#countUp').click(()=>{
    chrome.browserAction.setBadgeText({text: (++count).toString()});
  });

  $('#changeBackground').click(()=>{
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
  });
});
