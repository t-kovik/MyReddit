import React, {useEffect, useState} from 'react';
import './main.global.scss'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from './shared/context/userContext';
import {PostsContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from "redux-thunk";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Post} from "./shared/Post";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <UserContextProvider>
                        <PostsContextProvider>
                            <Layout>
                                <Header/>
                                <Content>
                                    <Switch>
                                        <Redirect exact from={"/"} to={"/posts"}/>
                                        <Redirect from={"/auth"} to={"/posts"}/>
                                        <Route path="/posts">
                                            <CardsList/>
                                            <Route path="/posts/:id">
                                                <Post/>
                                            </Route>
                                        </Route>
                                        <Route path="*">
                                            <h1 style={{padding: '50px', textAlign: 'center'}}>
                                                404 — страница не найдена
                                            </h1>
                                        </Route>
                                    </Switch>
                                </Content>
                            </Layout>
                        </PostsContextProvider>
                    </UserContextProvider>
                </BrowserRouter>
            )}
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>);