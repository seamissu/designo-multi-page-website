import styles from './page.module.scss';

import Header from '@/components/Header';
import AppMain from '@/components/AppMain';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AppMain />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'App Design - DESIGNO',
};

export default Page;
