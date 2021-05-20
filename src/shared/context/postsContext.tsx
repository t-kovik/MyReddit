import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

//
// export const postsContext = React.createContext<any[]>([]);
//
// export function PostsContextProvider({children}: { children: React.ReactNode }) {
//     const [postsData] = usePostsData();
//     return (
//         <postsContext.Provider value={postsData}>
//             {children}
//         </postsContext.Provider>
//     )
// }

type IProps = {
    loading?: boolean,
    errorLoading?: string,
    nextAfter?: string,
    bottomOfList?: React.RefObject<HTMLDivElement>,
    postsData: Array<any>,
    nextCount?: number,
    loadPosts?: boolean,
    handleClick: () => void
}


export const postsContext = React.createContext<IProps>({
    postsData: [],
    handleClick: () => {}
});

export function PostsContextProvider({children}: { children: React.ReactNode }) {
    const {
        loading,
        errorLoading,
        nextAfter,
        bottomOfList,
        postsData,
        nextCount,
        loadPosts,
        handleClick
    } = usePostsData();
    return (
        <postsContext.Provider value={{postsData, loading, errorLoading, nextAfter, bottomOfList, nextCount, loadPosts, handleClick}}>
            {children}
        </postsContext.Provider>
    )
}