import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button'
import styles from './style.css';

const ButtonPanel = ({id, btnFirstFunc, btnFirstTitle, btnSecontTitle }) => (
    <div className={styles.wrap_button}>
        <Button
            type='button'
            label={btnFirstTitle}
            onClick={() => btnFirstFunc(id)}
        >
        </Button>
        <Button
            type='button'
            label={btnSecontTitle}
        > </Button>
    </div>
);

ButtonPanel.propTypes = {
    id: PropTypes.number.isRequired,
    btnFirstFunc: PropTypes.func.isRequired,
    btnFirstTitle: PropTypes.string.isRequired,
    btnSecontTitle: PropTypes.string.isRequired,
};

export default ButtonPanel;