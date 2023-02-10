import React from 'react';
import etherImg from '../../assets/images/ethereum.svg';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <div className="bg-[#21325b] bg-footerBg py-4">
      <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-4">
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-4 mb-4 bg-footer_map bg-no-repeat">
          <div className="">
            <div className="flex items-center mb-4">
              <img src={etherImg} alt="" width={20} />
              <span className="text-xl text-white mb-0 ml-3">
                Powered by Ethereum
              </span>
            </div>
            <p className="text-white text-xs">
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
            <div className="mt-2">
              <a
                href="#"
                className="p-2 rounded-sm bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-xs"
              >
                <i className="fa fa-cogs"></i> Preferences
              </a>
              <a
                href="#"
                className="p-2 ml-2 rounded-sm bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-xs"
              >
                <i className="fa fa-moon-o"></i>
              </a>
            </div>
          </div>
          <div className="mx-6">
            <div className="ml-3">
              <p className="text-sm text-white mb-0 footer-col">Company</p>
              <ul>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    About Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Contact Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Brand Assets
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Careers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Terms of Service
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-6">
            <div className="ml-3">
              <p className="text-sm text-white mb-0 footer-col">Resources</p>
              <ul>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    About Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Contact Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Brand Assets
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Careers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Terms of Service
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-6">
            <div className="ml-3">
              <p className="text-sm text-white mb-0 footer-col">
                Products & Services
              </p>
              <ul>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    About Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Contact Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Brand Assets
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Careers
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Terms of Service
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-xs footer-menu">
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex">
        <div className="opacity-md"></div>
      </div>
      <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex">
        <div className="flex justify-between w-full px-6">
          <div>
            <p className="mb-0 text-white text-xs">
              Etherscan © 2023 (C1)&nbsp; | &nbsp;
              <a className="text-[#77838f]" href="#">
                Donate
              </a>{' '}
              <i className="fa fa-heart text-[#de4437]" aria-hidden="true"></i>
            </p>
          </div>
          <div>
            <ul className="items-center justify-center md:flex space-x-2 md:space-y-0 inline-flex md:block">
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-sm"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-sm"
                >
                  <i className="fa fa-facebook-official"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-sm"
                >
                  <i className="fa fa-reddit-alien"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#F8F9FA]/[0.1] hover:text-[#1e2022] hover:bg-[#f8f9fa] hover:shadow-[0_4px_11px_rgb(248,249,250,0.35)] text-white text-sm"
                >
                  <i className="fa fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};
export default Footer;
