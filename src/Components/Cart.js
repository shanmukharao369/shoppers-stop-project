import { useContext, useState, useEffect } from "react";
import {Navbar,NavbarBrand,Container,Button,Modal,ModalBody,Table,} from "react-bootstrap";
import CartContext from "./Cart-Context";

const CartDetails = () => {
  const CartCntx = useContext(CartContext);
  const [showItems, setShowItems] = useState(false);


  const showhandler = () => {
    setShowItems(true);
  };

  const handleClose = () => {
    setShowItems(false);
  };

  useEffect(() => {
    const Email = true;
    const userEmail = Email ? "shannugmailcom" : "shannu";
    fetch(
      `https://crudcrud.com/api/ebdbf0e71e364ca49e231cb30db2d945/${userEmail}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        return response.json();
      })
      .then((data) => {
        CartCntx.setUpdateDetails(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);



  return (
    <>
      <Navbar
        bg="black"
        expand="sm"
        variant="dark"
        sticky="top"
        className="mt-3 "
      >
        <Container>
          <NavbarBrand>SHOPPERS STOP</NavbarBrand>
          <Button variant="light" onClick={showhandler}>
            Cart
            <br />
          </Button>
        </Container>
      </Navbar>
      <Modal show={showItems} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>CartList</Modal.Title>
          <Button variant="danger" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {CartCntx.updateDetails.map((item, id) => (
                <tr key={item.id}>
                  <td>{item.TshirtName}</td>
                  <td>{item.description}</td>
                  <td>{item.price}.00</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CartDetails;
