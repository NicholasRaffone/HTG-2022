import {useState} from 'react'

const currUser = {
    image:"https://media-exp1.licdn.com/dms/image/C5603AQEFcBW7l4dmxA/profile-displayphoto-shrink_800_800/0/1590125271442?e=2147483647&v=beta&t=LFYOP3yDp_OOWnzEfFb9uDAKKReEjyawVSUukJN9cX4",
    name: "Nicholas Raffone",
    location:"Tokyo, Japan",
    skills:[
        {
            skill:"Communication",
            rating:5,
        },
        {
            skill:"Timely Payment",
            rating:5,
        },
        {
            skill:"Training/Mentorship",
            rating:5,
        },
        {
            skill:"Responsiveness",
            rating:5,
        },
    ],
    exps:[
        "Consulting", 
        "Financial Services", 
        "FinTech"
    ]
}

const ClientProfile = () =>{
    const [tab, setTab] = useState(0)
    const tabs = [
        "General",
        "Response Time",
        "Past Projects"
    ]
    const star = <svg className="h-4 inline fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>

    return(
        <>   
            <div className="flex justify-center items-center py-4">
                <img src={currUser?.image} alt="user"  className="w-40 h-40 rounded-full object-cover"/>
            </div>
            <p className="text-center text-xl font-bold ">{currUser?.name}, Client</p>
            <p className="text-center text-md text-gray-400 ">{currUser?.location}</p>
            <div className="flex rounded-xl mx-3 bg-gray-100 my-2">
                {
                    tabs.map((t,i)=><p onClick={()=>setTab(i)} className={`duration-300 flex-1 text-center p-1 rounded-xl text-sm ${i===tab?"bg-violet-700 text-white":"bg-gray-100"}`}>{t}</p>)
                }
            </div>
            {
                tab===0?
                <>
                <div className="mx-4 px-4 shadow-md bg-white rounded-xl py-3">
                    <h1 className="text-xl font-bold mb-2">Industries</h1>
                    <div className="flex space-x-2">
                        {currUser?.exps.map((exp)=><p className="px-2 py-1 text-white rounded-xl text-xs bg-violet-500">{exp}</p>)}
                        
                    </div>
                </div>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">FinTech Investor</p>
                    <p className="text-md text-gray-700">Hi, my name is Nicholas and I like making money</p>
                </div>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="text-md">Projects Commissioned <span className="float-right">1</span></p>
                </div>

                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">Reviews</p>
                    {
                        currUser?.skills?.map((skill)=><p className="text-md text-gray-800 my-1 flex items-center"><span className="flex-1">{skill.skill}</span> <span className="float-right text-gray-500 text-xs">Endorsed by {skill.rating} partners</span> </p>)
                    }
                </div>

                </>
                :(tab===1?
                
                <>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">Response Time</p>
                    <p className="">1 day</p>
                </div>
                </>
                    
                :
                <div className="shadow-md bg-white p-2 rounded-xl m-3">
                    <p className="text-gray-600 text-sm">January 10, 2022</p>
                    <h1 className="text-xl text-violet-700 font-bold">Jakarta Payment Methods Study</h1>
                    <div className="my-2 flex space-x-2 px-2">
                        <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">Jakarta, Indonesia</p>
                        <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">1 month</p>
                    </div>
                    <p className="text-gray-800 text-sm my-1">20 operators, 1 research manager, 1 expert</p>
                    <p className="text-gray-500 text-sm">Surveyed 600 students in Jakarta on mobile wallet use</p>
                    
                </div>
                )
            }
            
        </>
    )
}
export default ClientProfile
