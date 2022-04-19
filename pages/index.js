import React from 'react';
import styles from './styles.module.scss';

import { Container, Grid, Box } from '@mui/material';

import Drawner from '../components/Drawner';

import english from '../public/images/english.png';
import southCorea from '../public/images/south-korea.png';
import largueNetwork from '../public/images/large-with-network.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    border: '1px solid red',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <div className={styles.background}></div>
      <Grid container sx={{ marginY: 2 }} justifyContent="space-between">
        <Grid item sx={{ display: 'flex' }}>
          <Drawner />
          {[
            'Network',
            'News',
            'Team',
            'Roadmap',
            'Docs',
            'Wallet',
            'Explorer',
          ].map((text, index) => (
            <Box key={index} className={classes.box}>
              <div>{text}</div>
            </Box>
          ))}
        </Grid>
        <Grid item></Grid>

        <Grid item>
          <img src={english.src} width="18px" />
          <img src={southCorea.src} width="18px" />
        </Grid>
      </Grid>

      <Grid container sx={{ paddingY: 4 }}>
        <Grid item xs={10} md={5}>
          <img width="100%" src={largueNetwork.src} />
          <p>
            Next generation video and entertainment blockchain powered by you.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
