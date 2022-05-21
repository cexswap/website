import React from 'react';
import styles from './token.module.css';
import Layout from '@theme/Layout';
import Head from "@docusaurus/core/lib/client/exports/Head";

export default function Token() {
    return (
        <Layout pageClassName={styles.mainLayout}
                description="$CEX Token is the governance token for CEXSwap.">
            <Head>
                <title>$CEX token | The governance token for CEXSwap</title>
                <meta property="og:title" content="$CEX token | The governance token for CEXSwap" />
                <meta property="og:description" content="$CEX Token is the governance token for CEXSwap." />
                <meta property="og:url" content="https://www.cexswap.org/" />
                <meta property="og:image" content="#" />
                <meta property="og:site_name" content="CEXSwap" />
                <meta property="og:type" content="website" />
                <meta property="twitter:title" content="$CEX token | The governance token for CEXSwap" />
                <meta name="twitter:description" content="$CEX Token is the governance token for CEXSwap." />
                <meta name="twitter:image:alt" content="$CEX token | The governance token for CEXSwap" />
                <meta name="twitter:image" content="#" />
                <meta name="twitter:site" content="@cexswap" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main className={styles.mainContainer}>
                $CEX Token
            </main>
        </Layout>
    );
}
