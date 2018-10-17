import React, { Component } from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";

// NativeBase Components
import { Container, Header } from "native-base";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import MyHeader from "../MyHeader";
import Login from "../Login";

// Style
import styles from "./styles";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

const Nav = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      header: MyHeader
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

class HomePage extends Component {
  componentDidMount() {
    const { coffeeshops } = this.props.coffee;
    if (!coffeeshops) this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <Nav />
      </Container>
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
