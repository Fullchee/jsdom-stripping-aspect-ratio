const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(
  `<p style="aspect-ratio: 1 / 1; color: black;">Hello</p>`
);
const style = dom.window.document.querySelector("p").style;
console.log(style);

// jsdom v16
// CSSStyleDeclaration {
//     '0': 'color',
//     _values: { color: 'black' },
//     _importants: { color: '' },
//     _length: 1,
//     _onChange: [Function (anonymous)]
//   }


// jsdom v24
// CSSStyleDeclaration {
//     '0': 'aspect-ratio',
//     '1': 'color',
//     _values: { 'aspect-ratio': '1 / 1', color: 'black' },
//     _importants: { 'aspect-ratio': '', color: '' },
//     _length: 2,
//     _onChange: [Function (anonymous)],
//     _setInProgress: false
//   }
