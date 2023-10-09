import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux"
import getFilter from "../redux/actions/getFilter"

export const FilterSortRange = () => {
  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState("");
  console.log(sortOrder)

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  console.log(minPrice,maxPrice)

  const handleSortOrderChange = (order) =>{
    setSortOrder(order)
  }
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value)
  }
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value)
  }

  const applyFilter = () => {
    dispatch(getFilter({
        //esto hay que cambiarlo mas adelante
      min: minPrice,
      max: maxPrice,
      order: sortOrder
    }))
  }

  return (
    <div className="filterConatiner flex flex-col h-[420px] max-w-[400px] items-center justify-center gap-[35px] pl-0 pr-[8px] pt-[13px] pb-[15px] relative rounded-md ">
      <div className="titleContainer flex w-[297px] items-center gap-[35px] relative flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-bold text-black text-[24px] tracking-[0.20px] leading-[36px]">
          Filter
        </div>
        <div className="relative w-[24px] h-[24px]" />
      </div>
      <div className="buttonsContainer inline-flex flex-col items-start gap-[10px] rotate-[-0.44deg] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-normal text-black text-[16px] tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Sort By
        </div>
        <div className="inline-flex flex-col items-start gap-[32px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto] ">
            <button
              onClick={()=> handleSortOrderChange("A-Z")}
              className="border-colors-grey-dark-1 h-[39px] border border-solid px-[15px] py-[20px] px-[15px] py-[20px] inline-flex  w-[unset] mt-[-11.50px] text-[14px] mb-[-9.50px] font-normal rounded-md items-center justify-center focus:bg-[#e54660]"
            >
              A-Z
            </button>
            <button
            onClick={()=> handleSortOrderChange("Z-A")}
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              Z-A
            </button>
            <button
            onClick={()=> handleSortOrderChange("Newest")}
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              Newest
            </button>
            <button
            onClick={()=> handleSortOrderChange("Oldest")}
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              Oldest
            </button>
          </div>
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              High Price
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              Low Price
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal rounded-md  items-center justify-center focus:bg-[#e54660]"
            >
              Review
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[297px] items-start gap-[10px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-normal text-black text-[16px] tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Price Range
        </div>
        <div className="priceContainer flex w-[297px] items-start gap-[17px] relative flex-[0_0_auto]">
          <input
            className="flex-1 flex-grow-0 flex w-[140px] flex-shrink-0 border border-solid px-[10px] py-[10px] rounded-md"
            type="text"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            className="flex-1 flex-grow-0 w-[140px] flex-shrink-0 border border-solid px-[15px] py-[10px] rounded-md"
            type="text"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
      <button 
      onClick={applyFilter}
      className="flex w-[273px] h-[50px] px-[10px] py-[20px] flex-col items-center justify-center gap-[10px] relative bg-[#e54660] rounded-[10px]">
        <div className="mt-[-6.00px] mb-[-4.00px] font-bold text-[16px] relative w-fit text-white tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Apply Filter
        </div>
      </button>
    </div>
  );
};

export default FilterSortRange;



