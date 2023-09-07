'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GetNavigationQuery } from 'lib/contentful/generated/graphql';
import Image from 'next/image';
import menuIcon from '../../../assets/menu.svg';

export default function MobileMenu({ menu }: { menu: GetNavigationQuery }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image alt="logo" src={menuIcon} width={32} height={32} />
      </SheetTrigger>

      {/* TODO: insted of top-12 - automaticly adjust the height of the sheet drop */}

      <SheetContent side={'left'} className="top-16 w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h6>NEW ARRIVALS</h6>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4">
                <span className="uppercase text-secondary">Shop by Category</span>
                <ul className="flex flex-col space-y-4">
                  <li>All new arrivals</li>
                  {JSON.stringify(menu)}
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h6>OUTERWARE</h6>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4">
                <span className="uppercase text-secondary">Shop by Category</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h6>TOPS</h6>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4">
                <span className="uppercase text-secondary">Shop by Category</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
                <span className="uppercase text-secondary">New in</span>
                <ul className="flex flex-col space-y-4">
                  <li>list item </li>
                  <li>list item </li>
                  <li>list item </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}

/* <Transition show={isOpen}>
  <Dialog onClose={closeMobileMenu} className="relative z-50">
    <Transition.Child
      as={Fragment}
      enter="transition-all ease-in-out duration-300"
      enterFrom="opacity-0 backdrop-blur-none"
      enterTo="opacity-100 backdrop-blur-[.5px]"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="opacity-100 backdrop-blur-[.5px]"
      leaveTo="opacity-0 backdrop-blur-none"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    </Transition.Child>
    <Transition.Child
      as={Fragment}
      enter="transition-all ease-in-out duration-300"
      enterFrom="translate-x-[-100%]"
      enterTo="translate-x-0"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[-100%]"
    >
      <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
        <div className="p-4">
          <button
            className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <XMarkIcon className="h-6" />
          </button>

          <div className="mb-4 w-full">
            <Search />
          </div>
          {menu.length ? (
            <ul className="flex w-full flex-col">
              {menu.map((item: Menu) => (
                <li
                  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  key={item.title}
                >
                  <Link href={item.path} onClick={closeMobileMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Dialog.Panel>
    </Transition.Child>
  </Dialog>
</Transition> */
