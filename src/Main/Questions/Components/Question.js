import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import styles from '../../../Styles/Styles';

const Question = props => {
    const { classes, question } = props;
    return (
        <Typography varient="h6" component="p" gutterBottom style={{ wordBreak: 'break-all' }} >
            Q{question.id}. {question.que}
        </Typography>
    )
}

export default withStyles(styles)(Question);