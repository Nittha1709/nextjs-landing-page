import BoxIcon from "@/src/theme/box-icon"

export default function HowItWorks() {
    return (
        <div className="bg-how-it-works">
            <div className="container">
                <div className="flex flex-col items-center py-10 md:py-16">
                    <span className="text-sm text-white text-center">Whats the function</span>
                    <h2 className="text-2xl text-white text-center font-bold mt-2">Let's see how it works</h2>
                    <div className="list-how-it-work mt-10 md:mt-16">
                        <div className="list">
                            <BoxIcon className={"white"} size={"sm"}>
                                01
                            </BoxIcon>
                            <span className=" text-base text-white text-center md:text-left font-bold my-4">Set disbursement
                                <br /> Instructions
                            </span>
                            <p className=" text-sm text-gray-300 text-center md:text-left mb-4">
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>
                        <div className="list">
                            <BoxIcon className={"white"} size={"sm"}>
                                02
                            </BoxIcon>
                            <span className=" text-base text-white text-center md:text-left font-bold my-4">Assembly retrieves
                                <br />funds from your account
                            </span>
                            <p className=" text-sm text-gray-300 text-center md:text-left">
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>
                        <div className="list">
                            <BoxIcon className={"white"} size={"sm"}>
                                03
                            </BoxIcon>
                            <span className="text-base text-white text-center md:text-left font-bold my-4">Assembly initiates
                                <br />disbursement
                            </span>
                            <p className="text-sm text-gray-300 text-center md:text-left mb-4">
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>
                        <div className="list">
                            <BoxIcon className={"white"} size={"sm"}>
                                04
                            </BoxIcon>
                            <span className="text-base text-white text-center md:text-left font-bold my-4">Customer receives
                                <br />funds payment
                            </span>
                            <p className="text-sm text-gray-300 text-center md:text-left mb-4">
                                Get your blood tests delivered at home collect a sample from the your blood tests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}