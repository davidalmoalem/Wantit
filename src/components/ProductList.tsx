import React from 'react';

interface ProductListProps {
  products: { name: string; link: string }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <h2>רשימת מוצרים:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            {product.name}: <a href={product.link}>קניה</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;