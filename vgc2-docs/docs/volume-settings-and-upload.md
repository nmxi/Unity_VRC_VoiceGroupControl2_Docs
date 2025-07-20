---
sidebar_position: 14
sidebar_label: Json Loaderについて
---

import ClickableImage from '@site/src/components/ClickableImage';

# Json Loaderについて

Json Loaderは、VRChat上で設定した音量設定をUnityEditorに反映させるための機能です。

<ClickableImage src="/img/json-loader--hero.png" alt="Json Loader概要" />

## 使用方法

### 1. VRChat上でJSON形式の設定を取得

[セーブ・ロードパネルのエクスポート機能](/docs/save-load-panel#エクスポート)を使用して、JSON形式の文字列を取得します。

### 2. UnityEditorでJson Loaderを開く

VoiceGroupControl2オブジェクトを選択し、インスペクターの「Json Loader」ボタンをクリックします。

<ClickableImage src="/img/json-loader--open.png" alt="Json Loaderを開く" />

### 3. JSONデータを貼り付けて適用

取得したJSON形式の文字列を貼り付け、「適用」ボタンをクリックします。

<ClickableImage src="/img/json-loader--paste-json.png" alt="JSONデータの貼り付け" />

### 4. ワールドをアップロード

設定が適用されたら、通常通りVRChat SDKを使用してワールドをアップロードします。

:::tip ヒント
この機能により、VRChat上で複数プレイヤーで調整した音量設定をUnityEditorに簡単に反映させることができるため、音量設定の効率化が可能です。
:::
