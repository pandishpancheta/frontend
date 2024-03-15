import { unstable_setRequestLocale } from 'next-intl/server';

const AboutPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default AboutPage;
