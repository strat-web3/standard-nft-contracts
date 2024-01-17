import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Standard NFT", function () {
    async function deployContracts() {
        const [alice, bob, francis] = await ethers.getSigners()
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const NFT = await ethers.getContractFactory("NFT")
        const nft = await NFT.deploy(alice.address)
        return { nft, alice, bob, francis, uri }
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { nft, alice } = await loadFixture(deployContracts)
            expect(await nft.owner()).to.equal(alice.address)
        })
    })

    describe("Interactions", function () {
        it("Should mint 1 NFT", async function () {
            const { nft, alice, bob, uri } = await loadFixture(deployContracts)
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(0)).to.be.equal(bob.address)
        })
        it("Should transfer 1 unit", async function () {
            const { nft, alice, bob, francis, uri } = await loadFixture(
                deployContracts
            )
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(0)).to.be.equal(bob.address)
            await nft.connect(bob).transferFrom(bob.address, francis.address, 0)
            expect(await nft.ownerOf(0)).to.be.equal(francis.address)
        })
        xit("Should burn", async function () {})
        xit("Should receive royalties", async function () {})
        xit("Should redeem", async function () {})
    })
})
