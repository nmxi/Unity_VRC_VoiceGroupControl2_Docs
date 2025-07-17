import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';
import UseCases from '@site/src/components/UseCases';

import styles from './index.module.css';

function TechnicalSpecs(): JSX.Element {
  return (
    <section className={styles.specs}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>技術仕様</h2>
          <p className={styles.sectionSubtitle}>
            VGC2は最新のVRChat環境に対応し、大規模ワールドでも安定動作
          </p>
        </div>
        <div className={styles.specGrid}>
          <div className={styles.specItem}>
            <h3>Unity</h3>
            <p>2022.3.22f1</p>
          </div>
          <div className={styles.specItem}>
            <h3>VRChat SDK</h3>
            <p>3.8.2</p>
          </div>
          <div className={styles.specItem}>
            <h3>UdonSharp</h3>
            <p>最新版対応</p>
          </div>
          <div className={styles.specItem}>
            <h3>最大人数</h3>
            <p>80人対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection(): JSX.Element {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>今すぐVGC2を導入しよう</h2>
          <p>
            詳しい導入方法やカスタマイズ方法は、ドキュメントをご覧ください。
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/installation">
              インストールガイド
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              ドキュメントを読む
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - VRChat用音声グループ制御システム`}
      description="VoiceGroupControl2は、VRChatワールドで使用できる高度な音声制御システムです。プレイヤーをグループに分けて音声を管理し、大規模イベントからロールプレイまで対応します。">
      <HomepageHero />
      <main>
        <Features />
        <UseCases />
        <TechnicalSpecs />
        <CTASection />
      </main>
    </Layout>
  );
}