import React,{useState,useRef} from 'react';
import axios from 'axios';

const TweetCreate = () => {



    const [text,setText] = useState();
    const [image,setImage] = useState();
    const [video,setVideo] = useState();
    const inputTextDom = useRef();
    const inputImageDom = useRef();
    const inputVideoDom = useRef();

    const submitTweet = async (event) => {
        event.preventDefault();
        let form_data = new FormData();
        form_data.append('text',text);
        
        if(image){
            form_data.append('image',image);
        }
        if(video){
            form_data.append('video',video);
        }
        
        console.log(form_data);

        await axios.post('http://0.0.0.0:8000/tweet/create',form_data,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
        
        inputTextDom.current.value = null;
        inputImageDom.current.files = null;
        inputVideoDom.current.files = null;

    }

    const textChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const imageChange = (event) => {
        setImage(event.target.files[0]);
    }

    const videoChange = (event) =>{
        setVideo(event.target.files[0]);
        
    }

    return (
        <div>
            <div className="m-2">
                <form className="" onSubmit={submitTweet} >
                    <div>
                        <textarea ref={inputTextDom} className="my-5 mx-0 shadow appearance-none border rounded w-full h-20 py-2 px-3" type="text" name="text" onChange={textChange}　placeholder="何が起きた?" wrap="hard">
                        </textarea>
                    </div>
                    <div>
                        <input ref={inputImageDom} type="file" accept="image/*" name="image" onChange={imageChange}/>
                    </div>
                    <div>
                        <input ref={inputVideoDom} type="file" accept="video/*" name="video" onChange={videoChange}/>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">ツイート</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetCreate;