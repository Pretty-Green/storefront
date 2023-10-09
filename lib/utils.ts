export function invariant<T>(val: T | null | undefined, message: string): asserts val is T {
  if (val === undefined || val === null) {
    throw new Error(message);
  }
}

import { ReadonlyURLSearchParams } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
