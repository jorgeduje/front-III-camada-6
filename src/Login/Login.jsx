import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
  });

  return (
    <div>
      <h2>Este es el formular login</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ingrasa tu nombre"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
