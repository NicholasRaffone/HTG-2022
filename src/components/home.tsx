import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div className="p-5">
            <h1 className="text-2xl text-violet-700 mb-4 font-bold">My Projects</h1>
            <div className="my-3 flex items-center">
                <input type="text" className="border rounded-xl p-2 text-xs w-full flex-1" placeholder="Search Your Projects..."/>
                <svg className="h-6 ml-3 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"/></svg>
            </div>
            <Link to="/create">
                <div className="flex w-80">
                    <p className="text-white text-sm rounded-xl bg-green-500 p-1 flex items-center space-x-1 px-2">
                        <svg className="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
                    <span>Create New Project</span> 
                    </p>
                </div>
            </Link>
            <div className="shadow-md p-2 rounded-xl my-3 bg-white">
                <p className="text-gray-600 text-sm">March 20, 2022</p>
                <h1 className="text-xl text-violet-700 font-bold">Jakarta Payment Methods Study</h1>
                <div className="my-2 flex space-x-2 px-2">
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">Jakarta, Indonesia</p>
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">6 months+</p>
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">$$</p>
                </div>
                <p className="text-gray-500 text-sm">Surveyed 600 students in Jakarta on mobile wallet use</p>
                <div className="flex my-2 space-x-2">
                    <p className="rounded-xl bg-yellow-500 text-xs px-2 text-white">Payment Pending</p>
                    <p className="text-xs px-2 rounded-xl bg-gray-200">In Progress</p>
                </div>
            </div>
            <div className="shadow-md p-2 rounded-xl my-3 opacity-70 bg-white">
                <p className="text-gray-600 text-sm">January 10, 2022</p>
                <h1 className="text-xl text-violet-700 font-bold">Kalimantan Hospital Seasonality and Capacity Interview</h1>
                <div className="my-2 flex space-x-2 px-2">
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">Kalimantan, Indonesia</p>
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">1 month</p>
                    <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">$</p>
                </div>
                <p className="text-gray-500 text-sm">Interviewed by professional services firm about 30 years hospitality experience in Kalimantan</p>
                <div className="flex my-2 space-x-2">
                    <p className="rounded-xl bg-green-500 text-xs px-2 text-white">Payment Complete</p>
                    <p className="text-xs px-2 rounded-xl bg-gray-200">Completed</p>
                </div>
            </div>
        </div>
    )
}
export default Home;
