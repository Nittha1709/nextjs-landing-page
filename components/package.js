import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ButtonLink from "@/src/theme/button-link"
const data = [

    {
        id: 1,
        head: "Free Plan",
        title: "For startup enterprise",
        titlePrice: "Starting from",
        price: "29.99",
        recommend: false,
        list: [
            {
                id: 1,
                isActive: true,
                title: "Ultimate access to all course, exercises and assessments"
            },
            {
                id: 2,
                isActive: true,
                title: "Free acess for all kind of exercise corrections with downloads."
            },
            {
                id: 3,
                isActive: true,
                title: "Total assessment corrections with free download access system"
            },
            {
                id: 4,
                isActive: false,
                title: "Unlimited download of courses on the mobile app contents"
            },
            {
                id: 5,
                isActive: false,
                title: "Download and print courses and exercises in PDF"
            },
        ],
    },
    {
        id: 2,
        head: "Premium",
        title: "For Small teams or office",
        titlePrice: "Starting from",
        price: "49.99",
        recommend: true,
        list: [
            {
                id: 1,
                isActive: true,
                title: "Ultimate access to all course, exercises and assessments"
            },
            {
                id: 2,
                isActive: true,
                title: "Free acess for all kind of exercise corrections with downloads."
            },
            {
                id: 3,
                isActive: true,
                title: "Total assessment corrections with free download access system"
            },
            {
                id: 4,
                isActive: true,
                title: "Unlimited download of courses on the mobile app contents"
            },
            {
                id: 5,
                isActive: true,
                title: "Download and print courses and exercises in PDF"
            },
        ],
    },
];


export default function Package() {
    return (
        <div className="bg-how-it-works">
            <div className="container">
                <div className="flex flex-col items-center py-10 md:py-16">
                    <span className="text-sm text-white text-center">Whats the function</span>
                    <h2 className="text-2xl text-white text-center font-bold mt-2">Let's see how it works</h2>
                    <div className="flex flex-col md:flex-row w-auto gap-4 pt-10 md:pt-16 px-4">

                        {data.map((item) => (
                            <div key={item.id} className="card-package">
                                {item.recommend ? <span className="badge-orange w-max">Recommended</span> : null}
                                <div className="flex flex-row justify-between items-stretch">
                                    <div className="flex flex-col justify-between">
                                        <h5 className="text-xl font-bold mb-2">{item.head}</h5>
                                        <span className="text-sm">{item.title}</span>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <span className="text-sm text-right mb-2">{item.titlePrice}</span>
                                        <h5 className="text-3xl text-success font-bold">{item.price}/mo</h5>
                                    </div>
                                </div>
                                <div className="flex flex-col my-6 md:my-10">
                                    {item.list.map((list) => (
                                        <div key={list.id} className={`list-package ${list.isActive ? "active" : "inactive"}`}>
                                            <FontAwesomeIcon icon={list.isActive ? "check-circle" : "times-circle"} className="mr-4 mt-1 w-5" />
                                            <span className="break-words">{list.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-row justify-center">
                                     <ButtonLink href={"/#"} className={"link-card m-4 w-40"}>Get Started</ButtonLink>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}