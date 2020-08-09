import React, { useState } from 'react';
import trimStart from 'lodash/trimStart';
import isEmpty from 'lodash/isEmpty';
import { Dialog, Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { Notify } from '../../Util/NotificationProvider';
import users from '../../Store/data/users';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const SignUp = props => {
    const { classes, open, handleClose } = props;
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name } = event.target;
        let value = trimStart(event.target.value);
        setFormData(prevFormData => {
            const newFormData = { ...prevFormData, [name]: value };
            const error = validateError(newFormData);
            setErrors(prevErrors => ({ ...prevErrors, [name]: error[name] }));
            return newFormData;
        });
    }

    const handleLogin = () => {
        setFormData(prevFormData => {
            const errors = validateError(prevFormData);
            if (isEmpty(errors)) {
                const isAuthorized = checkAuthorization(prevFormData);
                if (isAuthorized) Notify('isAuthorized', 'success');
                else Notify('isNotAuthorized', 'error');
            }
            else setErrors(errors);

            return prevFormData;
        })
    }

    const validateError = ({ username, password }) => {
        const errors = {};
        if (!username) errors.username = 'Please specify Username';
        if (!password) errors.password = 'Please specify Password';
        return errors;
    }

    const checkAuthorization = ({ username, password }) => {
        const user = users.find(user => user.username === username);
        return user?.password === password;
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={4} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                name="username"
                                label="Username"
                                type="text"
                                fullWidth
                                autoFocus
                                required
                                value={formData.username || ""}
                                onChange={handleChange}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                required
                                value={formData.password || ""}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                        </Grid>
                    </Grid>
                    {/* <Grid container alignItems="center" justify="space-between">
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox
                                        color="primary"
                                    />
                                } label="Remember me" />
                            </Grid>
                            <Grid item>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                            </Grid>
                        </Grid> */}
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ textTransform: "none" }}
                            onClick={handleLogin}
                        >
                            sign up
                        </Button>
                    </Grid>
                </div>
            </Paper>
        </Dialog>
    )
}

export default withStyles(styles)(SignUp);