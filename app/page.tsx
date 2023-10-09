import Carousel from 'components/contentful/carousel';
import Hero from 'components/contentful/hero';
import { getPageByPath } from 'lib/contentful';
import documentToReactComponent from 'lib/contentfulRichText';
import { getImage } from 'lib/utils';
import Image from 'next/image';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Saleor.',
  openGraph: {
    type: 'website',
  },
};

const collections = [
  {
    name: 'collection 1',
    variants: ['111223580', '112223580', '113223582', '118223581'],
  },
  {
    name: 'collection 2',
    variants: ['118223581', '124223581', '128223580', '218223580'],
  },
  {
    name: 'collection 3',
    variants: ['218223580', '328223580', '49182235820', '618223581'],
  },
];

export default async function HomePage() {
  const homepageItems = await getPageByPath({
    path: '/',
  });

  const hero = homepageItems.hero;
  const isHero = !!hero;
  const content = homepageItems.contentCollection?.items;
  const isContent = content && content?.length > 0;

  let HeroComponent;
  if (isHero) {
    const heroImg = homepageItems.hero?.media?.mediaDesktop?.url || '';
    const { img, base64 } = await getImage(heroImg);
    HeroComponent = (
      <Hero src={img.src} button={{ text: 'Shop now', url: 'https://www.example.com' }}>
        <Image
          className="object-cover"
          fill
          src={img.src}
          placeholder="blur"
          blurDataURL={base64}
          alt="Picture of the author"
          priority
        />
      </Hero>
    );
  }

  let ContentComponent;
  if (isContent) {
    ContentComponent = content?.map(async (component, index) => {
      if (component?.__typename === 'FullWidthImage') {
        const heroImg = component?.media?.mediaDesktop?.url || '';
        const { img, base64 } = await getImage(heroImg);
        return (
          <div key={index} className="relative mx-auto max-w-screen-2xl">
            <Image
              className="object-cover"
              src={img.src}
              height={img.height}
              width={img.width}
              placeholder="blur"
              blurDataURL={base64}
              alt={component?.__typename}
            />
          </div>
        );
      }
      if (component?.__typename === 'Carousel') {
        return <Carousel key={index} collections={collections} />;
      }
      if (component?.__typename === 'ImageWithText') {
        const src = component.media?.mediaDesktop?.url || '';
        const text = component.text?.longText?.json as Document;
        const { img, base64 } = await getImage(src);
        return (
          <div key={index} className="mx-auto flex max-w-screen-2xl">
            <div className="basis-1/2">{documentToReactComponent(text)}</div>
            <div className="basis-1/2">
              <Image
                className="object-cover"
                src={img.src}
                height={img.height}
                width={img.width}
                placeholder="blur"
                blurDataURL={base64}
                alt={component?.__typename}
              />
            </div>
          </div>
        );
      }
      if (component?.__typename === 'MultiColumnContent') {
        const multiColumnContent = component.contentCollection?.items.map(async (item) => {
          const src = item?.media?.mediaDesktop?.url || '';
          const text = item?.text?.longText?.json as Document;
          const { img, base64 } = await getImage(src);
          return (
            <div key={index} className="mx-auto flex max-w-screen-2xl">
              <div className="basis-1/2">{documentToReactComponent(text)}</div>
              <div className="basis-1/2">
                <Image
                  className="object-cover"
                  src={img.src}
                  height={img.height}
                  width={img.width}
                  placeholder="blur"
                  blurDataURL={base64}
                  alt={component?.__typename}
                />
              </div>
            </div>
          );
        });
        return multiColumnContent;
      }
    });
  }

  return (
    <>
      {HeroComponent}
      <div className="flex flex-col gap-6 py-6">{ContentComponent}</div>
    </>
  );
}
