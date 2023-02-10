import React, { useState } from 'react';
import logo from '../../assets/images/logo-etherscan.svg';
import etherIcon from '../../assets/images/ethereum-icon.png';
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="">
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <img src={logo} alt="" width="140" />
              </a>
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-400 text-sm py-3">
                  <a href="#" className="hover:text-[#3498db] py-3 md:py-5">
                    Home
                  </a>
                </li>
                <li className="text-gray-400 text-sm py-3 hover:text-[#3498db] duration-[400ms,700ms]">
                  <a
                    href="#"
                    className="peer duration-[400ms,700ms] py-3 md:py-5"
                  >
                    Blockchain <i className="fa fa-angle-down"></i>
                  </a>
                  <div className="hidden peer-hover:flex hover:flex min-w-[230px] flex-col bg-white drop-shadow-lg absolute py-4 top-16 border-t-[3px] border-[#3498db] z-10">
                    <a
                      className="text-xs px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View Txns
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View Pending Txns
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View Contract Internal Txns
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View Blocks
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      Forked Blocks (Reorgs)
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View Uncles
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      Top Accounts
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      Verified Contracts
                    </a>
                  </div>
                </li>
                <li className="text-gray-400 text-sm py-3">
                  <a
                    href="#"
                    className="peer hover:text-[#3498db] py-3 md:py-5"
                  >
                    Tokens <i className="fa fa-angle-down"></i>
                  </a>
                  <div className="hidden peer-hover:flex hover:flex min-w-[230px] flex-col bg-white drop-shadow-lg absolute py-4 top-16 border-t-[3px] border-[#3498db] z-10">
                    <a
                      className="text-xs px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      ERC20 Top Tokens
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View ERC20 Transfers
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      ERC721 Top Tokens
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View ERC721 Transfers
                    </a>
                    <div className="opacity-md"></div>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      ERC1155 Top Tokens
                    </a>
                    <a
                      className="text-xs  px-5 py-2 text-gray-400 hover:text-[#3498db]"
                      href="#"
                    >
                      View ERC1155 Transfers{' '}
                      <span className="bg-[#00c9a7] text-white text-[9px] mr-1 px-[5px] py-[2px] rounded-md relative -top-[5px]">
                        New
                      </span>
                    </a>
                  </div>
                </li>
                <li className="text-gray-400 text-sm py-3">
                  <a
                    href="#"
                    className="peer hover:text-[#3498db] py-3 md:py-5"
                  >
                    Resources <i className="fa fa-angle-down"></i>
                  </a>
                </li>
                <li className="text-gray-400 text-sm py-3">
                  <a
                    href="#"
                    className="peer hover:text-[#3498db] py-3 md:py-5"
                  >
                    More <i className="fa fa-angle-down"></i>
                  </a>
                </li>
                <li className="header-divide text-gray-400"></li>
                <li className="divide-x text-gray-400 text-sm py-3">
                  <a href="#">
                    <i className="fa fa-user-circle-o"></i> Sign in
                  </a>
                </li>
                <li className="header-divide text-gray-400"></li>
                <li className="text-gray-400 text-sm bg-[#3498db]/[0.1] p-1 rounded-sm">
                  <a href="#" className="peer ">
                    <img src={etherIcon} width="19" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
