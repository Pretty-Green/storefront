import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCategories, getCategoryProducts } from 'lib/saleor';
import { notFound } from 'next/navigation';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Saleor.',
  openGraph: {
    type: 'website',
  },
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryListingPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryProducts({ category: params.slug });
  const categoryProducts = category.products?.edges;

  if (!category) return notFound();

  return (
    <section>
      <div className="flex p-8">
        <span className="w-1/3" />
        <h2 className="w-1/3 text-center">{category.name}</h2>
        <span className="w-1/3 text-right">Filters</span>
      </div>
      <div className="flex justify-center p-8">QUICK LINKS</div>
      {!categoryProducts ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <ProductGridItems products={categoryProducts} />
        </Grid>
      )}
    </section>
  );
}
