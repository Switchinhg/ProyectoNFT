// const {expect} = require('chai')
// const {ethers} = require('hardhat')

// describe("MyNFT", function(){
//     it('should mint and transfer an NFT to someone', async function(){
//         const blusNFT = await ethers.getContractFactory("MyToken")
//         const BlueNFT = await blusNFT.deploy()
//         await BlueNFT.deployed()

//         const recipient ='0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'
//         const metadataURI = 'cid/test.png'

//         let balance = await BlueNFT.balanceOF(recipient)
//         expect(balance).to.equal(0)

//         const newlyMintedToken  = await BlueNFT.payToMint(recipient,metadataURI, {value:ethers.utils.parseEther('0.01')})

//         await newlyMintedToken.wait()
//         balance = await BlueNFT.balanceOf(recipient)

//         expect(await BlueNFT.isContentOwned(metadataURI)).to.equal(true)
//     })
// })


const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const FiredGuys = await ethers.getContractFactory("MyToken");
    const firedguys = await FiredGuys.deploy();
    await firedguys.deployed();

    const recipient = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
    const metadataURI = 'cid/test.png';

    let balance = await firedguys.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await firedguys.payToMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.05') });

    // wait until the transaction is mined
    await newlyMintedToken.wait();

    balance = await firedguys.balanceOf(recipient)
    expect(balance).to.equal(1);

    expect(await firedguys.isContentOwned(metadataURI)).to.equal(true);
    const newlyMintedToken2 = await firedguys.payToMint(recipient, 'foo', { value: ethers.utils.parseEther('0.05') });
  });
});