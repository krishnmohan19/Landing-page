import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPoll } from "./action";
import Polls from "./components/landingPage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`http://13.235.90.125:2112/api/v1/poll/intern`).then((res) => {
      console.log("jkd");
      console.log(res);
      dispatch(setPoll(res.data));
    });
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Polls />
    </div>
  );
}

export default App;
