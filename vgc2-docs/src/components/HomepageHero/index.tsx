import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageHero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleMain}>VoiceGroupControl2</span>
          <span className={styles.heroTitleSub}>for VRChat</span>
        </h1>
        <p className={styles.heroSubtitle}>
          VRChatワールドの音声体験を次のレベルへ
        </p>
        <p className={styles.heroDescription}>
          プレイヤーをグループに分けて音声を制御。<br/>
          大規模イベントからロールプレイまで、あらゆるワールドに対応する高度な音声管理システム。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ドキュメントを見る
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            今すぐ始める
          </Link>
        </div>
      </div>
    </header>
  );
}