import React from "react"
import { AppBar, Toolbar, makeStyles, MenuList, MenuItem } from "@material-ui/core"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Graphics from "../projects/graphic"
import StyledListItem from "./menu"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    app_bar: {
        height: "7.8vh",
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
    tool_bar: {
        display: "inline-flex",
        justifyContent: "flex-end",
    },
    menu: {
        right: theme.spacing(3),

    },
    title: {
        flexGrow: 1,
    },
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static" className={classes.app_bar}>
                    <div className={classes.nav_left}>
                    </div>
                    <Toolbar className={classes.tool_bar}>
                        <MenuList className={classes.menu}>
                            <StyledListItem />
                        </MenuList>
                    </Toolbar>
                </AppBar>
                <div style={{height: '92.2vh'}}>
                    <Switch>
                        <Route path="/my-project/graphics" component={Graphics}/>
                        <Route path="*" component={Graphics}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Layout

