import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card'
import {randomColor} from '../librairies/randomColor'

export default function WovenImageList({data}) {
  return (
    <Grid container spacing={3}  >
      {data.map((item,key) => (
          <Grid item xs={12}  sm={6}  md={4}  lg={4} xl={5}>
        <Card key={key} item={item} color={randomColor()}/>
        </Grid>
      ))}
    </Grid>
  );
}
