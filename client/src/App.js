import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import  {getPosts} from './actions/posts';
import {Container, AppBar ,Typography,Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    },[]);
    return (
        <Container maxwidth ='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" color="inherit">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Container>
                <Grow in>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Grow>
            </Container>
        </Container>
    );
}
    export default App;

