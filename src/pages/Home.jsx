import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

const Home = () => {
  const [roomid,setRoomid]=useState()
  const [username,setUsername]=useState()
  const navigate=useNavigate()

  const createNewRoom=()=>{
  const id=uuidV4()
  setRoomid(id);
  
  toast.success(`Your room ID is ${id}`)
  }

  const joinRoom=()=>{
    if(!roomid || !username){
      toast.error("Room Id and username is required")
      return
    }else{
      navigate(`/home/${roomid}`,{state:{username}})
    }
  }

  const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
      joinRoom()
    }
  }
  return (
    <div className=' bg-slate-800  w-screen h-screen flex justify-center items-center'>
      <div className=' bg-slate-700 w-fit px-6 py-2 flex flex-col  rounded-lg shadow-md  '>
        <img src="code-sync.png" alt="" className=' w-44 m-2'/>
        <h4 className=' text-white mt-4'>Paste invitation ROOM ID</h4>
        <input type="text" placeholder='ROOM ID' className='m-4 text-md p-2 w-72 rounded-md  text-black   outline-none  text-sm' value={roomid} onChange={(e)=>setRoomid(e.target.value)} onKeyUp={handleInputEnter}/>
        <input type="text" placeholder='USERNAME' className='m-4 text-md p-2 w-72 rounded-md  text-black  outline-none text-sm ' value={username} onChange={(e)=>setUsername(e.target.value)} onKeyUp={handleInputEnter}/>
        <button className=' bg-green-500  w-20 rounded-md p-2 text-md  mx-auto mt-6' onClick={joinRoom}>Join</button>

       <p className=' text-white mt-5'>If don't have invite then create <span className=' text-green-500 underline cursor-pointer' onClick={createNewRoom}>new room</span> </p>


      </div>
    </div>
  )
}

export default Home
