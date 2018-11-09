import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './Copy.scss';

const CopyBody = ({ children, ...props }) => <Typography variant="body1" {...props}>{children}</Typography>
const CopyCTA = ({
    children,
    main,
    label ,
    color="primary",
    variant="contained",
    className="",
    ...props
}) => (
    <Button
        className={`Copy__button ${className}`}
        variant={variant}
        color={color}
        size={main ? "large" : "medium"}>
        {label}
    </Button>
);

const Copy = ({ title, body, action, main, classes={} }) => {
    return (
        <div className={`Copy ${classes && classes.root ? classes.root : ""}`}>
            <Typography variant={main ? "h1" : "h2"}>{title}</Typography>
            <Markdown
                source={body}
                renderers={{
                    paragraph: Typography
                }}
                />
            { action ? <CopyCTA main={main} className={classes.action} {...action} /> : null }
        </div>
    )
}

export default Copy;
