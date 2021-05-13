import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";


export function usePostsData() {
    const [postsData, setPostsData] = useState<any[]>([]);
    const token = useSelector<RootState, string>(state => state.tokenData.token);
    const dispatch = useDispatch();
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

