import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from "@/src/theme/button"
import ButtonLink from "@/src/theme/button-link"
import ImgBanner from "@/src/img/phone.png"
import BgPhone from "@/src/img/bg-phone.png"
export default function Banner({ children }) {

    return (
        <div className="bg-banner p-4 rounded-br-[100px] md:rounded-br-[30%]">
            {children}
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 md:py-24">
                    <div className="grid grid-cols-1 items-center">
                        <h1 className="heading-banner">
                            Experience your
                            <br />
                            ultimate mobile
                            <br />
                            application
                        </h1>
                        <p className="title">
                            Get your blood tests delivered at let home collect sample
                            from the victory of the managments that supplies best
                            design system guidelines ever.
                        </p>
                        <p></p>
                        <div className="g-btn-banner">
                            <Button
                                type={'submit'}
                                className={'white w-6/12 md:w-5/12'}
                                onClick={() => { console.log('Click me') }}
                                isDisabled={false}
                            >
                                Get Started
                            </Button>

                            <ButtonLink href={'/about'} className={'transparent-white w-6/12 md:w-max ml-0 md:ml-2'}>
                                <FontAwesomeIcon icon={['fas', 'play-circle']} className="w-7 mr-2" />
                                Watch Video
                            </ButtonLink>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 relative">
                        <div className="absolute right-0 top-0 w-6/12">
                            <Image src={BgPhone}  alt=""/>
                        </div>
                        <Image src={ImgBanner} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}