import React from "react";
import "./Login.css";
import logo from "../../../imagenes/Imagen1.png";
import { Link } from "react-router-dom";
import RecPassword from "../RecPassword";
import Registro from "../Registro";

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
                        <Link
                          exact path="/recpassword" element={<RecPassword />}
                          data-toggle="modal"
                          data-target="#exampleModal"
                          class="font-weight-bold text-decoration-none"
                        >
                          Recuperar contraseña
                        </Link>
                      </span>
                    </div>
                    <div>
                      <span>
                        ¿No tienes una cuenta?{" "}
                        <Link
                          exact path="/recpassword" element={<Registro />}
                          data-toggle="modal"
                          data-target="#exampleModal2"
                          class="font-weight-bold text-decoration-none"
                        >
                          Registrate
                        </Link>
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




    </>
  );
};

export default Login;
