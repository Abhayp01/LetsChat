import React, { useCallback, useEffect, useState } from "react";


export default function ContactCard(props){
    const [time,setTime]=useState(null);
    useEffect(()=>{
        const intervalId = setInterval(() => {
        const date = new Date();
        const hour=date.getHours();
        const min=date.getMinutes();
        const sec=date.getSeconds();
        setTime(
          `${hour}:${min}:${sec}`
        )
      }, 1000)
  
      return () => clearInterval(intervalId);
    }, [])
    
    return(
    <>
    <div className="flex items-center border-b-2 justify-between p-4 bg-green-500">
            <div className="flex items-center">
                <img className="rounded-full w-10 h-10 object-cover" src={props.imglink} alt="This is an image" />
            <div className="p-2 text-white font-medium">
                {props.name}
            </div>
            </div>
            <div className="text-white font-mono flex gap-x-2 item-center">
                {time}
            </div>
    </div>

    </>
    )

}