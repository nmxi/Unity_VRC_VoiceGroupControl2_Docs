import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageHero from '@site/src/components/HomepageHero';
import Features from '@site/src/components/Features';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - VRChat用音声グループ制御システム`}
      description="Voice Group Control 2は、VRChatワールドで使用できる高度な音声制御システムです。プレイヤーをグループに分けて音声を管理し、大規模イベントからロールプレイまで対応します。">
      <Head>
        <meta property="og:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/vgc2-thumbnail.png`} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteConfig.url}${siteConfig.baseUrl}img/vgc2-thumbnail.png`} />
        <meta name="twitter:title" content={`${siteConfig.title} - VRChat用音声グループ制御システム`} />
        <meta name="twitter:description" content="Voice Group Control 2は、VRChatワールドで使用できる高度な音声制御システムです。" />
      </Head>
      <HomepageHero />
      <main>
        <Features />
      </main>
    </Layout>
  );
}