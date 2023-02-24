import React, { useState } from 'react';
import logo from '../../assets/images/logo-etherscan.svg';
import Darklogo from '../../assets/images/etherscan-light.svg';
import etherIcon from '../../assets/images/ethereum-icon.png';
import etherLight from '../../assets/images/ethereum-dark.svg';
import etherDark from '../../assets/images/ethereum-light.svg';
import blockScanLight from '../../assets/images/blockscan-logo-dark.svg';
import blockScanDark from '../../assets/images/blockscan-logo-light.svg';
const Header = (dark: any, handleDark: any) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="w-full sticky border-[#e9ecef] border-b top-0 z-50 bg-white md:block hidden dark:bg-[#0a0a0a] dark:border-[#222]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <div className="d-flex align-items-sm-center gap-4 w-100 fs-sm">
              <span className="text-xs text-[#6c757d] dark:text-[#bbb]">
                ETH Price:{' '}
                <a href="#" className="text-[#0784c3]">
                  $1,481.12
                </a>
                <span className="ml-2">(</span>
                <span className="text-[#00a186]">+0.58%</span>
                <span>)</span>
              </span>
              <span className="text-xs text-[#6c757d] ml-3 dark:text-[#bbb]">
                <i className="fa-solid fa-gas-pump"></i>Gas:
                <a href="#" className="ml-2 text-[#0784c3]">
                  44 Gwei
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <div className="d-flex align-items-sm-center gap-4 w-100 fs-sm">
              <span className="text-xs text-[#066a9c]">
                <a
                  href="#!"
                  id="darkMode"
                  data-dropdown-toggle="darkModeToggle"
                  className="p-2 border border-[#e9ecef] hover:bg-[#e9ecef] rounded-md dark:border-[#222] dark:hover:bg-[#222]"
                >
                  <i className="fa fa-sun-o"></i>
                </a>
              </span>
              <div
                id="darkModeToggle"
                className="z-10 hidden bg-white divide-y p-2 divide-gray-100 rounded-lg shadow w-44 dark:bg-[#0a0a0a] dark:divide-[#222] dark:border-[#222]"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="darkMode"
                >
                  <li>
                    <a
                      href="#!"
                      className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      onClick={() => dark.handleDark(false)}
                    >
                      <i className="fa fa-sun-o mr-2"></i>
                      Light
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      onClick={() => dark.handleDark(true)}
                    >
                      <i className="fa fa-moon-o mr-2"></i>
                      Dark
                    </a>
                  </li>
                </ul>
                <div className="py-1 ">
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <i className="fa fa-cog mr-2"></i>
                    Site Settings
                    <i className="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
              <span className="text-xs text-gray-400 ml-2">
                <a
                  href="#"
                  id="etherMainnet"
                  data-dropdown-toggle="etherMainnetToggle"
                  className="p-2 border border-[#e9ecef] hover:bg-[#e9ecef] rounded-md dark:border-[#222] dark:hover:bg-[#222]"
                >
                  {dark.dark ? (
                    <img src={etherDark} className="inline" width="10" />
                  ) : (
                    <img src={etherLight} className="inline" width="10" />
                  )}
                </a>
              </span>
              <div
                id="etherMainnetToggle"
                className="z-10 hidden bg-white divide-y p-2 divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="etherMainnet"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3]"
                    >
                      Ethereum Mainnet
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3]"
                    >
                      Ethereum Mainnet
                      <span className="bg-gray-100 text-black text-[9px] ml-2 px-2 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-[#e9ecef] font-bold">
                        CN
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3]"
                    >
                      Beaconscan
                      <span className="bg-gray-100 text-black text-[9px] ml-2 px-2 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-[#e9ecef] font-bold">
                        ETH2
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="py-1 ">
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Goerli Testnet
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:rounded-md hover:bg-[#e9ecef] active:text-[#0784c3] focus:text-[#0784c3] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sepolia Testnet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full dark:bg-[#0a0a0a] dark:border-[#222]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 relative">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              <a href="#">
                {dark.dark ? (
                  <img src={Darklogo} alt="" width="140" />
                ) : (
                  <img src={logo} alt="" width="140" />
                )}
              </a>
              <li className="text-black text-sm block md:hidden dark:text-[#f5f5f5]">
                <a href="#">
                  <i className="fa fa-user-circle-o mr-2"></i> Sign in
                </a>
              </li>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
                <li className="text-black text-sm py-2 md:py-3">
                  <a
                    href="#"
                    className="hover:text-[#6c757d] py-3 md:py-5 dark:text-[#bbb]"
                  >
                    Home
                  </a>
                </li>
                <li className="group text-black text-sm py-2 md:py-3 hover:text-[#6c757d] duration-[400ms,700ms]">
                  <a
                    href="#!"
                    className="duration-[400ms,700ms] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    Blockchain <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#!"
                    >
                      Transactions
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Pending Transactions
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Contract Internal Transactions
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      View Blocks
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Forked Blocks (Reorgs)
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Uncles
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Top Accounts
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Verified Contracts
                    </a>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className="hover:text-[#6c757d] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    Tokens <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      ERC20 Top Tokens{' '}
                      <span className="text-[11px] text-[#6c757d]">
                        (ERC-20)
                      </span>
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      View ERC20 Transfers{' '}
                      <span className="text-[11px] text-[#6c757d]">
                        (ERC-20)
                      </span>
                    </a>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className="hover:text-[#6c757d] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    NFT <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Top NFTs
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Latest Trades
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Latest Transfers
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Latest Mints
                    </a>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className="hover:text-[#6c757d] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    Resources <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Charts And Stats
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Top Statistics
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Directory
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Newsletter
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className="hover:text-[#6c757d] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    Developers <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      API Plans
                    </a>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      API Documentation
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Verify Contract
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Smart Contract Search
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Contract Diff Checker
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Vyper Online Compiler
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Bytecode to Opcode
                    </a>
                    <a
                      className="text-xs  px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      href="#"
                    >
                      Broadcast Transaction
                    </a>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className=" hover:text-[#6c757d] flex items-center md:inline md:py-5 dark:text-[#bbb]"
                  >
                    More <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown p-2 group-hover:flex rounded-b-lg w-full left-0 hover:flex w-mt-3 md:mt-0  md:min-w-[230px] flexborder border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a]">
                    <div className="grid grid-cols-1 sm:grid-cols-4">
                      <div>
                        <div className="hidden sm:block bg-[#f8f9fa] h-100 rounded-lg p-5 dark:bg-[#151515]">
                          <div>
                            <h6 className="text-sm font-medium text-[#212529] mb-3 dark:text-[#f5f5f5]">
                              Tools & Services
                            </h6>
                            <p className="text-xs text-[#212529] mb-3 dark:text-[#f5f5f5]">
                              Discover more of Etherscan's tools and services in
                              one place.
                            </p>
                          </div>
                          <div className="mt-20	">
                            <p className="text-xs text-[#6c757d] mb-2 dark:text-[#bbb]">
                              Sponsored
                            </p>
                            <a href="#">
                              {dark.dark ? (
                                <img src={blockScanDark} width="100" />
                              ) : (
                                <img src={blockScanLight} width="100" />
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[#212529] mb-3 dark:text-[#f5f5f5]">
                            Tools
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-refresh mr-2"></i>
                            Charts And Stats
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-list mr-2"></i>
                            Eth2 Beacon Chain Deposits
                          </a>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[#212529] mb-3 dark:text-[#f5f5f5]">
                            Explore
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-bar-chart mr-2"></i>
                            Gas Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-exchange mr-2"></i>
                            DEX Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-server mr-2"></i>
                            Node Tracker
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-map-signs mr-2"></i>
                            Label Cloud
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-search-plus mr-2"></i>
                            ENS Lookup
                          </a>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="px-3">
                          <h6 className="text-sm font-medium text-[#212529] mb-3 dark:text-[#f5f5f5]">
                            Services
                          </h6>
                        </div>
                        <div className="w-full">
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-key mr-2"></i>
                            Token Approvals
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-american-sign-language-interpreting mr-2"></i>
                            Verified Signature
                          </a>
                          <a
                            className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5] block"
                            href="#"
                          >
                            <i className="fa fa-weixin mr-2"></i>
                            Blockscan Chat
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="bg-[#f8f9fa] h-100 rounded-lg p-5 dark:bg-[#151515] sm:hidden">
                          <div>
                            <h6 className="text-sm font-medium text-[#212529] mb-3 dark:text-[#f5f5f5]">
                              Tools & Services
                            </h6>
                            <p className="text-xs text-[#212529] mb-3 dark:text-[#f5f5f5]">
                              Discover more of Etherscan's tools and services in
                              one place.
                            </p>
                          </div>
                          <div className="mt-5">
                            <p className="text-xs text-[#6c757d] mb-2 dark:text-[#bbb]">
                              Sponsored
                            </p>
                            <a href="#">
                              {dark.dark ? (
                                <img src={blockScanDark} width="100" />
                              ) : (
                                <img src={blockScanLight} width="100" />
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group text-black text-sm py-2 md:py-3">
                  <a
                    href="#!"
                    className=" hover:text-[#6c757d] flex items-center md:hidden md:py-5 dark:text-[#bbb]"
                  >
                    Appearance & Settings{' '}
                    <i className="fa fa-angle-down ml-auto"></i>
                  </a>
                  <div className="hidden dropdown px-3 group-hover:flex group-hover:scale-100 transition-transform rounded-b-lg hover:flex md:min-w-[230px] flex-col mt-3 md:mt-0 border-[#e9ecef] bg-white md:drop-shadow-lg static md:absolute py-3 top-14 md:border-t-[3px] md:border-[#0784c3] md:rounded-b-lg z-10 dark:bg-[#0a0a0a] dark:bg-gray-700 dark:divide-gray-600">
                    <a
                      href="#!"
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      onClick={() => dark.handleDark(false)}
                    >
                      <i className="fa fa-sun-o mr-2"></i>
                      Light
                    </a>
                    <a
                      href="#!"
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                      onClick={() => dark.handleDark(true)}
                    >
                      <i className="fa fa-moon-o mr-2"></i>
                      Dark
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      href="#"
                      className="text-xs px-3 py-2 text-[#212529] hover:rounded-md hover:bg-[#e9ecef] dark:text-[#bbb] dark:hover:bg-[#252525] dark:hover:text-[#f5f5f5]"
                    >
                      <i className="fa fa-cog mr-2"></i>
                      Site Settings
                      <i className="fa fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </li>
                <li className="header-divide text-gray-400"></li>
                <li className="divide-x text-black text-sm py-2 md:py-3 hidden md:block dark:text-[#bbb]">
                  <a href="#">
                    <i className="fa fa-user-circle-o mr-2"></i> Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
