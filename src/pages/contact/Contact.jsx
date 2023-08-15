import React, { useRef } from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_115c0mo', 'template_e1pd3xs', form.current, '5oDTku2IrMwZo7wxV')
      .then((result) => {
        // console.log(result.text);
        form.current.reset();
      }, (error) => {
        alert("got an error")
      });
  };
  return (
    <div className="my-container py-20">
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-between items-center gap-10">
        <div className="bg-[#003252] col-span-2 py-4">
          <div className="py-2 px-8 w-2/3">
            <h3 className="text-4xl font-semibold">Let's Talk ?</h3>
            <p className="pt-2">
              It's all about the humans behind a brand and those experiencing
              it, br we're right there. In the middle performance quick.
            </p>
          </div>
          <div className="px-16 py-2 ">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text" name="form_name"
                placeholder="Your Name"
                id=""
                className="inline-block p-4 w-full rounded-md bg-[#0D0D31]"
              />
              <div className="grid grid-cols-2 gap-6 py-2">
                <input
                  type="email" name="user_email"
                  placeholder="Your Email"
                  id=""
                  className="inline-block p-4 w-full rounded-md bg-[#0D0D31]"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  id=""
                  className="inline-block p-4 w-full rounded-md bg-[#0D0D31]"
                />
              </div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                placeholder="Type Your Comment"
                className="inline-block p-4 w-full rounded-md bg-[#0D0D31]"
              ></textarea>
              <button className="py-4 px-6 inline mt-2 bg-[#040836] hover:bg-[#FF014F] rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <div className="md:flex gap-4 items-center p-2">
            <FaEnvelope className="text-5xl bg-[#00C0FF] p-2 rounded-md" />
            <div>
              <p>My Email</p>
              <h3 className="font-medium text-gray-400">ashaduzzamansojib67@gmail.com</h3>
            </div>
          </div>
          <div className="md:flex gap-4 items-center p-2">
            <FaLocationArrow className="text-5xl bg-[#FF014F] p-2 rounded-md" />
            <div>
              <p>Address</p>
              <h3 className="font-medium text-gray-400">LalmonirHat, Rongpur</h3>
            </div>
          </div>
          <div className="md:flex gap-4 items-center p-2">
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
