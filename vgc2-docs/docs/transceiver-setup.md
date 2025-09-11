---
sidebar_position: 8
sidebar_label: トランシーバー機能の追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# トランシーバー機能の追加

VGC2のトランシーバー機能を使用すると、ワールド内の離れた場所にいるプレイヤー同士でリアルタイムに通話できます。同じチャンネルに参加しているプレイヤー間でのワールド内通話が可能で、イベントのスタッフ間の連絡や、ゲームワールドでのチーム戦の通話に使用することができます。

<ClickableImage src="/img/transceiver-setup--hero.png" alt="トランシーバー機能概要" />

## トランシーバー機能の仕様

- **12チャンネル対応**（1ch～12ch）
- **全チャンネル発報機能**
- **トランシーバー使用時の音声の音量はマイクと同じ**
- **受信音量設定機能** - 各プレイヤーが個別に受信音量を調整可能
  - 受信音量設定はPersistenceに保存され、ワールドに再入場しても設定が維持されます

### 音声の届き方について

- トランシーバーを用いて喋っているユーザの声は、同じチャンネルに属しているユーザ**のみ**に聞こえる仕様です
- どのチャンネルにも所属していないユーザには、トランシーバーを用いて喋っているユーザの声は聞こえません
- 全CH発報モードを有効化にしたユーザの声は、トランシーバーを有効化している全ユーザに聞こえるようになります（このときトランシーバーを有効化していないユーザには声は届きません）

### 複合的な動作について

各ケースでの挙動は以下の通りです：

**エリアグループに入りながらトランシーバを使用した場合**
- トランシーバの動作が優先されます

**トランシーバーとマイクを同時に使用した場合**
- トランシーバの動作が優先されます

## トランシーバーコントロールパネルの追加

### 1. コントロールパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="トランシーバープレハブの場所" />

2. `VGCTransceiverControlPanel.prefab` を見つけます
3. シーン上に配置します

:::tip 配置場所の推奨
- スタッフルームや控室
- 指令室やコントロールルーム
- プレイヤーがアクセスしやすい場所
:::

## チャンネル参加者情報パネルの追加

トランシーバーの同じチャンネルに参加しているプレイヤーの一覧を表示するパネルを追加できます。

<ClickableImage src="/img/transceiver-channel-information-panel.png" alt="チャンネル参加者情報パネル" />

### 1. チャンネル情報パネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="VGCPanelsフォルダの場所" />

2. `VGCTransceiverChannelInformationPanel.prefab` を見つけます
3. シーン上に配置します

## トランシーバー機能の有効化方法

デフォルト設定では、以下の操作でトランシーバー機能を有効化できます：

:::info 操作方法
**VRモード**: 左手か右手のコントローラーのトリガーを3回連打後長押し

**デスクトップモード**: F1キーを3回連打後長押し
:::

### 有効化方法の変更方法

:::caution 注意
特に理由がない場合は、デフォルト設定から変更することはおすすめしません。
:::

変更する場合は、VoiceGroupControl2オブジェクト内、VGCTransceiverActivatorを選択し、VGCTransceiverActivatorコンポーネントの設定を変更します。

<ClickableImage src="/img/transceiver-setup--activator-settings.png" alt="VGCTransceiverActivatorの設定" />