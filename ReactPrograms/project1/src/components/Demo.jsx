import React, { useCallback } from 'react'

const Demo = () => {

    const createFunction = useCallback(
        () => {
        console.log("Hello");
    }, []);

    const f1 = createFunction()      //123   old version cache jab tak isme kuch new changes
    const f2 = createFunction()      //123
    console.log(f1 === f2)			//true

    return (
        <div>Demo</div>
    )
}

export default Demo
