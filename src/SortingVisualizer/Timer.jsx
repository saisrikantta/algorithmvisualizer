import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
    const [milliseconds, SetMilliseconds] = useState(0);
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            SetMilliseconds(milliseconds + 1);
        }, 1000)

        return () => clearInterval(timer);
    });
    return (
        <div>
            <h1>{"0:" + milliseconds}</h1>
        </div>
    )
}

export default Timer