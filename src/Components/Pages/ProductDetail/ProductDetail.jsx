const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  productSelected,
  setProductSelected,
  handleSubmit,
}) => {
  return (
    <div>
      <h1>{product?.name}</h1>
      <h3>{product?.price}</h3>
      <button onClick={() => setShowForm(true)}>Editar producto</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={product?.name}
            onChange={(e) =>
              setProductSelected({ ...productSelected, name: e.target.value })
            }
          />
          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </div>
  );
};

export default ProductDetail;
