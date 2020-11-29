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
  const contentMain = document.body; // document.getElementsByClassName('content_main')[0] as HTMLElement;
  const text = contentMain.innerText;
  console.log('text', text);
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
  const result = {
    fields: boatFeatures.map((feature) => ({
      key: feature.key,
      descriptions: extract({
        keyword: feature.matcher,
        text,
      }),
    })),
  };
  console.log('result', result);
  sendResponse(JSON.stringify(result));
  // sendResponse(text);
  // sendResponse('results ' + result? result.join('\n') : 'nothing');
});
