import React from 'react';
import clsx from 'clsx';
import styles from './Roadmap.module.css';

const RoadmapList = [
    {
        title: 'Q2 2022',
        items: [
            "Project Idea's & Prototype design",      
            "Team Building",  
            "Pitch deck Completed",
            "White paper",
            "Website Creation & Launch"
        ]
    },
    {
      title: 'Q3 2022',
      items: [
          "$CEX Token Creation", 
          "Strategic Plan",
          "Swap & Staking Dapp Development",
          "Launchpad"
      ]
  },
  {
    title: 'Q4 2022',
    items: [
        "Swap & Staking Dapp's Launch",      
        "Project Launched to Public", 
        "Partnerships", 
        "Token listing on Exchanges"
    ]
  },
  {
    title: 'Q1 2023',
    items: [
        "Governance Dapp's Development",
        "Lottery Development",
        "IDO Launchpad Development",      
        "Strategic Partnerships", 
        "Additional features"
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
