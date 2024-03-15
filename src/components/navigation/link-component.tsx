import Link from 'next/link';

const LinkComponent = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => (
  <Link
    href={href}
    className='mx-8 flex items-center whitespace-nowrap py-2 font-semibold text-[#bababa] text-text group-hover:text-text-important lg:mr-0 lg:inline-flex lg:px-0 lg:py-3'
  >
    {children}
  </Link>
);

export default LinkComponent;
