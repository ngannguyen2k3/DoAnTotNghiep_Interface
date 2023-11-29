import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { productService } from "../../services/product.service";
import { Link } from "react-router-dom";
import { URL_CONSTANTS } from "../../constants/url.constants";
import {
  calculateDiscountPercentage,
  formatPrice,
} from "../../utils/fomatPrice";
import brand from "../../json/brand.json";
import { blogService } from "../../services/blog.service";
import { bannerService } from "../../services/banner.service";
import Loading from "./../../components/Loading/index";
import Slider from "../../components/Carousel";
import { SwiperSlide } from "swiper/react";
import { COLOR } from "../../constants/style.constants";
import "./style.css";
import CountdownTimer from "../../components/CountdownTimer";
import { categoryService } from "../../services/category.service";
import Pagination from "../../components/Pagination";

export default function HomePage() {
  const { data, isloading } = useQuery(
    ["product"],
    () => productService.fetchAllProducts(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );

  const { data: bannerData } = useQuery(
    ["banner"],
    () => bannerService.fetchAllBanners(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );
  return (
    <Layout>
      {/* slide */}
      <div className="w-full banner-wrapper mb-[20px]" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card mb-[20px]">
              <div className="w-full mt-[30px]">
                <Slider
                  className="swiper rounded-[12px]"
                  spaceBetween={2}
                  navigation={true}
                  pagination={false}
                  slidesPerView={1}
                  autoplay={2000}
                >
                  {bannerData?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-full h-full object-cover rounded-[12px] z-10"
                        src={item.imagePath}
                        alt={item.nameImage}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="navigation slider-prev" />
                  <div className="navigation slider-next" />
                </Slider>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="best-services bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-5 lg:py-0 py-10 aos-init"
            >
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H5.63636V24.1818H35"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M34.9982 1H11.8164V18H34.9982V1Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M11.8164 7.18164H34.9982"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Free Shipping
                    </p>
                    <p className="text-sm text-qgray">
                      When ordering over $100
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width={32}
                        height={34}
                        viewBox="0 0 32 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M30.7 2L29.5 10.85L20.5 9.65"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Free Return
                    </p>
                    <p className="text-sm text-qgray">
                      Get Return within 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width={32}
                        height={38}
                        viewBox="0 0 32 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Secure Payment
                    </p>
                    <p className="text-sm text-qgray">
                      100% Secure Online Payment
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width={32}
                        height={35}
                        viewBox="0 0 32 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M16 28V22"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                        <path
                          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                          stroke={COLOR.BLUE}
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Best Quality
                    </p>
                    <p className="text-sm text-qgray">
                      Original Product Guarenteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product FlashSale */}
      <div className="section-style-one new-products mb-[40px]">
        <div className="section-wrapper w-full">
          <div className="relative top-[-92px]"></div>
          <div className="relative max-w-6xl mx-auto rounded-md min-h-[416px]">
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "0% 0% / cover rgb(0, 0, 0)",
                marginBottom: 10,
              }}
            >
              <div
                className="block-hot-sale"
                style={{ backgroundSize: "cover" }}
              >
                <div className="box-title">
                  <div className="box-tab-menu">
                    <p
                      data-key="flashsale_bf25111"
                      className={`box-tab-item button__select-tab ${
                        selectedDate === "flashsale_bf25111" ? "active" : ""
                      }`}
                      style={{ color: "rgb(215, 0, 24)" }}
                      onClick={() => handleTabClick("flashsale_bf25111")}
                    >
                      25.11
                    </p>
                    <p
                      data-key="flashsale_bf26112"
                      className={`box-tab-item button__select-tab ${
                        selectedDate === "flashsale_bf26112" ? "active" : ""
                      }`}
                      style={{ color: "rgb(215, 0, 24)" }}
                      onClick={() => handleTabClick("flashsale_bf26112")}
                    >
                      26.11
                    </p>
                    <p
                      data-key="flashsale_bf27113"
                      className={`box-tab-item button__select-tab ${
                        selectedDate === "flashsale_bf27113" ? "active" : ""
                      }`}
                      style={{ color: "rgb(215, 0, 24)" }}
                      onClick={() => handleTabClick("flashsale_bf27113")}
                    >
                      27.11
                    </p>
                  </div>{" "}
                  <div className="title-image">
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/title-flash-salebf2023.png"
                        alt="title"
                        loading="lazy"
                      />
                    </div>
                  </div>{" "}
                  <div className="box-countdown">
                    <p className="title" style={{ color: "rgb(215, 0, 24)" }}>
                      Bắt đầu sau: 
                    </p>{" "}
                    <CountdownTimer targetDate={targetDate} />
                  </div>
                </div>{" "}
                <div className="below-title">
                  <div className="box-tab-menu">
                    <p
                      data-key="NaN"
                      className="box-tab-item button__select-tab active"
                      style={{ color: "rgb(215, 0, 24)" }}
                    >
                      09:00 - 11:00
                    </p>
                    <p
                      data-key="NaN"
                      className="box-tab-item button__select-tab"
                    >
                      14:00 - 16:00
                    </p>
                  </div>{" "}
                  <p className="text-note desktop">
                    Chỉ áp dụng thanh toán online 100% - Mỗi khách hàng không
                    mua quá 01 sản phẩm cùng loại
                  </p>
                </div>{" "}
                <div className="box-content">
                  <div className="relative p-[12px] w-full">
                    <Slider
                      className="swiper"
                      spaceBetween={10}
                      navigation={true}
                      pagination={false}
                      slidesPerView={5}
                      autoplay={2000}
                      breakpoints={{
                        1024: {
                          slidesPerView: 5,
                        },
                        768: {
                          slidesPerView: 3,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        320: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div
                            data-aos="fade-up"
                            className="bg-white w-full w[140px]"
                          >
                            <div className="relative w-full h-full p-4 flex flex-col bg-white justify-between">
                              <div className="relative flex-1 flex-grow-0 flex-shrink-0 flex-basis-auto">
                                <div className="relative">
                                  <div className="relative pb-[100%]">
                                    <div
                                      height="100%"
                                      width="100%"
                                      className="inline-block overflow-hidden h-full w-full transition-transform duration-300 ease-in-out absolute inset-0 object-contain"
                                    >
                                      <Link to={`/product/${item.slugProduct}`}>
                                        <img
                                          src={item.images[0].imagePath}
                                          loading="lazy"
                                          hover="zoom"
                                          decoding="async"
                                          alt="Laptop ACER Nitro 16 Phoenix AN16-41-R5M4 (Ryzen 5 7535HS/RAM 8GB/RTX 4050/512GB SSD/ Windows 11)"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                          }}
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-1">
                                  <div
                                    type="body"
                                    color="textSecondary"
                                    className="product-brand-name border-gray-300 opacity-100 text-gray-500 font-medium text-sm leading-[20px] overflow-hidden whitespace-nowrap overflow-ellipsis transition duration-300 ease-in-out delay-0s"
                                    style={{
                                      textTransform: "uppercase",
                                      display: "inline",
                                    }}
                                  >
                                    {item.brand.nameBrand}
                                  </div>
                                </div>
                                <div className="h-12">
                                  <div
                                    type="caption"
                                    className="att-product-card-title  border-gray-300 opacity-100 text-gray-600 font-normal text-sm leading-4 overflow-hidden custom-line-clamp"
                                    color="textPrimary"
                                  >
                                    <Link to={`/product/${item.slugProduct}`}>
                                      <h3
                                        title={item.nameProduct}
                                        className="text-sm font-normal leading-4 inline"
                                      >
                                        {item.nameProduct}
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                                <div className="relative mt-1 mb-1 pr-0 flex items-center">
                                  <div className="flex flex-col items-start h-10">
                                    <div
                                      type="subtitle"
                                      className="att-product-detail-latest-price opacity-100 text-blue-700 font-bold text-lg leading-6 overflow-hidden whitespace-normal overflow-ellipsis mt-1"
                                      color="primary500"
                                    >
                                      {formatPrice(item.price_has_dropped)}đ
                                    </div>
                                    <div class="flex h-4">
                                      <div
                                        type="caption"
                                        class="att-product-detail-retail-price m-0.25 opacity-100 text-gray-500 font-normal text-xs leading-4 overflow-hidden overflow-ellipsis line-through mt-1"
                                        color="textSecondary"
                                      >
                                        {formatPrice(item.initial_price)} đ
                                      </div>
                                      <div
                                        type="caption"
                                        color="primary500"
                                        class="opacity-100 text-blue-500 font-normal text-xs leading-4 overflow-hidden overflow-ellipsis ml-2 mt-1"
                                      >
                                        -{" "}
                                        {calculateDiscountPercentage(
                                          item?.initial_price,
                                          item?.price_has_dropped
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ml-10">
                                    <button
                                      className="w-8 h-8 border-[1px] border-blue-400 rounded-full p-[11px] flex-shrink-0 order-first"
                                      onClick={() => handleAddToCart()}
                                    >
                                      <img
                                        src="https://i.imgur.com/ZCeBSHN.png"
                                        alt=""
                                        style={{ transform: "scale(2.5)" }}
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="navigation slider-prev" />
                      <div className="navigation slider-next" />
                    </Slider>
                  </div>
                  <div style={{ display: "none" }}>
                    <p className="loading-text">Đang tải ...</p>
                  </div>
                </div>{" "}
                <p className="text-note mobile">
                  Chỉ áp dụng thanh toán online 100% - Mỗi khách hàng không mua
                  quá 01 sản phẩm cùng loại
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
