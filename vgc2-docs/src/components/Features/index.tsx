import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'グループ音声制御',
    icon: (
      <svg className={styles.featureSvg} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="8" cy="8" r="3" opacity="0.8"/>
        <circle cx="16" cy="8" r="3" opacity="0.8"/>
        <circle cx="12" cy="16" r="3" opacity="0.8"/>
        <path d="M8 11v2.5a1 1 0 001 1h2m4 0h2a1 1 0 001-1V11m-6 4.5V13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    description: (
      <>
        ワールド内のエリアごとに音声を自動制御。
        プレイヤーの位置に基づいて、グループ間の音声の聞こえ方を細かく調整できます。
      </>
    ),
  },
  {
    title: 'マイク機能',
    icon: (
      <svg className={styles.featureSvg} viewBox="0 0 24 24" fill="currentColor">
        <rect x="10" y="3" width="4" height="10" rx="2"/>
        <path d="M8 11a4 4 0 008 0m-4 6v3m-3 0h6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M16 10a4 4 0 004-4m-4 8a4 4 0 004 4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
      </svg>
    ),
    description: (
      <>
        3つのモードで柔軟な音声拡張。
        使用者のみ、近くのプレイヤーも含める、常に近くのプレイヤーを拡声など、用途に応じて選択可能。
      </>
    ),
  },
  {
    title: 'トランシーバー機能',
    icon: (
      <svg className={styles.featureSvg} viewBox="0 0 24 24" fill="currentColor">
        <rect x="7" y="4" width="10" height="16" rx="2"/>
        <rect x="9" y="6" width="6" height="4" rx="1" opacity="0.3"/>
        <circle cx="10" cy="13" r="1" opacity="0.6"/>
        <circle cx="14" cy="13" r="1" opacity="0.6"/>
        <circle cx="10" cy="16" r="1" opacity="0.6"/>
        <circle cx="14" cy="16" r="1" opacity="0.6"/>
        <path d="M12 2v2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: (
      <>
        12チャンネルでワールド全体の通信を実現。
        離れた場所にいるプレイヤーとも、チャンネルを合わせるだけで会話が可能に。
      </>
    ),
  },
  {
    title: '設定の永続化',
    icon: (
      <svg className={styles.featureSvg} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 12V7a1 1 0 011-1h8l2 2h3a1 1 0 011 1v3"/>
        <rect x="3" y="12" width="18" height="8" rx="1"/>
        <path d="M12 15v3m-2-1l2 2 2-2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    description: (
      <>
        プリセット保存とJSON形式でのインポート/エクスポート。
        VRChat Persistenceに対応し、再入場時も設定を維持。
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          {icon}
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
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
          <p className={styles.sectionSubtitle}>
            VGC2は、VRChatワールドの音声体験を革新する4つの主要機能を提供します
          </p>
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