import React, { useState, useContext } from 'react'
import { Paper, InputBase, IconButton, Button } from '@material-ui/core';
import ClearIcon from'@material-ui/icons/Clear';
import { makeStyles, fade } from '@material-ui/core/styles';
import storeApi from "../../Utils/storeApi"
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
export default function InputCard({setOpen, listId}) {
    const classes = useStyle();
    const { addMoreCard } = useContext(storeApi);
    const [cardTitle, setCardTitle] = useState('');

    const handleOnChange = (e)=>{
        setCardTitle(e.target.value);
    };
    const handleBtnConfirm = () => {
        addMoreCard(cardTitle, listId);
        setOpen(false);
    }

    const handleBlur = () =>{
        setOpen(false);
        setCardTitle('');
    }
    return (
        <div>
        <div className={classes.card}>
            <Paper className={classes.card}>
                <InputBase
                    onChange={handleOnChange} 
                    multiline 
                    onBlur ={handleBlur}
                    fullWidth 
                    inputProps ={{
                    classes: classes.input,
                }} 
                value ={cardTitle}
                placeholder='Enter a title of this card..'
                />
            </Paper>
        </div>
        <div>
            <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>Add Card</Button>
            <IconButton onClick={()=>setOpen(false)}>
                <ClearIcon />
            </IconButton>
        </div>
        </div>

    )
}
