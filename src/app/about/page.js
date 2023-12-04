import styles from './page.module.scss';

import Header from '@/components/Header';
import AboutMain from '@/components/AboutMain';
import Footer from '@/components/Footer';

function Page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <AboutMain />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'About - DESIGNO',
};

export default Page;
