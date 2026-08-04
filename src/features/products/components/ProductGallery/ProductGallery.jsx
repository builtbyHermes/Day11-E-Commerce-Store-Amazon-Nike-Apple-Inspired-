import { useState } from "react";
import styles from "./ProductGallery.module.css";

function ProductGallery({ product }) {
  const images =
    product.images?.length > 0
      ? product.images
      : [product.thumbnail];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>

      <div className={styles.mainImage}>
        <img
          src={selectedImage}
          alt={product.title}
        />
      </div>

      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.thumbnailButton} ${
              selectedImage === image ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${product.title} ${index + 1}`}
            />
          </button>
        ))}
      </div>

    </div>
  );
}

export default ProductGallery;