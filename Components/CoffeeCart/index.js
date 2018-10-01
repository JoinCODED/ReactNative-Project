import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  List,
  Button,
  ListItem,
  Icon
} from "native-base";

// List
import list from "../CoffeeList/list";

class CoffeeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          drink: "Coffee",
          option: "Small",
          quantity: 1
        },
        {
          drink: "Lattee",
          option: "Large",
          quantity: 2
        }
      ],
      shop: list[0]
    };
  }

  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Right>
      </ListItem>
    );
  }
  render() {
    return (
      <List>
        {this.state.orders.map((item, index) => this.renderItem(item, index))}

        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
