/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FullMathEchidnaTest } from "../FullMathEchidnaTest";

export class FullMathEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FullMathEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<FullMathEchidnaTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FullMathEchidnaTest {
    return super.attach(address) as FullMathEchidnaTest;
  }
  connect(signer: Signer): FullMathEchidnaTest__factory {
    return super.connect(signer) as FullMathEchidnaTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FullMathEchidnaTest {
    return new Contract(address, _abi, signerOrProvider) as FullMathEchidnaTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDiv",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDivRounding",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d",
        type: "uint256",
      },
    ],
    name: "checkMulDivRoundingUp",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610320806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063695363a31461004657806379eee48714610071578063bf08c3911461009a575b600080fd5b61006f6004803603606081101561005c57600080fd5b50803590602081013590604001356100c3565b005b61006f6004803603606081101561008757600080fd5b5080359060208101359060400135610122565b61006f600480360360608110156100b057600080fd5b50803590602081013590604001356101ad565b600081116100d057600080fd5b60006100dd848484610229565b905060006100ec858585610264565b9050600083806100f857fe5b85870911156101125780820360011461010d57fe5b61011b565b80821461011b57fe5b5050505050565b6000811161012f57600080fd5b600061013c848484610229565b9050831580610149575082155b1561015c57801561015657fe5b506101a8565b6000610169828486610264565b90506000610178838588610264565b90508582101561018457fe5b8481101561018e57fe5b838683031061019957fe5b83858203106101a457fe5b5050505b505050565b600081116101ba57600080fd5b60006101c7848484610264565b90508315806101d4575082155b156101e157801561015657fe5b60006101ee828486610264565b905060006101fd838588610264565b90508582111561020957fe5b8481111561021357fe5b838287031061021e57fe5b83818603106101a457fe5b6000610236848484610264565b90506000828061024257fe5b848609111561025d57600019811061025957600080fd5b6001015b9392505050565b600080806000198587098686029250828110908390030390508061029a576000841161028f57600080fd5b50829004905061025d565b8084116102a657600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a0290910302918190038190046001018684119095039490940291909403929092049190911791909102915050939250505056fea164736f6c6343000706000a";