import { useState } from "react";
import "./App.css";
import CartDetails from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import CartContext from "./Components/Cart-Context";
import { Card} from "react-bootstrap";
import ButtonDetails from "./Components/button";

function App() {
  const [updateDetails, setUpdateDetails] = useState([]);

  const addhandler = (name, des, price) => {
    setUpdateDetails((prevList) => {
      return [
        ...prevList,
        {
          TshirtName: name,
          description: des,
          price: price,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <CartContext.Provider value={{ updateDetails, setUpdateDetails }}>
      <CartDetails />
      <ProductDetails onAdd={addhandler} />
      {updateDetails.map((user) => {
        return (
          <Card
            className="text-left mt-5"
            style={{ backgroundColor: "purple" }}
          >
            <Card.Body  className="d-flex justify-content-between">
                <Card.Title key={user.id}>
                  <li>{user.TshirtName}</li>
                </Card.Title>
                <h6>{user.description}</h6>
              <h6>Rs {user.price}.00 </h6>
              <ButtonDetails user={user}/>
            </Card.Body>
          </Card>
        );
      })}
    </CartContext.Provider>
  );
}

export default App;
