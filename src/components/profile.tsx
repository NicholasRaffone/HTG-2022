import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {users} from './profiles'

interface IDInt{
    id:string;
}

enum PartnerTypes{
    Operator,
    Research_Manager,
    Expert
}

export interface UserInt{
    id:string;
    name:string;
    title:string;
    bio:string;
    image:string;
    location:string;
    skills:Skills[];
    areas:string[];
    partner:PartnerTypes;
    completed?: number;
}

interface Skills{
    skill:string;
    rating: number;
}

const Profile = () =>{
    const [tab, setTab] = useState(0)
    const tabs = [
        "General",
        "Availability",
        "Past Projects"
    ]
    const { id }:IDInt = useParams();
    const [currUser, setCurrUser] = useState({} as UserInt);
    let history = useHistory();
    useEffect(()=>{
        const findUser = () =>{
            for(const user of users){
                if(user.id===id){
                    return user;
                }
            }
            return undefined;
        }
        const user = findUser();
        if(user){
            setCurrUser(user)
        }else{
            history.push('/')
        }   
    },[])

    return(
        <>   
            <div className="flex justify-center items-center py-4">
                <img src={currUser?.image} alt="user"  className="w-40 h-40 rounded-full object-cover"/>
            </div>
            <p className="text-center text-xl font-bold ">{currUser?.name}, {PartnerTypes[currUser.partner||0]}</p>
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
                    <h1 className="text-xl font-bold mb-2">Industry Experiences</h1>
                    <div className="flex space-x-2">
                        {currUser?.areas?.map((exp)=><p className="px-2 py-1 text-white rounded-xl text-xs bg-violet-500">{exp}</p>)}
                    </div>
                </div>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">{currUser?.title}</p>
                    <p className="text-md text-gray-700">{currUser?.bio}</p>
                </div>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="text-md">Projects Completed <span className="float-right">{currUser?.completed||0}</span></p>
                </div>

                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">Skills</p>
                    {
                        currUser?.skills?.map((skill)=><p className="text-md text-gray-800 my-1 flex items-center"><span className="flex-1">{skill.skill}</span> <span className="float-right text-gray-500 text-xs">Endorsed by {skill.rating} clients</span> </p>)
                    }
                </div>
                <div className="bg-violet-700 rounded-xl mx-12 my-5">
                    <p className="text-center font-bold text-white text-lg p-1">
                        Contact {currUser?.name?.split(' ')[0]}
                    </p>
                </div>
                </>
                :(tab===1?
                
                <>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">Availability</p>
                    <p className="">40 hours/week</p>
                </div>
                <div className="shadow-md bg-white rounded-xl px-4 py-3 mx-4 my-3">
                    <p className="my-2 font-bold text-lg">Response Time</p>
                    <p className="">1-2 hours</p>
                </div>
                </>
                    
                :
                <div className="shadow-md bg-white p-2 rounded-xl m-3">
                    <p className="text-gray-600 text-sm">January 10, 2022</p>
                    <h1 className="text-xl text-violet-700 font-bold">Kalimantan Hospital Seasonality and Capacity Interview</h1>
                    <div className="my-2 flex space-x-2 px-2">
                        <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">Kalimantan, Indonesia</p>
                        <p className="text-xs py-1 px-2 rounded-xl bg-gray-200">1 month</p>
                    </div>
                    <p className="text-gray-500 text-sm">Interviewed by professional services firm about 30 years hospitality experience in Kalimantan</p>
                </div>
                )
            }
            
        </>
    )
}
export default Profile
