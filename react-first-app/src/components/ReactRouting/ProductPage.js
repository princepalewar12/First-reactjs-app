import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log(`Inside componentDidMount`);
    this.fetchProductData();
  }

  fetchProductData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    console.log(productData.data);
    this.setState({ products: productData.data });
  };
  render() {
    return (
      <>
        <div>Product page</div>
        {this.state.products.map((products) => (
          // <p>{products.username}-{products.password}</p>
         <div className="product-list" style={{display: "inline-flex", flexWrap: "nowrap" }}>
           <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" style={{width:"286px", height:"180px"}}src={products.image} />
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>Price:{products.price}</Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
         </div>
        ))}
      </>
    );
  }
}
