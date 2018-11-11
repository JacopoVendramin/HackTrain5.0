import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TrainIcon from '@material-ui/icons/TrainOutlined';
import CloseIcon from '@material-ui/icons/Close';

import TabBar from '../common/tab-bar/tab-bar'
import LineListview from '../common/line-listview/line-listview'
import './Dashboard.scss';

const DashboardComponent = ({ focusedTab, onTabChange }) => {
    return (
        <div className="Dashboard">
            <Grid container style={{ height: '100%', overflowY:'auto' }}>
                <Grid item xs={8} className="Dashboard__left">
                    <div className="Dashboard__left__header">
                        <header>
                            <Typography variant="h2">London line 2<button><CloseIcon/></button></Typography>
                        </header>
                    </div>
                    <LineListview items={[
                        { name: 'London', status: 'Warning', dwellDelay: 5 },
                        { name: 'London', status: 'Blocked', dwellDelay: 60 },
                        { name: 'London', status: 'Warning', dwellDelay: 20 },
                        { name: 'London', status: 'Safe', dwellDelay: 2 },
                        { name: 'London', status: 'Warning', dwellDelay: 5 },
                        { name: 'London', status: 'Blocked', dwellDelay: 60 },
                        { name: 'London', status: 'Warning', dwellDelay: 20 },
                        { name: 'London', status: 'Safe', dwellDelay: 2 },
                        { name: 'London', status: 'Warning', dwellDelay: 5 },
                        { name: 'London', status: 'Blocked', dwellDelay: 60 },
                        { name: 'London', status: 'Warning', dwellDelay: 20 },
                        { name: 'London', status: 'Safe', dwellDelay: 2 },
                    ]} />
                </Grid>
                <Grid item xs={4} >
                    <TabBar onTabChange={onTabChange} focusedTab={focusedTab} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardComponent;
