import Image from "next/image"
import Link from "next/link"
import BoxIcon from "@/src/theme/box-icon"
import ImgPhone from "@/src/img/iphone.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function CoreFeatures() {
    return (
        <div className="container">
            <div className="w-12/12 lg:w-10/12 xl:w-9/12 mx-auto py-10 md:py-16 px-3">
                <div className="flex flex-col md:flex-row gap-7 md:gap-20 justify-center items-center">
                    <div className="flex w-8/12 md:w-4/12">
                        <Image src={ImgPhone} alt="" />
                    </div>
                    <div className="flex flex-col w-full md:w-7/12">
                        <span className="text-sm text-primary text-center md:text-left px-4">Core features</span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl text-black text-center px-4 md:text-left font-bold mt-2 mb-8 md:mb-10">Smart Jackpots that you may love this anytime & anywhere</h2>
                        <Link href="/">
                            <a>
                                <li className="w-full md:w-10/12 mb-5 flex flex-row rounded-lg p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:md:scale-110 hover:bg-white hover:drop-shadow-[0_8px_24px_rgba(69,88,157,0.07)] duration-300">
                                    <BoxIcon className={'pink'} size={'sm'}>
                                        <FontAwesomeIcon icon="briefcase" className="w-5"/>
                                    </BoxIcon>
                                    <div className="flex flex-col pl-5 w-11/12">
                                        <h5 className="text-base text-black font-bold mb-2">Smart Features</h5>
                                        <p className="text-base text-gray-700 leading-6">Get your blood tests delivered at let home collect sample from the victory of the managments. your blood tests.</p>
                                    </div>
                                </li>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <li className="w-full md:w-10/12 flex flex-row rounded-lg p-2 md:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-1 hover:md:scale-110 hover:bg-white hover:drop-shadow-[0_8px_24px_rgba(69,88,157,0.07)] duration-300">
                                    <BoxIcon className={'pink'} size={'sm'}>
                                        <FontAwesomeIcon icon="crown" className="w-5"/>
                                    </BoxIcon>
                                    <div className="flex flex-col pl-5 w-11/12">
                                        <h5 className="text-base text-black font-bold mb-2">Secure Contents</h5>
                                        <p className="text-base text-gray-700 leading-6">Get your blood tests delivered at let home collect sample from the victory of the managments. your blood tests.</p>
                                    </div>
                                </li>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}