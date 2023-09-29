import React from "react";

export const Filter = () => {
  return (
    <div className="flex flex-col h-[420px] items-center justify-center gap-[35px] pl-0 pr-[8px] pt-[13px] pb-[15px] relative bg-white">
      <div className="flex w-[297px] items-center gap-[35px] relative flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] font-bold text-black text-[24px] tracking-[0.20px] leading-[36px]">
          Filter
        </div>
        <div className="relative w-[24px] h-[24px]" />
      </div>
      <div className="inline-flex flex-col items-start gap-[10px] rotate-[-0.44deg] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-normal text-black text-[16px] tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Sort By
        </div>
        <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
            <button
              className="h-[39px] flex-[0_0_auto] px-[15px] py-[20px] inline-flex bg-[#e54660] w-[unset] mt-[-11.50px] text-[14px] mb-[-9.50px] font-normal"
            >
              A-Z
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
            >
              Z-A
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
            >
              Newest
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
            >
              Oldest
            </button>
          </div>
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
            >
              High Price
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
            >
              Low Price
            </button>
            <button
              className="border-colors-grey-dark-1 h-[39px] flex-[0_0_auto] border border-solid px-[15px] py-[20px] inline-flex bg-white w-[unset] mt-[-11.50px] text-black text-[14px] mb-[-9.50px] font-normal"
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
        <div className="flex w-[297px] items-start gap-[17px] relative flex-[0_0_auto]">
          <input
            className="flex-1 flex grow"
            type="text"
            placeholder="Min Price"
          />
          <input
            className="flex-1 flex grow"
            type="text"
            placeholder="Max Price"
          />
        </div>
      </div>
      <div className="flex w-[273px] h-[50px] px-[10px] py-[20px] flex-col items-center justify-center gap-[10px] relative bg-[#e54660] rounded-[10px]">
        <div className="mt-[-6.00px] mb-[-4.00px] font-bold text-[16px] relative w-fit text-white tracking-[0.20px] leading-[20px] whitespace-nowrap">
          Apply Filter
        </div>
      </div>
    </div>
  );
};

export default Filter;



