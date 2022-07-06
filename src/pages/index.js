import React from "react";
import ImageTwo from "../images/landingpic.jpg";
import { Link } from "react-router-dom";
import ImageThree from "../images/milk.jpg";
import { PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";
// import { useState } from "react";

const Home = () => {
  return (
    <>
      {/* Intro image */}
      <div
        className='bg-[url("https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/276139476_5081929421873903_5348070313939960090_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=SciaZ8EDGDQAX_eO9T0&_nc_ht=scontent-ort2-2.xx&oh=00_AT_puDRp7H2alIZQQWGx6WdB2LFrBb8Gro5OV7ez-I2k0w&oe=62C9C763")] h-96 w-full bg-cover bg-center p-60
        '
      >
        {/* <img
          src={ImageTwo}
          alt="enfamil"
          className="block px-5 pb-10 text-white bg-cente bg-no-repeat bg-cover  md:px-1 md:py-2 object-contain h-100 lg:px-5 lg-py-5 "
          //  rounded mb-50 shadow object-fill h-100 w-100
        /> */}
      </div>
      <body>
        {/* Flex container */}
        <section
          className="center
      "
        >
          {/* <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0"> */}
          <div
            className="container flex flex-col px-4 mx-auto mt-40 space-y-12
          md:space-y-0 md:flex-row"
          >
            {/* Paragraph text */}
            {/* <div className="flex flex-col mb-32 space-y-12 md:w-1/2"> */}
            <div className="flex flex-col space-y-12 md:w-1/2 mt-10 mb-10">
              <h1 className="max-w-md text-2xl font bold text-center md:text-3xl md:textleft">
                Providing trusted nutrition to fuel wonder every step of the
                way. <br /># 1 trusted brand for brain-building nutrition and
                immune support <br /> # 1 infant formula brand recommended by
                pediatricians
              </h1>
            </div>
            {/* image */}
            <div className=" md:w-1/2">
              <img
                src={ImageThree}
                alt="milk"
                className="flex rounded mb-50 shadow mt-8"
              />
            </div>
          </div>
          {/* Formula button */}
          <div className="flex justify-start ml-40 md: justify-start">
            <Link
              className=" content-center py-6 ml- px-10 mt-10 bg-blue-500 rounded-full text-3xt
            hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center"
              to="/products"
            >
              See Our Formulas{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col  bg-green-200 w-27 p-8  rounded-sm shadow-md mt-20  items-center ">
            {/* <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 mb-14 lg:mt-28"> */}
            <div className="mt-8 text-xl ">
              <h2
                className="text-bookmark-blue text-sm md:text-2 md:text-xl text-center text-bold lg:text-left
mb-6"
              >
                Looking for formula? Start with our store locator.{" "}
              </h2>

              {/* Locator button */}
              <Link
                className="flex justify-center py-3  px-10 mt-6 mb-20 bg-blue-300 rounded-full text-bold text-3xt
            hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center"
                to="/locator"
              >
                Find Formula{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 w-full min-h-screen justify-center mt-10 items-center">
            <div className="flex flex-col bg-yellow-200 w-full max-w-4xl p-8 rounded-xl shadow-lg mt-20 text-blue">
              <div className="flex flex-col spacy-y-8  justify-between">
                {/* <ion-icon name="call"></ion-icon> */}
                <div>
                  <h1 className="font-bold text-4xl tracking-wide ">
                    Contact Us
                  </h1>
                  <p className="pt-2 text-blue text-sm mb-10">
                    {" "}
                    Please let us know if you have any questions or would like
                    to receive a free welcome gift!
                  </p>
                </div>
                <div className="flex flex-col space-y-4 mb-11">
                  <div className="inline-flex  space-x-2 items-center">
                    <PhoneIcon className="h- w-5 text-black-500 "></PhoneIcon>
                    <span> 345-678-6789</span>
                  </div>
                  <div className="inline-flex  space-x-2 items-center">
                    <MailIcon className="h-6  w-5 text-black-500"></MailIcon>
                    <span>123@mail.com</span>
                  </div>
                  <div className="inline-flex  space-x-2 items-center">
                    <LocationMarkerIcon className="h-6 w-5 text-black-500"></LocationMarkerIcon>
                    <span>444 Brown Street, Houston Tx 7777</span>
                  </div>
                </div>

                {/* CONTACT FORM  */}

                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 ">
                  <form action="" className="flex flex-col space-y-4">
                    <div>
                      <label for="" className="text-sm">
                        Your name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none
                        focus:ring-2 focusing:ring-red-200"
                      />
                      <label for="" className="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none
                        focus:ring-2 focusing:ring-red-200"
                      />
                    </div>
                    <div>
                      <label for="" className="text-sm">
                        Message
                      </label>
                      <textarea
                        type="text"
                        placeholder="Message"
                        rows="4"
                        className="ring-1 ring-gray-700 w-full rounded-md px-4 py-2 mt-2 outline-none
                        focus:ring-2 focusing:ring-red-200"
                      ></textarea>
                    </div>
                    <button
                      className="inline-block self-end bg-blue-600 text-black font-bold rounded-lg px-10 py-4
                        uppercase text-5m"
                    >
                      Send message{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </>
  );
};

export default Home;
