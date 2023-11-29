import AOS from "aos";
import "aos/dist/aos.css";
import { FC, useEffect, useState } from "react";
import Receipt from "./Receipt";
import { AiOutlineLeft } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import DeleteModal from "../DeleteModal";
import { getMyNotification } from "../../../utils/data/endpoints";
import EmptyNotification from "./EmptyNotification";
import { UserIcon } from "@/assets/icons";
import { PrevIcon } from "@/assets/icons1";


const NotificationPage = ({setTab}:any) => {
  const [notifications, setNotification] = useState<any>(null)
  

  const fetchMyNotification  = async() => {
    try {
      const resp = await getMyNotification()
      if(resp.data.length == 0){

      }else {

        setNotification(resp.data)
      }
      console.log(resp)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    fetchMyNotification()
  }, []);

    return ( 
       
        <div className="h-[80vh] w-screen">
            <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-gray-300 px-4 rounded-md w-full h-12  '>
            <a onClick={()=> setTab('home')}>
          <PrevIcon color="" width="" height=""/>
            </a>
            <p className='flex-1 text-center text-[1.2rem] font-[800] text-blue-800'> Notifications</p>

            </div> 
          

        <>
          {notifications  ? 
          <>
             {notifications.map((data :any, index: any)=> {


               return(
                <div  key={index} className="flex text-gray-800 my-4 ">
                  <NotificationBar data={data}/>
               </div>
         
              )
             })}
          </>
          :
          <>
          <EmptyNotification/>
          </>
        }
        </>




          
            
        </div>
     );
}
 
export default NotificationPage;




const NotificationBar = ({data}: any)=> {
const [deleteModal, setDeleteModal] = useState<boolean>(false)

  return(
         <>         
    {deleteModal &&
      <DeleteModal notId={data._id}  setDeleteModal={setDeleteModal} text="Notification"/>
      }
  <div className="flex-[0.3] flex justify-center items-center">
    <UserIcon  color="#343A40" width="24" height="24"/>
    </div>
    <div className="flex-1">
    <p className="text-gray-800 font-bold ">{data.content.slice(0, 51)}...</p>
    <p className="text-gray-800 ">{data.Date}</p>
    </div>
    <div className="flex-[0.3] flex justify-center items-center">
    <RxCross2  onClick={() => setDeleteModal(true)}  size={30}  className="text-gray-800"/>
  </div>
</>
  )
}