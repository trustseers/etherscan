import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import ether_1 from '../../assets/images/ethereum-1.svg';
import icon_8 from '../../assets/images/icon-8.svg';
import icon_2_1 from '../../assets/images/icon-2-1.svg';
import icon_51 from '../../assets/images/icon-51.svg';
import Chart from '../../components/Chart/Chart';
import LatestBlocks from './LatestBlock';
import LatestTransaction from './LatestTransaction';
import axios from 'axios';

const ehterscan_apiKey = process.env.REACT_APP_ETHERSCAN_API_KEY;
const moralis_apiKey_1 = process.env.REACT_APP_MORALIS_API_KEY_1;
const moralis_apiKey_2 = process.env.REACT_APP_MORALIS_API_KEY_2;
const etherscan_endpoint = 'https://api.etherscan.io/api';
const moralis_endpoint = 'https://deep-index.moralis.io/api/v2';

const Contents = () => {
  const [LTxn, setLTxn] = useState([]);
  const [LBlock, setLBlock] = useState<any>([]);
  const [reward, setReward] = useState<any>([]);
  const [EthPrice, setETH] = useState();
  const [BTCPrice, setBTC] = useState();
  const [mCap, setMCap] = useState<any>();

  useEffect(() => {
    //get latest block no using EtherSCan API
    axios
      .get(
        etherscan_endpoint +
          `?module=proxy&action=eth_blockNumber&apikey=${ehterscan_apiKey}`
      )
      .then(async (res) => {
        const blockNo = parseInt(res.data.result);

        //get block and transaction details
        const getBlock: any = async (blockNo: number) => {
          return axios
            .get(
              moralis_endpoint +
                `/block/${blockNo}?chain=eth&include=internal_transactions`,
              {
                headers: {
                  'X-API-Key': moralis_apiKey_1,
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
              etherscan_endpoint +
                `?module=block&action=getblockreward&blockno=${blockNo}&apikey=${ehterscan_apiKey}`
            )
            .then((res) => res.data.result.blockReward);
        };

        // get recent block number list (latest ~ latest-5)
        const block_arr: any[] = [];
        const block_reward_arr: any[] = [];
        for (let i = 0; i < 5; i++) {
          if (i == 0) {
            setLTxn((await getBlock(blockNo)).transactions);
          }
          block_arr.push(await getBlock(blockNo - i));
          block_reward_arr.push(await getBlockReward(blockNo - i));
        }
        setReward(block_reward_arr);
        setLBlock(block_arr);
      });

    //get ether and btc price
    axios
      .get(
        etherscan_endpoint +
          `?module=stats&action=ethprice&apikey=${ehterscan_apiKey}`
      )
      .then(async (res) => {
        const etherPrice = res.data.result.ethusd.toLocaleString();
        const BTCPrice = res.data.result.ethbtc;
        setETH(etherPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        setBTC(BTCPrice);
        // get the market cap of ether in USD
        axios
          .get(
            etherscan_endpoint +
              `?module=stats&action=ethsupply&apikey=${ehterscan_apiKey}`
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
    <div>
      <section className="bg-[#21325b] bg-footer_bg py-16">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex py-4">
          <p className="text-xl text-white mb-0">
            The Ethereum Blockchain Explorer
          </p>
        </div>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex py-4">
          <Search />
        </div>
      </section>

      {/* ether dashboard */}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex -mt-5">
        <div className="rounded-lg bg-white p-4 mb-4 border-slate-900 shadow-xl w-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-4">
            <div className="pr-6 sm:col-span-1">
              <div className="flex items-center">
                <div>
                  <img src={ether_1} alt="" width={19} />
                </div>
                <div className="ml-2">
                  <p className="text-xs text-gray-400">ETHER PRICE</p>
                  <a
                    href="#"
                    data-tooltip-target="ehter-price"
                    data-tooltip-placement="bottom"
                    className="text-sm hover:text-[#3498db]"
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
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    View Historical Ether Price
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="opacity-md"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <img src={icon_8} alt="" width={28} />
                </div>
                <div className="ml-2">
                  <p className="text-xs text-gray-400">MARKET CAP</p>
                  <a
                    href="#"
                    data-tooltip-target="ether-market"
                    data-tooltip-placement="top"
                    className="text-sm text-[#77838f] hover:text-[#3498db]"
                  >
                    ${mCap}
                  </a>
                  <div
                    id="ether-market"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    View more
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-6 md:border-r md:border-l sm:col-span-1 md:pt-0 pt-6">
              <div className="flex items-center">
                <div>
                  <img src={icon_2_1} alt="" width={29} />
                </div>
                <div className="ml-2 w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-400">TRANSACTIONS</p>
                      <a
                        href="#"
                        data-tooltip-target="ether-amount"
                        data-tooltip-placement="left"
                        className="text-sm hover:text-[#3498db]"
                      >
                        $1,615.61
                      </a>
                      <span
                        data-tooltip-target="ether-tps"
                        data-tooltip-placement="bottom"
                        className="text-[#77838f] text-xs hover:text-[#77838f]"
                      >
                        {' '}
                        (11.1 TPS)
                      </span>
                      <div
                        id="ether-tps"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Transactions per Second
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <div
                        id="ether-amount"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Total Transactions Counter <br /> (Update every 5 mins)
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">MED GAS PRICE</p>
                      <a
                        href="#"
                        data-tooltip-target="ether-med"
                        data-tooltip-placement="top"
                        className="text-sm hover:text-[#3498db]"
                      >
                        14 Gwei
                        <span className="text-[#77838f] text-xs hover:text-[#77838f]">
                          {' '}
                          ($0.47)
                        </span>
                      </a>
                      <div
                        id="ether-med"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                      >
                        Base Fee: 15 Gwei <br /> Priority Fee: 0 Gwei
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="opacity-md"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <img
                    data-tooltip-target="ether-last-img"
                    data-tooltip-placement="top"
                    src={icon_51}
                    alt=""
                    width={28}
                  />
                  <div
                    id="ether-last-img"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] text-center font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    Last Safe and Finalized Blocks
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <div className="ml-2">
                  <p className="text-xs text-gray-400">LAST FINALIZED BLOCK</p>
                  <a
                    href="#"
                    data-tooltip-target="ether-last-block"
                    data-tooltip-placement="bottom"
                    className="text-sm"
                  >
                    $1,615.61
                  </a>
                  <div
                    id="ether-last-block"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block py-1 px-2 text-[11px] text-center font-medium text-white transition-opacity duration-300 bg-[#21325b] rounded-md shadow-sm opacity-0 tooltip"
                  >
                    This block is finalized and cannot be <br /> reverted
                    without slashing at least <br />
                    1/3 of all validators
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-6 border-t border-1 md:border-transparent col-span-1 sm:col-span-2 md:col-span-1">
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      ETHEREUM TRANSACTION HISTORY IN 14 DAYS
                    </p>
                  </div>
                  <div>
                    <a
                      id="viewChart"
                      data-dropdown-toggle="dropdown"
                      data-dropdown-offset-distance="-20"
                      data-dropdown-offset-skidding="50"
                      data-dropdown-placement="left"
                      className="text-xs text-gray-400 px-2 py-1 rounded-sm bg-[#77838f]/[0.1]"
                    >
                      <i className="fa fa-ellipsis-v"></i>
                    </a>
                    <div
                      id="dropdown"
                      className="z-10 hidden bg-white rounded-sm shadow"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="viewChart"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#3498db]"
                          >
                            View Detailed Chart
                          </a>
                        </li>
                      </ul>
                    </div>
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
          <div className="rounded-lg bg-white pt-4 mb-4 border-slate-900 shadow-xl">
            <div className="card-header">
              <p className="border-b border-gray-200 text-sm px-4 pb-3 text-gray-400">
                Latest Blocks
              </p>
            </div>
            <div className="card-body">
              <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-3 block-list">
                <LatestBlocks recent={LBlock} blockreward={reward} />
              </div>
            </div>
            <div className="card-footer border-t border-gray-200 p-2">
              <input
                type="button"
                className="form-input cursor-pointer hover:bg-[#3498DB] hover:text-white text-white py-1 text-xs text-[#3498DB] rounded-lg bg-[#3498DB]/[.06] border-transparent text-sm px-4 w-full border-[#3498db] "
                value={'view all blocks'}
              />
            </div>
          </div>
          <div className="rounded-lg bg-white pt-4 mb-4 border-slate-900 shadow-xl">
            <div className="card-header">
              <p className="border-b border-gray-200 text-sm px-4 pb-3 text-gray-400">
                Latest Transactions
              </p>
            </div>
            <div className="card-body">
              <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-3 block-list">
                <LatestTransaction recent={LTxn} />
              </div>
            </div>
            <div className="card-footer border-t border-gray-200 p-2">
              <input
                type="button"
                className="form-input cursor-pointer hover:bg-[#3498DB] hover:text-white text-white py-1 text-xs text-[#3498DB] rounded-lg bg-[#3498DB]/[.06] border-transparent text-sm px-4 w-full border-[#3498db] "
                value={'view all blocks'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
