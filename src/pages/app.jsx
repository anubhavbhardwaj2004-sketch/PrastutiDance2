import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const AppPage = () => {
  const apkFile = '/android/app/build/outputs/apk/debug/prastuti-apk.apk';

  return (
    <div className="app-page">
      <div className="app-page-card glass-card">
        <h1>Prastuti Dance App</h1>
        <p>
          Get mobile-friendly access to classes, schedules, and announcements.
              Stay connected with the Prastuti community on the go! 
        </p>
        <div className="app-download-actions">
          <p>Download the Prastuti App for Android and access all features on the go!</p>
          <a href={apkFile} download="prastuti-apk.apk" className="btn-primary app-button">
            Download APK
          </a>
          <Link to="/" className="btn-primary app-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
