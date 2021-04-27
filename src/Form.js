import React from 'react';
import Nav from './Nav';
import './Form.css';
import ParticleBackground from './ParticleBackground.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Form() {

    const classes = useStyles();
    return (
        <div className="form">
            <Nav />
            <div className="form_section">
                <div className="form_block"></div>

                <div className="form_info">
                    <h2 style={{ position: 'relative', top: 40 }}>Register</h2>
                    <form style={{ position: 'relative', top: 50 }} className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
                        <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" variant="outlined" />
                        <input type="submit" value="Submit" className="form_sub" />

                        {/* <div className="form_element">
                            <label>Name</label>
                            <input type="text" name="name" className="form_input" />
                        </div><div className="form_element">
                            <label>E-mail</label>
                            <input type="text" name="email" className="form_input" />
                        </div>
                        <div className="form_element">
                            <label>Password</label>
                            <input type="password" name="password" className="form_input" />
                        </div>
                        <div className="form_element">
                            <label>Confirm password</label>
                            <input type="password" name="password" className="form_input" />
                            <input className="form_sub" type="submit" value="Register" />
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
