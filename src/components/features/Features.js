import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'DEX',
        description: 'CEXSwap DEX allows you to trade safely and accurately using slippage and Price Impact. Enjoy the stability of decentralized trading with Slippage and Price Impact.',
        links: [
            {
                title: 'Launch App',
                href: 'https://app.cexswap.org'
            }
        ]
    },
    {
        title: 'Governance',
        description: 'CEXSwap is fully governed by his community through the usage of $CEX token. Community vote for swap fee, slippage fees, referral commission, liquidity providers earned commission.',
        links: [
            {
                title: 'DAO',
                href: '#'
            }
        ]
    },
    {
        title: 'Token Issuance',
        description: 'A total of 100 million $CEX tokens will be issued, but the CEXSwap team will try not to depreciate the value of $CEX tokens as much as possible through CEXSwap\'s unique deflationary policy. All tokens to be burned will be disclosed transparently.',
        links: [
            {
                title: '$CEX Token',
                href: '#'
            }
        ]
    },
];

function Feature({title, description, links}) {
    return (
        <div className={styles.featureCard}>
            <div>
                <div>
                    <h3 className={styles.featureCardTitle}>{title}</h3>
                    <p className={styles.featureCardText}>{description}</p>
                </div>
            </div>
            <div className={styles.featureCardLinks}>
                {
                    links.map((link, index) => {
                        if (link.title) {
                            return (
                                <Link href={link.href} className={styles.featureCardLinkWrap} key={index}>
                                    <p className={styles.featureCardLinkTitle}>
                                        <span>{link.title}</span>
                                    </p>
                                    <ArrowOutside className={styles.featureCardLinkIcon} />
                                </Link>
                            )
                        } else {
                            return <span/>
                        }

                    })
                }
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features">
            <h2 className={styles.featureListTitle}>Features</h2>
            <div className={styles.featureList}>
                {
                    FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))
                }
            </div>
        </section>
    );
}
