import {useState} from 'react'
import { Link } from 'react-router-dom'
import {users} from './profiles'
import {toast} from 'react-hot-toast'

const CreateJob = () =>{
    const [locs, setLocs] = useState([] as string[])
    const [screen, setScreen] = useState(0)
    const [val, setVal] = useState('')
    const [s1, sets1] = useState([false, false]);
    const _handleKeyDown = (e:any) =>{
        if (e.key === 'Enter') {
            const newlocs = [...locs, val];
            setLocs(newlocs)
            setVal('')
          }
    }
    return(
        <div className="p-5">
        <h1 className="text-2xl text-violet-700 font-bold mb-4">Create New Project</h1>
        {
            screen===0?
            <>
                <div className="mb-4">
                    <p className="text-lg">Project Name</p>
                    <input type="text" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="mb-4">
                    <p className="text-lg">Industry</p>
                    <input type="text" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="mb-4">
                    <p className="text-lg">Locations</p>
                    <input type="text" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm" onKeyDown={_handleKeyDown} onChange={(e)=>setVal(e.target.value)} value={val}/>
                    <div className="flex mt-3 space-x-2 flex-wrap">
                        {locs?.map(loc=><p className='px-2 py-1 rounded-xl bg-gray-200 text-gray-800' key={loc}>{loc}</p>)}
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-lg mb-1">Partners Required</p>
                    <div className="flex my-1">
                        <p className='mr-2 flex-1'>Operator</p>
                        <input type="number" className="border-b border-black bg-inherit px-2 py-1 w-48 text-sm" placeholder='0'/>
                    </div>
                    <div className="flex my-1">
                        <p className='mr-2 flex-1'>Research Manager</p>
                        <input type="number" className="border-b border-black bg-inherit px-2 py-1 w-48 text-sm" placeholder='0'/>
                    </div>
                    <div className="flex my-1">
                        <p className='mr-2 flex-1'>Expert</p>
                        <input type="number" className="border-b border-black bg-inherit px-2 py-1 w-48 text-sm" placeholder='0'/>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-lg">Start Date</p>
                    <input type="date" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="mb-4">
                    <p className="text-lg">End Date</p>
                    <input type="date" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="mb-4">
                    <p className="text-lg">Type of Study</p>
                    <input type="text" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="mb-4">
                    <p className="text-lg">Study Description</p>
                    <textarea className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <div className="bg-violet-700 rounded-xl mx-12 mt-5" onClick={()=>setScreen(1)}>
                    <p className="text-center font-bold text-white text-lg p-1">
                        Continue
                    </p>
                </div>
            </>
            :<>
                <div className="mb-5">
                    <p className='text-violet-700 text-lg'>Invite Partners</p>
                    <p className='text-gray-800 text-md'>Based on what you're looking for</p>
                </div>
                {
                    users.map((user, i)=>{
                        return (
                            <div onClick={()=>{const cop=s1.slice();cop[i]=!cop[i]; sets1(cop)}} className={`duration-300 shadow-lg flex rounded-xl items-center mb-4 cursor-pointer border-gray-200 border ${s1[i]?'bg-violet-100':'bg-white'}`}>
                                <img src={user.image} alt="" className="w-28 rounded-full m-3"/>
                                <div className="pl-2">
                                    <p className="text-lg my-1 text-violet-700 font-bold">{user.name}</p>
                                    <p className="text-xs my-1 text-gray-700">{user.location}</p>
                                    <p className="text-sm my-1">{user.title}</p>
                                </div>
                            </div>
                        )
                    })
                } 
                <div className="my-6">
                    <p className="text-lg">Search for Partner</p>
                    <input type="text" className="border-b border-black bg-inherit px-2 py-1 w-full text-sm"/>
                </div>
                <Link to="/me" onClick={()=>toast.success('Successfully Created Project!')}>
                    <div className="bg-violet-700 rounded-xl mx-12">
                        <p className="text-center font-bold text-white text-lg p-1">
                            Publish
                        </p>
                    </div>
                </Link>
            </>
        }
        </div>
        
    )
}
export default CreateJob
