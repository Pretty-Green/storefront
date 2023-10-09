import Image from 'next/image';
import React from 'react';

const ProductContext = React.createContext(undefined);

const useProductContext = () => {
  const context = React.useContext(ProductContext);

  if (!context) {
    throw new Error('Component need to be a child of Order component');
  }

  return context;
};

export function Title() {
  const { productName } = useProductContext();
  return productName;
}
export function Color() {
  const { productColor } = useProductContext();
  return productColor;
}
export function Tag() {
  const { tag } = useProductContext();
  return tag;
}
export function Price() {
  const { price } = useProductContext();
  return price;
}

export function ColorPicker() {
  const { colors } = useProductContext();
  return colors;
}

export function Photo() {
  const { src } = useProductContext();
  return <Image src={src} alt="text" />;
}

function Product({ data, children }: React.PropsWithChildren<{ data: any }>) {
  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
}

Product.Title = Title;
Product.Tag = Tag;
Product.Color = Color;
Product.ColorPicker = ColorPicker;
Product.Price = Price;
Product.Photo = Photo;

export default Product;
