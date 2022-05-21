import React from 'react';
import styles from './Banner.module.css';
import Link from "@docusaurus/Link";
import ChevronRightImg from '../../../static/img/chevron-right.svg';

const BannerData = {
    title: 'CEXSwap dApp',
    text: 'CEXSwap will provide basic DEX functions, and at the same time provide service functions to enable Yield Farming so that users can utilize $CEX token as much as possible. Through this, you can access new features that were not used in the existing network.',
    button: {
        title: 'Launch dApp',
        href: 'https://app.cexswap.org'
    }
}

export default function Banner() {
    return (
        <section className={styles.bannerWrap}>
            <div className={styles.bannerFirstColumn}>
                <h2 className={styles.bannerTitle}>{BannerData.title}</h2>
                <p className={styles.bannerText}>{BannerData.text}</p>
                <Link to={BannerData.button.href} className={styles.bannerButton}>
                    <span>{BannerData.button.title}</span>
                    <ChevronRightImg/>
                </Link>
            </div>
        </section>
    );
}
