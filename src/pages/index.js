import React from 'react';
import styles from './index.module.css';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import About from '../components/about/About';
import Roadmap from '../components/roadmap/Roadmap';
import Layout from '@theme/Layout';
import Head from "@docusaurus/core/lib/client/exports/Head";

export default function Home() {
    return (
        <Layout pageClassName={styles.mainLayout}
                description="CEXSwap is a decentralized exchange (DEX) open source project that will work for any EVM compatible chain.">
            <Head>
                <title>CEXSwap | The Decentralized Exchange (DEX)</title>
                <meta property="og:title" content="CEXSwap | the Decentralized Exchange (DEX)" />
                <meta property="og:description" content="CEXSwap is a decentralized exchange (DEX) open source project that will work for any EVM compatible chain." />
                <meta property="og:url" content="https://www.cexswap.org/" />
                <meta property="og:image" content="#" />
                <meta property="og:site_name" content="CEXSwap" />
                <meta property="og:type" content="website" />
                <meta property="twitter:title" content="CEXSwap | the Decentralized Exchange (DEX)" />
                <meta name="twitter:description" content="CEXSwap is a decentralized exchange (DEX) open source project that will work for any EVM compatible chain." />
                <meta name="twitter:image:alt" content="CEXSwap | the Decentralized Exchange (DEX)" />
                <meta name="twitter:image" content="#" />
                <meta name="twitter:site" content="@cexswap" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={styles.mainContainer}>
                <div className="page-container">
                    <Banner />
                    <About />
                    <div className={styles.section}>
                        <Features/>
                    </div>
                    <Roadmap />
                </div>
                <Footer/>
            </main>
        </Layout>
    );
}
