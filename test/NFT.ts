import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Standard NFT", function () {
    async function deployContracts() {
        const [alice, bob, francis] = await ethers.getSigners()
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const NFT = await ethers.getContractFactory("NFT")
        const initialOwner = alice.address
        const name = "Sigirya NFT"
        const symbol = "SIG"
        const royalties = 400 // 4%
        const nft = await NFT.deploy(initialOwner, name, symbol, royalties)
        return { nft, alice, bob, francis, uri, royalties }
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { nft, alice } = await loadFixture(deployContracts)
            expect(await nft.owner()).to.equal(alice.address)
        })
    })

    describe("Interactions", function () {
        it("Should mint 1 NFT", async function () {
            const { nft, alice, bob, francis, uri } = await loadFixture(
                deployContracts
            )
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            await expect(nft.connect(francis).safeMint(francis.address, uri)).to
                .be.reverted
        })
        it("Should transfer 1 unit", async function () {
            const { nft, alice, bob, francis, uri } = await loadFixture(
                deployContracts
            )
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            await nft.connect(bob).transferFrom(bob.address, francis.address, 1)
            expect(await nft.ownerOf(1)).to.be.equal(francis.address)
        })
        it("Should get royaltyInfo", async function () {
            const { nft, alice, bob, francis, uri, royalties } =
                await loadFixture(deployContracts)
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            expect(await nft.royaltyInfo(1, 10000)).to.deep.equal([
                alice.address,
                royalties
            ])
        })

        xit("Should burn", async function () {})
        xit("Should redeem", async function () {})
    })
})
