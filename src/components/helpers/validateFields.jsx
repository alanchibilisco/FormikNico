// Reg expressions
const regExpProductName = /^[A-Za-z\s?]+$/;
const regExpPrice = /[0-9]+$/;
const regExpUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const regExpCategory = /^[A-Za-z\-\s?]+$/;
const regExpAvaliable = /^[A-Za-z\-\s?]+$/;
const regExpPorcentaje=/^((100(\.0{1,2})?)|(\d{1,2}(\.\d{1,2})?))$/;

// Functions to validate
export const validateProductName = (field) => {
  if (regExpProductName.test(field) && field.trim() !== "") {
    return true;
  } else {    
    return false;
  }
};
export const validateDetalleProducto = (field) => {
  if (regExpProductName.test(field) && field.trim() !== "") {
    return true;
  } else {    
    return false;
  }
};

export const validatePrice = (field) => {
  if (
    regExpPrice.test(field) &&
    field.trim() !== "" &&
    field.trim() > 0 &&
    field.trim() < 20000
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateUrl = (field) => {
  console.log(field);
  if (regExpUrl.test(field) || field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateCategory = (field) => {
  if (
    regExpCategory.test(field) &&
    field.trim() !== "" &&
    (field === "Cerveza" ||
      field === "Cocteleria" ||
      field === "Merchandising" ||
      field === "Comidas" ||
      field === "Otros")
  ) {
    return true;
  } else {
    return false;
  }
};
export const validatePorcentaje=(field)=>{
  if(
    regExpPorcentaje.test(field)       
  ){
    return true;
  } else{
    return false;
  }
}
export const validateAvaliable = (field) => {
  if (
    regExpAvaliable.test(field) &&
    field.trim() !== "" &&
    (field === "Si" ||
      field === "No" 
      )
  ) {
    return true;
  } else {
    return false;
  }
}
