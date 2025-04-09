import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const ImgMediaCardm = ({title,image , id }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 , cursor : 'pointer'}} onClick={()=> navigate(`/products/${id}`)}> 
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-between px-4 mb-2">
        <Button size="small" className="border" onClick={()=> navigate(`/products/${id}`)}>See More</Button>
        <Button size="small" className="border">BUy NOw</Button>
      </CardActions>
    </Card>
  );
}
export default ImgMediaCardm;