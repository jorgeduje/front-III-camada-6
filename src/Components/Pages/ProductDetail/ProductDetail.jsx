import { Button } from "@mui/material";
import { ItemCount } from "../../Common/ItemCount/ItemCount";
import styles from "./ProductDetail.module.css";
const ProductDetail = ({
  showForm,
  setShowForm,
  product,
  setProduct,
  handleSubmit,
}) => {
  return (
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
        <div>
          <Button variant="contained" onClick={() => setShowForm(true)}>
            Editar
          </Button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input
            type="text"
            defaultValue={product?.name}
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
          />
          <label>descripcion</label>
          <input
            type="text"
            defaultValue={product?.description}
            onChange={(e) =>
              setProduct({
                ...product,
                description: e.target.value,
              })
            }
          />
          <label>price</label>
          <input
            type="text"
            defaultValue={product?.price}
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value })
            }
          />
          <label>category</label>
          <input
            type="text"
            defaultValue={product?.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <label>stock</label>
          <input
            type="text"
            defaultValue={product?.stock}
            onChange={(e) =>
              setProduct({ ...product, stock: e.target.value })
            }
          />
          <label>img</label>
          <input
            type="text"
            defaultValue={product?.img}
            onChange={(e) =>
              setProduct({ ...product, img: e.target.value })
            }
          />
          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </div>
  );
};

export default ProductDetail;
