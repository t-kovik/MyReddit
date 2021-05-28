import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";



export function usePostsData() {
    const [postsData, setPostsData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState('');
    //const token = useSelector<RootState, string>(state => state.tokenData.token);
    const bottomOfList = useRef<HTMLDivElement>(null);
    let [nextCount, setNextCount] = useState(0);
    const [loadPosts, setLoadPosts] = useState(false);
    const token = localStorage.getItem('token');

    const handleClick = () => {
        setLoadPosts(false);
        setNextCount(0);
    }

    useEffect(() => {
        if(token == null) return ;
        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                console.log('try')
                const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/r/popular/best.json?sr_detail=true',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10,
                            after: nextAfter,
                        }
                    })
                setNextCount(nextCount + 1);
                if(nextCount >= 3) {
                    setLoadPosts(true);
                } else {
                    setLoadPosts(false);
                }

                if(!loadPosts && nextCount >= 1) {
                    setNextAfter(after);
                    setPostsData(prevChildren => prevChildren.concat(...children));
                    console.log('prevChildren')
                } else {
                    setNextAfter(after);
                    setPostsData(children)
                    console.log('children')
                }
            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
        }

            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting && !loadPosts) {
                    load();
                }
            },{
                rootMargin: '10px',
            });
            if(bottomOfList.current) {
                observer.observe(bottomOfList.current);
            }
            return () => {
                if(bottomOfList.current) {
                    observer.unobserve(bottomOfList.current);
                }
            }

    }, [bottomOfList.current, nextAfter, token, loadPosts]);
    return {
        loading,
        errorLoading,
        nextAfter,
        bottomOfList,
        postsData,
        nextCount,
        loadPosts,
        handleClick
    }
}


