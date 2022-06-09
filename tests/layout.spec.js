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

describe('test event listener', () => {
    let sut;
    let events ={};
    beforeEach(() => {
        sut = new Dependency();
        events = {}
        document.addEventListener = jest.fn((event, callback) => {
            events[event] = callback;
    });
    
    document.removeEventListener = jest.fn((event, callback) => {
            delete events[event];
    });
    })
    test("It should pass", () => {
        const instanceMock = jest.spyOn(sut, "loaded");
        document.addEventListener = jest
            .fn()
            .mockImplementationOnce((event, callback) => {
            callback();
            });
        sut.setupEvents();
        expect(document.addEventListener).toBeCalledWith(
            "click",
            expect.any(Function)
        );
        expect(instanceMock).toBeCalledTimes(1);
    });
});

class Dependency {
    setupEvents() {
        document.addEventListener("click", () =>{
            this.loaded()
        });
    }

    loaded() {
        console.log('loaded')
    }
}


