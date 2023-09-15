import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allCourse,setAllCourse]=useState([])
  useEffect(()=>{
    fetch("/public/block.json")
    .then((res)=>res.json())
    .then((data)=>setAllCourse(data))
  },[])
   
    return (
        <div className="w-10/12 m-auto">
      <div className="flex justify-evenly gap-6">
        <div className="grid grid-cols-3 gap-6">
          
            {
              allCourse.map((course)=>(
                <div key={course.id}  className="w-[250px] h-[330px] bg-white shadow-lg rounded-lg ">
              <div className="card-img">
                <img className="p-[8px] " src={course.cover} alt="" />
              </div>
             <div className="p-2 m-2">
             <h2 className="text-[16px] font-bold ">{course.title}</h2>
              <p>
                <small className="">
                  {course.description}
                </small>
              </p>
              <div className="flex gap-[4px] ">
                <img src="./public/images/dollar-sign 1.png" alt="" />
                <p className="font-semibold">Price: {course.price}</p>
                <img src="./public/images/Frame.png" alt="" />
                <p className="font-semibold">Credit: {course.credit}</p>
              </div>
              <button className="bg-blue-600 rounded mt-4 w-[100%] p-[4px]">Select</button>
             </div>
              
            </div>
              ))}
        
        </div>
        <div className="cart">
          <h2>this is card bjjvhhvhvcgc sbh</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;