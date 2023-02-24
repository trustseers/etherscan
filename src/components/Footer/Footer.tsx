import React from 'react';
import etherImg from '../../assets/images/ethereum-light.svg';
import footerMapLight from '../../assets/images/map.png';
import footerMapDark from '../../assets/images/map-light.png';
// import ScrollToTop from './ScrollToTop';

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#f8f9fa] py-4 px-4 md:px-0 dark:bg-[#151515]">
      <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-6 border-b border-[#e9ecef] dark:border-[#222]">
        <div className="flex justify-between w-full">
          <div>
            <ul className="items-center justify-center md:flex space-x-2 md:space-y-0 inline-flex md:block">
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#e9ecef] text-[#111b36] text-sm dark:bg-[#222] dark:text-[#fafafa] dark:hover:bg-[#dee2e6] dark:hover:text-[#000]"
                  data-tooltip-target="twitter"
                  data-tooltip-placement="top"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <div
                  id="twitter"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                >
                  Twitter
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#e9ecef] text-[#111b36] text-sm dark:bg-[#222] dark:text-[#fafafa] dark:hover:bg-[#dee2e6] dark:hover:text-[#000]"
                  data-tooltip-target="facebook"
                  data-tooltip-placement="top"
                >
                  <i className="fa fa-facebook-official"></i>
                </a>
                <div
                  id="facebook"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                >
                  Facebook
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#e9ecef] text-[#111b36] text-sm dark:bg-[#222] dark:text-[#fafafa] dark:hover:bg-[#dee2e6] dark:hover:text-[#000]"
                  data-tooltip-target="reddit"
                  data-tooltip-placement="top"
                >
                  <i className="fa fa-reddit-alien"></i>
                </a>
                <div
                  id="reddit"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                >
                  Reddit
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="p-2 rounded-full bg-[#e9ecef] text-[#111b36] text-sm dark:bg-[#222] dark:text-[#fafafa] dark:hover:bg-[#dee2e6] dark:hover:text-[#000]"
                  data-tooltip-target="medium"
                  data-tooltip-placement="top"
                >
                  <i className="fa fa-medium"></i>
                </a>
                <div
                  id="medium"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block py-1 px-2 text-xs font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip dark:bg-[#333]"
                >
                  Medium
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[#111b36] hover:text-[#066a9c] text-sm dark:text-[#f5f5f5] dark:hover:text-[#0784c3]">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
              <a className="ml-1" href="#!" onClick={toTop}>
                Back to Top
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-10 border-b border-[#e9ecef] dark:border-[#222]">
        <div className="grid md:grid-cols-5 mb-4 bg-no-repeat">
          <div className="col-span-2 pr-16 md:mb-0 mb-5">
            <div className="flex items-center mb-4">
              <img src={etherImg} alt="" width={20} />
              <span className="text-xl text-[#212529] mb-0 ml-3 dark:text-[#f5f5f5]">
                Powered by Ethereum
              </span>
            </div>
            <p className="text-[#212529] text-xs dark:text-[#f5f5f5]">
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
            <div className="mt-2 hidden md:block">
              <img
                src={footerMapLight}
                alt=""
                className="block dark:hidden"
                width={280}
              />
              <img
                src={footerMapDark}
                alt=""
                className="hidden dark:block"
                width={280}
              />
            </div>
          </div>
          <div className="md:mx-6">
            <div className="md:ml-3">
              <p className="text-sm text-[#212529] mb-0 footer-col dark:text-[#f5f5f5]">
                Company
              </p>
              <ul>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    About Us
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Brand Assets
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Careers{' '}
                    <span className="bg-[#0784c3]  text-[11px] text-white small fw-medium text-nowrap rounded-full p-1 px-2">
                      We're Hiring!
                    </span>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:mx-6">
            <div className="md:ml-3">
              <p className="text-sm text-[#212529] mb-0 footer-col dark:text-[#f5f5f5]">
                Community
              </p>
              <ul>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    API Documentation
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Knowledge Base
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Knowledge Base
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Network Status
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Newsletters
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Disqus Comments
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mx-6 md:mt-0">
            <div className="md:ml-3">
              <p className="text-sm text-[#212529] mb-0 footer-col dark:text-[#f5f5f5]">
                Products & Services
              </p>
              <ul>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Advertise
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Explorer-as-a-Service (EaaS)
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    API Plans
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Priority Support
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Blockscan{' '}
                    <i className="fa fa-external-link ml-1 text-sm text-[#6c757d] hover:text-[#6c757d]"></i>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-xs footer-menu dark:text-[#f5f5f5]"
                  >
                    Bug Bounty{' '}
                    <i className="fa fa-external-link ml-1 text-sm text-[#6c757d] hover:text-[#6c757d]"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 mx-auto lg:max-w-7xl md:items-center md:flex">
        <div className="flex justify-between w-full">
          <div>
            <p className="mb-0 text-[#212529] text-xs dark:text-[#f5f5f5]">
              Etherscan © 2023 (C1)
            </p>
          </div>
          <div>
            <p className="mb-0 text-[#212529] text-xs dark:text-[#f5f5f5]">
              Donations:
              <a
                className="text-[#77838f] mx-2 text-[#0784c3] hover:text-[#066a9c]"
                href="#"
              >
                0x71c765...d8976f
              </a>{' '}
              <i className="fa fa-heart text-[#de4437]" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </div>
  );
};
export default Footer;
