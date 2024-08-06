import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class AddProduct extends Component {
  state = {
    showForm: false,
    nameInput: "",
    imageInput: "",
    priceInput: 0,
    discountInput: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault(); // remove default behavior
    const newProduct = {
      id: Math.random(),
      imageUrl: this.state.imageInput,
      name: this.state.nameInput,
      price: this.state.priceInput,
      discount: this.state.discountInput,
    };
    //   function addProd
    this.props.handleAdd(newProduct);
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
          style={{ margin: "5px", width: "400px" }}
          variant="outline-danger"
          onClick={() => this.handleShow()}
        >
          Add Product
        </Button>
        {this.state.showForm ? (
          <form
            onSubmit={this.handleSubmit}
            action=""
            style={{
              margin: "25px",
              backgroundColor: "pink",
              borderRadius: "5px",
              border: "1px solid red",
              width: "600px",
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
                width: "550px",
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
                width: "550px",
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
                width: "550px",
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
                width: "550px",
                border: "1px solid red",
                textAlign: "center",
              }}
              value={this.state.discountInput}
              onChange={(e) => this.setState({ discountInput: e.target.value })}
            />
            <Button type="submit" variant="outline-success">
              Add
            </Button>
          </form>
        ) : null}
      </div>
    );
  }
}
