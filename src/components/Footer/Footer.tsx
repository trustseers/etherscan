import React, { useState  } from 'react';
import etherImg from '../../assets/images/ethereum.svg';

import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-[#21325b] bg-footer_bg py-4'>
            <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-4">
                <div className='grid grid-cols-1 gap-8 px-6 md:grid-cols-4 mb-4'>
                    <div className="">
                        <div className='flex items-center mb-4'>
                            <img src={etherImg} alt="" width={20} />
                            <span className="text-xl text-white mb-0 ml-3">Powered by Ethereum</span>
                        </div>
                        <p className="text-white text-xs">Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.</p>
                    </div>
                    <div className="mx-6">
                        <div className='ml-3'>
                            <p className="text-sm text-white mb-0 footer-col">Company</p>
                            <ul>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>About Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Contact Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Brand Assets</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Careers</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Terms of Service</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Bug Bounty</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-6">
                        <div className='ml-3'>
                            <p className="text-sm text-white mb-0 footer-col">Resources</p>
                            <ul>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>About Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Contact Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Brand Assets</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Careers</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Terms of Service</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Bug Bounty</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-6">
                        <div className='ml-3'>
                            <p className="text-sm text-white mb-0 footer-col">Products & Services</p>
                            <ul>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>About Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Contact Us</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Brand Assets</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Careers</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Terms of Service</a></li>
                                <li className='py-1'><a href="#" className='text-xs footer-menu'>Bug Bounty</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex'>
                <div className="opacity-md" ></div>
            </div>
            <div className='flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex'>
                <div className='grid grid-cols-1 gap-2 px-2 md:grid-cols-2'>
                    <p className="mb-0 text-white text-xs">Etherscan © 2023 (C1)&nbsp; | &nbsp;<a className="text-white-70" href="#">Donate</a> <i className="fas fa-heart text-danger"></i></p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;  