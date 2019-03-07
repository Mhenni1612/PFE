import React from "react";
import Article from "./CardArticle";
import { Card, Table } from "semantic-ui-react";

const FlashVente = props => {
  const flash = props.flash;

  return (
    <Table color="red" size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Vente Flash</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Card.Group centered itemsPerRow={6}>
              {flash.map(function(article, key) {
                return <Article key={key} data={article} />;
              })}
            </Card.Group>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default FlashVente;
