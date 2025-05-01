import styles from '../styles/RecruiterProfile.module.css';

const RecruiterProfile = () => {
  return (
    <div className={styles.profile}>
      <img src="/images/recruiter-avatar.png" alt="Recruiter Avatar" className={styles.avatar} />
      <h2 className={styles.name}>John Doe</h2>
      <p className={styles.title}>Senior Recruiter</p>
      <p className={styles.bio}>
        John has over 10 years of experience in the recruitment industry. He has successfully placed hundreds of candidates in top companies.
      </p>
    </div>
  );
};

export default RecruiterProfile;
