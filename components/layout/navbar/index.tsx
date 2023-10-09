import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getHeader } from 'lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Search from './search';
import { HeaderMenu } from './server/header-menu';
export default async function Navbar() {
  const { desktopNavigation, mobileNavigation, logo, externalName } = await getHeader();
  return (
    <nav
      className="fixed z-10 flex h-16 w-full p-4 lg:px-6"
      data-test-id="main-navbar"
      data-test-contentful={externalName}
    >
      <div className="flex w-full items-center justify-around">
        <div className="hidden w-2/12">{/* <MobileMenu menu={mobileNavigation} /> */}</div>
        <div className="hidden w-full gap-4 md:flex lg:w-5/12">
          {desktopNavigation?.navigationItemsCollection?.items.map((item) => {
            if (item) {
              return <HeaderMenu key={item?.externalName} item={item} />;
            }
          })}
        </div>
        <div className="w-8/12">
          <Link
            href="/"
            aria-label="Go back home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Image alt="logo" src={logo?.mediaDesktop?.url || ''} width={52} height={52} />
          </Link>
        </div>
        <div className="flex w-2/12 justify-end space-x-5">
          <Search />
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
