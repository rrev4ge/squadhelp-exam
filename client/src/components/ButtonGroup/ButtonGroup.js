import React, { useState } from 'react';
import Button from './Button/Button';
import styles from './ButtonGroup.module.sass'


const ButtonGroup = (props) => {

    const [selected, setSelected] = useState(null);

    const buttons = [
        {
            approval: 'Yes',
            description: 'The Domain should exactly match the name',
        },
        {
            approval: 'Yes',
            description: 'But minor variations are allowed (Recommended)',
        },
        {
            approval: 'No',
            description: 'I am only looking for a name, not a Domain',
        },
    ];

    const itemClasses = {
        button: styles.button,
        active: styles.active,
    }

    const handleClick = (key) => {
        setSelected (key);
    };

    return (
    <div className={styles.buttonWrapper}>
        {
        buttons.map( (b, i) =>
            <Button onClick={handleClick} key={i} pass={i} active={i === selected ? 1 : 0} approval={b.approval} description={b.description} 
                classes={itemClasses}
            />
        )
        }
    </div>
    );
}

export default ButtonGroup;

