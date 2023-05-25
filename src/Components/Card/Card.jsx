import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import "./Card.css";
import '../../Fonts/Montserrat-Black.ttf';
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
              ><svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg> 
                <Typography sx={{ fontFamily: "Montserrat", fontSize: "small", marginLeft:1}}>Add to Cart</Typography>
              </Button>
          </CardActions>
        </Card>
        
      </Container>
      <Typography sx={{fontSize:10, color: "grey", justifyItems:"center"}}>
              Challenge by Frontend Mentor.
              <br></br>Coded by Constantino Míguez Martel.
                </Typography>
    </>
  );
}
