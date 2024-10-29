import { NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";



const NavBar = () => {
    const [condition , setCondition] = useState(true)

    const menuBtnHandeler =()=>{
        setCondition(!condition);
    }
    const itemBtnController =()=>{
        setCondition(!condition)
    }
  

    return (
        <div className="px-4 py-3 md:px-16 mb-6 ">
            <div className="flex justify-between items-center relative">
                <h1 className="text-3xl font-bold">MealDb</h1>
                <div className={`bg-blue-500 flex md:hidden absolute duration-500
                  ${condition?"-top-64" : "top-16"}  w-[70%] p-6 rounded-xl`}>
                    <ul className="flex flex-col gap-6 text-xl text-white">
                     <NavLink onClick={itemBtnController} to="/">Home</NavLink>
                     <NavLink onClick={itemBtnController} to="/about">About</NavLink>
                     <NavLink onClick={itemBtnController} to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <div className="hidden md:flex ">
                    <ul className="flex gap-10 text-xl"> 
                     <NavLink to="/">Home</NavLink>
                     <NavLink to="/about">About</NavLink>
                     <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <div onClick={menuBtnHandeler} className="flex text-2xl md:hidden">
                    {
                        condition?<button><AiOutlineMenuUnfold /></button>:
                        <button><MdOutlineRestaurantMenu /></button>
                    }
                    
                </div>
                <button className="bg-orange-300 py-2 px-4 rounded-xl font-medium">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;