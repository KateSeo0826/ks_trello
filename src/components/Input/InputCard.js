import React from 'react'
import { Paper, InputBase, IconButton, Button } from '@material-ui/core';
import ClearIcon from'@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card:{
     margin: theme.spacing(0, 1, 1, 1), 
     paddingBottom: theme.spacing(4),
     padding: theme.spacing(1,1,1,0),
    },
    input:{
        margin: theme.spacing(1),
    },
    btnConfirm:{
        background: 'greenyello',
        color: '#fff',
        "&:hover":{
            background: fade('#5AAC44', 0.25),
        }
    },
    confirm:{
        margin: theme.spacing(0,1,1,1)
    }
}))
export default function InputCard({setOpen}) {
    const classes = useStyle();
    return (
        <div>
        <div className={classes.card}>
            <Paper className={classes.card}>
                <InputBase 
                    multiline 
                    onBlur ={()=>setOpen(false)}
                    fullWidth 
                    inputProps ={{
                    classes: classes.input,

                }} 
                placeholder='Enter a title of this card'
                />
            </Paper>
        </div>
        <div>
            <Button className={classes.btnConfirm} onClick={()=>setOpen(false)}>Add Card</Button>
            <IconButton onClick={()=>setOpen(false)}>
                <ClearIcon />
            </IconButton>
        </div>
        </div>

    )
}
