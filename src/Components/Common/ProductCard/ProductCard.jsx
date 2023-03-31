import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ elemento, deleteProductById }) => {
  const navigate = useNavigate();
  return (
    // <div style={{ border: "2px solid black" }}>
    //   <h2>{elemento.name}</h2>
    //   <h3>{elemento.price}</h3>
    //   <img
    //     src={elemento.img}
    //     alt=""
    //     style={{ width: "200px", height: "200px" }}
    //   />
    //   <button onClick={() => deleteProductById(elemento.id)}>
    //     Eliminar producto
    //   </button>

    //   <Link to={`/productDetail/${elemento.id}`}>
    //     <button>Ver Detalle</button>
    //   </Link>
    // </div>
    <Card sx={{ width: 345, height: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={elemento.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
         {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
         {elemento.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => deleteProductById(elemento.id)}
        >
          eliminar
        </Button>
        <Button
          onClick={() => navigate(`/productDetail/${elemento.id}`)}
          size="small"
          variant="contained"
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
