'use client';

import clsx from 'clsx';
import { LinkFragment } from 'lib/contentful/generated/graphql';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const HeaderMenuItem = ({ item }: { item: LinkFragment }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.url?.value);

  useEffect(() => {
    setActive(pathname === item.url?.value);
  }, [pathname, item.url?.value]);

  if (item.url?.value) {
    return (
      <Link
        href={item.url.value}
        className={clsx('underline-offset-4 hover:underline', {
          'text-black dark:text-neutral-300': active,
        })}
      >
        {item.externalName}
      </Link>
    );
  }

  return (
    <span
      className={clsx('underline-offset-4 hover:underline', {
        'text-black dark:text-neutral-300': active,
      })}
    >
      {item.externalName}
    </span>
  );
};
