import React from "react";
import Button from "../components/button";
import Contactimg from "../assets/contactus.webp";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 lg:px-20 bg-custom-gradient1 text-white py-10"
    >
      <h1 className="text-center text-4xl font-semibold py-8">Contact Us</h1>
      <div>
        <h1 className="text-2xl font-semibold mb-5">Leave a Message Here</h1>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <input
          className="w-full px-4 bg-gray-100 py-4 my-3 rounded-lg placeholder-gray-600"
          placeholder="Name"
        />
        <input
          className="w-full px-4 bg-gray-100 py-4 my-3 lg:my-0 rounded-lg placeholder-gray-600"
          placeholder="Email"
        />
        <input
          className="w-full px-4 bg-gray-100 py-4 my-3 rounded-lg placeholder-gray-600"
          placeholder="Phone"
        />
        <input
          className="w-full px-4 bg-gray-100 py-4 my-3 lg:my-0 rounded-lg placeholder-gray-600"
          placeholder="Subject"
        />
      </div>

      <textarea
        className="w-full px-4 py-4 bg-gray-100 my-5 rounded-xl placeholder-gray-600"
        placeholder="Write your message here"
        rows="6"
      />

      <div className="flex justify-center lg:justify-start">
        <Button className="text-center my-5 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg">
          Submit
        </Button>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          className="pb-10 hidden lg:block w-full max-w-md"
          src={Contactimg}
          alt="Contact us"
        />
      </div>
    </div>
  );
};

export default Contact;
