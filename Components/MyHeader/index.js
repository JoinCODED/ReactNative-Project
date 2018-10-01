import React, { Component } from "react";

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

class MyHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        <Left>
          <Button transparent>
            <Icon style={styles.backicon} name="arrow-back" />
          </Button>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text style={{ color: "white" }}>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Text style={styles.text}>
              3 <Icon type="FontAwesome" name="coffee" style={styles.icon} />
            </Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default MyHeader;
