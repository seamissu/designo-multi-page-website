import styles from './page.module.scss';

import Header from '@/components/Header';
import LocationsMain from '@/components/LocationsMain';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <LocationsMain />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Locations - DESIGNO',
};

export default Page;
