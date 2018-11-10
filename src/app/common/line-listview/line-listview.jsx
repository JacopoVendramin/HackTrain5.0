import React from 'react';
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';

import './line-listview.scss'

const LineListviewItem = ({name,status}) => (
    <li className='lineListView__item'>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body2'>{status}</Typography>
    </li>
)

const LineListview = ({items}) => (
    <ul className='lineListView'>
        {items.map((item) => <LineListviewItem name= {item.name} status ={item.status}/>)}
    </ul>
)

export default LineListview
