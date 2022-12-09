import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Registro = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sing up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Registro

{/* <!--Modal 2--> */ }
<div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Registro
                </h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="#">
                    <h3 class="mb-2 text-center">Ingresa tu Email</h3>
                    <div class="mb-4">
                        <label for="email" class="form-check-label">
                            Correo electrónico
                        </label>
                        {/* <input type="email" class="form-control" placeholder="ejemplo@gmail.com" name="email"maxlength="30" required> */}

                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-check-label">
                            Password
                        </label>
                        {/* <input type="password" class="form-control" placeholder="Contraseña" name="password" minlength="8" maxlength="12" required>*/}

                    </div>
                    <div>
                        <p class="text-dark text-center font-weight-bolder">
                            Te llegara un mail a tu correo para confirmarlo
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="submit"
                            class="btn btn-danger mb-2 btn-lg mt-2"
                            data-dismiss="modal"
                        >
                            Cerrar
                        </button>
                        <button type="submit" class="btn btn-info mb-2 btn-lg mt-2">
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
{/* <!-- Final Modal --> */ }