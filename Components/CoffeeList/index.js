import React, { Component } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Content
} from "native-base";

// Style
import styles from "./styles";
import { getCoffeeShopByID } from "../../store/actions/coffeeActions";

class CoffeeList extends Component {
  Pressed(data) {
    this.props.getCoffeeShopByID(data.id,this.props.coffee.coffeeshops)
    this.props.navigation.navigate("CoffeeDetail");
  }
  renderItem(data) {
    return (
      <TouchableOpacity key={data.id} onPress={() => this.Pressed(data)}>
        <ImageBackground
          source={{ uri: data.background }}
          style={styles.background}
        >
          <View style={styles.overlay} />

          <ListItem style={styles.transparent}>
            <Card style={styles.transparent}>
              <CardItem style={styles.transparent}>
                <Left>
                  <Thumbnail
                    bordered
                    source={{ uri: data.img }}
                    style={styles.thumbnail}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                  <Text note style={styles.text}>
                    {data.distance}
                  </Text>
                </Left>
              </CardItem>
            </Card>
          </ListItem>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  render() {
    const { coffeeshops } = this.props.coffee;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(data => this.renderItem(data));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

export default connect(
  mapStateToProps,
  {
    getCoffeeShopByID
  }
)(CoffeeList);
