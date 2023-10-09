'use client';
import Div100 from 'react-div-100vh';

function Hero({
  children,
  button,
}: React.PropsWithChildren<{ button: { text: string; url: string } }>) {
  return (
    <Div100 className="relative">
      <div className="absolute bottom-28 right-1/2 z-10 w-52 translate-x-1/2 bg-white p-8 text-center opacity-60">
        {button.text}
      </div>
      {children}
    </Div100>
  );
}

export default Hero;
