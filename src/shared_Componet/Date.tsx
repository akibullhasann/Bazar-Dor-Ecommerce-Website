"use client";

import { DateContext } from "@/contextApi/DateContext";
import { useContext } from "react";


const Date = () => {
    const date = useContext(DateContext)
    return (
        <p>{date}</p>
    );
};

export default Date;