import { Button, styled } from "@mui/material";
import styles from "./styles.module.css";

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'var(--terciary-color)',
    borderColor: 'var()',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'var(--quaternary-color)',
      borderColor: 'var(--quintenary-color)',
      color: 'var(--terciary-color)',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'var(--quaternary-color)',
      borderColor: 'var(--quintenary-color)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem var(--terciary-color)',
    },
  });

export default function CloseButton(props: any){
    return(
        <BootstrapButton onClick={props.action} variant="contained">X</BootstrapButton>
    );
}