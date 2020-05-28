import React from "react"
import { AppBar, Toolbar, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav_left: {
        background: 'white',
        position: "absolute",
        left: 0,
        top: 0,
        width: "40%",
        height: "7.8vh",
    },
    logo: {
        paddingLeft: theme.spacing(3),
        width: 40,
        height: 40,
    },
    title: {
        flexGrow: 1,
    },
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.app_bar}>
                <div className={classes.nav_left}>
                </div>
                <Toolbar >
                </Toolbar>
            </AppBar>
            <div style={{height: '92.2vh'}}>
                <iframe style={{background: '#000000'}} frameBorder="0" width="100%" height="100%" src="https://miaomiaoxuan.cn/3dRender/"></iframe>
            </div>
        </div>
    );
}

export default Layout

