const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  const owners = [owner1.address, owner2.address, owner3.address];
  const quorum = 2;

  const MultiSig = await hre.ethers.getContractFactory("MultiSig");
  const wallet = await MultiSig.deploy(owners, quorum);

  await wallet.waitForDeployment();

  console.log("Multi-Sig Wallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
