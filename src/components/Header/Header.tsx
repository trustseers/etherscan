import React, { useState  } from 'react';
import logo from '../../assets/images/logo-etherscan.svg';
import etherIcon from '../../assets/images/ethereum-icon.png';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className=''>
                        {/* <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 ">Dropdown</button>
                        <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
                            <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
                            <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
                        </div> */}
            <nav className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <img src={logo} alt="" width="140"/>
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
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#">Home</a>
                                </li>
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#">Blockchain <i className="fa fa-angle-down" ></i></a>
                                </li>
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#">Tokens <i className="fa fa-angle-down" ></i></a>
                                </li>
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#">Resources <i className="fa fa-angle-down" ></i></a>
                                </li>
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#">More <i className="fa fa-angle-down" ></i></a>
                                </li>
                                <li className="divide-x text-gray-400">
                                </li>
                                <li className="divide-x text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#"><i className="fa fa-user-circle-o" ></i> Sign in</a>
                                </li>
                                <li className="divide-x text-gray-400">
                                </li>
                                <li className="text-gray-400 hover:text-[#3498db] text-sm">
                                    <a href="#"><img src={etherIcon} width='28' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;