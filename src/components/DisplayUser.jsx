
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../store/slices/UserSlice";


const DisplayUser = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    const dispatch=useDispatch();
    // console.log(data);
    const removeUser=(id)=>{
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <ul className="flex-col justify-around align-middle ">
                {
                    data.map((user,id)=>{
                        return(
                            <>
                            
                            <div className="flex justify-around align-middle m-4">
                            <li key={id}>{user}</li>
                            <button onClick={()=>removeUser(id)} className="p-2 bg-blue-700 text-white border rounded-md">Delete User</button>
                            
                            </div>
                            </>
                        )
                        
                    })
                }
                
                
            </ul>
        </div>
    )
}

export default DisplayUser