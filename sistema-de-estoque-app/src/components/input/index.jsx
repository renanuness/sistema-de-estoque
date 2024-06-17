import './styles.css';
import React from "react";

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';

export function MyInput(props) {
    const type = props.type;
    const placeholder = props.placeholder;
    const id = props.id;
    const className = props.className;
    const callbackFn = props.onChangeFn;

    function updateValue(e) {
        e.preventDefault();
        callbackFn(e.target.value);
    }
    return (
        <input className={className} placeholder={placeholder} type={type} id={id} onChange={updateValue}></input>
    )
}

export function MaterialInput(props) {

    let type = props.type;

    switch (type) {
        case "text":
            return Text(props);
        case "password":
            return Password(props);
        case "money":
            return Money(props);
    }
}
function Text(props) {
    return <TextField onChange={(e) => props.onChange(e.target.value)} label={props.label} id="outlined-size-normal" defaultValue={props.defaultValue} />;
}

function Password(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //TODO: Ajustar o tamanho do input
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" size='normal'>Password</InputLabel>
            <OutlinedInput
                onChange={(e) => props?.onChange(e.target.value)}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>

    );
}

//TODO: Só aceitar numero e . ,
function Money(props) {
    return (
        <FormControl>
            <InputLabel htmlFor="outlined-adornment-amount">{props.label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label={props.label}
            />
        </FormControl>
    );
}