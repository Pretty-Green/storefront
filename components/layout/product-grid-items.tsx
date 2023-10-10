import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { ProductFragment } from 'lib/saleor/generated/graphql';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: { node: ProductFragment }[] }) {
  const veriants = products.flatMap((product) => product.node.variants);

  return (
    <>
      {veriants.map((variant) => (
        <Grid.Item key={variant?.id} className="animate-fadeIn">
          <Link className="inline-block h-full w-full" href={`/product/`}>
            <GridTileImage
              alt={variant?.name || ''}
              label={{
                title: String(variant?.name),
                amount: String(variant?.pricing?.price?.gross.amount),
                currencyCode: String(variant?.pricing?.price?.gross.currency),
              }}
              src={variant?.media?.[0]?.url || ''}
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
