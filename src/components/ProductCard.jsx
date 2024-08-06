import React from "react";
import { Button, Card } from "react-bootstrap";
import EditProductComp from "./EditProductComp";

const ProductCard = ({ el, edit, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem", backgroundColor: "pink", margin: "25px" }}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text style={{ color: "red", textDecoration: "line-through" }}>
            {el.price}DT
          </Card.Text>
          <Card.Text style={{ color: "brown" }}>
            Discount :{el.discount} %
          </Card.Text>
          <Card.Text style={{ color: "green", fontWeight: "600" }}>
            New price : {el.price - (el.price * el.discount) / 100} DT
          </Card.Text>

          <Button
            style={{ margin: "5px", width: "200px" }}
            variant="outline-danger"
            onClick={() => del(el.id)}
          >
            Delete
          </Button>
          <EditProductComp el={el} edit={edit} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
