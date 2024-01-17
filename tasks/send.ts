import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
// import * as artheraTestnetDeploymentData from "../deployments/arthera-testnet/NFT.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/NFT.json"
// import * as artheraDeploymentData from "../deployments/arthera/NFT.json"
// import * as opSepoliaDeploymentData from "../deployments/op-sepolia/NFT.json"

task("send", "Send a given amount of tokens to a given address")
    .addParam("wallet")
    .addParam("id")
    .setAction(async (args, hre) => {
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
        const transfer = await nft.transferFrom(
            signer.address,
            args.wallet,
            args.id
        )
        const hash = transfer.hash
        console.log("\nNFT sent to", args.wallet, "\n\nTx hash:", msg(hash))
    })
