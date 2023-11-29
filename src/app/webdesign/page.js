import styles from './page.module.scss';

import Header from '@/components/Header';
import WebMain from '@/components/WebMain';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <WebMain />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Web Design - DESIGNO',
};

export default Home;
