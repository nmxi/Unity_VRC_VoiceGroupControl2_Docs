import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageHero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          <div className={styles.heroTitleWrapper}>
            <span className={styles.heroTitleSub}>VRChat Udon Sharp Gimmick</span>
            <div className={styles.heroTitleMainWrapper}>
              <img src="/Unity_VRC_VoiceGroupControl2_Docs/img/vgc2-logo.png" alt="VGC2 Logo" className={styles.heroLogo} />
              <span className={styles.heroTitleMain}>Voice Group Control 2</span>
            </div>
          </div>
        </h1>
        <p className={styles.heroDescription}>
          あらゆるワールドに対応する高度な音声管理システム。
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            ドキュメントを見る
          </Link>
        </div>
      </div>
    </header>
  );
}