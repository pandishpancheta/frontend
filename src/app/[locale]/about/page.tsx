import { unstable_setRequestLocale } from 'next-intl/server';

const AboutPage = ({
  props: { locale },
}: {
  props: {
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
