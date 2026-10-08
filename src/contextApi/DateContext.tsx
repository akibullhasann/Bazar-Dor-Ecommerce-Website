"use client";

import { createContext, useEffect, useState } from "react";


export const DateContext = createContext<string>("");

const DateProvider = ({children}:{children:React.ReactNode}) => {
    const [date, setDate] = useState("");
    
    useEffect(() => {
        setDate(
            new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            })
        );
    }, []);



    return (

            <DateContext.Provider value={date}>
                {children}
            </DateContext.Provider>
    );
};

export default DateProvider;