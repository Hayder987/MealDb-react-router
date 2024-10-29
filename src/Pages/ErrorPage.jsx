import { useNavigate, useRouteError } from "react-router-dom";
import { BiError } from "react-icons/bi";


const ErrorPage = () => {
    const error = useRouteError();
   const navigation = useNavigate()

   const errorBtnHandeller =()=>{
    navigation("/")
   }

    return (
        <div className="p-20 flex flex-col justify-center items-center">
            <div className="">
                <h1 className="text-center text-5xl font-bold mb-4">
                    {error.status}
                </h1>
                <h1 className="text-center text-4xl font-bold mb-4">
                    {error.data
                    }
                </h1>
            </div>
            <div className="mt-12">
             <BiError className="text-6xl text-red-600" />
            </div>
            <div className="mt-4">
                <button onClick={errorBtnHandeller} className="text-xl font-medium border-2 py-3 px-6">Back To Home</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;