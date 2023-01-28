import React from 'react';
import Search from '../../components/Search/Search';
import ether_1 from '../../assets/images/ethereum-1.svg';
import icon_8 from '../../assets/images/icon-8.svg';
import icon_2_1 from '../../assets/images/icon-2-1.svg';
import icon_51 from '../../assets/images/icon-51.svg';

const Contents = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hashCode = '0x790649d9a164796febfe617b7bfc965658b73ed21598c33728eda16c0fe4ad0c';
    const blockList = numbers.map((number) =>
        <div className=''>
            <div className='grid grid-cols-3'>
                <div className='flex items-center'>
                    <div>
                        <span className="bg-[#77838f]/[.06] p-4 rounded-md">
                            <span className='text-black	text-sm text-[#1e2022]'>BK</span>
                        </span>
                    </div>
                    <div className='ml-2'>
                        <a href="#" className='text-sm text-[#3498db] hover:text-[#1d6fa5]'>16505594</a>
                        <p className="text-xs text-[#77838f]">{number} secs ago</p>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-2 flex justify-between'>
                    <div className=''>
                        <p className="text-sm text-[#77838f]">Fee Recipient<a href="#" className='ml-2 text-[#3498db] hover:text-[#1d6fa5]'>Fee Recipient: 0x467...263</a></p>
                        <p className="text-xs text-[#77838f]"><a href="#" className='text-sm text-[#3498db] hover:text-[#1d6fa5]'>125 txns </a>in 12 secs</p>
                    </div>
                    <div className=''>
                        <span className='ehter-label text-xs text-[#77838f]'>0.01565 Eth</span>
                    </div>
                </div>
            </div>
            <div className='opacity-md'></div>
        </div>
    );
    const transactionList = numbers.map((number) =>
        <div className=''>
            <div className='grid grid-cols-3'>
                <div className='flex items-center'>
                    <div>
                        <span className="bg-[#77838f]/[.06] p-4 rounded-full">
                            <span className='text-black	text-sm text-[#1e2022]'>Tx</span>
                        </span>
                    </div>
                    <div className='ml-2'>
                        <a href="#" className='text-sm text-[#3498db] hover:text-[#1d6fa5]'>
                            { hashCode.length > 15 ?
                                `${hashCode.substring(0, 15)}...` : hashCode
                            }
                        </a>
                        <p className="text-xs text-[#77838f]">{number} secs ago</p>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-2 flex justify-between'>
                    <div className=''>
                        <p className="text-sm text-[#77838f]">From <a href="#" className='ml-2 text-[#3498db] hover:text-[#1d6fa5]'>
                            { hashCode.length > 20 ?
                                `${hashCode.substring(0, 20)}...` : hashCode
                            }
                        </a></p>
                        <p className="text-xs text-[#77838f]">To <a href="#" className='text-sm text-[#3498db] hover:text-[#1d6fa5]'>
                            { hashCode.length > 20 ?
                                `${hashCode.substring(0, 20)}...` : hashCode
                            }
                        </a></p>
                    </div>
                    <div className=''>
                        <span className='ehter-label text-xs text-[#77838f]'>0.01565 Eth</span>
                    </div>
                </div>
            </div>
            <div className='opacity-md'></div>
        </div>
    );
    return (
        <div>
            <section className='bg-[#21325b] bg-footer_bg py-16'>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex py-4">
                    <p className='text-xl text-white mb-0'>The Ethereum Blockchain Explorer</p>
                </div>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex py-4">
                    <Search />
                </div>
            </section>
            
            {/* ether dashboard */}
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex -mt-5">
                <div className='rounded-lg bg-white p-4 mb-4 border-slate-900 shadow-xl w-full'>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-4">
                        <div className='pr-6 sm:col-span-1'>
                            <div className="flex items-center">
                                <div>
                                    <img src={ether_1} alt="" width={19}/>
                                </div>
                                <div className='ml-2'>
                                    <p className='text-xs text-gray-400'>ETHER PRICE</p>
                                    <a href='#' className='text-sm'>$1,615.61
                                        <span> @ 0.06982 BTC</span>
                                        <span className='text-green-500	text-xs'>  (+4.46%)</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="opacity-md"></div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <img src={icon_8} alt="" width={28}/>
                                </div>
                                <div className='ml-2'>
                                    <p className='text-xs text-gray-400'>ETHER PRICE</p>
                                    <a href='#' className='text-sm'>$1,615.61
                                        <span> @ 0.06982 BTC</span>
                                        <span className='text-green-500	text-xs'>  (+4.46%)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-6 md:border-r md:border-l sm:col-span-1 md:pt-0 pt-6'>
                            <div className="flex items-center">
                                <div>
                                    <img src={icon_2_1} alt="" width={29}/>
                                </div>
                                <div className='ml-2 w-full'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-xs text-gray-400'>TRANSACTIONS</p>
                                            <a href='#' className='text-sm'>$1,615.61
                                                <span className='text-green-500	text-xs'>  (11.1 TPS)</span>
                                            </a>
                                        </div>
                                        <div>
                                            <p className='text-xs text-gray-400'>MED GAS PRICE</p>
                                            <a href='#' className='text-sm'>14 Gwei 
                                                <span className='text-xs'>  ($0.47)</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="opacity-md"></div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <img src={icon_51} alt="" width={28}/>
                                </div>
                                <div className='ml-2'>
                                    <p className='text-xs text-gray-400'>LAST FINALIZED BLOCK</p>
                                    <a href='#' className='text-sm'>$1,615.61
                                        <span className='text-xs'>16488591</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pl-6 border-t border-1 md:border-transparent col-span-1 sm:col-span-2 md:col-span-1 mt-2 pt-2'>312333333</div>
                    </div>
                </div>
            </div>

            {/* ether latest blocks and transaction */}
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex mt-4 mb-5">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4 w-full">
                    <div className='rounded-lg bg-white pt-4 mb-4 border-slate-900 shadow-xl'>
                        <div className='card-header'>
                            <p className='border-b border-gray-200 text-sm px-4 pb-3 text-gray-400'>Latest Blocks</p>
                        </div>
                        <div className='card-body'>
                            <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-3 block-list">
                                {blockList}
                            </div>
                        </div>
                        <div className='card-footer border-t border-gray-200 p-2'>
                            <input type="button" className='form-input cursor-pointer hover:bg-[#3498DB] hover:text-white text-white py-1 text-xs text-[#3498DB] rounded-lg bg-[#3498DB]/[.06] border-transparent text-sm px-4 w-full border-[#3498db] ' value={'view all blocks'} />
                        </div>
                    </div>
                    <div className='rounded-lg bg-white pt-4 mb-4 border-slate-900 shadow-xl'>
                        <div className='card-header'>
                            <p className='border-b border-gray-200 text-sm px-4 pb-3 text-gray-400'>Latest Transactions</p>
                        </div>
                        <div className='card-body'>
                            <div className="h-96 scrollbar scrollbar-thumb-gray-300  scrollbar-w-1 scrollbar-h-50 scrollbar-thumb-rounded p-3 block-list">
                                {transactionList}
                            </div>
                        </div>
                        <div className='card-footer border-t border-gray-200 p-2'>
                            <input type="button" className='form-input cursor-pointer hover:bg-[#3498DB] hover:text-white text-white py-1 text-xs text-[#3498DB] rounded-lg bg-[#3498DB]/[.06] border-transparent text-sm px-4 w-full border-[#3498db] ' value={'view all blocks'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contents;