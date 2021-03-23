import classNames from 'classnames';
import React, { useState } from 'react';

const Button = (props) => {

    const {approval, description, classes, active, onClick, pass} = props;

    const cx = classNames({
        [classes.button]: true,
        [classes.active]: active,
    })

    return (
        <div className={cx} onClick={()=>onClick(pass)}>
            <div><span>{approval}</span></div>
            <div>{description}</div>
        </div>
    );
}

export default Button;
