import React from 'react';

const LatestTransaction = (Txns: any) => {
  const listItem = Txns.recent
    .slice(Txns.recent.length - 10, Txns.recent.length)
    .map((Txn: any, index: number) => (
      <div className="" key={index}>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <div>
              <span className="bg-[#77838f]/[.06] p-4 rounded-full">
                <span className="text-black	text-sm text-[#1e2022]">Tx</span>
              </span>
            </div>
            <div className="ml-2">
              <a
                href="#"
                className="text-sm text-[#3498db] hover:text-[#1d6fa5]"
              >
                {Txn.hash.substring(0, 15)}...
              </a>
              <p className="text-xs text-[#77838f]">1 secs ago</p>
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 flex justify-between">
            <div className="">
              <p className="text-sm text-[#77838f]">
                From{' '}
                <a
                  href="#"
                  className="ml-2 text-[#3498db] hover:text-[#1d6fa5]"
                >
                  {Txn.from_address.substring(0, 20)}...
                </a>
              </p>
              <p className="text-xs text-[#77838f]">
                To{' '}
                <a
                  href="#"
                  className="text-sm text-[#3498db] hover:text-[#1d6fa5]"
                >
                  {Txn.to_address.substring(0, 20)}...
                </a>
              </p>
            </div>
            <div className="">
              <span
                data-tooltip-target="tooltip-transaction"
                className="ehter-label text-xs text-[#77838f]"
              >
                {Number(
                  (parseInt(Txn.value, 10) / Math.pow(10, 18)).toFixed(5)
                )}
                Eth
              </span>
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
        <div className="opacity-md"></div>
      </div>
    ));
  return <div>{listItem}</div>;
};
export default LatestTransaction;
