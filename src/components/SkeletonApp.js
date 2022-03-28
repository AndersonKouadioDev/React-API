import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
export default function SkeletonApp() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Skeleton animation="wave" variant="rectangular"  height={70} />
        </Grid>
        <Grid item xs={2} md={2}>
          <Skeleton animation="wave" variant="rectangular" sx={{ minHeight:500}} />
        </Grid>
        <Grid item xs={10} md={10}>
          <Grid container spacing={3}>
            {Array.from(Array(9).keys()).fill(10).map((key) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={5}>
                <Skeleton animation="wave" key={key} variant="rectangular" height={150} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}
