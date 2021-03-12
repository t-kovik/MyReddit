import React, {useEffect, useState} from 'react';
import './main.global.scss'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
//import { MyHooks, useIsMounted } from "./FunctionalExample";
//import {getValue} from "./utils/react/pickFromSynthetic";
//import { GenericList } from "./shared/GenericList";
//import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
//import {merge} from "./utils/js/merge";
import {Dropdown} from "./shared/Dropdown";
import {Icon} from "./shared/Icon";
import {Button} from "./shared/Button";
import {CardMenuItemsList} from "./shared/CardsList/Card/CardMenu/CardMenuItemsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {userContext, UserContextProvider} from './shared/context/userContext';
import {PostsContextProvider} from "./shared/context/postsContext";
//import {DropdownMenu} from "./shared/CardsList/Card/DropdownMenu";
//import {Text} from "./shared/Text";

// export const LIST = [
//     {text: 'some'},
//     {text: 'other some'},
//     {text: 'some'},
// ].map((item) => ({...item, id: generateRandomString()}))


function AppComponent() {
    const [token] = useToken();
    //const [ isVisible, setIsVisible ] = React.useState(false);
    // const [ title, setTitle ] = React.useState('');
    // const [isVisible] = useIsMounted();
    // const [list, setList] = React.useState(LIST);
    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id != id))
    // }
    // const handleAdd = () => {
    //     setList(list.concat({id: generateRandomString(), text: generateRandomString()}))
    // }
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header/>
                        <Content>
                            <CardsList/>
                            {/*<button onClick={() => setIsVisible(!isVisible)}>Change</button>*/}
                            {/*<input type="text" onChange={getValue(setTitle)}/>*/}
                            {/*{isVisible && <MyHooks title={title} id='11' />}*/}
                            {/*<button onClick={handleAdd}>Add element</button>*/}
                            {/*<GenericList list={list.map(merge({onClick: handleItemClick}))} />*/}
                            {/*    <GenericList list={LIST.map((item) => ({...item, onClick: () => {console.log(item.id)}}))} />*/}
                            {/*<div style={{padding: 20}}>*/}
                            {/*    <br/>*/}
                            {/*    <Dropdown onClose={() => console.log('closed')}*/}
                            {/*              onOpen={() => console.log('opened')}*/}
                            {/*              isOpen={false}*/}
                            {/*              button={<button>Test</button>}>*/}
                            {/*       <CardsList />*/}
                            {/*    </Dropdown>*/}
                            {/*</div>*/}
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent/>);
//export const App = hot(AppComponent);