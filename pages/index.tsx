import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecruiterProfile from '../components/RecruiterProfile';
import CandidateProfile from '../components/CandidateProfile';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Recruiter Platform</title>
        <meta name="description" content="AI-powered recruiter platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the AI Recruiter Platform
        </h1>

        <p className={styles.description}>
          Manage candidates and job applications efficiently with AI.
        </p>

        <div className={styles.profiles}>
          <RecruiterProfile />
          <CandidateProfile />
        </div>
      </main>

      <Footer />
    </div>
  );
}
