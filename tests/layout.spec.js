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

describe('login form', ()=>{
    test('form exists', ()=>{
        let form = document.querySelector('form')
        expect(form).toBeTruthy()
    })

    test('form has input for name', ()=>{
        let inputName = document.querySelector(".login")
        expect(inputName).toBeTruthy()
        //expect(inputName.type).toEqual("text")//
    })
    test('form has input for password', ()=>{
        let inputPass = document.querySelector("#login-password")
        expect(inputPass).toBeTruthy()
        expect(inputPass.type).toEqual('password')
    })
    test('form has submit button', ()=>{
        let submit = document.querySelector(".login-form-btn")
        expect(submit).toBeTruthy()
        expect(submit.type).toEqual('submit')
        
    })
})



