import React from "react";
import ContactCard from "../contactcard/contactcard";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Contacts() {
  return (
    <div className="overview w-[30%] h-screen flex flex-col bg-gray-100 border-r border-gray-300">
      <div className="flex justify-between items-center p-4 bg-blue-500">
        <div className="flex items-center">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src="https://wallpapers.com/images/hd/naruto-profile-pictures-392d311ouj6b7ggq.jpg"
            alt="Profile"
          />
          <div className="ml-3 text-white">
            <p className="font-medium">ContactName</p>
            <div className="text-sm font-bold">
              <span className="font-semibold">+91 </span>9811123456
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-7" src="msg.png" alt="Message" />
        </div>
      </div>
      <div className="flex justify-center p-2 bg-blue-500">
        <div className="p-2 w-full flex bg-white rounded-lg">
          <button className="p-1" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </button>
          <input
            className="w-full px-4 outline-none"
            type="text"
            placeholder="Search for someone"
          />
        </div>
      </div>
      <PerfectScrollbar className="flex-1">
        <div className="overflow-y-auto p-2 space-y-2">
          <ContactCard
            name="Uzumaki Naruto"
            imglink="https://wallpapers.com/images/hd/naruto-profile-pictures-392d311ouj6b7ggq.jpg"
          />
          <ContactCard
            name="Sasuke Uchiha"
            imglink="https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"
          />
          <ContactCard
            name="Itachi Uchiha"
            imglink="https://staticg.sportskeeda.com/editor/2022/07/aedcf-16570135965843.png?w=840"
          />
          <ContactCard
            name="Kakashi Hatake"
            imglink="https://i.pinimg.com/474x/7f/c1/74/7fc174a2e88d4189cdad8ea71d099fb7.jpg"
          />
          <ContactCard
            name="Sakura Haruno"
            imglink="https://i.pinimg.com/736x/f5/62/18/f56218c71d25c89c0b4e2efa3b3d765d.jpg"
          />
          <ContactCard
            name="Uzumaki Naruto"
            imglink="https://wallpapers.com/images/hd/naruto-profile-pictures-392d311ouj6b7ggq.jpg"
          />
          <ContactCard
            name="Sasuke Uchiha"
            imglink="https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"
          />
          <ContactCard
            name="Itachi Uchiha"
            imglink="https://staticg.sportskeeda.com/editor/2022/07/aedcf-16570135965843.png?w=840"
          />
          <ContactCard
            name="Kakashi Hatake"
            imglink="https://i.pinimg.com/474x/7f/c1/74/7fc174a2e88d4189cdad8ea71d099fb7.jpg"
          />
          <ContactCard
            name="Sakura Haruno"
            imglink="https://i.pinimg.com/736x/f5/62/18/f56218c71d25c89c0b4e2efa3b3d765d.jpg"
          />
        </div>
      </PerfectScrollbar>
    </div>
  );
}
