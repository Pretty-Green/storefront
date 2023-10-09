interface CarouselProps {
  collections: {
    name: string;
    variants: string[];
  }[];
}

async function ProductCarousel({ collections }: React.PropsWithChildren<CarouselProps>) {
  return <div className="flex"></div>;
}

export default ProductCarousel;
