import React, { Component } from "react";

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
  Picker
} from "native-base";

// List
import list from "../CoffeeList/list";

// Style
import styles from "./styles";

class CoffeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: list[0],
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
  render() {
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {this.state.detail.name + "\n"}
              <Text note>{this.state.detail.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={this.state.detail.image} />
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
        <Button full danger>
          <Text>Add</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeDetail;
