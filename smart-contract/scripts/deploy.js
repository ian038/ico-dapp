const hre = require("hardhat");

async function main() {
  const SpartanToken = await hre.ethers.getContractFactory("SpartanToken");
  const spartanToken = await SpartanToken.deploy();

  await spartanToken.deployed();

  console.log("SpartanToken deployed to:", spartanToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
