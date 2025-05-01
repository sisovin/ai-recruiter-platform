import styles from '../styles/CandidateProfile.module.css';

const CandidateProfile = () => {
  return (
    <div className={styles.profile}>
      <img src="/images/candidate-placeholder-avatar.png" alt="Candidate Avatar" className={styles.avatar} />
      <h2 className={styles.name}>Jane Smith</h2>
      <p className={styles.title}>Software Engineer</p>
      <p className={styles.bio}>
        Jane is a highly skilled software engineer with over 5 years of experience in the tech industry. She has worked on various projects and has a strong background in web development.
      </p>
    </div>
  );
};

export default CandidateProfile;
