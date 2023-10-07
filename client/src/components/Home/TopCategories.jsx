import { Link } from "react-router-dom"

const TopCategories = () => {
    return (
        <div className="w-auto flex justify-around items-center">
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src="https://i.postimg.cc/xjXTwHc6/monitor-9678589-7924228.png" className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Monitors</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src="https://i.postimg.cc/xdsn7TYr/gaming-headset-7480997-6138641.png" className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Headsets</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src="https://i.postimg.cc/DysfZTQs/keyboard-gaming-6013628-4979944.png" className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Keyboards</div>
            </div>
            <div className="w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center">
                <img src="https://i.postimg.cc/1Rb5stFs/gaming-mouse-5756086-4818641.png" className="w-[30px] h-[30px]"/>
                <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">Mice</div>
            </div>
        </div>
    )
}

export default TopCategories;