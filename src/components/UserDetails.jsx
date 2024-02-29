import ClearUser from "./ClearUser"


const UserDetails = () => {
  return (
    <>
        <section className=" m-8 w-3/4 flex justify-between align-middle">
        <div>
            <h2 className="font-bold text-2xl ml-12">List of Users</h2>
            
        </div>
        <div>
            <button className="p-4 bg-purple-800 text-white border rounded-md">Add User</button>
        </div>
        
        </section>
        <hr className="p-4 mr-12 ml-12" />
        <ul className="flex justify-around align-middle ">
            <li>anis</li>
            <button className="p-4 bg-blue-700 text-white border rounded-md">Delete User</button>
        </ul>
        <div>
        <hr className="p-4  mt-4 mr-12 ml-12" />
        </div>
        <ClearUser></ClearUser>
    </>
  )
}

export default UserDetails