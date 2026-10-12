---
sidebar_position: 9
sidebar_label: セーブ・ロードパネルの追加
---

import ClickableImage from '@site/src/components/ClickableImage';

# セーブ・ロードパネルの追加

VGC2のセーブ・ロードパネルを使用すると、グループ間の音量設定をプリセットとして保存し、必要に応じて呼び出すことができます。

<ClickableImage src="/img/save-load-panel--hero.png" alt="セーブ・ロードパネル概要" />

## セーブ・ロードパネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs/VGCPanels` フォルダを開きます

<ClickableImage src="/img/transceiver-setup--prefab-location.png" alt="セーブ・ロードパネルプレハブの場所" />

2. `VGCSaveLoadPanel.prefab` を見つけます
3. シーン上に配置します

## セーブ・ロードパネルの操作

### プリセットの保存
空きスロットを選択することで、プリセットとして保存が可能です。

<ClickableImage src="/img/save-load-panel--save-preset.png" alt="プリセットの保存" />

### プリセットの読み込み
保存されたプリセットを選択して読み込みます。

<ClickableImage src="/img/save-load-panel--load-preset.png" alt="プリセットの読み込み" />

### プリセット名の変更
保存されたプリセットの名前を変更することができます。

<ClickableImage src="/img/save-load-panel--rename-preset.png" alt="プリセット名の変更" />

### プリセットの削除
ゴミ箱のボタンをクリックすることで、プリセットの削除が可能です。

<ClickableImage src="/img/save-load-panel--delete-preset.png" alt="プリセットの削除" />

## 外部に値をセーブ・ロード(JSON入出力機能)

現在の設定をJSON形式でエクスポートしたり、JSON形式のデータをインポートすることができます。

### エクスポート
設定をJSON形式で出力し、外部に保存できます。

:::tip ヒント
ここで取得したJSON形式の文字列を用いて、UnityEditorに設定値を適用することが可能です。詳しくは[Json Loaderについて](/docs/volume-settings-and-upload)をご覧ください。
:::

<ClickableImage src="/img/save-load-panel--export-json.png" alt="JSONエクスポート" />

### インポート
JSON形式のデータを読み込んで設定を復元できます。

<ClickableImage src="/img/save-load-panel--import-json.png" alt="JSONインポート" />