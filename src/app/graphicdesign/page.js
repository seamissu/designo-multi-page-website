import styles from './page.module.scss';

import Header from '@/components/Header';
import GraphicMain from '@/components/GraphicMain';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <GraphicMain />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Graphic Design - DESIGNO',
};

export default Home;
