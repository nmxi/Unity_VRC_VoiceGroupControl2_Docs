import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: JSX.Element;
  description: JSX.Element;
  backgroundImage?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'グループ音声制御',
    backgroundImage: '/Unity_VRC_VoiceGroupControl2_Docs/img/mixer_sample.png',
    icon: (
      <img src="/Unity_VRC_VoiceGroupControl2_Docs/img/group-communication.svg" alt="グループ音声制御" className={styles.featureIcon} />
    ),
    description: (
      <>
        エリアごとに音声を分離。
        <br />
        音声を動的に調整します。
      </>
    ),
  },
  {
    title: 'マイクギミック',
    backgroundImage: '/Unity_VRC_VoiceGroupControl2_Docs/img/amplification_sample.png',
    icon: (
      <img src="/Unity_VRC_VoiceGroupControl2_Docs/img/amplification.svg" alt="マイクギミック" className={styles.featureIcon} />
    ),
    description: (
      <>
        マイクのモードは3種類。
        <br />
        イベント司会や案内に最適。
      </>
    ),
  },
  {
    title: 'トランシーバーギミック',
    backgroundImage: '/Unity_VRC_VoiceGroupControl2_Docs/img/transceiver_sample.png',
    icon: (
      <img src="/Unity_VRC_VoiceGroupControl2_Docs/img/transceiver.svg" alt="トランシーバーギミック" className={styles.featureIcon} />
    ),
    description: (
      <>
        ワールド内通話可能。
        <br />
        スタッフ間の連絡に最適。
      </>
    ),
  },
  {
    title: 'セーブ・ロード機能',
    backgroundImage: '/Unity_VRC_VoiceGroupControl2_Docs/img/preset_sample.png',
    icon: (
      <img src="/Unity_VRC_VoiceGroupControl2_Docs/img/save.svg" alt="セーブ・ロード機能" className={styles.featureIcon} />
    ),
    description: (
      <>
        設定をセーブ・ロードする機能。
        <br />
        文字列での入出力も可能。
      </>
    ),
  },
];

function Feature({title, icon, description, backgroundImage}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <div className="text--center">
            {icon}
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {backgroundImage && (
            <div className={styles.featureImageWrapper}>
              <img 
                src={backgroundImage} 
                alt={title}
                className={styles.featureImage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>主要機能</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}