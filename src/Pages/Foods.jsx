import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";



const Foods = () => {
    let data = useLoaderData();
    const [catData, setCatData] = useState([])
     const [conditon, setCondition] = useState(false)   
     const allDataBtn =()=>{
        setCondition(true);
     }
     useEffect(()=>{
        if(!conditon){
            setCatData(data.meals.slice(0,10))
         }
         else{
            setCatData(data.meals)
         }
     },[conditon]);

     const navigate = useNavigate();
     

     const backBtn=()=>{
        navigate(-1)
     }
     
    return (
        <div className="px-4 py-3 md:px-16 mb-6 ">
           <div className="py-4 mb-6">
             <h1 className="text-3xl font-semibold text-center">Total Items:  
                {data.meals.length}</h1> 
           </div>
           
           <div className="grid mb-6 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"> 
            {
             catData.map(item=>(
                <div key={item.idMeal} className="border-2 p-4 rounded-xl flex flex-col ">
                    <div className="flex-grow">
                    <img src={item.strMealThumb} alt="" className="rounded-xl mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-center mb-3">{item.strMeal}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <Link to={`/posts/${item.idMeal}`}
                     className="text-xl underline text-orange-400 font-semibold">View Details
                     </Link>
                     <button onClick={backBtn} className="text-xl font-medium  py-2
                      px-6 border-2 rounded-xl">Back</button>
                    </div>
                </div>
             ))   
            }
           </div>
           <div className="flex justify-center items-center mb-6">
             <button onClick={()=>allDataBtn()} className="text-xl font-medium py-3 px-6 bg-blue-600 text-white rounded-xl">Show All</button>
           </div>
        </div>
    );
};

export default Foods;