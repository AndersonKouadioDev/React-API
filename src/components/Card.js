import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard({item,color}) {


    // State
  const [expanded, setExpanded] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isLoved, setIsLoved] = React.useState(false);

  const handleExpandClick = () => {
    isVisible?setExpanded(!expanded):setExpanded(false);

  };
const handleVisibleClick = e=>{
    setIsVisible(!isVisible);
}
const handleLovedClick = e=>{
    setIsLoved(!isLoved);
}
// End.

  return (
    <Card sx={{ maxWidth: 345 }} elevation={6}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor:color, fontSize:'3ch',fontFamily:"Alina" }} aria-label="recipe">
           {item.username[0]}
          </Avatar>
        }

        title={item.username}
        subheader={item.email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLovedClick}>
          <FavoriteIcon  sx={{
               color:  isLoved? "#F11":"initial",
        }}/>
        </IconButton>
        <IconButton aria-label="Visibility" onClick={handleVisibleClick}>
            {
                isVisible?  <VisibilityIcon  sx={{color:"green"}}/>: <VisibilityOffIcon sx={{color:"#F11"}} />
            }
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{bgcolor:"#1d1d1d", color:'white',}}>
          <Typography sx={{fontSize:'2ch',fontFamily:"roboto"}}><span style={{fontWeight:500,color:"orange"}} >Nom et Prénom :</span> {item.name} </Typography>
          <Typography sx={{fontSize:'2ch',fontFamily:"roboto"}}><span style={{fontWeight:500,color:"orange"}}>Téléphone :</span>   {item.phone} </Typography>
          <Typography sx={{fontSize:'2ch',fontFamily:"roboto"}}><span style={{fontWeight:500,color:"orange"}}>Ville : </span>  {item.address.city} </Typography>
          <Typography sx={{fontSize:'2ch',fontFamily:"roboto"}}><span style={{fontWeight:500,color:"orange"}}>Site Web : </span>  {item.website} </Typography>
          <Typography sx={{fontSize:'2ch',fontFamily:"roboto"}}><span style={{fontWeight:500,color:"orange"}}>Compangnie : </span>  {item.company.name} </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
