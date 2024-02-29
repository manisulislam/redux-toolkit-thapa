import { useDispatch } from "react-redux"
import {clearUser} from "../store/slices/UserSlice"

const ClearUser = () => {
  const dispatch=useDispatch()
  const deleteAllUser=()=>{
    dispatch(clearUser())
  }
  return (
    <div className="text-center">
        <button onClick={()=>deleteAllUser()} className="p-4 bg-green-700 text-white border rounded-md">
            Clear User
        </button>
    </div>
  )
}

export default ClearUser