const getHelloWorldTest = require('./helloWorld')

test('it should return helloworld', () => { 
    expect(getHelloWorldTest()).toBe('Hello world test!');
 })