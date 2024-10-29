import { useLoaderData} from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";



const Home = () => {
    const allData = useLoaderData();
    const allCategories = allData.categories 
    

    return (
        <div className="px-4 py-3 md:px-16">
           <Banner></Banner>
           <Categories allCategories={allCategories}></Categories>

        </div>
    );
};

export default Home;