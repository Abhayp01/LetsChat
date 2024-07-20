import React, { useEffect, useState } from "react";

export default function ContactCard(props) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
      setTime(`${hour}:${min}:${sec}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
      <div className="flex items-center">
        <img
          className="rounded-full w-12 h-12 object-cover"
          src={props.imglink}
          alt="Profile"
        />
        <div className="ml-4">
          <div className="text-gray-900 font-medium">{props.name}</div>
          <div className="text-gray-600 text-sm">Last seen at {time}</div>
        </div>
      </div>
    </div>
  );
}
