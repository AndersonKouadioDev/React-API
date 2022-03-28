import { red,blue,green,orange,yellow } from '@mui/material/colors';
// Random Color
export    function randomColor(){
    const colors=[red,blue,green,orange,yellow];
    const rang=[200,500,700,900];
     const idColor =  Math.round( Math.random()*(colors.length-1))
     const idRang =  Math.round( Math.random()*(rang.length-1))
    const color = colors[idColor][rang[idRang]]
    return color;
  }
  // End.