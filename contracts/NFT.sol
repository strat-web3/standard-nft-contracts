// SPDX-License-Identifier: GPL3
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "./ERC2981ContractWideRoyalties.sol";

contract NFT is ERC721, ERC721URIStorage, ERC721Burnable, ERC2981ContractWideRoyalties {
    uint256 private _nextTokenId = 1;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        address _recipient,
        uint256 _royalties,
        address _resaleRightsRecipient
    ) ERC721(_name, _symbol) {
        _setRoyalties(_resaleRightsRecipient, _royalties);
        _safeMint(_recipient, 1);
        _setTokenURI(1, _uri);
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value) internal override(ERC721) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage, ERC2981ContractWideRoyalties) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
