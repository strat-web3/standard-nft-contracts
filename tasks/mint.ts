import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
// import * as artheraTestnetDeploymentData from "../deployments/arthera-testnet/NFT.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/NFT.json"
// import * as artheraDeploymentData from "../deployments/arthera/NFT.json"
// import * as opSepoliaDeploymentData from "../deployments/op-sepolia/NFT.json"

task("mint", "Mint a given amount of ERC-20 tokens").setAction(
    async (amount, hre) => {
        const [signer] = await ethers.getSigners()
        const NFT = await ethers.getContractFactory("NFT")
        let addr
        switch (hre.network.name) {
            // case "arthera":
            //     addr = artheraDeploymentData.address
            //     break
            // case "arthera-testnet":
            //     addr = artheraTestnetDeploymentData.address
            //     break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            // case "op-sepolia":
            //     addr = opSepoliaDeploymentData.address
            //     break
        }
        const nft = new ethers.Contract(addr, NFT.interface, signer)
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const recipient = "0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42"
        const mint = await nft.safeMint(recipient, uri)
        const hash = mint.hash
        console.log(
            "Minted",
            msg(amount.amount),
            "units. \n\nTx hash:",
            msg(hash)
        )
    }
)
