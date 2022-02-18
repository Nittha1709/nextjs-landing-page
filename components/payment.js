import Image from "next/image"
import ImgPayment from "@/src/img/payment.png"
import ButtonLink from "@/src/theme/button-link"
export default function Payment() {
    return (
        <div className="w-full bg-gradient-full">
            <div className="container">
                <div className="w-12/12 lg:w-10/12 xl:w-9/12 mx-auto py-10 md:py-16 bg-payment rounded-tl-[130px] md:rounded-tl-[25%]">
                    <div className="flex flex-col md:flex-row gap-7 md:gap-20 items-center">
                        <div className="flex w-full md:w-6/12">
                            <Image src={ImgPayment} alt="" />
                        </div>
                        <div className="flex flex-col w-full md:w-6/12 items-center md:items-start">
                            <span className="text-sm text-primary text-center md:text-left px-4">Core features</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl text-black text-center px-4 md:text-left font-bold mt-2 mb-4">Secure Payment Transaction System with #1 Ranking</h2>
                            <p className="text-center md:text-left text-sm text-primary  px-4 ">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                            <ButtonLink href={'/#'} className={'primary w-max m-4'}>Get Started</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}