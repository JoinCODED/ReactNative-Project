import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left
} from "native-base";

// Style
import styles from "./styles";

class CoffeeList extends Component {
  renderItem(data) {
    return (
      <ImageBackground
        source={{ uri: data.background }}
        style={styles.background}
        key={data.id}
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
    );
  }
  render() {
    const { coffeeshops } = this.props.coffee;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(data => this.renderItem(data));
    }
    return <List>{ListItems}</List>;
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

export default connect(
  mapStateToProps,
  {}
)(CoffeeList);
