import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { connect } from "react-redux";

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

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

class HomePage extends Component {
  componentDidMount() {
    const { coffeeshops } = this.props.coffee;
    if (!coffeeshops) this.props.getCoffeeShops();
  }
  render() {
    return (
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.overlay} />
        <Container style={styles.transparent}>
          <MyHeader />
          <Content>
            <CoffeeList />
          </Content>
          <Footer transparent style={styles.transparent}>
            <FooterTab transparent style={styles.transparent}>
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
const mapStateToProps = state => ({
  coffee: state.coffee
});

const mapActionsToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePage);
