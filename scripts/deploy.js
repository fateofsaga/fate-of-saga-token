async function main() {

  const FateOfSagaTokenFactory = await ethers.getContractFactory("FateOfSagaToken");
  const FateOfSagaTokenInstance = await FateOfSagaTokenFactory.deploy();
  await FateOfSagaTokenInstance.deployed();
  console.log("FateOfSagaToken deployed to:", FateOfSagaTokenInstance.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
