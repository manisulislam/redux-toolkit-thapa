import { useSelector } from "react-redux"



const DisplayUser = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    console.log(data);
    return (
        <div>
            <ul className="flex-col justify-around align-middle ">
                {
                    data.map((user,id)=>{
                        return(
                            <>
                            
                            <div className="flex justify-around align-middle m-4">
                            <li key={id}>{user}</li>
                            <button className="p-2 bg-blue-700 text-white border rounded-md">Delete User</button>
                            
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