import { ethers } from "hardhat"
import axios from "axios"
import fs from "fs"
import path from "path"

async function formatTimestamp(): Promise<string> {
    const date = new Date()
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const month = months[date.getUTCMonth()]
    const day = date.getUTCDate()
    const year = date.getUTCFullYear()
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes().toString().padStart(2, "0")
    const seconds = date.getUTCSeconds().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12

    return `${month}-${day}-${year} ${formattedHours}:${minutes}:${seconds} ${ampm} UTC`
}

async function estimateGasCosts() {
    let report = `# Cost Estimates\n\nGenerated: ${await formatTimestamp()}\n\n`

    const networks = [
        {
            name: "Sepolia",
            nativeCurrency: "ETH",
            provider: new ethers.JsonRpcProvider(
                process.env.SEPOLIA_RPC_ENDPOINT_URL
            )
        },
        {
            name: "Base Sepolia",
            nativeCurrency: "ETH",
            provider: new ethers.JsonRpcProvider(
                process.env.BASE_SEPOLIA_RPC_ENDPOINT_URL
            )
        },
        {
            name: "Amoy",
            nativeCurrency: "MATIC",
            provider: new ethers.JsonRpcProvider(
                process.env.AMOY_TESTNET_RPC_ENDPOINT_URL
            )
        }
    ]

    // Get current prices in EUR from CoinGecko
    const prices = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,matic-network&vs_currencies=eur"
    )
    const ethPrice = prices.data.ethereum.eur
    const maticPrice = prices.data["matic-network"].eur

    report += `## Current Prices\n\n`
    report += `- ETH: €${ethPrice.toFixed(3)}\n`
    report += `- MATIC: €${maticPrice.toFixed(3)}\n\n`

    console.log("\nCurrent prices:")
    console.log(`ETH: €${ethPrice.toFixed(3)}`)
    console.log(`MATIC: €${maticPrice.toFixed(3)}\n`)

    const [signer] = await ethers.getSigners()
    const NFT = await ethers.getContractFactory("NFT")

    // Contract constructor parameters
    const name = "Sigirya NFT"
    const symbol = "SIG"
    const royalties = 400 // 4%
    const uri =
        "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"

    for (const network of networks) {
        const networkReport = `## ${network.name} Estimates\n\n`
        console.log(`\n${network.name} Estimates:`)
        console.log("-".repeat(50))

        try {
            // Estimate deployment cost
            const deploymentGas = await NFT.getDeployTransaction(
                signer.address,
                name,
                symbol,
                royalties
            ).then(tx => network.provider.estimateGas(tx))

            const gasPrice = await network.provider.getFeeData()
            const deploymentCost = deploymentGas * gasPrice.gasPrice

            // Create contract instance for mint estimation
            const nftContract = await NFT.attach(
                "0x0000000000000000000000000000000000000001"
            ) // Dummy address for estimation

            // Estimate mint cost
            const mintGas = await nftContract.safeMint.estimateGas(
                signer.address,
                uri
            )
            const mintCost = mintGas * gasPrice.gasPrice

            // Convert to ETH/MATIC
            const deploymentCostInCrypto = ethers.formatEther(deploymentCost)
            const mintCostInCrypto = ethers.formatEther(mintCost)

            // Convert to EUR
            const priceInEur =
                network.nativeCurrency === "ETH" ? ethPrice : maticPrice
            const deploymentCostInEur =
                Number(deploymentCostInCrypto) * priceInEur
            const mintCostInEur = Number(mintCostInCrypto) * priceInEur

            const networkResults = `### Deployment Cost
- ${Number(deploymentCostInCrypto).toFixed(3)} ${
                network.nativeCurrency
            } (€${deploymentCostInEur.toFixed(3)})

### Mint Cost
- ${Number(mintCostInCrypto).toFixed(3)} ${
                network.nativeCurrency
            } (€${mintCostInEur.toFixed(3)})\n\n`

            report += networkReport + networkResults

            console.log(`Deployment Cost:`)
            console.log(
                `  ${Number(deploymentCostInCrypto).toFixed(3)} ${
                    network.nativeCurrency
                } (€${deploymentCostInEur.toFixed(3)})`
            )
            console.log(`Mint Cost:`)
            console.log(
                `  ${Number(mintCostInCrypto).toFixed(3)} ${
                    network.nativeCurrency
                } (€${mintCostInEur.toFixed(3)})`
            )
        } catch (error: any) {
            const errorMessage = `Error estimating costs: ${error.message}\n\n`
            report += networkReport + errorMessage
            console.log(
                `Error estimating costs for ${network.name}:`,
                error.message
            )
        }
    }

    // Write results to ESTIMATE.md
    fs.writeFileSync(path.join(process.cwd(), "ESTIMATE.md"), report)
    console.log("\nResults have been written to ESTIMATE.md")
}

// Run the estimation
estimateGasCosts().catch(error => {
    console.error(error)
    process.exitCode = 1
})
