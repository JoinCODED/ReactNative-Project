import React from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Icon, Text } from "native-base";

// Style
import styles from "./styles";
// Utilities
import { quantityCounter } from "../../utilities/quantityCounter";

class Counter extends React.Component {
  render() {
    return (
      <Text style={styles.text}>
        {this.props.quantity}{" "}
        <Icon type="FontAwesome" name="coffee" style={styles.icon} />
      </Text>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
  quantity: quantityCounter(state.cart.list)
});

export default connect(mapStateToProps)(Counter);
