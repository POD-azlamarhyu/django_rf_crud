import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import TweetCreate from './tweetcreate';
import {ConvertDate} from '../../functions/convert';
import { react_tweet_end_point } from '../../functions/ulrs';

const Tweetlist = () => {
    const [tweets,setTweets] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await axios.get(
                react_tweet_end_point,
            );
            setTweets(data.data);
        };
        fetchData();
    },[]);
    return (
        <div>
            <TweetCreate />
            <div className="">
                {tweets.map((tweet)=>(
                    <NavLink tweet_id={tweet.id} to={`/tweet/${tweet.id}`}>
                        <div className="p-4 min-h-60 border-t border-gray-400">
                            <div className="">
                                <div>
                                    <p className="text-left mh-3 break-words">{tweet.text}</p>
                                </div>
                                <div>
                                    {tweet.image ? <img src={`http://0.0.0.0:8000/tweet${tweet.image}`} alt='img' /> : <></>}
                                    {tweet.video ? <video controls src={`${react_tweet_end_point}${tweet.video}`} /> : <></>}
                                </div>
                                <p className="text-xs text-gray-400">{ConvertDate(tweet.create_at)}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Tweetlist;