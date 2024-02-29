import ClearUser from "./ClearUser"
import { fakeUserData } from "../api"
import { useDispatch } from "react-redux"
import { addUser } from "../store/slices/UserSlice"
import DisplayUser from "./DisplayUser"


const UserDetails = () => {

  const dispatch=useDispatch()
  const addNewUser = (payload) => {
    // console.log(payload);
    dispatch(addUser(payload))
  }
  return (
    <>
        <section className=" m-8 w-3/4 flex justify-between align-middle">
        <div>
            <h2 className="font-bold text-2xl ml-12">List of Users</h2>
            
        </div>
        <div>
            <button onClick={()=>addNewUser(fakeUserData())} className="p-4 bg-purple-800 text-white border rounded-md">Add User</button>
        </div>
        
        </section>
        <hr className="p-4 mr-12 ml-12" />
        <DisplayUser></DisplayUser>
        <div>
        <hr className="p-4  mt-4 mr-12 ml-12" />
        </div>
        <ClearUser></ClearUser>
    </>
  )
}

export default UserDetails