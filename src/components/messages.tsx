import { Link } from "react-router-dom";

const Messages = () =>{
    return(
        <div className="p-5">
            <div className="flex mb-4 items-center">
                <h1 className="text-2xl text-violet-700 font-bold flex-1">Messages </h1>
                <div className="h-8 w-8 rounded-full bg-violet-700 flex justify-center items-center text-2xl text-white font-bold"><p className="h-fit mb-1">+</p></div>
            </div>
            
            <div className="flex p-3 shadow-md bg-violet-50 relative rounded-xl my-5">
                <img src={"https://media-exp1.licdn.com/dms/image/C5603AQHj7xXGAa-YtA/profile-displayphoto-shrink_800_800/0/1645634514951?e=2147483647&v=beta&t=n_5jup86Mmf2xj1aJaf2hPsrgM1taydrFeAejA3J8ro"} alt="" className="w-20 rounded-full" />
                <div className="pl-4 flex-1 truncate">
                    <p className="text-md my-1 text-gray-700 font-bold">Jun Bin Ho <span className="float-right text-gray-500">12:01pm</span></p>
                    <p className="text-xs my-1 text-violet-700">Jakarta Payment Methods Study</p>
                    <p className="text-sm my-1 truncate">Hi, I just completed some tasks on trello, please check them out </p>
                </div>
                <div className="absolute h-6 w-6 bg-red-500 rounded-full -top-1 -right-1 flex justify-center items-center"><p className="text-white">1</p></div>
            </div>

            <div className="flex p-3 shadow-md bg-white relative rounded-xl my-5">
                <img src={"https://media-exp1.licdn.com/dms/image/C5603AQF5UsZfF9cuJQ/profile-displayphoto-shrink_800_800/0/1614756376616?e=1653523200&v=beta&t=VxoZQuVMtABRnIq8XlPJBQBFr99yE-Xr0RZyyVJpgCU"} alt="" className="w-20 rounded-full" />
                <div className="pl-4 flex-1 truncate">
                    <p className="text-md my-1 text-gray-700 font-bold">Yasmine Messaikeh <span className="float-right text-gray-500">10:20am</span></p>
                    <p className="text-xs my-1 text-violet-700">Jakarta Payment Methods Study</p>
                    <p className="text-sm my-1 truncate text-gray-500">You: Thanks! </p>
                </div>
            </div>
        </div>
        
    )
}
export default Messages;
