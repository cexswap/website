import React from 'react';
import clsx from 'clsx';
import styles from './Roadmap.module.css';

const RoadmapList = [
    {
        title: 'Stage 1: Launching and Community Building',
        items: [
          'Project Idea\'s & Prototype design',
          'Team Building',
          'Website Creation & Launch',
          'Community Building & Social Campaign',
          'Smart Contract Creation and Verification',
          'Launchpad Marketing'
        ]
    },
    {
      title: 'Stage 2: Launchpad & Community Growth',
      items: [
        'Launchpad', 
        'Listing and Locking',
        'Listing on Coin Ranking: CoinMarketCap and Coingecko',
        'Community Growth Marketing',
        'Giving out Testers Spots to the Community',
      ]
  },
  {
    title: 'Stage 3: Development',
    items: [
      'Swap Contract Deployment',
      'Token Contract Audit and Swap Contract Audit',
      'Strategic Partnerships',
      'Lottery Development',
      'IDO Launchpad Development'
    ]
  },
  {
    title: 'Stage 4: Further Development',
    items: [
      'Strategic Partnerships',
      'Further Developments to be implemented and Roadmap, Website and White Paper to be updated as we grow.'
    ]
  }
];

function RoadmapItem({title, items}) {
    return (
        <div className={styles.roadmapCard}>
            <div>
                <div>
                    <h3 className={styles.roadmapCardTitle}>{title}</h3>
                    <ul>
                      {
                      items.map((item, index) => (
                        <li className={styles.roadmapCardText} key={index}>{item}</li>
                      ))
                      }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Roadmap() {
    return (
        <section id="roadmap">
            <h2 className={styles.roadmapListTitle}>Roadmap</h2>
            <div className={styles.roadmapList}>
                {
                    RoadmapList.map((props, idx) => (
                      <RoadmapItem key={idx} {...props} />
                    ))
                }
            </div>
        </section>
    );
}
