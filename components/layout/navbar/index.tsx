import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getNavigation } from 'lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import pgIcon from '../../../assets/logo.svg';
import MobileMenu from './mobile-menu';
import Search from './search';
export default async function Navbar() {
  const menu = await getNavigation();
  return (
    <nav className="fixed z-10 flex h-16 w-full items-center bg-white p-4 lg:px-6" id="navi">
      <div className="flex w-full items-center justify-around">
        <div className="w-2/12">
          <MobileMenu menu={menu} />
        </div>
        {/* <div className="md:flex w-full hidden lg:w-5/12">
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

        </div> */}
        <div className="w-8/12">
          <Link
            href="/"
            aria-label="Go back home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Image alt="logo" src={pgIcon} width={52} height={52} />
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
