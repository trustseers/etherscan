import React from 'react';
import Search from '../../components/Search/Search';
import ether_1 from '../../assets/images/ethereum-1.svg';
import icon_8 from '../../assets/images/icon-8.svg';
import icon_2_1 from '../../assets/images/icon-2-1.svg';
import icon_51 from '../../assets/images/icon-51.svg';

const Contents = () => {
    return (
        <div>
            <section className='bg-[#21325b] bg-footer_bg py-16'>
                <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-4">
                    <p className='text-xl text-white mb-0 ml-3'>The Ethereum Blockchain Explorer</p>
                </div>
                <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex py-4">
                    <Search />
                </div>
            </section>
            <div className="flex justify-between  mx-auto lg:max-w-7xl md:items-center md:flex -mt-5">
                <div className='rounded-lg bg-white p-4 mb-4 border-slate-900 shadow-xl w-full'>
                    <div className="grid grid-cols-3 mb-4">
                        <div className='pr-6 '>
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
                        <div className='px-6 border-r border-l'>
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
                        <div className='pl-6 '>312333333</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contents;