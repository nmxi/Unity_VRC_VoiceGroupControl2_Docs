import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - VRChat用音声グループ制御システム`}
      description="Voice Group Control 2は、VRChatワールドで使用できる高度な音声制御システムです。プレイヤーをグループに分けて音声を管理し、大規模イベントからロールプレイまで対応します。">
      <HomepageHero />
      <main>
        <Features />
      </main>
    </Layout>
  );
}