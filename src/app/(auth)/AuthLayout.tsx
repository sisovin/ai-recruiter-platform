import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="branding">
          <img src="/images/application-logo.png" alt="Application Logo" />
          <h1>AI Recruiter Platform</h1>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
