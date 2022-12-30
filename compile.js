// const path = require('path');
// const solc = require('solc');
// const fs = require('fs');

// const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// const source = fs.readFileSync(inboxPath, 'UTF-8');

// let comp = solc.compile(source, 1);
// console.log(comp)



const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxpath = path.resolve(__dirname, 'Contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxpath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

exports.interface = output.contracts['Inbox.sol']['Inbox'].interface;

exports.bytecode = output.contracts['Inbox.sol']['Inbox'].evm.bytecode.object;
module.exports = {
    interface,
    bytecode,
};

