import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';

const LatestBlocks = (Blocks: any) => {
  const listItem = Blocks.recent.map((block: any, index: number) => (
    <div className="" key={index}>
      <div className="grid grid-cols-3">
        <div className="flex items-center">
          <div>
            <span className="bg-[#77838f]/[.06] p-4 rounded-md">
              <span className="text-black	text-sm text-[#1e2022]">BK</span>
            </span>
          </div>
          <div className="ml-2">
            <a href="#" className="text-sm text-[#3498db] hover:text-[#1d6fa5]">
              {block.number}
            </a>
            <p className="text-xs text-[#77838f]">
              {moment(block.timestamp).tz('America/New_York').fromNow(true)}
            </p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-between">
          <div className="">
            <p className="text-sm text-[#77838f]">
              Fee Recipient
              <a href="#" className="ml-2 text-[#3498db] hover:text-[#1d6fa5]">
                {block.miner.substring(0, 15)}...
              </a>
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
              className="ehter-label text-xs text-[#77838f]"
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
      <div className="opacity-md"></div>
    </div>
  ));
  return <div>{listItem}</div>;
};
export default LatestBlocks;
