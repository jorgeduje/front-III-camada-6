import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

// email, password, rol ( vendedor o comprador )
// estado
// onChange
// onSubmit
// validar email contenga @
// validar que el password tenga por lo menos 4 caracteres
// Si no esta validado, al dar submit se tiene que mostrar un texto debado del formulario

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rol: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  // ESTADO DE ERROR
  // error = {isActive: true, errorMessage: "", input: ""}

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = user.email.includes("@");
    const passwordIsValid = user.password.length > 3;

    if (!emailIsValid || !passwordIsValid) {
      // rechazo el envio
      setError(true);

      if (!emailIsValid && !passwordIsValid) {
        setErrorMessage("el email es incorrecto y la contraseña es incorrecta");
      } else if (!emailIsValid) {
        setErrorMessage("el email es incorrecto");
      } else {
        setErrorMessage("la contraseña es incorrecta");
      }

      return;
    }

    setIsLogged(true)
    // EL ENVIO
    console.log("data: ", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={(e) => handleChange(e, "email")}
        />

        {error && errorMessage.includes("el email es incorrecto") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <input
          type="text"
          name="password"
          onChange={(e) => handleChange(e, "password")}
        />

        {error && errorMessage.includes("la contraseña es incorrecta") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.9rem",
          }}
          onChange={(e) => handleChange(e, "rol")}
        >
          <option value="" default>
            Seleccionar Rol
          </option>
          <option value="comprador">Comprador</option>
          <option value="vendedor">Vendedor</option>
        </select>
        <button type="submit">Ingresar</button>
        <button type="button">cancelar</button>
      </form>

      {isLogged && (
        <Card rol={user.rol} email={user.email} password={user.password} />
      )}
    </div>
  );
};

export default Form;
