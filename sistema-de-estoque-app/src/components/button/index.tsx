import styles from "./styles.module.css";

import * as React from 'react';
import Button from '@mui/material/Button';

export default function MaterialButton(props: any) {
    let text = props.text;
    let className = props.className;

    return (
        <Button onClick={props.onClick}  variant="contained">{text}</Button>
    );
}