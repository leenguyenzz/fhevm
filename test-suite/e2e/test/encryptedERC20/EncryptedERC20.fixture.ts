import { ethers } from 'hardhat';

import { getSigners } from '../signers';
import type { EncryptedERC20 } from '../types';

export async function deployEncryptedERC20Fixture(): Promise<EncryptedERC20> {
  const signers = await getSigners();

  const contractFactory = await ethers.getContractFactory('EncryptedERC20');
  const contract = await contractFactory.connect(signers.alice).deploy('Naraggara', 'NARA'); // City of Zama's battle
  await contract.waitForDeployment();

  return contract;
}
