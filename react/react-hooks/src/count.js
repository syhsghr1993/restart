import React,{ useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div className="mb20">
            <b>1.hooks ====> useState使用</b>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}