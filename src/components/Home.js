import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ProductCard.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Transactions = () => {
  const [responseData1, setResponseData1] = useState([]);
  const [responseData2, setResponseData2] = useState([]);
  const [responseData3, setResponseData3] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const RedirectToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (item) => item.itemId === product.itemId
      );
      if (itemExists) {
        return prevCartItems; // Return the previous cart items array
      } else {
        return [...prevCartItems, product]; // Return a new array with the new product added
      }
    });
    console.log(cartItems);
    //storing the fetched data into LocalStorage.
    localStorage.setItem("items", JSON.stringify(cartItems));
  };

  useEffect(() => {
    const response = async () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/foryou",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: { email: "0@gmail.com" },
      };
      let config2 = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/bestseller",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: { email: "0@gmail.com" },
      };

      let config3 = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://myproject.local:8000/recommend/freq",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: { email: "0@gmail.com" },
      };

      try {
        const response1 = await axios.request(config);
        setResponseData1(response1.data);
        const response2 = await axios.request(config2);
        setResponseData2(response2.data);
        const response3 = await axios.request(config3);
        setResponseData3(response3.data);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  }, []);

  return (
    <>
      {/* Recommended for you */}
      <h3 className="font-weight-bold text-center mt-3 mb-3">
        Recommended For You
      </h3>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <div class="boxcont">
          {responseData1.map((transaction) => (
            <div key={transaction.transaction_id} class="">
              <SwiperSlide>
                <div class="product-card mb-2">
                  <div
                    class="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.itemId
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.itemId
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div class="product-price">
                    Item Price:{transaction.price}
                  </div>
                  <div class="product-description">
                    Item Description: This is pro
                  </div>
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>

      {/* Best Seller */}
      <h3 className="font-weight-bold text-center mt-3 mb-3">Bestseller</h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div class="boxcont">
          {responseData2.map((transaction) => (
            <div key={transaction.transaction_id} class="">
              <SwiperSlide>
                <div class="product-card mb-2">
                  <div
                    class="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.itemId
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.itemId
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div class="product-price">
                    Item Price:{transaction.price}
                  </div>
                  <div class="product-description">
                    Item Description: This is pro
                  </div>
                  <button class="add-to-cart-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>

      {/* Frequently bought Together */}
      <h3 className="font-weight-bold text-center mt-3 mb-3">
        Frequently bought Togther
      </h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={() => {}}
      >
        <div class="boxcont">
          {responseData3.map((transaction) => (
            <div key={transaction.transaction_id} class="">
              <SwiperSlide>
                <div class="product-card mb-2">
                  <div
                    class="product-image"
                    style={{
                      backgroundImage: `url(https://frsstoragepavnhe.file.core.windows.net/frs/images/0${transaction.itemId
                        .toString()
                        .substr(0, 2)}/0${
                        transaction.itemId
                      }.jpg?sv=2021-12-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-30T19:27:18Z&st=2023-04-09T11:27:18Z&spr=https&sig=wPAoF6tCS%2BoowdD8ztwOMKiE%2BpRU6vAxCKM3ZuerB1Y%3D`,
                    }}
                  ></div>
                  <div class="product-price">
                    Item Price: {transaction.price}
                  </div>
                  <div class="product-description">
                    Item Description: This is pro
                  </div>
                  <button
                    class="add-to-cart-button"
                    onClick={() => RedirectToCart(transaction)}
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Transactions;
