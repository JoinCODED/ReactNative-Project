import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// Data
import list from "./list";

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
        source={data.background}
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
                  source={data.image}
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
    const ListItems = list.map(data => this.renderItem(data));
    return <List>{ListItems}</List>;
  }
}

export default CoffeeList;
