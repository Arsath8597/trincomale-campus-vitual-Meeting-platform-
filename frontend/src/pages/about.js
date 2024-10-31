import React from "react";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../components/button";

const About = () => {
  return (
    <div
      id="about"
      className="bg-custom-gradient1 text-white flex flex-col px-4 lg:px-20 py-10"
    >
      <h1 className="text-center text-4xl font-semibold mb-10">About Us</h1>
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-10">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-2xl text-center lg:text-left font-semibold my-5">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-center lg:text-left lg:w-[90%]">
            If you have any inquiries, do not hesitate to get in touch with us.
            Connect with us via the relevant contact numbers or send us a
            message, and we will get back to you at our earliest convenience.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          <div className="flex items-start space-x-4">
            <CiLocationOn size={40} className="text-blue-300" />
            <div>
              <h1 className="text-blue-300 text-2xl">Address</h1>
              <p className="mt-2">
                Trincomalee Campus, Knowledge City Malabe, KCM Drive, Off
                Millennium Road, Trincomalee, Sri Lanka.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CiPhone size={40} className="text-blue-300" />
            <div>
              <h1 className="text-blue-300 text-2xl">Phone</h1>
              <p className="mt-2">(+94 0775654635)</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MdOutlineMailOutline size={40} className="text-blue-300" />
            <div>
              <h1 className="text-blue-300 text-2xl">Email</h1>
              <p className="mt-2">
                trincomaleecampus@gmail.com <br />
                trincomaleecampus@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-10">
        <Button className="mb-10 lg:ml-0 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default About;
