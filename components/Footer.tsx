import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} AI Recruiter Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
