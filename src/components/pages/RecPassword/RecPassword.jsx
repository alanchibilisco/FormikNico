import React from 'react'

const RecPassword = () => {
  return (
    <>
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
    </>
  )
}

export default RecPassword