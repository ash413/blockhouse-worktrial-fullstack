import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        The Crypto Price Tracker was designed to be intuitive and simple to use,
        with a clean interface for tracking cryptocurrency prices.
      </>
    ),
  },
  {
    title: 'Real-time Data',
    description: (
      <>
        Get up-to-date cryptocurrency prices with manual refresh capability
        and search filtering to find the coins you're interested in.
      </>
    ),
  },
  {
    title: 'Built with Next.js',
    description: (
      <>
        The application is built using Next.js for optimal performance and
        React Query for efficient state management.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}