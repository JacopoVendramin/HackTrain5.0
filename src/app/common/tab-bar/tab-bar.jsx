import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';



import './tab-bar.scss'

// ? can avoid using return and the { } when is state less only
const TabBar = ({ focusedTab, onTabChange }) => (
    <Tabs
        className='tab-bar'
        value={focusedTab}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
    >
        <Tab icon={<PhoneIcon />} />
        <Tab icon={<FavoriteIcon />} />
        <Tab icon={<PersonPinIcon />} />
    </Tabs>

)
export default TabBar;
