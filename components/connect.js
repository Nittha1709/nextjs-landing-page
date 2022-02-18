import Image from "next/image"
import ImgConnect from "@/src/img/connect.png"
import ButtonLink from "@/src/theme/button-link"

export default function Connect() {
    return (
        <div className="container">
            <div className="w-full px-3 pb-10 mb:pb-16">
                <div className="flex flex-col-reverse md:flex-row gap-7 md:gap-20 justify-center items-center">
                    <div className="flex flex-col w-full md:w-6/12 justify-center md:justify-start items-center md:items-start">
                        <span className="text-sm text-primary text-center md:text-left">Core features</span>
                        <h2 className="text-center md:text-left text-2xl md:text-4xl text-black font-bold my-4">Smart Jackpots that you may love this anytime & anywhere</h2>
                        <p className="text-center md:text-left text-sm text-primary">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                        <ButtonLink href={'/about'} className={'primary w-max my-4'}>Get Started</ButtonLink>
                    </div>
                    <div className="flex flex-col w-full md:w-6/12">
                        <Image src={ImgConnect} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}