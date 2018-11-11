import React from 'react';
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';

import Bullet from '../bullet/Bullet';

import './line-listview.scss';

const LineListviewItem = ({name, status, dwellDelay}) => (
    <li className='lineListView__item'>
        <Bullet delay={dwellDelay}/>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body2'><strong>{status}</strong></Typography>
        <Typography variant='body2'><strong>1.2s</strong></Typography>
    </li>
)

const LineListview = ({items}) => (
    <ul className='lineListView'>
        {items.map((item) => <LineListviewItem name= {item.name} status ={item.status} dwellDelay={item.dwellDelay}/>)}
    </ul>
)

export default LineListview
