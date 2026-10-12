---
sidebar_position: 11
sidebar_label: ミキサーパネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# ミキサーパネルの追加

:::info
ミキサーパネルはすべてのグループの音量設定を1つのパネルで行うものです。グループエリアごとに設定するためのミキサーパネルは[グループエリア ミキサーパネル](/docs/group-area-mixer-panel)のページをご覧ください。
:::

VGC2のミキサーパネルを使用すると、すべてのグループ間の音量設定を一つのパネルで管理できます。

<ClickableImage src="/img/mixer-panel--hero.png" alt="ミキサーパネル概要" />

## ミキサーパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="ミキサーパネルプレハブの場所" />

2. `VGCMixerPanel.prefab` を見つけます
3. シーン上に配置します

:::tip ヒント
VGCのミキサーは、送信グループからの音声の"送信音量"を設定することができます。フェーダーを操作することで、音声の音量の変更が可能です。
:::