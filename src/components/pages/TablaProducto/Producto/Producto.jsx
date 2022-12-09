import React from "react";
import 'boxicons';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <tr>        
      <td>1</td>
      <td>IPA</td>
      <td>Cerveza Amarga</td>
      <td>$250</td>
      <td>
        <p className="truncate-img-link m-0">
          https://media.istockphoto.com/photos/fresh-croissants-on-wooden-board-and-orange-jam-in-bowl-picture-id1199388833?k=20&m=1199388833&s=612x612&w=0&h=RzQ3L1uDy9Id4Xx5-GxMeGvm5V00J02F_nnksyZ0f-s=
        </p>
      </td>
      <td>Cerveza</td>
      <td>3%</td>
      <td>si</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
        <Button variant="outline-success mx-1"><Link to="/productpage/edicionproducto" variant="outline-primary mx-1"><box-icon type='solid' name='message-square-edit'></box-icon></Link></Button>
          <Button variant="outline-danger mx-1"><box-icon name='message-square-x' type='solid' ></box-icon></Button>
        </div>
      </td>
    </tr>
  );
};

export default Product;