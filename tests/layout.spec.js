const renderDOM = require('./helpers');

let dom;
let document;

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDOM('index.html')
        document = await dom.window.document
    })

    test('it has a title', () => {
        let title = document.querySelector('title');
        expect(title.textContent).toContain('Momentum');
    })
})
