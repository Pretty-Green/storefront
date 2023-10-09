import { getCart } from 'lib/saleor';
import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return null;
  }
  const cart = await getCart(cartId);

  return <CartModal cart={cart} />;
}
