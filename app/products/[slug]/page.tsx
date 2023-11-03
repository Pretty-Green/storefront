import Price from 'components/price';
import { getProduct, getProducts } from 'lib/saleor';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Saleor.',
  openGraph: {
    type: 'website',
  },
};

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.node.slug,
  }));
}

type CategoryListingPageStaticParamsType = Awaited<ReturnType<typeof generateStaticParams>>[number];

export default async function CategoryListingPage({
  params,
}: {
  params: CategoryListingPageStaticParamsType;
}) {
  const product = await getProduct(params.slug);
  const productVariants = product.variants;

  if (!product) return notFound();
  if (!productVariants) return notFound();

  return (
    <section>
      <div className="flex">
        <div className="w-1/2">
          {productVariants?.[0]?.media?.map((image) => {
            return (
              <Image
                alt="Picture of the author"
                key={image.url}
                src={image.url || ''}
                width={2000}
                height={2000}
              />
            );
          })}
        </div>
        <div className="w-1/2">
          <h1 className="text-center">{product.name}</h1>
          <Price
            className="text-center"
            amount={String(productVariants?.[0]?.pricing?.price?.gross.amount)}
            currencyCode={String(productVariants?.[0]?.pricing?.price?.gross.currency)}
          />
        </div>
      </div>
    </section>
  );
}
