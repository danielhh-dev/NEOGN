import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import  fetchProductById from "../redux/actions/fetchProductById"
import heart from "../utils/images/AppbarIcons/DarkHeart.png"
import backIcon from "../utils/images/BasicIcons/backIcon.png"
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1); // Navega hacia atrás en la pila de historial
  };


  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(state => {
    return state.detail;
  });
  
  useEffect(()=>{
    dispatch(fetchProductById(id));
  },[dispatch, id])
 


  return (
    
    <div className="allHome relative w-full max-w-[366px] left-[15px] h-auto mt-[30px] mb-[770px] md:mb-[600px] lg:mb-[700px]" >
      <div className="detail-header relative w-full left-[10px] ">
      <button className="arrow-left absolute top-[50%] left-0 transform -translate-y-1/2 mt-[-20px]">
        <img
          src={backIcon}
          alt="Arrow"
          className="w-[24px] h-[24px]"
          onClick={goBackHandler}
        />
      </button>
      <h1 className="detail-text absolute top-[50%] left-[40px] transform -translate-y-1/2 mt-[-20px] [font-family:'Roboto-Regular',Helvetica] font-normal">
        Detail
      </h1>
    </div>
      <div className="Big image absolute w-[293px] h-[277px] top-0 left-[73px] bg-[#f6eaec] rounded-[20px_0px_0px_20px] overflow-hidden md:w-[500px] md:top-[30px] md:left-[300px] lg:w-[670px] lg:h-[450px] lg:left-[500px] lg:top-[29px] ">

       <div >

      </div>
          <div className="relative w-[42px] h-[42px] top-[9px] left-[230px] md:top-[20px] md:left-[420px] lg:left-[580px]  " >
            <div className="Wishlist-Heart inline-flex items-start gap-[10px] p-[1px] top-[10px] right-[1px] top-[20px]  relative bg-absolutestaticwhite-s rounded-[10px] border border-solid " >
            <div
            className="bg-white rounded-[10px] overflow-hidden flex items-center justify-center"
            style={{ width: '34px', height: '34px' }}
          >
            <img
              src={heart}
              className="relative w-[24px] h-[24px]"
              alt="Small Image"
            />
          </div>
            </div>
          </div>

        <img
          className="relative w-[293px] h-[277px] top-[-50px] md:w-[300px] md:h-[280px] md:left-[95px]  bg-cover md:w-[100px] md:h-[100px] lg:w-[480px] lg:h-[450px] lg:top-[-20px] bg-no-repeat  "
          style={{ backgroundImage: `url(${product.detail.image})`, 
          border: 'none', }}
          
        />
        
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-0 left-[4px] md:left-[40px] md:w-[100px] md:h-[100px] md:top-[60px]  lg:left-[80px] lg:top-[30px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border-[1.5px] border-solid border-primary-color">
        <img
          className="relative w-[50px] h-[50px] bg-cover md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-no-repeat  "
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[66px] left-[4px] md:left-[150px] md:top-[60px] md:w-[100px] md:h-[100px] lg:left-[80px] lg:top-[230px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] bg-cover md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-no-repeat "
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[132px] left-[4px] md:left-[10px] md:top-[170px] md:left-[40px] md:w-[100px] md:h-[100px] lg:left-[280px] lg:top-[30px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] bg-cover md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-no-repeat"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="inline-flex items-start gap-[10px] absolute top-[198px] left-[4px] md:left-[10px] md:left-[150px] md:top-[170px] md:w-[100px] md:h-[100px] lg:left-[280px] lg:top-[230px] lg:w-[180px] lg:h-[180px] bg-absolutestaticwhite-s rounded-[12px] border border-solid border-oil-03">
        <img
          className="relative w-[50px] h-[50px] bg-cover md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] bg-no-repeat"
          alt="small img"
          src={product.detail.image}
        />
      </div>
      <div className="flex w-[342px] items-center justify-between absolute top-[584px] left-0 md:top-[430px] md:left-[300px] lg:left-[880px] lg:top-[490px]">
        <p className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-[24px] tracking-[0]">
          {`$${product.detail.price}`}
          </span>
          <span className="text-[18px]">99</span>
        </p>
        <button style={{ backgroundColor: 'rgba(229, 70, 96, 1)' }} className="flex w-[200px] items-center justify-center gap-[4px] p-[12px] relative rounded-[15px]">
          <div className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-absolutestaticwhite-s text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
            Add To Cart
          </div>
        </button>
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
          {`${product.detail.name}`}
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
