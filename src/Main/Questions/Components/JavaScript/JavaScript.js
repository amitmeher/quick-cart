import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Question from '../Question';
import JavaScriptQuestions from '../../../../Store/data/JavaScriptQuestions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../../../../Styles/Styles';

const JavaScript = props => {
    const { classes } = props;
    return (
        <div className={classes.fullOuter}>
            <Grid container direction='row' justify='center' alignItems='center' spacing={24} >
                <Grid item md={8} sm={12} xs={12}>
                    <Paper className={classes.drawerViewBody}>
                        kmlk
                    </Paper>
                    <Paper className={classes.drawerViewBody}>
                        {JavaScriptQuestions.map((question, idx) => <Question question={{ id: idx + 1, ...question }} />)}
                    </Paper>
                    <Paper className={classes.drawerViewBody}>
                        mop
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(JavaScript);