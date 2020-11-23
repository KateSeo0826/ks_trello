import React, { useState } from 'react'
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
const useStyle = makeStyles((theme) => ({
    editableTitleContainer:{
        marginLeft: theme.spacing(1),
        display: 'flex',
    },
    editableTitle:{
      flexGrow: 1,
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    input:{
        margin: theme.spacing(1),
        fontSize: '1.2rem',
        fontWeight: 'bold',
        "&:focus":{
            background: '#ddd',
        }
    }
}))
export default function Title() {
      const [open,setOpen] = useState(false);
      const classes = useStyle();
    return (
        <div>
        {open ? (
            <div>
                <InputBase
                    autoFocus 
                    value= "Todo"
                    inputProps ={{
                        className: classes.input,
                    }}
                fullWidth
                onBlur = {() => setOpen(!open)}
                />
            </div>

        ) : (
            <div className= {classes.editableTitleContainer}>
                <Typography onClick={() =>setOpen(!open)} 
                className={classes.editableTitle}>Todo
                </Typography>
                <MoreHorizIcon />
            </div>
        )}
        </div>
    );
}
