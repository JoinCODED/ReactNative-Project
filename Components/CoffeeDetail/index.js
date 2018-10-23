import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// List
import list from "../CoffeeList/list";

// Style
import styles from "./styles";

// Actions
import {
  getCoffeeShopByID,
  getCoffeeShops
} from "../../store/actions/coffeeActions";
import { addItemToCart } from "../../store/actions/cartActions";

class CoffeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: "Coffee",
      option: "Small"
    };
  }
  changeDrink(value) {
    this.setState({
      drink: value
    });
  }
  changeOption(value) {
    this.setState({
      option: value
    });
  }
  handleAdd() {
    const { drink, option } = this.state;
    const { list } = this.props.cart;
    let item = {
      drink: drink,
      option: option,
      quantity: 1
    };
    this.props.addItemToCart(item, list);
  }

  render() {
    const { coffeeshop } = this.props.coffee;
    if (!coffeeshop) return <List />;
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink.bind(this)}
              >
                <Picker.Item label="Coffee" value="Coffee" />
                <Picker.Item label="Lattee" value="Lattee" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption.bind(this)}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={() => this.handleAdd()}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee,
  cart: state.cart
});

const mapActionsToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops()),

  getCoffeeShopByID: (id, coffeeshops) =>
    dispatch(getCoffeeShopByID(id, coffeeshops)),

  addItemToCart: (item, cart) => dispatch(addItemToCart(item, cart))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CoffeeDetail);
