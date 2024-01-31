// SPDX-License-Identifier: GPL-3.0

pragma solidity >0.7.0 <0.9.0;

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