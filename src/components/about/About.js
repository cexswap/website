import React from 'react';
import clsx from 'clsx';
import styles from './About.module.css';
import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from "@docusaurus/core/lib/client/exports/Link";

const AboutList = [
  {
      title: 'About CEXSwap',
      descriptions: [
        'CEXSwap is an decentralized exchange (DEX) open source project that will work for any EVM compatible chain.',
        'CEXSwap DEX allows you to trade safely and accurately using slippage and Price Impact. Enjoy the stability of decentralized trading with Slippage and Price Impact.',
        'It will work like other DEX but will be fully governed by the community using the governance token ($CEX).',
        'The specials feature of this DEX is listed below (not limited to the list):', 
        '- Community can vote for swap fee, slippage fees, referral commission, liquidity providers earned commission.',
        '- Community can vote treasury and referral share',
        '- Support of referral system',
        '- And more',
        'CEXSwap will provide basic DEX functions, and at the same time provide service functions to enable Yield Farming so that users can utilize $CEX token as much as possible. Through this, you can access new features that were not used in the existing network.',
        'Most exchanges maintain an order book and facilitate matches between buyers and sellers.', 
        'CEXSwap smart contracts hold liquidity reserves of various tokens, and trades are executed directly against these reserves.', 
        'Prices are set automatically using the constant product x * y = k market maker mechanism, which keeps overall reserves in relative ' + 
        'equilibrium. Reserves are pooled between a network of liquidity providers who supply the system with tokens in exchange for a ' + 
        'proportional share of transaction fees.',
        'We are planning to create the most user-friendly decentralized exchange for tokens. We\'ve seen many projects which work just fine. However, there\'s a major problem with each of these. They are just too complicated for newbies to use.',
        'We\'d like to change that and create the most foolproof DEX possible. This is what crypto should be about after all.',
        'An important feature of CEXSwap is the utilization of a factory contract that deploys a separate exchange contract ' + 
        'for each token pair. These exchange contracts each hold independent reserves of token pairs. ' + 
        'This allows trades between the token pair based on the relative supplies.'
      ]
  }
];

function About({title, descriptions}) {
    return (
        <div className={styles.aboutCard}>
            <div>
                <div>
                    <h3 className={styles.aboutCardTitle}>{title}</h3>
                    {
                      descriptions.map(( desc, idx) => (
                        <p className={styles.aboutCardText} key={idx}>{desc}</p>
                      ))
                    }
                </div>
            </div>
        </div>
    );
}

export default function Abouts() {
    return (
        <section id="about">
            <div className={styles.aboutList}>
              {
                AboutList.map((props, idx) => (
                  <About key={idx} {...props} />
                ))
              }
            </div>
        </section>
    );
}
