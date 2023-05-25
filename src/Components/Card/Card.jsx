import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "./Card.css";
import '../../Fonts/Montserrat-Black.ttf'
export default function ImgMediaCard() {
  return (
    <>
      <Container
        sx={{
          justifyContent: "center",
          display: "flex",
          marginTop: 5
        }}
      >

        <Card
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: '0 auto',
            maxWidth: 345,
            borderRadius: 2,
            justifyContent: "center"
          }}
        >
           <CardMedia
            component="img"
            width="1440px"
            image="./src/assets/image-product-mobile.jpg"
          />
          <CardContent >
            <Typography gutterBottom component="div" fontFamily={'Montserrat'} color={"gray"} letterSpacing={5}>
              PERFUME
            </Typography>
            <Typography variant color="black" fontFamily={'Fraunces'} fontWeight={600} fontSize={30}>
              Gabrielle Essence <br></br>Eau De Parfum <br></br>
              </Typography>
              <Typography color="GrayText" fontFamily={'Arial'} fontSize={14}> A floral, solar and voluptuous interpretation composed by
              Olivier Polge, Perfumer-Creator for the House of CHANEL. <br></br>
              </Typography>
              <br></br>
              <Typography color="darkgreen" fontFamily={'Fraunces'} fontWeight={600} fontSize={30} position= "absolute">$149.99</Typography>
              <Typography sx={{color: "grey", textDecorationLine: "line-through", position: "relative", marginTop: 1.5, marginLeft: "150px", marginBottom: 2}}>$169.99</Typography>
              <Typography sx={{fontSize:10, color: "grey"}}>
              Challenge by Frontend Mentor.
              <br></br>Coded by Constantino Míguez Martel.
                </Typography>
          </CardContent>
          <CardActions>
              <Button
                sx={{
                  width: 300,
                  fontSize: "small",
                  fontFamily: "montserrat",
                  backgroundColor: "darkgreen",
                  color: "white"
                }}
              >
                Add to Cart
              </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
