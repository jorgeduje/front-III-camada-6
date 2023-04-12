import React, { useContext } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContexReducer } from "../../../context/CartContextReducer";

const CheckOut = () => {

  const {cart} = useContext(CartContexReducer)

  const { handleSubmit, handleChange, errors, values, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {
      console.log(data);
      console.log(cart)

    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "el nombre es muy corto"),
      email: Yup.string().required("requerido").email("no corresponde a un email valido"),
    }),
    validateOnChange: false
  });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Finalizar compra
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre"
              name="name"
              variant="outlined"
              fullWidth
              value={values.name}
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            {/* {
                errors.name && <span>{errors.name}</span>
            } */}
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su email"
              variant="outlined"
              fullWidth
            //   value={values.email}
              onChange={(e)=>setFieldValue( "email", e.target.value )}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
