const utils = require('./utils');
const assert = require('assert')

describe('util.js모듈의 capitalize 함수는 ',()=>{
    it('문자열의 첫번쨰 문자를 대문자로 변환한다.', ()=>{
        // ...
        utils.capitalize();
        const result = utils.capitalize('hello');
        assert.equal(result,'Hello');

    })
})