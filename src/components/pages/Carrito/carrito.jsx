import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';
import Moment from 'moment';
import { Image } from "react-bootstrap";



const ModalCarrito = ({show, handleClose}) => {
    const myuuid = uuidv4()
    const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    return () => {
      setCart([]);
    };
  }, [show]);
  const deleteProduct=(uuid)=>{
    const newArr=cart.filter(prod=>prod.uuid!==uuid);
    console.log(newArr);
    setCart(newArr);
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(newArr));
    }
    
    const vaciarCarrito=()=>{
        localStorage.removeItem('cart');
        setCart([]);
        }
    let total=0;
    for (let index = 0; index < cart.length; index++) {
      total=total + parseFloat(cart[index].PriceProduct)
    }
        
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        
        <Modal.Title> 🛒 Your cart: </Modal.Title>
      </Modal.Header>
        
      <h6 className="align-middle text-center mt-3">Date: {Moment().format('DD-MM-YYYY')}</h6>
      <h6 className="align-middle text-center mt-3">Hour: {Moment().format(' hh:mm A')}</h6>
      <h6 className="align-middle text-center mt-3">DETAILS OF YOUR PURCHASE:</h6>
      <Modal.Body>
        <Table bordered hover responsive className="align-middle text-center mt-3">
          <thead>
            <tr>
              <th>N.</th>
              <th>Imagen</th>
              <th>Product</th>
              <th>Price</th>
              <th>Amount</th> 
              <th>Total</th>                            
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
          {cart.map((prod, index) => {
              return (
            <tr key={prod.uuid}>
              <td>{index+1}</td>
              <td> <Image className="truncate-img-link m-0" src={prod.ImgURL} width={27}
        height={27}/></td>
              <td>{prod.ProductName}</td>
              <td>{`$ ${prod.PriceProduct}`}</td>
              <td>1</td>
              <td>{`$ ${prod.PriceProduct }`}</td>              
              <td className="w-25">
                <div className="d-flex justify-content-center">
                   <Button variant="outline-danger mx-1" onClick={()=>{
                        deleteProduct(prod.uuid);
                    }}>
                    <box-icon name="message-square-x" type="solid"></box-icon>
                  </Button>
                </div>
              </td>
            </tr>
            );
        })}
          </tbody>
        </Table>
      </Modal.Body>
        <h4 className="text-center">Total :{`$ ${total}`}</h4>
      <Modal.Footer className="text-center">
        <div className="text-center">Ticket Op: {myuuid} </div>
        <Button variant="secondary" onClick={vaciarCarrito}>
        Clear cart
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCarrito;
