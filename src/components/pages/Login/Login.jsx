import React from "react";
import "./Login.css";
import logo from "../../../imagenes/Imagen1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <div class="container bg-white my-5 w-75 rounded shadow">
          <div class="row">
            {/* <!--Inicio de primera Columna--> */}
            <div class="col">
              <Link> <img src={logo} alt="logo" width="80" class="mb-5"></img> </Link> 
              <div class="col-lg-12">
                <h2 class="font-weight-bold text-center py-3 border-top border-bottom border-2 ">
                  Bienvenido
                </h2>

                <form action="#">
                  <div class="mb-4 mt-4">
                    <label for="email" class="form-check-label">
                      Correo electrónico
                    </label>
                    {/* <input type="email" class="form-control" placeholder="ejemplo@gmail.com" name="email" maxlength="30" required> */}
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-check-label">
                      Password
                    </label>
                    {/* <input type="password" class="form-control" placeholder="Contraseña" name="password" minlength="8" maxlength="12" required>*/}
                  </div>
                  <div class="mb-4 form-check">
                    {/* <input type="checkbox" name="conectar" class="form-check-input"> */}
                    <label for="conectar">Recordarme</label>
                  </div>

                  <div class="btn-lg text-center">
                    <button
                      type="submit"
                      class="btn btn-info btn-lg w-100 font-weight-bolder boton-enviar"
                    >
                      Ingresar
                    </button>
                  </div>
                  <div class="d-flex justify-content-between my-3">
                    <div>
                      <span>
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          class="font-weight-bold text-decoration-none"
                        >
                          Recuperar contraseña
                        </a>
                      </span>
                    </div>
                    <div>
                      <span>
                        ¿No tienes una cuenta?{" "}
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          class="font-weight-bold text-decoration-none"
                        >
                          Registrate
                        </a>
                      </span>
                    </div>
                  </div>
                </form>

                {/* <!-- Inicio Redes Sociales--> */}
                <div class="container my-3 w-100">
                  <div class="row text-center">
                    <h3 class="col-12">Iniciar Sesíon</h3>
                  </div>
                  <div class="row justify-content-center">
                    {/* <!--Row para organizar 2 botones--> */}
                    <div class="d-flex">
                      <button class="btn btn-outline-info w-100 my-1 mx-2">
                        <a
                          href="https://www.facebook.com/login/"
                          class="text-decoration-none text-dark"
                          target="_blank"
                        >
                          <div class=" row align-content-center">
                            {/* <!--Row para alinear img y texto--> */}
                            <div class="col-2 d-none d-md-block">
                              {/* <img src="/Imagenes/facebook-logo.png" class="mx-3" width="30" alt="facebook"> */}
                            </div>
                            <div class="col-12 col-md-10 text-center font-weight-bolder">
                              Facebook
                            </div>
                          </div>
                        </a>
                      </button>
                      {/* <!--Final de Primer Boton--> */}

                      <button class="btn btn-outline-warning w-100 my-1 mx-2">
                        <a
                          href="https://www.google.com/"
                          class="text-decoration-none text-dark"
                          target="_blank"
                        >
                          <div class=" row align-content-center">
                            {/* <!--Row para alinear img y texto--> */}
                            <div class="col-2 d-none d-md-block">
                              {/* <img src="/Imagenes/google-logo.png" class="mx-3" width="30" alt="google"> */}
                            </div>
                            <div class="col-12 col-md-10 text-center font-weight-bolder">
                              Google
                            </div>
                          </div>
                        </a>
                      </button>
                      {/* <!--Final de Segundo Boton--> */}
                    </div>
                  </div>
                </div>
                {/* <!--Final Redes Sociales--> */}
              </div>
            </div>
            {/* <!--Final primera Columna--> */}

            {/* <!--Inicio Segunda Columna--> */}
            <div class="d-none col-md-6 d-lg-block p-0">
              <div class=" imagen-login h-100">
                <div>
                  <h2 class="text-dark text-center pt-3">
                    Únete y cuenta tu experiencia
                  </h2>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-6 text-center mt-5">
                    <h1 class="font-weight-bolder text-dark">La Dificil</h1>
                    <h3 class="text-white">decicion</h3>
                    <h2 class="font-weight-bolder text-dark">entre</h2>
                    <h3 class="text-white">el bien </h3>
                    <h2 class="font-weight-bolder text-danger">o el Bar</h2>
                    {/* <h3 class="text-white">Todo el tiempo</h3> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Final Segunda Columna--> */}
          </div>
        </div>
      </main>

      {/* // <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Recuperar Contraseña
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
              <form>
                <h3 class="mb-2 text-center">Ingresa tu Email</h3>
                <div class="mb-4">
                  <label for="email" class="form-check-label">
                    Correo electrónico
                  </label>
                  {/* <input type="email" class="form-control" placeholder="ejemplo@gmail.com" name="email" maxlength="30" required>*/}
                  
                </div>
                <div>
                  <p class="text-dark text-center font-weight-bolder">
                    Te llegara un mail a tu correo para realizar los cambios
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
      {/* <!-- Final Modal --> */}

      {/* <!--Modal 2--> */}
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
      {/* <!-- Final Modal --> */}
    </>
  );
};

export default Login;
