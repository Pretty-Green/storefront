import { GetVariantsBySkus } from 'lib/saleor';
import { getImage } from 'lib/utils';

interface CarouselProps {
  collections: {
    name: string;
    variants: string[];
  }[];
}

async function ProductCarousel({ collections }: React.PropsWithChildren<CarouselProps>) {
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
      <div className="w-2/ flex flex-col gap-5 p-8 font-secondary tracking-widest text-prose">
        {carouselData.map((collection) => (
          <span className="text-xl" key={collection.name}>
            {collection.name.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <div className="w-5/6">
        <div className="flex">{carouselData}</div>
        {/* <swiper-container
          init={false}
          ref={swiperElRef}
          slides-per-view="auto"
          grab-cursor="true"
          space-between={5}
          modules={[Autoplay]}
          autoplay={true}
          autoplay-delay="0"
          autoplay-disable-on-interaction="false"
          loop={true}
          freeMode={true}
          speed={2000}
        >
          {
            collections.map(collection => {
              const products = collection.products;
              const slides = products.map(product => (
                <swiper-slide className='max-w-sm' key={product.name}>
                  <div>
                    <img src={product.url}></img>
                    <p>{product.name}</p>
                  </div>
                </swiper-slide>))
              return slides
            })
          }
        </swiper-container> */}
      </div>
    </div>
  );
}

export default ProductCarousel;
