'use client';

import clsx from 'clsx';
import { Link as LinkType } from 'lib/contentful/generated/graphql';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const FooterMenuItem = ({ item }: { item: LinkType }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.url?.url);

  useEffect(() => {
    setActive(pathname === item.url?.url);
  }, [pathname, item.url?.url]);

  if (item.url?.url) {
    return (
      <Link
        href={item.url.url}
        className={clsx(' underline-offset-4 hover:underline', {
          'text-black dark:text-neutral-300': active,
        })}
      >
        {item.externalName}
      </Link>
    );
  }

  return (
    <span
      className={clsx(' underline-offset-4 hover:underline', {
        'text-black dark:text-neutral-300': active,
      })}
    >
      {item.externalName}
    </span>
  );
};
