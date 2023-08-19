import React from 'react';
import RootLayout from '@/components/layouts/RootLayout';

const HomePage = () => {
  return (
    <div>
      Home page
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}