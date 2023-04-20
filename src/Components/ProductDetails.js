import { useContext, useState } from "react";
import {Card,Form,FormControl,FormGroup,FormLabel,Row,Col,Button,} from "react-bootstrap";
import CartContext from "./Cart-Context";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const CartCntx = useContext(CartContext);
  const [TshirtName, setTshirtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityS, setQuantityS] = useState("");
  const [quantityM, setQuantityM] = useState("");
  const [quantityL, setQuantityL] = useState("");

  const TshirtHandler = (event) => {
    setTshirtName(event.target.value);
  };
  const DescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const PriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const QuantitySHandler = (event) => {
    setQuantityS(event.target.value);
  };

  const QuantityMHandler = (event) => {
    setQuantityM(event.target.value);
  };

  const QuantityLHandler = (event) => {
    setQuantityL(event.target.value);
  };


  const SubmitHandler=(e)=>{
    e.preventDefault(); 
    const ItemList = {
        TshirtName,
        description,
        price,
        quantityL,
        quantityM,
        quantityS,
    };

    console.log(ItemList,"INSIDESUBMITHANDLER ")

    const Email = true;
        const userEmail = Email ? "shannugmailcom" : "shannu";
        fetch(
          `https://crudcrud.com/api/ebdbf0e71e364ca49e231cb30db2d945/${userEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ItemList),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }
      })
      .catch((error) => console.error(error));
      CartCntx.setUpdateDetails(ItemList);
        // setTShirtName("");
        // setDescription("");
        // setPrice("");
    }

  return (
    <Card className="mt-5">
      <Card.Body className={classes.label}>
        <Form onSubmit={SubmitHandler}>
          <Row>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel style={{ color: "white" }}>TshirtName</FormLabel>
                <FormControl
                  type="text"
                  placeholder="TshirtName"
                  onChange={TshirtHandler}
                  value={TshirtName}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel style={{ color: "white" }}>Description</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Description"
                  onChange={DescriptionHandler}
                  value={description}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel style={{ color: "white" }}>Price</FormLabel>
                <FormControl
                  type="number"
                  placeholder="Price"
                  onChange={PriceHandler}
                  value={price}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel style={{ color: "white" }}>
                  Quantity Available
                </FormLabel>
                <div style={{ display: "flex" }}>
                  <FormControl
                    style={{ marginRight: "10px" }}
                    type="number"
                    placeholder="S"
                    onChange={QuantitySHandler}
                    value={quantityS}
                    required
                  />
                  <FormControl
                    style={{ marginRight: "10px" }}
                    type="number"
                    placeholder="M"
                    onChange={QuantityMHandler}
                    value={quantityM}
                    required
                  />
                  <FormControl
                   type="number" 
                   placeholder="L"
                   onChange={QuantityLHandler}
                   value={quantityL}
                   required 
                   />
                </div>
              </FormGroup>
            </Col>
            <Col>
              <Button type="submit" className="btn-dark">
                Add Product
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default ProductDetails;
