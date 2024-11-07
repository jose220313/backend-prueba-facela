export const schema = {
  fullname: {
    in: ["body"],
    isString: {
      errorMessage: "El nombre debe ser una cadena de texto",
    },
    isLength: {
      options: { min: 1 },
      errorMessage: "El nombre es obligatorio",
    },
    trim: true, // Sanitiza el campo
  },
  email: {
    in: ["body"],
    isEmail: {
      errorMessage: "Debe ingresar un correo electrónico válido",
    },
  },
};
