import Link from 'next/link';
import { IconLink } from '@tabler/icons-react';

type LogoProps = {
  scrolled: boolean;
};

const Logo = ({ scrolled }: LogoProps) => (
  <div className='w-60 max-w-full px-4'>
    <Link
      href='/'
      className={`flex w-full items-center gap-2 whitespace-nowrap text-xl font-black  ${
        scrolled ? ' py-4 lg:py-2' : ' py-5 lg:py-7'
      }`}
    >
      <IconLink size={32} />
      StockChain
    </Link>
  </div>
);

export default Logo;
