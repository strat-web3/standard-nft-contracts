import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Standard NFT", function () {
    async function deployContracts() {
        const [alice, bob, francis] = await ethers.getSigners()
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const NFT = await ethers.getContractFactory("NFT")
        const name = "Sigirya NFT"
        const symbol = "SIG"
        const royalties = 400 // 4%
        const nft = await NFT.deploy(
            name,
            symbol,
            uri,
            alice.address,
            royalties,
            alice.address
        )
        return { nft, alice, bob, francis, uri, royalties }
    }

    describe("Deployment", function () {
        it("Should set the right tokenURI", async function () {
            const { nft, alice, uri, royalties } = await loadFixture(
                deployContracts
            )
            expect(await nft.tokenURI(1)).to.equal(uri)
            expect(await nft.royaltyInfo(1, 10000)).to.deep.equal([
                alice.address,
                royalties
            ])
            expect(await nft.ownerOf(1)).to.be.equal(alice.address)
        })
    })
})
