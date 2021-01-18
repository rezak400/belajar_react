import React from 'react'
import { Link } from '../../components'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
    //   maxWidth: 345,
      flexGrow: 1,

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
  }));
  


const CreateBlog = (props) => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    console.log(props)
    const history = useHistory();
    return (
        <div>
            <h1>helo dari CreateBlog</h1>
            <Link title="ke detail" onClick={() => history.push("/detail-blog")}/>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.control}>
                    <Grid container>
                        <Grid item>
                        <FormLabel>spacing</FormLabel>
                        <RadioGroup
                            name="spacing"
                            aria-label="spacing"
                            value={spacing.toString()}
                            onChange={handleChange}
                            row
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <FormControlLabel
                                key={value}
                                value={value.toString()}
                                control={<Radio />}
                                label={value.toString()}
                            />
                            ))}
                        </RadioGroup>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateBlog
