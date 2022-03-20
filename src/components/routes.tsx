import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Profile from "./profile";
import Gallery from './gallery'
import Home from "./home";
import ClientProfile from "./clientprofile";
import Messages from "./messages";
import Notifications from "./notifications";
import CreateJob from "./createjob";

const Routes = () =>{
    return(
        <Switch>
            <Route path="/profile/:id">
                <Profile />
            </Route>
            <Route exact path="/create">
                <CreateJob />
            </Route>
            <Route exact path="/gallery">
                <Gallery />
            </Route>
            <Route exact path="/messages">
                <Messages />
            </Route>
            <Route exact path="/notifications">
                <Notifications />
            </Route>
            <Route exact path="/me">
                <ClientProfile/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Redirect exact to="/"/>
        </Switch>
    )
}

export default Routes;
