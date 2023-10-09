import { NavigationItemFragment } from 'lib/contentful/generated/graphql';
import { FooterMenuItem } from '../client/footer-menu-item';

export const FooterMenu = ({ item }: { item: NavigationItemFragment }) => {
  return (
    <ul className="flex flex-col gap-3">
      <li>{item.externalName?.toUpperCase()}</li>
      {item.contentCollection?.items.map((item) => {
        if (item?.__typename === 'Link') {
          return (
            <li key={item?.externalName}>
              <FooterMenuItem item={item} />
            </li>
          );
        }
      })}
    </ul>
  );
};
