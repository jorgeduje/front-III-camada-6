import { ItemCount } from "../../Common/ItemCount/ItemCount";
import styles from "./ProductDetail.module.css";
const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  productSelected,
  setProductSelected,
  handleSubmit,
}) => {
  return (
    // <div>
    //   <h1>{product?.name}</h1>
    //   <h3>{product?.price}</h3>
    //   {/* <button onClick={() => setShowForm(true)}>Editar producto</button> */}
    //   {showForm && (
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         defaultValue={product?.name}
    //         onChange={(e) =>
    //           setProductSelected({ ...productSelected, name: e.target.value })
    //         }
    //       />
    //       <button type="submit">Guardar cambios</button>
    //     </form>
    //   )}

    //   <ItemCount product={product} />
    // </div>
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span> {product.name}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
          {product.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}.-
        </h2>

        <ItemCount product={product} />
      </div>

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
