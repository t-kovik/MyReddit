import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";


export function usePostsData() {
    const [postsData, setPostsData] = useState<any[]>([]);
    const token = useContext(tokenContext);
    useEffect(() => {
        if (!token) return;
            axios.get('https://oauth.reddit.com/r/popular/best.json?sr_detail=true',
                {
                    headers: {Authorization: `bearer ${token}`}
                })

                .then((resp) => {
                    const postsData1 = resp.data.data.children
                    setPostsData(postsData1)

                })
                .catch(console.log)
        },
        [token])
    return [postsData]
}

