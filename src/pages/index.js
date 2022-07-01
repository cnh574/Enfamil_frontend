import React from "react";
import ImageTwo from "../images/landingpic.jpg";
import { Link } from "react-router-dom";
import ImageThree from "../images/milk.jpg";
import { PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <>
      {/* Intro image */}
      <img
        src={ImageTwo}
        alt="enfamil"
        className="h-full rounded mb-50 shadow"
      />
      <body>
        {/* Flex container */}
        <section
          className="center
      "
        >
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex flex-1 flex-col items-center lg:items-center">
              <h2
                className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left
mb-6"
              >
                Looking for formula? Start with our store locator.{" "}
              </h2>
              {/* Locator button */}
              <Link
                className=" content-center py-6 px-10 mt-10 bg-blue-500 rounded-full text-3xt
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
          {/* <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0"> */}
          <div
            className="container flex flex-col px-4 mx-auto mt space-y-12
          md:space-y-0 md:flex-row"
          >
            {/* Paragraph text */}
            {/* <div className="flex flex-col mb-32 space-y-12 md:w-1/2"> */}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h1 className="max-w-md text-4xl font bold text-center md:text-5xl md:textleft">
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
                className="flex rounded mb-50 shadow"
              />
            </div>
          </div>
          {/* Formula button */}
          <div className="flex justify-start md: justify-start">
            <Link
              className=" content-center py-6 px-10 mt-10 bg-blue-500 rounded-full text-3xt
            hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center"
              to="/products"
            >
              See Our Formulas{" "}
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
          <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col bg-yellow-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-blue">
              <div className="flex flex-col justify-betwween">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide"></h1>

                  <div>
                    <div className="flex flex-col spacy-y-8 justify-between">
                      {/* <ion-icon name="call"></ion-icon> */}
                      <h1 className="font-bold text-4xl tracking-wide">
                        Contact Us
                      </h1>
                      <p className="pt-2 text-blue text-sm">
                        {" "}
                        Please let us know if you have any questions or would
                        like to receive a free welcome gift!
                      </p>
                    </div>
                    <div className="flex flex-col space-y-6"></div>
                    <div className="inline-flex space-x-10 items-center"></div>
                    <PhoneIcon className="h-10 w-5 text-black-500"></PhoneIcon>
                    <span>345-678-6789</span>
                    <MailIcon className="h-10 w-5 text-black-500"></MailIcon>
                    <span>123@mail.com</span>
                    <LocationMarkerIcon className="h-10 w-5 text-black-500"></LocationMarkerIcon>
                    <span>444 Brown Street, Houston Tx 7777</span>
                  </div>
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
