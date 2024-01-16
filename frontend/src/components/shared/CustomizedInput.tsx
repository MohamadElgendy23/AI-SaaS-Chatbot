import React from 'react';
import { TextField } from '@mui/material';

type Props = {
    name: string;
    type: string;
    label: string;
}

function CustomizedInput(props: Props) {
  return <TextField name={props.name} label={props.label} type={props.type}></TextField>
}

export default CustomizedInput