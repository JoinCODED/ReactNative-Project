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
  Picker
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

  componentDidUpdate(prevProps) {
    const { coffeeshop, loading, coffeeshops } = this.props.coffee;

    if (!loading) {
      if (!coffeeshop && coffeeshops) {
        this.props.getCoffeeShopByID(1, coffeeshops);
      }
    }
  }
  render() {
    const { coffeeshop } = this.props.coffee;
    if (!coffeeshop) return <List />;
    return (
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
        <Button full danger>
          <Text>Add</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

const mapActionsToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops()),

  getCoffeeShopByID: (id, coffeeshops) =>
    dispatch(getCoffeeShopByID(id, coffeeshops))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CoffeeDetail);
