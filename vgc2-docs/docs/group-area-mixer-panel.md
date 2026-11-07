---
sidebar_position: 10
sidebar_label: グループエリア ミキサーパネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# グループエリア ミキサーパネルの追加

:::info
グループエリア ミキサーパネルは特定のグループエリアの音量設定を行うものです。すべてのグループの音量設定を1つのパネルで管理したい場合は[ミキサーパネル](/docs/mixer-panel)のページをご覧ください。
:::

VGC2のグループエリア ミキサーパネルを使用すると、グループエリアの設定を視覚的に管理できます。

{/* TODO: 概要画像をGizmos非表示の正面画像に差し替える。 */}

<ClickableImage src="/img/group-area-mixer-panel--hero.png" alt="グループエリア ミキサーパネル概要" />

## グループエリア ミキサーパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="グループエリア ミキサーパネルプレハブの場所" />

2. `VGCGroupAreaMixerControlPanel.prefab` を見つけます
3. シーン上に配置し、グループエリア ミキサーパネルの設定を行います

## グループエリア ミキサーパネルの設定

### 最も近いグループの音量設定用にする(おすすめ)

Prefabをそのまま制御対象のグループエリア内に配置します。

<ClickableImage src="/img/group-area-mixer-panel--nearest-group-setting.png" alt="最も近いグループの設定" />

:::tip ヒント
GroupAreaMixerControlPanerlコンポーネントの最も近いGroupAreaを制御対象に自動設定にチェックが入っているかを確認してください。
:::

### Defaultグループの音量設定用にする

Defaultグループの制御用に配置する場合は、GroupAreaMixerControlPanerlコンポーネントの"最も近いGroupAreaを制御対象に自動設定"のチェックを外し、Defaultグループに設定をクリックします。

<ClickableImage src="/img/group-area-mixer-panel--default-group-setting.png" alt="Defaultグループの設定" />

### マニュアル設定

GroupAreaMixerControlPanerlコンポーネントの制御対象GroupIDを直接指定します。

<ClickableImage src="/img/group-area-mixer-panel--manual-setting.png" alt="マニュアル設定" />

## ワールド内での操作

配置時に設定した対象グループについて、次のタブで設定します。

### 送信音量設定

対象グループから各グループへ送信されるプレイヤー音声の音量を、フェーダーで調整します。

### マイク受信設定

対象グループ内のプレイヤーがマイク拡声音声を聞くかどうかを切り替えます。

<ClickableImage src="/img/group-area-mixer-panel--mic-receive-settings.png" alt="グループエリア ミキサーパネルのマイク受信設定" />

機能については[マイク受信設定](/docs/group-volume-settings#mic-receive-settings)をご覧ください。
