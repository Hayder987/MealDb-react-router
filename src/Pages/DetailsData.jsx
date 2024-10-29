import { useLoaderData, useNavigate } from "react-router-dom";



const DetailsData = () => {
    const data = useLoaderData();
    const navigation = useNavigate();

    const {strMeal,strCategory,strArea,strInstructions,
        strMealThumb,strTags,strYoutube
    } = data.meals[0]
    
    const backBtn=()=>{
        navigation(-1)
    }
    
    return (
        <div className="px-4 py-3 md:px-16 mb-6">
            <div className="flex justify-center items-center">
                <div className="p-6 flex flex-col justify-center items-center">
                 <h1 className="text-center text-3xl font-bold mb-2">{strMeal}</h1>
                 <img src={strMealThumb} alt="" className="mb-3 md:h-[60vh] object-cover" />
                 <div className="">
                 <h1 className="mb-3"><span className="text-xl  font-semibold">Category: </span>{strCategory}</h1>
                 <h3 className="mb-3">
                    <span className="text-xl mb-3 font-semibold">Area: </span>{strArea}</h3>
                 </div>
                 <div className="w-full md:w-8/12">
                   <p className="mb-3 text-center">
                   <span className="text-xl mb-3 font-semibold">Description: </span>{strInstructions}</p>
                 </div>
                 <p className="mb-3 text-center">
                   <span className="text-xl mb-3 font-semibold">Youtube: </span><a target="_blank" className="text-blue-700" href={strYoutube}>{strYoutube}</a></p>
                   <p className="mb-3 text-center">
                   <span className="text-xl mb-3 font-semibold">Tags: </span>{strTags}</p>
                 <div className="">
                    <button onClick={backBtn} className="text-xl font-medium bg-blue-500 text-white py-3 px-12 border-2">Back</button>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsData;