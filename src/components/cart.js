import React from "react";
import { Icon, Label, Menu } from "semantic-ui-react";

const Cart = () => (
  <Menu compact float="right">
    <Menu.Item as="a">
      <Icon  name="cart" /> Pannier
      <Label circular color="orange" floating>
        22
      </Label>
    </Menu.Item>
  </Menu>
);

export default Cart;
