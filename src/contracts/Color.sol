// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string[] public colors;
    mapping (string => bool) _colorExists;
    
    constructor() ERC721("Color", "COLOR") {
    }

    function createColor(string memory _color) public {
        require(!_colorExists[_color], "Color already exists");
        colors.push(_color);
        uint _id = colors.length - 1;
        _mint(msg.sender, _id);
        _colorExists[_color] = true;
    }
}