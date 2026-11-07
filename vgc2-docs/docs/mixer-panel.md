---
sidebar_position: 11
sidebar_label: ミキサーパネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# ミキサーパネルの追加

:::info
ミキサーパネルはすべてのグループの音量設定を1つのパネルで行うものです。グループエリアごとに設定するためのミキサーパネルは[グループエリア ミキサーパネル](/docs/group-area-mixer-panel)のページをご覧ください。
:::

VGC2のミキサーパネルを使用すると、各グループの送信音量設定とマイク受信設定を一つのパネルで管理できます。

<ClickableImage src="/img/mixer-panel--hero.png" alt="ミキサーパネル概要" />

## ミキサーパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="ミキサーパネルプレハブの場所" />

2. `VGCMixerControlPanel.prefab` を見つけます
3. シーン上に配置します

## ワールド内での操作

左側の一覧から対象グループを選び、設定タブを切り替えます。

### 送信音量設定

選択したグループから各グループへ送信されるプレイヤー音声の音量を、フェーダーで調整します。

### マイク受信設定

選択したグループ内のプレイヤーがマイク拡声音声を聞くかどうかを切り替えます。

{/* TODO: マイク受信設定を開いたパネル画像を追加。対象グループの選択欄とトグルを含める。 */}

詳しい設定の意味は[マイク受信設定](/docs/group-volume-settings#mic-receive-settings)をご覧ください。