"use client"
import { FC } from 'react';
import {CiLocationOn } from  'react-icons/ci'
import {FaWalking} from 'react-icons/fa'
import {AiFillCar, AiOutlineCheck, AiOutlineHeart, AiOutlineLeft}  from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RxDotFilled} from "react-icons/rx"
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import CarouselDatePicker from '@/components/landingPage/Calender';
import DesktopFooter from '@/components/DesktopFooter';
import Image from 'next/image';

const Preview :FC = () => {
    const selectedHouse = useSelector((state: RootState) => state.selectedHouse.selectedHouse)
    return ( 
        
        <div>
                <div className=' text-grey-light flex  items-center  justify-between border-b-[0.4px] border-grey-light px-4 rounded-md w-full h-16  '>
                <a href="/">
                <AiOutlineLeft size={30} className='text-green-700  '/>
                </a>
                 <p className='flex-1 text-center text-[1.4rem] font-[700] text-blue-800'> Preview</p>

                </div>
        <div className=' bg-white   w-full ' >
 
           <div className="m-4 mx-8  bg-[#F5F4F8]">
              <div className= "relative  w-[100%] h-[22rem] rounded-xl ">
               
                    <Image src={selectedHouse.images[0]} alt={selectedHouse.apartment}  fill
                      objectFit='cover'
                       objectPosition='center center'
                    className='w-full h-full  rounded-xl   ' />
                </div>

                <div className='flex mt-4 mx-2'>

                    <div className=" relative mr-2 w-full h-[7rem]">
                        <Image src={selectedHouse.images[1]} alt={selectedHouse.apartment} fill 
                        objectFit='cover'
                        objectPosition='center center'
                        className='w-full h-full rounded-xl  ' />
                    </div>
                    <div className=" relative mr-2 w-full h-[7rem]">
                        <Image src={selectedHouse.images[1]} alt={selectedHouse.apartment} fill  
                        objectFit='cover'
                       objectPosition='center center' 
                        className='w-full h-full rounded-xl  ' />
                    </div>
                    <div className="relative ml-2 w-full h-[7rem] ">
                        <div className='z-10 absolute top-4 left-10  bg-white  rounded-lg p-2 cursor-pointer'>
                            <a href="/houseimages" className='text-gray-700 text-xs'>3</a>
                        </div>
                            <Image src={selectedHouse.images[2]} alt={selectedHouse.apartment}  fill
                                objectFit='cover'
                                objectPosition='center center'
                            className='w-full h-full rounded-xl ' />
                        </div>
                    </div>
        </div>

        <div className='flex flex-col bg-[#F5F4F8] justify-center items-between p-4 rounded-lg m-4  mx-4  text-grey-light' >
            <div  className='flex'>
                <p className='flex-[0.5] text-blue-800 w-[90%] text-xl font-bold ' > {`#${selectedHouse.amount}/Years`}</p>
               <div className='flex justify-end text-sm w-full'>
                    <CiLocationOn size={15}  className='ml-4 text-blue-800'/>
                    <p className=' flex  text-sm'> {selectedHouse.location}</p>
               </div>
            </div>
              <p className=' text-sm my-2 font-bond'>{selectedHouse.apartment}</p>
         
          <div className=' flex justify-between items-center' >
            {selectedHouse.mainFeatures.light   &&
                    <div className="flex h-6 bg-white  mr-2  justify-center items-center rounded-xl p-[0.4rem] " >
                        <HiOutlineLightBulb  className='w-4 h-4 mr-[0.5rem]' />
                        <p className="text-grey-light text-[0.5rem] ">24 hrs light</p>
                    </div>
            }
            {selectedHouse.mainFeatures.school   &&
                    <div className="flex h-6 bg-white mr-2  justify-center items-center rounded-xl p-[0.4rem] " >
                        <FaWalking  className='w-4 h-4 mr-[0.5rem]' />
                        <p className="text-grey-light text-[0.5rem]" >School in 30mins</p>
                    </div>
            }
            {selectedHouse.mainFeatures.carPack   &&
                    <div className="flex h-6 bg-white mr-2   justify-center items-center rounded-xl p-[0.4rem] " >
                        <AiFillCar   className='w-4 h-4 mr-[0.5rem]'  />
                        <p className="text-grey-light text-[0.5rem]">Car Park</p>
                    </div>
            }
            </div>
        </div>
        <div className='bg-[#F5F4F8]  p-4 rounded-lg m-4  mx-4  w-[90vw] '>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Features and Amenities</h2>
             <p className='flex flex-wrap text-grey-light'>
                {selectedHouse.features.map((data, i)=> {
                    return(
                        <span className='flex items-center mr-2' key={i}> <AiOutlineCheck size={15} className='mr-2' />{data}</span> 

                    )
                })}
        

             </p>
        </div>

        <div className='w-[90vw]   bg-[#F5F4F8]  p-4 rounded-lg m-4  mx-4 '>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">Steps to Acquire this Apartment</h2>
             <p className='flex flex-wrap text-grey-light'>
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Book Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make a payment of an Agent fee</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Get Connected to an Agent</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Go for your Tour</span> 
                <span className='flex items-center mr-2'> <RxDotFilled size={15} className='mr-2'/>Make full payment for apartment</span> 

             </p>
        </div>

        <div className='bg-[#F5F4F8]  p-4 rounded-lg m-4  mx-4  w-[90vw] '>
             <h2 className="text-blue-800 w-[70%] text-sm font-medium mt-4 ">About This Home</h2>
             <p className='flex flex-wrap text-grey-light'>
             {selectedHouse.about}
             </p>
        </div>

        
        <div className='m-4  mb-8 flex justify-between w-[90vw]'>
        <button className='bg-green-700 text-white font-bold rounded-lg w-[100%]  h-16' >Post Property</button>          
              
        </div>
        </div>
         <DesktopFooter/>
        </div>
     );
}
 
export default Preview;