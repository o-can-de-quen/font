import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";
import Card from "../components/Card/Card";
import { CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, Tooltip, Typography } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* <Header
        color='transparent'
        routes={dashboardRoutes}
        brand='O can de quen'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      /> */}
      <Parallax filter responsive image='/img/landing-bg.jpg' style={{ height: "100vh" }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} style={{ display: "flex", alignItems: "center" }}>
              <img style={{width:"100%", height:"autoo"}} src='/img/logogrande.png' alt='Logo' />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{ padding: 5 }}>
                <CardActionArea>
                  <CardMedia component='img' height='300' image='/img/fondo.jpg' alt='green iguana' />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Peluquería de mascotas
                    </Typography>
                    <Typography variant='body1' color='textSecondary'>
                      Especialistas en el cuidado de tus mascotas.
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                      <Typography variant='body1' color='textSecondary'>
                        Siguenos:
                      </Typography>
                      <Tooltip id='instagram-twitter' title='Siguenos en Tiktok' placement={"top"} classes={{ tooltip: classes.tooltip }}>
                        <Button href='https://www.tiktok.com/@o.can.de.quen' target='_blank' color='transparent' className={classes.navLink}>
                          <i className={classes.socialIcons + " fab fa-tiktok"} />
                        </Button>
                      </Tooltip>
                      <Tooltip id='instagram-facebook' title='Siguenos en facebook' placement={"top"} classes={{ tooltip: classes.tooltip }}>
                        <Button color='transparent' href='https://www.facebook.com/profile.php?id=100087048889549' target='_blank' className={classes.navLink}>
                          <i className={classes.socialIcons + " fab fa-facebook"} />
                        </Button>
                      </Tooltip>

                      <Tooltip id='instagram-tooltip' title='Siguenos en instagram' placement={"top"} classes={{ tooltip: classes.tooltip }}>
                        <Button color='transparent' href='https://www.instagram.com/o.can.de.quen' target='_blank' className={classes.navLink}>
                          <i className={classes.socialIcons + " fab fa-instagram"} />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ display: "flex", justifyContent: "center" }}>
                  <Button size='lg' color='warning' href="tel:+34613651290">
                    <Typography variant='h6' style={{ color: "white" }}>
                      Llamanos: 613 651 290
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}
