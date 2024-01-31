// SPDX-License-Identifier: MIT

pragma solidity 0.8.24;

contract MyContract{
    string private message;

    constructor(string memory _msg){
        message = _msg;
    }

    function setMsg(string memory _msg) external {
        message = _msg;
    }

    function getMsg() external view returns(string memory){
        return message;
    }

}