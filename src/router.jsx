import React from 'react';
import { Route, Switch } from "react-router-dom";

import Index from "./routes";
import Login from "./routes/login";
import Signup from "./routes/signup";
import WritePost from "./routes/write_post";
import EditPost from "./routes/edit_post";
import PostDetail from "./routes/post_detail";
import Category from "./routes/category";
import About from "./routes/about";

import PageNotFound from "./components/PageNotFound";


export default (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/signup" component={Signup} />
        <Route path="/post/write" component={WritePost} />
        <Route path="/post/:id/edit" component={EditPost} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/category/:id/write" component={WritePost} />
        <Route path="/category/:id" component={Category} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
    </Switch>
);
