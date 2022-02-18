import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
    {
        haeder: "How to contact with riders emergency?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lacus ultrices ante pellentesque euismod. Morbi auctor risus justo, et mattis turpis suscipit sed. Proin bibendum neque ut mauris tincidunt feugiat. Mauris quis accumsan massa. Nullam at condimentum enim. Mauris mollis feugiat fermentum. Proin porttitor neque efficitur imperdiet tincidunt.",
    },
    {
        haeder: "App installation failed, how to update system information?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lacus ultrices ante pellentesque euismod. Morbi auctor risus justo, et mattis turpis suscipit sed. Proin bibendum neque ut mauris tincidunt feugiat. Mauris quis accumsan massa. Nullam at condimentum enim. Mauris mollis feugiat fermentum. Proin porttitor neque efficitur imperdiet tincidunt.",
    },
    {
        haeder: "Website reponse taking time, how to improve?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lacus ultrices ante pellentesque euismod. Morbi auctor risus justo, et mattis turpis suscipit sed. Proin bibendum neque ut mauris tincidunt feugiat. Mauris quis accumsan massa. Nullam at condimentum enim. Mauris mollis feugiat fermentum. Proin porttitor neque efficitur imperdiet tincidunt.",
    },
    {
        haeder: "New update fixed all bug and issues?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a lacus ultrices ante pellentesque euismod. Morbi auctor risus justo, et mattis turpis suscipit sed. Proin bibendum neque ut mauris tincidunt feugiat. Mauris quis accumsan massa. Nullam at condimentum enim. Mauris mollis feugiat fermentum. Proin porttitor neque efficitur imperdiet tincidunt.",
    },
]
export default function Question() {
    return (
        <div className="container">
            <div className="flex flex-col items-center py-10 md:py-16">
                <span className="text-sm text-primary text-center">Frequent Question</span>
                <h2 className="text-2xl text-black text-center font-bold mt-2">Do you have any question</h2>
                <div className='flex flex-col items-center px-3'>
                    {data.map((item, index) => (
                        <div key={index} className="accordion-section group w-full md:w-8/12" tabIndex={index}>
                            <div
                                className="group flex justify-between px-4 py-5 items-center text-black text-base transition ease duration-500 cursor-pointer pl-8 relative"
                            >
                                <div
                                    className="h-5 w-5 bg-success rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 left-0 mb-auto ml-auto mt-6 mr-2"
                                >
                                    <FontAwesomeIcon icon="angle-down" className="w-3 text-white" />
                                </div>
                                <div className="group-focus:text-black transition ease duration-500">
                                    {item.haeder}
                                </div>
                            </div>
                            <div
                                className="accordion-body group-focus:max-h-screen max-h-0 overflow-hidden ease duration-500 "
                            >
                                <p className="px-2 py-4 text-base text-gray-700">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}