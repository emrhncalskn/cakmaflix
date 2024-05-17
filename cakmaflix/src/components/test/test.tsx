"use client";
import React, { useState } from 'react'

function Test() {
    const [count, setCount] = useState(2);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count)}>
                Click me
            </button>
        </div>
    );
}

export default Test