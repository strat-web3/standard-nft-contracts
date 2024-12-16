import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy"
import * as dotenv from "dotenv"
import "./tasks/mint"
import "./tasks/send"
dotenv.config()

const {
    SEPOLIA_RPC_ENDPOINT_URL,
    SEPOLIA_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    ARTHERA_TESTNET_RPC_ENDPOINT_URL,
    ARTHERA_TESTNET_PRIVATE_KEY,
    OP_SEPOLIA_RPC_ENDPOINT_URL,
    OP_SEPOLIA_PRIVATE_KEY,
    OP_ETHERSCAN_API_KEY,
    BASE_SEPOLIA_RPC_ENDPOINT_URL,
    BASE_SEPOLIA_PRIVATE_KEY,
    BASE_ETHERSCAN_API_KEY,
    AMOY_TESTNET_RPC_ENDPOINT_URL,
    AMOY_TESTNET_PRIVATE_KEY,
    AMOY_TESTNET_ETHERSCAN_API_KEY,
    ARTHERA_MAINNET_RPC_ENDPOINT_URL,
    ARTHERA_MAINNET_PRIVATE_KEY
} = process.env

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: 0
    },
    networks: {
        hardhat: {
            chainId: 1337,
            allowUnlimitedContractSize: true
        },
        arthera: {
            chainId: 10242,
            url: ARTHERA_MAINNET_RPC_ENDPOINT_URL || "https://rpc.arthera.net",
            accounts:
                ARTHERA_MAINNET_PRIVATE_KEY !== undefined
                    ? [ARTHERA_MAINNET_PRIVATE_KEY]
                    : []
        },
        sepolia: {
            url: SEPOLIA_RPC_ENDPOINT_URL || "https://sepolia.optimism.io",
            accounts:
                SEPOLIA_PRIVATE_KEY !== undefined ? [SEPOLIA_PRIVATE_KEY] : []
        },
        "op-sepolia": {
            chainId: 11155420,
            url:
                OP_SEPOLIA_RPC_ENDPOINT_URL ||
                "https://ethereum-sepolia.publicnode.com",
            accounts:
                OP_SEPOLIA_PRIVATE_KEY !== undefined
                    ? [OP_SEPOLIA_PRIVATE_KEY]
                    : []
            // gasPrice: 1
        },
        "base-sepolia": {
            chainId: 84532,
            url: BASE_SEPOLIA_RPC_ENDPOINT_URL || "https://sepolia.base.org",
            accounts:
                BASE_SEPOLIA_PRIVATE_KEY !== undefined
                    ? [BASE_SEPOLIA_PRIVATE_KEY]
                    : []
        },
        amoy: {
            // https://polygon.technology/blog/introducing-the-amoy-testnet-for-polygon-pos
            // Verification: https://vkpatva.medium.com/guide-to-deploy-verify-smart-contract-on-amoy-using-hardhat-1b4f26a2dc78
            chainId: 80002,
            url:
                AMOY_TESTNET_RPC_ENDPOINT_URL ||
                "https://rpc-amoy.polygon.technology/",
            accounts:
                AMOY_TESTNET_PRIVATE_KEY !== undefined
                    ? [AMOY_TESTNET_PRIVATE_KEY]
                    : []
        },
        "arthera-testnet": {
            chainId: 10243,
            url:
                ARTHERA_TESTNET_RPC_ENDPOINT_URL ||
                "https://rpc-test.arthera.net",
            accounts:
                ARTHERA_TESTNET_PRIVATE_KEY !== undefined
                    ? [ARTHERA_TESTNET_PRIVATE_KEY]
                    : [],
            gasPrice: 20000000
        }
    },
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY || "",
            "op-sepolia": OP_ETHERSCAN_API_KEY || "",
            "base-sepolia": BASE_ETHERSCAN_API_KEY || "",
            amoy: AMOY_TESTNET_ETHERSCAN_API_KEY || ""
        },
        customChains: [
            {
                network: "op-sepolia",
                chainId: 11155420,
                urls: {
                    apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
                    browserURL: "https://sepolia-optimism.etherscan.io"
                }
            },
            {
                network: "base-sepolia",
                chainId: 84532,
                urls: {
                    apiURL: "https://api-sepolia.basescan.org/api",
                    browserURL: "https://sepolia.basescan.org"
                }
            },
            {
                network: "amoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://www.oklink.com/api/v5/explorer/blockchain/summary?chainShortName=AMOY_TESTNET",
                    browserURL: "https://www.oklink.com/amoy"
                }
            }
        ]
    }
}

export default config
