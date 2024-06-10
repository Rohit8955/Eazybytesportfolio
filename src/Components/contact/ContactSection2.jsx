import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactSection2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wwm5z8p", "template_xagjj0m", form.current, {
        publicKey: "gPRWX0d7O08xOR8y2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mb-[20px]">
      <h1 className="text-black font-[500] text-[18px] text-center ">
        Write me your project
      </h1>
      <form ref={form} onSubmit={sendEmail} className=" mt-5">
        <div className="flex flex-col gap-5 items-center">
          <div className="relative h-[47px] w-[300px]">
            <label className="absolute z-10 bg-gray-50 top-[-11px]  left-6 label">Name</label>
            <input
              name="name"
              className="input absolute z-0 bg-gray-50 top-0 left-0  w-full h-full  px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none "
              type="text"
              placeholder="insert your name"
            />
          </div>
          <div className="relative h-[47px] w-[300px]">
            <label className="absolute top-[-11px] bg-gray-50 z-10  left-6 label">
              Email
            </label>
            <input
              name="email"
              className="input z-0 absolute top-0 left-0 bg-gray-50  w-full h-full  px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none "
              type="email"
              placeholder="insert your Email"
            />
          </div>
          <div className="relative h-[120px] w-[300px]">
            <label className="absolute top-[-11px] bg-gray-50 z-10  left-6 label">
              Project
            </label>
            <textarea
              name="project"
              rows="10"
              cols="30"
              className="input z-0 absolute top-0 left-0 bg-gray-50  w-full h-[120px] py-2 px-[10px] border-gray-400 border-[1px] rounded-[0.75rem] outline-none "
              placeholder="write your project"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          value="send"
          className="bg-gray-800 w-[150px] text-white px-4 py-2 rounded-[20px] hover:cursor-pointer hover:bg-gray-700 mt-[20px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection2;
