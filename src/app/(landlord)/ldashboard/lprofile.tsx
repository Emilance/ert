import React, { FC, useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineEdit, AiOutlineLock } from "react-icons/ai";
import { MdKeyboardArrowRight, MdOutlinePayments, MdKeyboardArrowDown } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/components/Loading";

const DropdownProfileItem = ({user}: any) => (
  <div data-aos="flip-down" className="mx-2 flex-col py-3 border-b border-gray-300 items-center text-gray-600">
    <p className="flex-1 text-lg ml-4"> <span className="font-bold">Name</span>  :  {user.lastName  && user.lastName}</p>
    <p className="flex-1 text-lg ml-4"> <span className="font-bold">Gender</span>  :  {user.gender && user.gender}</p>
    <p className="flex-1 text-green-700 text-lg ml-4"> <span className="text-black font-bold">Email</span>  :  {user.email && user.email}</p>
    <a  href="/infoform" type="submit" className="flex justify-center items-center bg-blue-800 mb-4 hover:opacity-50 text-white py-2   rounded-md w-full" ><AiOutlineEdit  size={27}/> Edit</a>
  </div>
);
const DropdownBankItem = ({bankDetails}: any) => (
  <div data-aos="flip-down" className="mx-2 flex-col py-3 border-b border-gray-300 items-center text-gray-600">
    <p className="flex-1 text-lg ml-4"> <span className="font-bold">Bank </span>  :  {bankDetails.bankName && bankDetails.bankName}</p>
    <p className="flex-1 text-lg ml-4"> <span className="font-bold">Account Name</span>  :  {bankDetails.acctName && bankDetails.acctName}</p>
    <p className="flex-1 text-green-700 text-lg ml-4"> <span className="text-black font-bold">Account Number</span>  :  {bankDetails.acctNumber  && bankDetails.acctNumber}</p>
    <a  href="/paymentacct" type="submit" className="flex justify-center items-center bg-blue-800 mb-4 hover:opacity-50 text-white py-2   rounded-md w-full" ><AiOutlineEdit  size={27}/> Edit</a>

  </div>
);

const Lprofile = ({ user }: any) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [paymentAccountOpen, setPaymentAccountOpen] = useState(false);
  

  const logOut = ()=> {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <>
    {user ? 
  
    <>
      <div data-aos="fade-right" className="w-full mt-3 flex flex-col h-[13rem] justify-center items-center">
        <div className="rounded-full h-[8rem] w-[8rem]">
          <img src={user.profilePicture ? user.profilePicture : "profiledp.png"} className="h-full w-full rounded-full" />
        </div>
        <p className="text-[1rem] text-grey-light ">{user ? user.lastName : "Emmy"}</p>
      </div>
      <div data-aos="fade-right"  className="mt-1 mx-4">
        <h1 className="text-blue-800 mb-3 text-[1.3rem] font-bold ">Account Settings</h1>
        <div className={`mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600  ${personalInfoOpen && "bg-gray-200"}`} onClick={() => setPersonalInfoOpen(!personalInfoOpen)}>
          <HiOutlineUser size={27} className="" />
          <p className="flex-1 text-lg ml-4">Personal Information</p>
          {personalInfoOpen ? 
          <MdKeyboardArrowDown size={27} className="" /> :
          <MdKeyboardArrowRight size={27} className="" />
          }

        </div>
        {personalInfoOpen && <DropdownProfileItem user={user}/>}
        <div className={`mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600  ${paymentAccountOpen && "bg-gray-200"}`}  onClick={() => setPaymentAccountOpen(!paymentAccountOpen)}>
          <MdOutlinePayments size={27} className="" />
          <p className="flex-1 text-[1rem] ml-4">Payment Account</p>
          {paymentAccountOpen ? 
          <MdKeyboardArrowDown size={27} className="" /> :
          <MdKeyboardArrowRight size={27} className="" />
          }

        </div>
        {paymentAccountOpen && <DropdownBankItem  bankDetails={user.bankDetails} />}
        <a href='/legal' className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
          <AiOutlineLock size={27} className="" />
          <p className="flex-1 text-[1rem] ml-4">Legal</p>
      
     </a>
        
      </div>
      <div data-aos="fade-right"  className="mt-6 mx-4">
        <h1 className="text-blue-800 my-3 text-[1.3rem] font-bold ">Support</h1>
        <a href ="/gethelp"  className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
          <HiOutlineUser size={27} className="" />
          <p className="flex-1 text-[1rem] ml-4">How ERT Works</p>
        </a>
        <a href="/gethelp" className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
          <MdOutlinePayments size={27} className="" />
          <p className="flex-1 text-[1rem] ml-4">Get Help</p>
        </a>
        <a href ="" className="mx-2 flex py-3 border-b border-gray-300 items-center text-gray-600" >
          <AiOutlineLock size={27} className="" />
          <p className="flex-1 text-[1rem] ml-4">Give us feedback</p>
        </a>

      </div>
      <div className="mt-2  flex justify-center mb-32 w-full ">
        <a  onClick={logOut} className="mb-4  font-medium  text-center py-2 text-green-700"> Log Out</a>
      </div>
    </>  :
    <Loading/>
   }
    </>
  );
};

export default Lprofile;
