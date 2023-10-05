import getFilter from "../redux/actions/getFilter";
import {useDispatch} from "react-redux"
import {useState} from "react"


const CategoriesFilter = () => {

    const dispatch = useDispatch();
    const [selectCategory, setSelectCategory]= useState('')

    const handleSelection = (category) =>{
        setSelectCategory(category)
        dispatch(getFilter({category:category}))
    }



    return (
        <div className="w-auto flex justify-around items-center">
          <button
            onClick={() => handleSelection("Monitors")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Monitors" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/xjXTwHc6/monitor-9678589-7924228.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Monitors
            </div>
          </button>
          <button
            onClick={() => handleSelection("Headsets")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Headsets" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/xdsn7TYr/gaming-headset-7480997-6138641.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Headsets
            </div>
          </button>
          <button
            onClick={() => handleSelection("Keyboards")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Keyboards" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/DysfZTQs/keyboard-gaming-6013628-4979944.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Keyboards
            </div>
          </button>
          <button
            onClick={() => handleSelection("Mice")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Mice" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/1Rb5stFs/gaming-mouse-5756086-4818641.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Mice
            </div>
          </button>
          
        </div>
      );
    };
    
    export default CategoriesFilter;