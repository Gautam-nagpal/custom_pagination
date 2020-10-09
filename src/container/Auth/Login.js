import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Grid,
    Typography,
    InputAdornment,
    IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';

import { InputField } from '../../components';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { useHistory } from 'react-router';

const initialData = { email: "", password: "" }

function Login() {
    const classes = useStyles();

    const [data, setData] = useState({ ...initialData })
    const [errors, setErrors] = useState({})
    const [showpass, setShowPass] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory()


    function onChange(name, value) {
        setData({
            ...data,
            [name]: value
        })
    }

    function toggle() {
        setShowPass(!showpass)
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(actions.login({ name: "gautam" }))
        history.push("/")
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} onSubmit={(e) => onSubmit(e)}>

                        <InputField
                            type="email"
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                            errors={errors.email}
                            margin="normal"
                        />
                        <InputField
                            margin="normal"
                            type={showpass ? "text" : "password"}
                            label="Password"
                            name="password"
                            value={data.password}
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                            errors={errors.password}

                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggle}
                                    >
                                        {showpass ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default Login;