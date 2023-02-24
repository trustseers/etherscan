import React from 'react';
import moment from 'moment';
import 'moment-timezone';

const LatestTransaction = (Txns: any) => {
  const listItem = Txns.recent
    .slice(Txns.recent.length - 10, Txns.recent.length)
    .map((Txn: any, index: number) => (
      <div className="" key={index}>
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="flex items-center">
            <div>
              <span className="bg-[#77838f]/[.06] p-4 rounded-md hidden sm:block">
                <i className="fa fa-list-alt text-black	text-sm text-[#1e2022] dark:text-[#f5f5f5]"></i>
              </span>
              <span className="hidden text-sm text-[#1e2022] latest-block dark:text-[#f5f5f5]">
                TX#
              </span>
            </div>
            <div className="ml-2 flex sm:block">
              <a
                href="#"
                className="text-sm text-[#3498db] hover:text-[#1d6fa5]"
              >
                {Txn.hash.substring(0, 15)}...
              </a>
              <p className="text-xs text-[#77838f] pl-2 pt-0.5 sm:pl-0 sm:pt-0">
                {moment(Txn.block_timestamp)
                  .tz('America/New_York')
                  .fromNow(true)}
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 flex justify-between">
            <div className="">
              <p className="text-sm text-[#1e2022] dark:text-[#f5f5f5]">
                From{' '}
                <a
                  href="#"
                  className="ml-2 text-[#3498db] hover:text-[#1d6fa5]"
                >
                  {Txn.from_address.substring(0, 20)}...
                </a>
              </p>
              <p className="text-sm text-[#1e2022] dark:text-[#f5f5f5]">
                To{' '}
                <a
                  href="#"
                  className="text-sm text-[#3498db] hover:text-[#1d6fa5]"
                >
                  {Txn.to_address.substring(0, 20)}...
                </a>
                <span className="sm:hidden font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-[#f5f5f5] dark:border-[#222] border border-gray-500 text-xs text-black">
                  {Number(
                    (parseInt(Txn.value, 10) / Math.pow(10, 18)).toFixed(5)
                  )}{' '}
                  Eth
                </span>
              </p>
            </div>
            <div className="">
              <a
                data-tooltip-target="tooltip-transaction"
                data-tooltip-placement="top"
                className="font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-[#f5f5f5] dark:border-[#222] border border-gray-500 text-xs text-black hidden sm:block"
              >
                {/*  */}
                {Number(
                  (parseInt(Txn.value, 10) / Math.pow(10, 18)).toFixed(5)
                )}{' '}
                Eth
              </a>
              <div
                id="tooltip-transaction"
                role="tooltip"
                className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
              >
                Amount
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
export default LatestTransaction;
