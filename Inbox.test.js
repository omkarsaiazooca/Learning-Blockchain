const ganache = require('ganache');
const Web3 = require('web3');
const assert = require('assert');
const mocha = require('mocha');

const web3 = new Web3(ganache.provider());
let accounts;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
});

describe('deploys a contract', () => {
    it('deploy', () => {
        console.log(accounts);
    });
});
// let C;


// class Car {
//     drive() {
//         return 'vroom';
//     }
//     park() {
//         return 'stop';
//     }
// }

// beforeEach(() => {
//     C = new Car();
// });
// describe("Carr", () => {
//     it("can drive", () => {
//         assert.equal(C.drive(), 'vroom');
//     });
//     it("can park", () => {
//         assert.equal(C.park(), 'stop');
//     });
// });