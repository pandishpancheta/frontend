import { unstable_setRequestLocale } from 'next-intl/server';

const ProfileImagesPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <h1>Profile Images</h1>
    </div>
  );
};

export default ProfileImagesPage;
