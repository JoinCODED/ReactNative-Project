import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item
} from "native-base";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <List>
        <ListItem style={{ borderBottomWidth: 0 }}>
          <Body>
            <Form>
              <Body>
                <Label style={{ color: "white" }}>Username</Label>
              </Body>
              <Item
                rounded
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 10
                }}
              >
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoFocus
                  value={username}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Body>
                <Label style={{ color: "white" }}>Password</Label>
              </Body>
              <Item rounded style={{ backgroundColor: "white", marginTop: 10 }}>
                <Input
                  autoCorrect={false}
                  secureTextEntry
                  autoCapitalize="none"
                  value={password}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
            </Form>
          </Body>
        </ListItem>
        <Button full success>
          <Text>Login</Text>
        </Button>
        <Button full warning>
          <Text>Register</Text>
        </Button>
      </List>
    );
  }
}

export default Login;
