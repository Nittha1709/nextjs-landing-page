import Image from "next/image"
import Logo from "../../src/img/logo.svg"

export default function Navbar() {
    return (
        <>
            <nav className="container navbar">
                <div className="w-40 md:w-60 flex">
                    <Image src={Logo} alt="banner" className="h-full" />
                </div>
            </nav>
        </>
    )
}