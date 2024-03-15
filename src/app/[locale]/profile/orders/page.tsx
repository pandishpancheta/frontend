import { unstable_setRequestLocale } from 'next-intl/server';

const ProfileOrdersPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <h1>Profile Orders</h1>
    </div>
  );
};

export default ProfileOrdersPage;
