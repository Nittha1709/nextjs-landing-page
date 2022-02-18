
const data = [
    {
        mainMenu: "About Us",
        linkMain: "/#",
        subMenu: [
            {
                subLink: "Support Center",
                link: "/#"
            },
            {
                subLink: "Customer Support",
                link: "/#"
            },
            {
                subLink: "About Us",
                link: "/#"
            },
            {
                subLink: "Copyright",
                link: "/#"
            },
            {
                subLink: "Popular Campaign",
                link: "/#"
            }
        ],
    },
    {
        mainMenu: "Our Information",
        linkMain: "/#",
        subMenu: [
            {
                subLink: "Return Policy ",
                link: "/#"
            },
            {
                subLink: "Privacy Policy",
                link: "/#"
            },
            {
                subLink: "Terms & Conditions",
                link: "/#"
            },
            {
                subLink: "Site Map",
                link: "/#"
            },
            {
                subLink: "Store Hours",
                link: "/#"
            }
        ],
    },
    {
        mainMenu: "My Account",
        linkMain: "/#",
        subMenu: [
            {
                subLink: "Press inquiries ",
                link: "/#"
            },
            {
                subLink: "Social media",
                link: "/#"
            },
            {
                subLink: "directories",
                link: "/#"
            },
            {
                subLink: "Images & B-roll",
                link: "/#"
            },
            {
                subLink: "Permissions",
                link: "/#"
            }
        ],
    },
    {
        mainMenu: "Policy",
        linkMain: "/#",
        subMenu: [
            {
                subLink: "Application security",
                link: "/#"
            },
            {
                subLink: "Software principles",
                link: "/#"
            },
            {
                subLink: "Unwanted software policy",
                link: "/#"
            },
            {
                subLink: "Responsible supply chain",
                link: "/#"
            },
        ],
    },
]

export default function Footer() {
    return (
        <div className="container">
            <div className="flex flex-row justify-center py-5 md:py-16 px-3">
                <div className="w-full md:w-8/12 py-5 md:py-10 border-top">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 md:gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 gap-2 md:gap-3">
                                <a href={item.linkMain} className="text-base text-black hover:text-opacity-80 font-bold">{item.mainMenu}</a>
                                {item.subMenu.map((list, index) => (
                                    <a key={index} href={list.link} className="text-sm text-primary hover:text-opacity-80">{list.subLink}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}