// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// pragma solidity >=0.4.24;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    // function Inbox(string initialMessage) public{
    //     message= initialMessage;
    // }

    function setMessege(string memory newMessage) public {
        message = newMessage;
    }

    function getMessege() public view returns (string memory) {
        return message;
    }
}
