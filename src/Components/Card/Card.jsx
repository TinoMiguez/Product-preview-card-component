import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, Container } from "@mui/material";
import "./Card.css";
//import '../../Fonts/Montserrat'

export default function ImgMediaCard() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "hsl(30, 38%, 92%)",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            height: "100%",
            marginTop: 10,
            maxWidth: 345,
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            width="1440px"
            image="./src/assets/image-product-mobile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h" component="div">
              PERFUME
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gabrielle Essence <br></br>Eau De Parfum <br></br>
              <br></br>A floral, solar and voluptuous interpretation composed by
              Olivier Polge, Perfumer-Creator for the House of CHANEL. <br></br>
              <br></br>$149.99 $169.99 Challenge by Frontend Mentor. <br></br>
              <br></br>Coded by Constantino Míguez Martel.
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button"
            >
              <Button
                sx={{
                  alignItems: "center",
                  fontSize: "small",
                  fontFamily: "Montserrat sans-serif",
                  backgroundColor: "darkgreen",
                }}
              >
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
