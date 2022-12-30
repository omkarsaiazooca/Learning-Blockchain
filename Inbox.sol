pragma solidity ^0.4.17;

// pragma solidity >=0.4.24;

contract Inbox {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }

    // function Inbox(string initialMessage) public{
    //     message= initialMessage;
    // }

    function setMessege(string newMessage) public {
        message = newMessage;
    }

    function getMessege() public view returns (string) {
        return message;
    }
}
