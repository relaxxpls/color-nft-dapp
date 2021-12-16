const Color = artifacts.require('Color.sol');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;

contract('Color', (accounts) => {
  let contract;

  before(async () => {
    contract = await Color.deployed();
  });

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it('has a name', async () => {
      const name = await contract.name();
      assert.equal(name, 'Color');
    });

    it('has a symbol', async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, 'COLOR');
    });
  });

  describe('minting', async () => {
    it('creates a new token', async () => {
      const result = await contract.mint('#EC058E');
      const totalSupply = await contract.totalSupply();
      assert.equal(totalSupply, 1);

      const event = result.logs[0].args;
      assert.equal(event.tokenId.toString(), '1', 'tokenId is correct');
      assert.equal(
        event.from,
        '0x0000000000000000000000000000000000000000',
        'from is correct'
      );
      assert.equal(event.to, accounts[0], 'to is correct');

      // ? FAILURE: same color can't be minted multiple times
      await contract.mint('#EC058E').should.be.rejected;
    });
  });

  describe('indexing', async () => {
    it('lists colors', async () => {
      await contract.mint('#5386E4');
      await contract.mint('#FFFFFF');
      await contract.mint('#000000');
      const totalSupply = await contract.totalSupply();

      let result = [];
      for (let i = 0; i < totalSupply; i++) {
        const color = await contract.colors(i);
        result.push(color);
      }

      let expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000'];
      assert.equal(result.join(','), expected.join(','));
    });
  });
});
