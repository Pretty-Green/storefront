import { GetVariantsBySkus } from 'lib/saleor';
import { getImage } from 'lib/utils';
import Image from 'next/image';
import ProductCarousel from '../client/product-carousel';

interface CarouselProps {
  collections: {
    name: string;
    variants: string[];
  }[];
}

async function Carousel({ collections }: React.PropsWithChildren<CarouselProps>) {
  const carouselData = await Promise.all(
    collections.map(async (collection) => {
      const saleorVariants = await GetVariantsBySkus(collection.variants);

      const enhancedSaleorVariants = await Promise.all(
        saleorVariants.map(async (product) => {
          const plaiceholderMedia = await getImage(product?.node?.media?.[0]?.url || '');
          return { ...product, plaiceholderMedia };
        }),
      );

      return {
        ...collection,
        variants: enhancedSaleorVariants,
      };
    }),
  );

  return (
    <div className="flex">
      <div className="float-left flex w-1/12 flex-col gap-5 p-4 font-secondary tracking-widest text-prose">
        {carouselData.map((collection) => (
          <span className="text-xl" key={collection.name}>
            {collection.name.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <div className="w-11/12">
        <ProductCarousel>
          {carouselData.map((carouselEl, i) => {
            const variants = carouselEl.variants.map((variant, j) => {
              return (
                <div key={`item-${i}-${j}`}>
                  <Image
                    className="min-w-[320px] object-cover"
                    src={variant.plaiceholderMedia.img}
                    height={400}
                    width={400}
                    placeholder="blur"
                    blurDataURL={variant.plaiceholderMedia.base64}
                    alt={variant.node.id}
                  />
                  <p>{variant.node?.id}</p>
                  <p>{variant.node?.pricing?.price?.net.amount}</p>
                </div>
              );
            });
            return variants;
          })}
        </ProductCarousel>
      </div>
    </div>
  );
}

export default Carousel;
