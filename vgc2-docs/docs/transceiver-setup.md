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

### 2. トランシーバー機能の有効化方法

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