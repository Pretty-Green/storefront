import Image from 'next/image';
import cartIcon from '../../assets/cart.svg';
export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center">
      <Image alt="cart icon" src={cartIcon} width={20} height={20} />

      {quantity ? (
        <div className="font-medium absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
