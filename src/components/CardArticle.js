import React from "react";
import CardDescription from "./CardDescription";
import { Card, Image, Button, Label } from "semantic-ui-react";

const CardExampleCard = props => {
  return (
    <Card style={{ width: 150 }}>
      <Image
        style={{ maxHeight: 100, maxWidth: 150 }}
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
      <Card.Content>
        <Card.Header>{props.data.titre}</Card.Header>
        <Card.Meta>
          <span>{props.data.quantite}</span>
        </Card.Meta>
        <Label ribbon="right" color="red" size="large">
          -50%
        </Label>
        <Card.Description style={{ height: 80 }}>
          <CardDescription description={props.data.description} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.data.prix}
        <Button icon="add to cart" circular floated="right" />
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;
