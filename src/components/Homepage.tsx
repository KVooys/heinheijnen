import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MainTitleBar from './MainTitleBar';
import FeaturedPost from './FeaturedPost';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3),
    textAlign: "center",
    fontSize: "2em",
    fontWeight: 600,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainTitleBar = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Title */}
      <Typography          
        component="h2"
        variant="h5"
        color="inherit"
        noWrap
        className={classes.title}>
          Hein Heijnen - homepage van de auteur
        </Typography>
      <Container>
        <main>
          <MainTitleBar post={mainTitleBar} />
          <Grid container spacing={4} className={classes.mainGrid}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
