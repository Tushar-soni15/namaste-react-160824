import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // here we dont need any parameters in the funtion because we can get the information of the user being online or offline without the help of the parameter.
    // even to add event listerner in the page we should use useEffect because we have to define how many times we have to call the event listeners 

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            console.log("You are not connected to the network.");
          });

          window.addEventListener("online", () => {
            setOnlineStatus(true);
            console.log("You are now connected to the network.");
          });
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;