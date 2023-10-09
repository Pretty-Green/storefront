import { Separator } from '@/components/ui/separator';
import { getFooter } from 'lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './client/newsletter';
import { Copyright } from './server/copyright';
import { FooterMenu } from './server/footer-menu';
export default async function Footer() {
  const footer = await getFooter();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl text-xs">
        <div className="px-6">
          <div className=" flex w-full flex-col gap-6 py-12 ">
            <div className="flex flex-col gap-3">
              <h2 className="font-medium text-center">SIGN UP & GET 10% OFF</h2>
              <p className="text-center">
                Sign up for 10% off your first order* and be the first to know about future
                collaborations, new arrivals, exclusive offers & more. *10% off applies to
                full-priced items only.
              </p>
              <Newsletter />
            </div>
            <Separator />
            <div className="flex justify-between">
              <nav className="flex gap-5">
                {footer.desktopNavigation?.navigationItemsCollection?.items.map(
                  (navigationItem) => {
                    if (navigationItem) {
                      return (
                        <FooterMenu key={navigationItem?.externalName} item={navigationItem} />
                      );
                    }
                  },
                )}
              </nav>
              <nav className="flex items-start gap-3">
                {footer.socialLinksCollection?.items.map((social, i) => {
                  if (social?.mediaDesktop?.url && social?.link?.url?.value) {
                    return (
                      <Link
                        href={social?.link?.url?.value}
                        key={i}
                        className="transition-opacity hover:opacity-60"
                      >
                        <Image
                          src={social?.mediaDesktop?.url}
                          width={24}
                          height={24}
                          alt={'social?.externalName'}
                        />
                      </Link>
                    );
                  }
                  if (social?.mediaDesktop?.url) {
                    return (
                      <Image
                        src={social?.mediaDesktop?.url}
                        key={i}
                        width={24}
                        height={24}
                        alt={'social?.externalName'}
                      />
                    );
                  }
                })}
              </nav>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
