import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import  fetchProductById from "../redux/actions/fetchProductById"



const Detail = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(state => {
    return state.detail;
  });
  
  useEffect(()=>{
    dispatch(fetchProductById(id));
  },[dispatch, id])
 


  return (
    <div className="allHome relative w-full max-w-[366px] h-auto">
      <div className="Big image absolute w-[293px] h-[277px] top-0 left-[73px] bg-[#f6eaec] rounded-[20px_0px_0px_20px] overflow-hidden md:w-[500px] md:top-[30px] md:left-[300px] lg:w-[670px] lg:h-[450px] lg:left-[500px] lg:top-[29px]" style={{ backgroundImage: `url(${product.detail.image})` }} >
        <div className="relative w-[3px] h-[330px] top-[-26px] left-[-43px] " >
          <div className="relative w-[42px] h-[42px] top-[39px] left-[280px]" >
            <div className=" inline-flex items-start gap-[10px] p-[9px] relative bg-absolutestaticwhite-s rounded-[10px] border border-solid " >
              <img src={''} className="relative w-[24px] h-[24px]" alt="Small Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-0 left-[4px] md:left-[40px] md:w-[100px] md:h-[100px] md:top-[60px]  lg:left-[80px] lg:top-[30px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border-[1.5px] border-solid border-primary-color">
        <img
          className="relative w-[50px] h-[50px] object-cover"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[66px] left-[4px] md:left-[150px] md:top-[60px] md:w-[100px] md:h-[100px] lg:left-[80px] lg:top-[230px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] object-cover"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[132px] left-[4px] md:left-[10px] md:top-[170px] md:left-[40px] md:w-[100px] md:h-[100px] lg:left-[280px] lg:top-[30px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] object-cover"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[198px] left-[4px] md:left-[10px] md:left-[150px] md:top-[170px] md:w-[100px] md:h-[100px] lg:left-[280px] lg:top-[230px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] object-cover"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="flex w-[342px] items-center justify-between absolute top-[584px] left-0 md:top-[430px] md:left-[300px] lg:left-[880px] lg:top-[490px]">
        <p className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0]">
            $349.
          </span>
          <span className="text-[18px]">99</span>
        </p>
        <div className="flex w-[200px] items-center justify-center gap-[4px] p-[12px] relative bg-primary-color rounded-[15px]">
          <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-absolutestaticwhite-s text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
            Add To Cart
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[342px] items-start gap-[16px] absolute top-[425px] left-0 md:top-[330px] md:-h[50px] md:w-[200px] md:left-[40px] lg:left-[80px] lg:top-[430px]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
            <div className="justify-center gap-[10px] p-[9px] bg-[#f6eaec] rounded-[10px] inline-flex items-center relative flex-[0_0_auto]">
              <img src="https://i.postimg.cc/NjZnFBKm/document-svgrepo-com.png" className="relative w-[24px] h-[24px]" alt="Document Icon" />
            </div>
            <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Product Specifications
            </div>
          </div>
          <img src="https://i.postimg.cc/SxrvL3Nt/right-arrow-svgrepo-com.png" className="relative w-[24px] h-[24px]" alt="Right Arrow" />
        </div>
        <img className="relative w-[325px] h-px object-cover" alt="Line" src="line-1.svg" />
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
            <div className="justify-center gap-[10px] p-[9px] bg-[#f6eaec] rounded-[10px] inline-flex items-center relative flex-[0_0_auto]">
              <img src="https://i.postimg.cc/d0dxTpCX/colors-svgrepo-com.png" className="relative w-[24px] h-[24px]" alt="Colors Icon" />
            </div>
            <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
              Colors
            </div>
          </div>
          <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="bg-oil-08 border-primary-color relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
            <div className="bg-oil-04 border-oil-03 relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
            <div className="bg-absolutestaticwhite-s border-oil-03 relative w-[24px] h-[24px] rounded-[12px] border-2 border-solid" />
          </div>
        </div>
      </div>
      <img className="absolute top-[573px] left-[5px] w-[325px] h-px object-cover" alt="Line" src="line-2.svg" />
      <div className="flex flex-col w-[342px] items-start gap-[16px] absolute top-[317px] left-0  md:left-[300px] md:top-[340px] lg:top-[500px] lg:left-[500px]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-oil-11 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Sony WH-1000XM4
          </div>
          <div className="inline-flex items-center justify-center gap-[4px] px-[10px] py-[6px] relative flex-[0_0_auto] bg-absolutestaticwhite-s rounded-[10px] border border-solid border-oil-03">
            <img className="relative w-[16px] h-[16px]" alt="Star" src="https://i.postimg.cc/YCvVthCt/star-1-svgrepo-com.png" />
            <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-oil-11 text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
              4.9
            </div>
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-oil-11 text-[14px] tracking-[0] leading-[normal]">
          Wireless Over-ear Industry Leading Noise Canceling
          <br />
          Headphones with Microphone
        </p>
      </div>
    </div>
  );
};

export default Detail;