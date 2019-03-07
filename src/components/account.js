import React from "react";
import {
  Segment,
  Button,
  Divider,
  Form,
  Grid,
  Dropdown
} from "semantic-ui-react";

import '../css/accountStyles.css';

const Account = () => (
  <div>
    <Dropdown className={"account"}
      text="Compte"
      icon="user"
      floating
      labeled
      button
      className="icon"
    >
      <Dropdown.Menu>
        <Segment horizontal="bottom">
          <Button className={"signIn"}>Se-Connecter</Button>
          <Divider horizontal>OU</Divider>
          <Button className={"logIn"}>S'identifier</Button>
        </Segment>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default Account;
