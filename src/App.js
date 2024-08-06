import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

export default class App extends Component {
  // ----------------------------- STATE ---------------------------

  state = {
    prodTable: [
      {
        id: Math.random(),
        name: "Coco Mademoiselle Eau De Parfum",
        price: 293,
        discount: 10,
        imageUrl:
          "https://azetabeauty.com/wp-content/uploads/2023/01/Chanel_Coco__Mademoiselle_Eau_De_Parfum_Tunisie.jpg",
      },
      {
        id: Math.random(),
        name: "LANCÔME LA VIE EST BELLE Eau de Parfum",
        price: 241,
        discount: 7,
        imageUrl:
          "https://www.fatales.tn/88316-large_default/lancme-la-vie-est-belle-eau-de-parfum.jpg",
      },
      {
        id: Math.random(),
        name: "DIOR EAU DE PARFUM MISS",
        price: 315,
        discount: 8,
        imageUrl:
          "https://hpmbeauty.com/wp-content/uploads/2022/12/miss-dior-eau-de-parfum-100ML-HPM.jpg",
      },
      {
        id: Math.random(),
        name: " La Nuit Tresor Eau De Parfum",
        price: 448,
        discount: 4,
        imageUrl:
          "https://drest.s3.eu-west-3.amazonaws.com/wp-content/uploads/2024/04/18172349/la-nuit-tresor-eau-de-parfum.jpg",
      },
    ],
  };
  // ---------------------------------------------------------------

  // --------------------------- FUNCTIONS -------------------------
  handleEdit = (editedProduct) => {
    this.setState({
      prodTable: this.state.prodTable.map((el) =>
        el.id === editedProduct.id ? editedProduct : el
      ),
    });
  };

  handleDelete = (ClickedID) => {
    this.setState({
      prodTable: this.state.prodTable.filter((el) => el.id !== ClickedID),
    });
  };

  handleAdd = (newProduct) =>
    this.setState({ prodTable: [...this.state.prodTable, newProduct] });
  // ---------------------------------------------------------------
  render() {
    return (
      <div className="App">
        <NavbarComp />
        <ProductList
          prods={this.state.prodTable}
          edit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <AddProduct handleAdd={this.handleAdd} />
      </div>
    );
  }
}
