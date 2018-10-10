import React, { Component } from "react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

// Style
import styles from "./styles";

const MyHeader = ({ navigation }) => {
  return (
    <Header style={{ backgroundColor: "transparent" }}>
      <Left>
        <Button transparent onPress={() => navigation.pop()}>
          <Icon style={styles.backicon} name="arrow-back" />
        </Button>
      </Left>

      <Body>
        <Title style={styles.header}>
          <Text style={{ color: "white" }}>Coffe App</Text>
        </Title>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
          <Text style={styles.text}>
            3 <Icon type="FontAwesome" name="coffee" style={styles.icon} />
          </Text>
        </Button>
      </Right>
    </Header>
  );
};

export default MyHeader;
