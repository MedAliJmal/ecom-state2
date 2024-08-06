import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class EditProductComp extends Component {
  el = this.props.el;

  state = {
    showForm: false,
    nameInput: this.el.name,
    imageInput: this.el.imageUrl,
    priceInput: this.el.price,
    discountInput: this.el.discount,
  };

  handleSubmit = (e) => {
    e.preventDefault(); // remove default behavior
    const editedProduct = {
      id: this.el.id,
      imageUrl: this.state.imageInput,
      name: this.state.nameInput,
      price: this.state.priceInput,
      discount: this.state.discountInput,
    };
    this.props.edit(editedProduct);
    this.setState({ showForm: false });
  };

  handleShow = () => this.setState({ showForm: !this.state.showForm });

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{ margin: "5px", width: "200px" }}
          variant="outline-danger"
          onClick={() => this.handleShow()}
        >
          Edit
        </Button>
        {this.state.showForm ? (
          <form
            onSubmit={this.handleSubmit}
            action=""
            style={{
              borderRadius: "5px",
              border: "1px solid red",
              width: "200px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <input
              type="text"
              placeholder="product name"
              style={{
                backgroundColor: "pink",
                border: "1px solid red",
                textAlign: "center",
              }}
              required
              value={this.state.nameInput}
              onChange={(e) => this.setState({ nameInput: e.target.value })}
            />
            <input
              required
              type="url"
              placeholder="product image"
              style={{
                backgroundColor: "pink",
                border: "1px solid red",
                textAlign: "center",
              }}
              value={this.state.imageInput}
              onChange={(e) => this.setState({ imageInput: e.target.value })}
            />
            <input
              required
              type="number"
              placeholder="product price"
              style={{
                backgroundColor: "pink",
                border: "1px solid red",
                textAlign: "center",
              }}
              value={this.state.priceInput}
              onChange={(e) => this.setState({ priceInput: e.target.value })}
            />
            <input
              required
              type="number"
              placeholder="product discount"
              style={{
                backgroundColor: "pink",
                border: "1px solid red",
                textAlign: "center",
              }}
              value={this.state.discountInput}
              onChange={(e) => this.setState({ discountInput: e.target.value })}
            />
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </form>
        ) : null}
      </div>
    );
  }
}
