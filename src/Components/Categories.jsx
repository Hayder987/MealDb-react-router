import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Categories = ({allCategories}) => {
const [selectedItem, setSelectedItem] = useState(null)
const navigation = useNavigate();

const catBtnHandellar=(id,catName)=>{
    setSelectedItem(id);
    navigation(`/category/${catName}`)
}

    return (
        <div className="mb-20">
            <h1 className="text-3xl md:text-4xl font-medium text-center mb-12">
                Your Favourite Food
            </h1>
            <div className=" grid gap-6 grid-cols-3 md:grid-cols-5">
            {
              allCategories.map(category=> (
                <div onClick={()=>catBtnHandellar(category.idCategory,category.strCategory)}  key={category.idCategory} className=" ">
                   <button 
                   className={`flex flex-col ${selectedItem===category.idCategory?"bg-orange-200":""}  justify-center border-2 w-full px-4 py-2 rounded-xl gap-2 items-center`}>
                    <img src={category.strCategoryThumb} alt="" 
                    className="w-18 h-16 rounded-full" />
                    <h3 className="text-sm md:text-xl">{category.strCategory}</h3>
                   </button>
                   
                </div>
              )) 
            }
            </div>
        </div>

    );
};
Categories.propTypes ={
    allCategories: PropTypes.array, 
}

export default Categories;