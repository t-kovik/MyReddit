import React from "react";
import {usePostsData} from "../../hooks/usePostsData";


export const postsContext = React.createContext<any[]>([]);

export function PostsContextProvider({children}: { children: React.ReactNode }) {
    const [postsData] = usePostsData();
    return (
        <postsContext.Provider value={postsData}>
            {children}
        </postsContext.Provider>
    )
}