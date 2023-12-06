import styles from './page.module.scss';

import Header from '@/components/Header';
import ContactMain from '@/components/ContactMain';
import ContactFooter from '@/components/ContactFooter';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ContactMain />
      <ContactFooter />
    </div>
  );
}

export default Home;
