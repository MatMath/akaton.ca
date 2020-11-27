const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, '../data/beneteau-oceanis-clipper-473-3101098.html')).toString();

function extract({
  keyword,
  text,
}) {
  return text.match(keyword);
}

describe('yachtworld', () => {
  it('should find the engine info', () => {
    const result = extract({
      keyword: /engine..............+[\n<]/gi,
      text: data
    });
    console.log(result);
    expect(result.join(' ')).toContain('Yanmar');
  });
});
