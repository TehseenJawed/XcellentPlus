import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../../Pages/home/Home'
import WebsiteFlow from '../../components/websiteFlow/WebsiteFlow'
function Routes() {
    return (
        <Switch>

            <Route to="/login">
                <WebsiteFlow>
                   <Home />
                </WebsiteFlow>
            </Route>


        </Switch>
    )
}

export default Routes
