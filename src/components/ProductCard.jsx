import { Link } from "react-router-dom";


function ProductCard({ product }) {

  return (

    <article>

      <Link to={`/products/${product.id}`}>

        <img
          src={product.thumbnail}
          alt={product.title}
        />


        <h3>
          {product.title}
        </h3>

      </Link>


      <p>
        {product.brand}
      </p>


      <p>
        ${product.price}
      </p>


      <p>
        ⭐ {product.rating}
      </p>


    </article>

  );

}


export default ProductCard;