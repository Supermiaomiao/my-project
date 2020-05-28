import React from "react"
import { ListItem, ListItemText, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyle = makeStyles(theme => ({
    list_item: {
        color: "#FFFFFF",
        height: "100%",
        textAlign: "center",
        verticalAlign: "center",
        width: "154px",
        fontSize: "16px",
        "&:hover": {
           backgroundColor: "#FFFFFF",
           opacity: 0.2,
        }
    },
    link: {
        textDecoration: "none",
    }
}))

const StyledListItem = () => {
    const classes = useStyle()
    return (
        <Link to="/my-project/graphics" className={classes.link}>
            <ListItem className={classes.list_item}>
                <ListItemText style={{zIndex: 10}}>
                    3D Render
                </ListItemText>
            </ListItem>
        </Link>
    )
}

export default StyledListItem
