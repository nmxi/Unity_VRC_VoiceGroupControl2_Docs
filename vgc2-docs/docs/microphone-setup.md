---
sidebar_position: 7
sidebar_label: マイク機能の追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# マイク機能の追加

VGC2のマイク機能を用いることで、プレイヤーの音声を拡声し、ワールド内の広範囲に声を届けることができる機能です。イベント司会や案内役として効果的に音声を拡声できます。3つのモードから用途に応じて選択できます。

<ClickableImage src="/img/microphone-setup--hero.png" alt="マイク機能" />

### 3つのマイクモード

1. **マイクUseしているプレイヤーのみ拡声**
   - マイクを持っているプレイヤーの音声のみを拡声
   - 司会者や発表者に最適

2. **マイクUse中のプレイヤー+マイクに近いプレイヤーを拡声**
   - マイクを持っているプレイヤーとその周囲のプレイヤーの音声を拡声
   - インタビューや対談に最適

3. **常時マイクONで近くに寄るだけで拡声される**
   - マイクの近くにいるプレイヤーの音声を常に拡声
   - 固定マイクやステージマイクに最適

## マイクのPrefabをシーンに追加

### 1. マイクプレハブの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs` フォルダを開きます

<ClickableImage src="/img/microphone-setup--prefab-location.png" alt="マイクプレハブの場所" />

:::tip ヒント
パッケージには3種類のセットアップ済みのマイクを同梱してあります。  
**VGCCondenserMic.prefab** - 常時マイクONで近くに寄るだけで拡声される  
**VGCMegaphone.prefab** - マイクUseしているプレイヤーのみ拡声  
**VGCMic.prefab** - マイクUse中のプレイヤー+マイクに近いプレイヤーを拡声
:::

2. 必要なマイクをシーン上に配置します。

:::tip ヒント
マイクは複数配置することも可能です。
:::

## マイクの詳細設定

### マイクの入力位置の調整

Micコンポーネントのマイク入力位置、マイク最大距離を変更することで、マイクオブジェクトの拡声される範囲を変更することが可能です。

<ClickableImage src="/img/microphone-setup--adjustment-settings.png" alt="マイク入力位置の調整設定" />

:::tip ヒント
マイクの入力位置と距離を編集ボタンをクリックすることで、シーンWindow上で直接マイクの入力位置を編集することも可能です。
:::

## マイク位置リセットボタンの設置

`Assets/mikinel/VoiceGroupControl2/Prefabs/Others/VGCRespawnObjectButton.prefab`をシーンに配置します。

<ClickableImage src="/img/microphone-setup--respawn-button.png" alt="マイク位置リセットボタン" />

VGCRespawnObjectコンポーネント内のTargetObjectsにボタンをInteractしたときにリセットしたいオブジェクトを追加します。

<ClickableImage src="/img/microphone-setup--target-objects.png" alt="TargetObjectsの設定" />


