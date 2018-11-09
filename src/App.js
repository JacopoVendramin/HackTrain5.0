import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';

import Theme from './Theme';
import DashboardLayout from "./app/common/layout/DashboardLayout";
import Dashboard from "./app/dashboard/DashboardContainer";

const App = () => (
    <MuiThemeProvider theme={Theme}>
        <Router>
            <Switch>
                <DashboardLayout exact path="/" component={Dashboard} />
            </Switch>
        </Router>
    </MuiThemeProvider>
);

export default App;
