import React, { useEffect, useState } from 'react';

interface ProductScannerProps {
  imageUrl: string;
  onProductsScanned: (products: { name: string; link: string }[]) => void;
}

const ProductScanner: React.FC<ProductScannerProps> = ({ imageUrl, onProductsScanned }) => {
  const [products, setProducts] = useState<{ name: string; link: string }[]>([]);

  useEffect(() => {
    const scanImage = async () => {
      // TODO: שליחת התמונה ל-API של זיהוי פריטים
      // TODO: עיבוד התוצאה והחזרת מערך של מוצרים
      const scannedProducts = [
        { name: 'חולצה', link: '// קישור לרכישה' },
        { name: 'מכנסיים', link: '// קישור לרכישה' },
      ];
      setProducts(scannedProducts);
      onProductsScanned(scannedProducts);
    };

    scanImage();
  }, [imageUrl]);

  return (
    <div>
      <h2>פריטים שזוהו:</h2>
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

export default ProductScanner;