import React from 'react';
import PropTypes from 'prop-types';

import './Bullet.scss'

const getBulletStats = (delay) => {
    console.log(delay);
    if (delay <= 2 && delay >= -2) return { scale: 1, color: "safe" };
    if (delay >= 30 || delay <= -30) return { scale: 2.5, color: "danger" };
    return { scale: delay / 30 + 1, color: "warning" };
}

const Bullet = ({ delay }) => {
    let { scale, color } = getBulletStats(delay);
    let diam = parseInt(32 * scale) + "px";

    return(
    <div
        className={`bullet bullet--${color}`}
        style={{width: diam, height: diam}}
        >
        <div className="bullet__core" />
    </div>
)}

export default Bullet
