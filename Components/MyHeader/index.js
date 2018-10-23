import React from "react";
import { connect } from "react-redux";

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
import Counter from "./Counter";

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
          <Counter />
        </Button>
      </Right>
    </Header>
  );
};

export default MyHeader;
