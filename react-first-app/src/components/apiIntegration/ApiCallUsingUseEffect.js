import axios from 'axios';
import React, { useEffect } from 'react'

const ApiCallUsingUseEffect = () => {

    useEffect(()=>{
        const getPostData = async()=>{
            let dataByPost;
            try{

                 dataByPost = await axios.get("https://jsonplaceholder.typicode.com/posts");
            }catch(error){
                console.log(error);
            }
            console.log(dataByPost.data);
        }
        getPostData()       
    },[])
  return (
    <>
        <h2>Api Integration using useEffect</h2>
    </>
  )
}

export default ApiCallUsingUseEffect