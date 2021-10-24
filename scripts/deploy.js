
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["CaTank", "GlassCatnon", "CriticatStriker"],       // Names
    ["QmP6x6otYjRDb1rjUjH1gndtvk4cjqG6UnXoC7t8xyLGtW", // Images
    "QmbmuqrxNtBiFzftMizgPQonNCvdPNjzkbvp4ZJVRMnQ54", 
    "QmcduMsKajHoPATTYCBgRDoAfFFriFxUacCatRXGYWPeFW"],
    [1000, 50,250],                    // HP values
    [25, 500, 150],                       // base Attack damage values
    [500,100,200], //defense  
    [1,5,40], // crtitical chance
    [2,5,10], // critical multiplier
    "K9-melee unit", // Boss name
    "QmXweWZxDQgef1pzs1SmQSAqqhqCHNKFsvErbjdue9p1JV", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();
  txn = await gameContract.attackBoss();
  await txn.wait();



// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();