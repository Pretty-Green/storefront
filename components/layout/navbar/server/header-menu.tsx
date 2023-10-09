import { NavigationItem } from 'lib/contentful/generated/graphql';
import { HeaderMenuItem } from '../client/header-menu-item';

export const HeaderMenu = ({ item }: { item: NavigationItem }) => {
  return (
    <div className="dropdown dropdown-hover static">
      <span tabIndex={0} className="text-sm text-white">
        {item.externalName?.toUpperCase()}
      </span>
      <ul tabIndex={0} className="dropdown-content left-0 z-[1] w-full !scale-100 bg-base-100 p-2">
        {item.contentCollection?.items.map((item) => {
          return (
            <li key={item?.externalName}>
              <HeaderMenuItem item={item} />
            </li>
          );
        })}
        <div></div>
      </ul>
    </div>
  );
};
