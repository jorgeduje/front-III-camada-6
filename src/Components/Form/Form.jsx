import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <form className="form">
        <input type="text" name="email" />
        <input type="text" name="password" />
        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.9rem",
          }}
        >
          <option value="" default>
            no seleccionado
          </option>
        </select>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Form;
