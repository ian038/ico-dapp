const hre = require("hardhat");

async function main() {
  const TrippyDudesToken = await hre.ethers.getContractFactory("TrippyDudesToken");
  const trippyDudesToken = await TrippyDudesToken.deploy('0x315d812Eb76Fac89E88B2c5a6bEAeFFbC1fE4652');

  await trippyDudesToken.deployed();

  console.log("TrippyDudesToken deployed to:", trippyDudesToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
