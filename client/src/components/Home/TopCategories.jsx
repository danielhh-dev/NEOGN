import Monitors from "../../utils/images/CategoriesIcons/Monitors.png"
import Headsets from "../../utils/images/CategoriesIcons/Headsets.png"
import Keyboards from "../../utils/images/CategoriesIcons/Keyboards.png"
import Mice from "../../utils/images/CategoriesIcons/Mice.png"

const TopCategories = () => {
    return (
        <div className="w-auto flex justify-around items-center">
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src={Monitors} className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Monitors</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src={Headsets} className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Headsets</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src={Keyboards} className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Keyboards</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src={Mice} className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Mice</div>
            </div>
        </div>
    )
}

export default TopCategories;