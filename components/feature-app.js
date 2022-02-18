import BoxIcon from "@/src/theme/box-icon"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
    {
        id: 1,
        type: 'smart',
        head: 'Smart Features',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'hourglass-half',
    },
    {
        id: 2,
        type: 'fast',
        head: 'Fast Performance',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'trophy',
    },
    {
        id: 3,
        type: 'unlimit',
        head: 'Unlimited Content',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'cloud-upload-alt',
    },
    {
        id: 4,
        type: 'custom',
        head: 'Ultimate Customization',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'cog',
    },
    {
        id: 5,
        type: 'boost',
        head: 'Boost Productivity',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'air-freshener',
    },
    {
        id: 6,
        type: 'support',
        head: 'Customer Support',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'comments',
    }
];

export default function FeatureApp() {
    return (
        <div className="container">
            <div className="flex flex-col items-center pb-10 md:pb-16">
                <span className="text-sm text-primary text-center">Quality features</span>
                <h2 className="text-2xl text-black text-center font-bold mt-2">Meet exciting feature of app</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-x-5 md:gap-y-9 lg:gap-x-14 lg:gap-y-14 mt-10 md:mt-16 px-5">
                    {data.map((item) => (
                        <div key={item.id} className="w-full flex flex-row rounded-lg">
                            <BoxIcon className={
                                (item.type === 'smart' ? 'pink' : null) ||
                                (item.type === 'fast' ? 'sky' : null) ||
                                (item.type === 'unlimit' ? 'amber' : null) ||
                                (item.type === 'custom' ? 'green' : null) ||
                                (item.type === 'boost' ? 'purple' : null) ||
                                (item.type === 'support' ? 'orange' : null)
                                }
                                size={'md'}>
                                <FontAwesomeIcon icon={item.icon} className="w-5" />
                            </BoxIcon>
                            <div className="flex flex-col pl-5 w-10/12 md:w-10/12 lg:w-10/12">
                                <h5 className="text-base text-black font-bold mb-2">{item.head}</h5>
                                <p className="text-base text-gray-700 leading-6">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}