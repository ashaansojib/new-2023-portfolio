import React from "react";
import { FaBeer, FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="my-container py-20">
      <div className="grid grid-cols-3 justify-between items-center gap-10">
        <div className="bg-gray-600 col-span-2 py-4">
          <div className="py-2 px-8 w-2/3">
            <h3 className="text-4xl font-semibold">Let's Talk ?</h3>
            <p className="pt-2">
              It's all about the humans behind a brand and those experiencing
              it, br we're right there. In the middle performance quick.
            </p>
          </div>
          <div className="px-16 py-2 text-black">
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id=""
                className="inline-block p-4 w-full rounded-md"
              />
              <div className="grid grid-cols-2 gap-6 py-2">
                <input
                  type="text"
                  name="main"
                  placeholder="Your Email"
                  id=""
                  className="inline-block p-4 w-full rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  id=""
                  className="inline-block p-4 w-full rounded-md"
                />
              </div>
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="6"
                placeholder="Type Your Comment"
                className="inline-block p-4 w-full rounded-md"
              ></textarea>
              <button className="py-4 px-6 inline mt-2 bg-[#040836] hover:bg-red-600 text-white rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="md:space-y-12">
          <div className="flex gap-4 items-center">
            <FaEnvelope className="text-5xl bg-[#00C0FF] p-2 rounded-md" />
            <div>
              <p>My Email</p>
              <h3 className="font-medium text-gray-400">ashaduzzamansojib67@gmail.com</h3>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaLocationArrow className="text-5xl bg-[#FF014F] p-2 rounded-md" />
            <div>
              <p>Address</p>
              <h3 className="font-medium text-gray-400">LalmonirHat, Rongpur</h3>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaMobileAlt className="text-5xl bg-[#00C0FF] p-2 rounded-md" />
            <div>
              <p>Contact Number</p>
              <h3 className="font-medium text-gray-400">+8801892932859</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;