import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import MyHeader from "../MyHeader";
import Login from "../Login";

// Background Image
import background from "../../assets/images/10.jpg";

// Style
import styles from "./styles";

class HomePage extends Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.overlay} />
        <Container style={styles.transparent}>
          <MyHeader />
          <Content>
            <CoffeeList />
          </Content>
          <Footer style={styles.transparent}>
            <FooterTab>
              <Button full>
                <Text style={styles.footerbutton}>
                  <Icon name="exit" style={styles.footericon} /> Cart
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}

export default HomePage;
