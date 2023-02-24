import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import etherLight from '../../assets/images/ethereum-dark.svg';
import etherDark from '../../assets/images/ethereum-light.svg';
import icon8 from '../../assets/images/icon-8.svg';
import icon21 from '../../assets/images/icon-2-1.svg';
import icon51 from '../../assets/images/icon-51.svg';
import Chart from '../../components/Chart/Chart';
import LatestBlocks from './LatestBlock';
import LatestTransaction from './LatestTransaction';
import axios from 'axios';

const ehterscanApiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
const moralisApiKey1 = process.env.REACT_APP_MORALIS_API_KEY_1;
const etherscanEndpoint = 'https://api.etherscan.io/api';
const moralisEndpoint = 'https://deep-index.moralis.io/api/v2';

const Contents = () => {
  const [LTxn, setLTxn] = useState([]);
  const [LBlock, setLBlock] = useState<any>([]);
  const [reward, setReward] = useState<any>([]);
  const [EthPrice, setETH] = useState();
  const [BTCPrice, setBTC] = useState();
  const [mCap, setMCap] = useState<any>();
  useEffect(() => {
    // get latest block no using EtherSCan API
    axios
      .get(
        etherscanEndpoint +
          `?module=proxy&action=eth_blockNumber&apikey=${ehterscanApiKey}`
      )
      .then(async (res) => {
        const blockNo = parseInt(res.data.result);
        //get block and transaction details
        const getBlock: any = async (blockNo: number) => {
          return axios
            .get(
              moralisEndpoint +
                `/block/${blockNo}?chain=eth&include=internal_transactions`,
              {
                headers: {
                  'X-API-Key': moralisApiKey1,
                  Accept: 'application/json',
                },
              }
            )
            .then((res) => res.data);
        };
        //get block reward
        const getBlockReward: any = async (blockNo: number) => {
          return axios
            .get(
              etherscanEndpoint +
                `?module=block&action=getblockreward&blockno=${blockNo}&apikey=${ehterscanApiKey}`
            )
            .then((res) => res.data.result.blockReward);
        };
        // get recent block number list (latest ~ latest-5)
        const blockArr: any[] = [];
        const blockRewardArr: any[] = [];
        for (let i = 0; i < 5; i++) {
          if (i == 0) {
            setLTxn((await getBlock(blockNo)).transactions);
          }
          blockArr.push(await getBlock(blockNo - i));
          blockRewardArr.push(await getBlockReward(blockNo - i));
        }
        setReward(blockRewardArr);
        setLBlock(blockArr);
      });
    //get ether and btc price
    axios
      .get(
        etherscanEndpoint +
          `?module=stats&action=ethprice&apikey=${ehterscanApiKey}`
      )
      .then(async (res) => {
        const etherPrice = res.data.result.ethusd.toLocaleString();
        const BTCPrice = res.data.result.ethbtc;
        setETH(etherPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        setBTC(BTCPrice);
        // get the market cap of ether in USD
        axios
          .get(
            etherscanEndpoint +
              `?module=stats&action=ethsupply&apikey=${ehterscanApiKey}`
          )
          .then((res) => {
            const cap = res.data.result;
            // // in wei
            const priceWei = cap.toString();
            // // in ether
            const priceEth = priceWei.slice(0, priceWei.length - 18);
            // // convert eth in USD
            const marketCap = parseInt(priceEth) * Number(etherPrice);
            setMCap(marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
          });
      });
  }, []);
  return (
    <div className="">
      <section className="bg-[#111b36] bg-footerBg py-16 dark:bg-[#0a0a0a]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex mb-3">
          <p className="text-xl text-white mb-0 font-medium">
            The Ethereum Blockchain Explorer
          </p>
        </div>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex mb-5">
          <Search />
        </div>
      </section>

      {/* ether dashboard */}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex -mt-5 ">
        <div className="rounded-lg bg-white p-4 mb-4 border-slate-900 shadow-xl w-full dark:bg-[#111] dark:border-[#222]">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-4">
            <div className="sm:pr-4 md:pr-6 sm:col-span-1 md:border-none border-b md:pb-0 pb-4 dark:border-[#222]">
              <div className="flex items-center">
                <div>
                  <img
                    src={etherLight}
                    alt=""
                    className="block dark:hidden"
                    width={19}
                  />
                  <img
                    src={etherDark}
                    alt=""
                    className="hidden dark:block"
                    width={19}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-[#6c757d] dark:text-[#bbb]">
                    ETHER PRICE
                  </p>
                  <a
                    href="#"
                    data-tooltip-target="ehter-price"
                    data-tooltip-placement="bottom"
                    className="text-sm hover:text-[#3498db] dark:text-[#f5f5f5]"
                  >
                    ${EthPrice}
                    <span className="text-[#77838f] hover:text-[#77838f]">
                      {' '}
                      @ {BTCPrice} BTC
                    </span>
                    <span className="text-[#00c9a7]	text-xs hover:text-[#00c9a7]">
                      {' '}
                      (+4.46%)
                    </span>
                  </a>
                  <div
                    id="ehter-price"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    View Historical Ether Price
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="content-hr my-5"></div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl">
                  <i className="fa fa-globe dark:text-[#f5f5f5]"></i>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-[#6c757d] dark:text-[#bbb]">
                    MARKET CAP
                  </p>
                  <a
                    href="#"
                    data-tooltip-target="ether-market"
                    data-tooltip-placement="top"
                    className="text-sm text-[#77838f] hover:text-[#3498db] dark:text-[#f5f5f5]"
                  >
                    ${mCap}
                  </a>
                  <div
                    id="ether-market"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    View more
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-0 sm:pl-4  md:px-6 md:border-r sm:border-l sm:col-span-1 md:pt-0 dark:border-[#222]">
              <div className="flex items-center">
                <div className="text-2xl">
                  <i className="fa fa-server dark:text-[#f5f5f5]"></i>
                </div>
                <div className="ml-3 w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-[#6c757d] dark:text-[#bbb]">
                        TRANSACTIONS
                      </p>
                      <a
                        href="#"
                        data-tooltip-target="ether-amount"
                        data-tooltip-placement="left"
                        className="text-sm hover:text-[#3498db] dark:text-[#f5f5f5]"
                      >
                        $1,615.61
                        <span
                          data-tooltip-target="ether-tps"
                          data-tooltip-placement="bottom"
                          className="text-[#77838f] hover:text-[#77838f]"
                        >
                          {' '}
                          (11.1 TPS)
                        </span>
                      </a>
                      <div
                        id="ether-tps"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Transactions per Second
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <div
                        id="ether-amount"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Total Transactions Counter <br /> (Update every 5 mins)
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#6c757d] dark:text-[#bbb]">
                        MED GAS PRICE
                      </p>
                      <a
                        href="#"
                        data-tooltip-target="ether-med"
                        data-tooltip-placement="top"
                        className="text-sm hover:text-[#3498db] dark:text-[#f5f5f5]"
                      >
                        14 Gwei
                        <span className="text-[#77838f] hover:text-[#77838f]">
                          {' '}
                          ($0.47)
                        </span>
                      </a>
                      <div
                        id="ether-med"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Base Fee: 15 Gwei <br /> Priority Fee: 0 Gwei
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="content-hr my-5"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="text-2xl">
                    <i className="fa fa-clock-o dark:text-[#f5f5f5]"></i>
                  </div>
                  <div
                    id="ether-last-img"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] text-center font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    Last Safe and Finalized Blocks
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div className="ml-2">
                  <p className="text-xs text-[#6c757d] dark:text-[#bbb]">
                    LAST FINALIZED BLOCK
                  </p>
                  <a
                    href="#"
                    data-tooltip-target="ether-last-block"
                    data-tooltip-placement="bottom"
                    className="text-sm dark:text-[#f5f5f5]"
                  >
                    $1,615.61
                  </a>
                  <div
                    id="ether-last-block"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] text-center font-medium text-white transition-opacity duration-300 bg-[#111b36] dark:bg-[#333] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    This block is finalized and cannot be <br /> reverted
                    without slashing at least <br />
                    1/3 of all validators
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 pt-5 md:pt-0 md:pl-6 border-t border-1 md:border-transparent col-span-1 sm:col-span-2 md:col-span-1 transaction">
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-[#6c757d]">
                      Transaction History in 14 days
                    </p>
                  </div>
                </div>
              </div>
              <Chart />
            </div>
          </div>
        </div>
      </div>

      {/* ether latest blocks and transaction */}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex mt-4 mb-5">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4 w-full">
          <div className="rounded-lg bg-white pt-4 mb-4 border border-[#e9ecef] dark:bg-[#111] dark:border-[#222]">
            <div className="card-header">
              <p className="border-b border-gray-200 text-sm px-4 pb-3 text-[#212529] font-bold dark:border-[#222] dark:text-[#f5f5f5]">
                Latest Blocks
              </p>
            </div>
            <div className="card-body">
              <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-4 block-list">
                <LatestBlocks recent={LBlock} blockreward={reward} />
              </div>
            </div>
            <div className="card-footer border-t border-gray-200 p-4 text-center bg-[#f8f9fa] rounded-lg dark:bg-[#111] dark:border-[#222]">
              <a
                href="#"
                className="text-xs text-[#6c757d] hover:text-[#0784c3] uppercase font-medium"
              >
                View all blocks <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-white pt-4 mb-4 border border-[#e9ecef] dark:bg-[#111] dark:border-[#222]">
            <div className="card-header">
              <p className="border-b border-gray-200 text-sm px-4 pb-3 text-[#212529] font-bold dark:border-[#222] dark:text-[#f5f5f5]">
                Latest Transactions
              </p>
            </div>
            <div className="card-body">
              <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-3 block-list">
                <LatestTransaction recent={LTxn} />
              </div>
            </div>
            <div className="card-footer border-t border-gray-200 p-4 text-center bg-[#f8f9fa] rounded-lg dark:bg-[#111] dark:border-[#222]">
              <a
                href="#"
                className="text-xs text-[#6c757d] hover:text-[#0784c3] uppercase font-medium"
              >
                View all transactions <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
