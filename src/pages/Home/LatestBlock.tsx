import React from 'react';
import moment from 'moment';
import 'moment-timezone';

const LatestBlocks = (Blocks: any) => {
  const listItem = Blocks.recent.map((block: any, index: number) => (
    <div className="" key={index}>
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <div className="flex items-center">
          <div>
            <span className="bg-[#77838f]/[.06] p-4 rounded-md hidden sm:block">
              <i className="fa fa-cube text-black	text-sm text-[#1e2022] dark:text-[#f5f5f5]"></i>
            </span>
            <span className="hidden text-sm text-[#1e2022] latest-block dark:text-[#f5f5f5]">
              Block
            </span>
          </div>
          <div className="ml-2 flex sm:block">
            <a href="#" className="text-sm text-[#3498db] hover:text-[#1d6fa5]">
              {block.number}
            </a>
            <p className="text-xs text-[#77838f] pl-2 pt-0.5 sm:pl-0 sm:pt-0">
              {moment(block.timestamp).tz('America/New_York').fromNow(true)}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2 flex justify-between">
          <div className="">
            <p className="text-sm text-[#1e2022] dark:text-[#f5f5f5]">
              Fee Recipient
              <a
                href="#"
                className="ml-2 text-[#3498db] hover:text-[#1d6fa5]"
                data-tooltip-target={`block-${block.miner}`}
                data-tooltip-placement="bottom"
              >
                {block.miner.substring(0, 15)}...
              </a>
              <div
                id={`block-${block.miner}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
              >
                View Historical Ether Price
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </p>
            <p className="text-xs text-[#77838f]">
              <a
                href="#"
                className="text-sm text-[#3498db] hover:text-[#1d6fa5]"
              >
                {block.transaction_count} txns
              </a>{' '}
              in 12 secs
            </p>
          </div>
          <div className="">
            <span
              data-tooltip-target="tooltip-block"
              data-tooltip-placement="top"
              className="font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-[#f5f5f5] dark:border-[#222] border border-gray-500 text-xs text-black hidden sm:block"
            >
              {Number(
                (
                  parseInt(Blocks.blockreward[index]) / Math.pow(10, 18)
                ).toFixed(5)
              )}{' '}
              Eth
            </span>
            <div
              id="tooltip-block"
              role="tooltip"
              className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
            >
              Block Reward
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-hr my-4"></div>
    </div>
  ));
  return <div>{listItem}</div>;
};
export default LatestBlocks;
