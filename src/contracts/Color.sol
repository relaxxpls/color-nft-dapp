// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract Color is ERC721, ERC721Enumerable {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721('Color', 'COLOR') {}

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function mint(string memory _color) public {
    require(!_colorExists[_color], 'Color already exists');

    colors.push(_color);
    uint256 _id = colors.length;

    _mint(msg.sender, _id);
    _colorExists[_color] = true;
  }
}
