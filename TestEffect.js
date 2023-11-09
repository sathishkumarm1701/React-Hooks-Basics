import React,{useEffect} from "react"; 

const TestEffect = () => {
    useEffect(() => {
        console.log("Hey");
    },[]);
    return<h1>Tests</h1>
}

export default TestEffect;
