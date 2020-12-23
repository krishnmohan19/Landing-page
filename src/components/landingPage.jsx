import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "95vh",
    paddingRight: "3.5%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Polls() {
  const classes = useStyles();
  const poll = useSelector((state) => state.polls);
  console.log({ poll });
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ margin: "10px" }}>
        <Grid item xs={12}>
          <Paper
            className={classes.paper}
            style={{ height: "80%", backgroundColor: "#ffd66b" }}
          >
            <div>
              {poll !== null && (
                <>
                  <h1>{poll.payload[0].question}?</h1>
                  <h1>{poll.payload[0].question_hindi}?</h1>
                </>
              )}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#c9cbff" }}
          >
            {poll !== null && (
              <>
                <h1 style={{ display: "inline-block" }}>
                  {poll.payload[1].question}
                </h1>
                <h1 style={{ display: "inline-block" }}>
                  {poll.payload[1].question_hindi}
                </h1>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#c9cbff" }}
          >
            {poll !== null && (
              <>
                <h1>{poll.payload[2].question}</h1>
                <h1>{poll.payload[2].question_hindi}</h1>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
