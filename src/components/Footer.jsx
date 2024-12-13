import React from "react";

function Footer() {
  return (
    <div className="bg-[#202125] text-white p-10">
      <div className="flex font-thin text-[14px] justify-between gap-4 p-10">
        {/* Footer KFC bucket image section  */}
        {/* First child section */}
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt=""
          />
        </div>
        {/* Footer KFC about and wrights section */}
        {/* Second child section */}
        <div>
          <p className="p-2 font-semibold">KFC India</p>
          <p className="p-2 font-semibold">About KFC</p>
          <p className="p-2 font-semibold">KFC Care</p>
          <p className="p-2 font-semibold">Careers</p>
          <p className="p-2 font-semibold">Our Golden Past</p>
          <p className="p-2 font-semibold">Responsible Disclosure</p>
        </div>
        {/* Third child section */}
        <div>
          <p className="p-2 font-semibold">Legal</p>
          <p className="p-2 font-semibold">Terms and Conditions</p>
          <p className="p-2 font-semibold">Privacy Policy</p>
          <p className="p-2 font-semibold">Disclaimer</p>
          <p className="p-2 font-semibold">Caution Notice</p>
        </div>
        {/* Fourth child section */}
        <div>
          <p className="p-2 font-semibold">KFC Food</p>
          <p className="p-2 font-semibold">Menu</p>
          <p className="p-2 font-semibold">Order Lookup</p>
          <p className="p-2 font-semibold">Gift Card</p>
          <p className="p-2 font-semibold">Nutrition & Allergen</p>
        </div>
        {/* Fifth child section */}
        <div>
          <p className="p-2 font-semibold">Support</p>
          <p className="p-2 font-semibold">Get Help</p>
          <p className="p-2 font-semibold">Contact Us</p>
          <p className="p-2 font-semibold">KFC Feedback</p>
          <p className="p-2 font-semibold">Privacy Policy</p>
        </div>
        {/* Sixth child section */}

        <div className="flex items-start">
          <svg
            className="fill-red-600 w-2 m-[3px] "
            viewBox="0 0 9 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.49 12c2.335-1.862 4.876-4.924 4.466-8.028C8.67 1.697 6.743 0 4.49 0 2.154 0 .228 1.78.023 4.138-.264 7.2 2.195 10.179 4.49 12zm0-8.98c.901 0 1.639.746 1.639 1.656 0 .91-.738 1.655-1.64 1.655-.901 0-1.639-.745-1.639-1.655S3.588 3.02 4.49 3.02z"></path>
          </svg>
          <a className="underline" href="">
            Find a KFC
          </a>
        </div>
        {/* Seventh child section */}

        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
            alt=""
          />
        </div>
        {/* Eighth child section */}
        <div>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-4 justify-end gap-x-80 items-center p-4">
        <p className="text-xs font-thin">
          Copyright © KFC Corporation 2024 All rights reserved
        </p>
        <div className="flex gap-6 p-4">
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
