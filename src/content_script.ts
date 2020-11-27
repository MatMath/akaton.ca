function extract({
  keyword,
  text,
}) {
  return text.match(keyword);
}

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
  // console.log(document)
  const text = document.body.innerText;
  const result = extract({
    keyword: /engine..............+[\n]/gi,
    text,
  });
  sendResponse(`RESP: ${JSON.stringify(result)}`);
  // sendResponse(text);
  // sendResponse('results ' + result? result.join('\n') : 'nothing');
});
