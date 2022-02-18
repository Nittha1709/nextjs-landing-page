import BoxIcon from "@/src/theme/box-icon"
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
    {
        id: 1,
        type: 'edit',
        head: 'Vector Editing',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'project-diagram',
    },
    {
        id: 2,
        type: 'custom',
        head: 'Customize & Monitoring',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'pencil-ruler',
    },
    {
        id: 3,
        type: 'quality',
        head: 'Quality & short-period',
        title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
        icon: 'stopwatch',
    }
];
export default function Quality() {
    return (
        <div className="container">
            <div className="flex flex-col justify-center py-10 md:py-16">
                <span className="text-sm text-primary text-center">Quality features</span>
                <h2 className="text-2xl text-black text-center font-bold mt-2">Meet exciting feature of app</h2>
                <div className="w-12/12 lg:w-10/12 xl:w-9/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-9 px-3 pt-10 lg:pt-20 pb-0 lg:pb-10">
                        {data.map((item) => (
                            <div key={item.id} className="flex flex-col items-center justify-center">
                                <BoxIcon className={(item.type === 'edit' ? 'green' : null )|| (item.type === 'custom' ? 'primary' : null) || (item.type === 'quality' ? 'pink' : null)} size={'lg'}>
                                    <FontAwesomeIcon icon={item.icon} className="w-7" />
                                </BoxIcon>
                                <label className="text-lg text-black mt-3 mb-4 font-bold">{item.head}</label>
                                <p className="text-center text-gray-700 text-sm leading-6 w-full sm:w-6/12 md:w-full">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}