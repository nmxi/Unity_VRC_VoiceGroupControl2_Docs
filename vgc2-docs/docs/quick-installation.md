---
sidebar_position: 3
---

import ClickableImage from '@site/src/components/ClickableImage';

# クイックインストール

VGC2を最速で導入するための手順です。このガイドでは、基本的な音声グループ分け機能のみをセットアップします。

## 導入手順

### 1. パッケージのインポート

1. [Booth](https://nmxi.booth.pm/)からVGC2パッケージをダウンロード
2. UnityプロジェクトでAssets > Import Package > Custom Packageを選択
3. ダウンロードしたunitypackageを選択してインポート

<ClickableImage src="/img/getting-started--package-import.png" alt="パッケージのインポート" />

### 2. VGC2 Prefabの配置

`Assets/mikinel/VoiceGroupControl2/VoiceGroupControl2.prefab`をシーンに配置します。

<ClickableImage src="/img/add-prefab--scene-placement.png" alt="VGC2 Prefabの配置" />

:::caution 注意
VoiceGroupControl2.prefabはシーンに1つだけ配置してください。
:::

### 3. VGCGroupAreaの追加

VGCManagerコンポーネントの「VGCGroupAreaを追加」ボタンをクリックして、GroupAreaを必要な数だけ追加します。

<ClickableImage src="/img/add-vgcgrouparea--add-button.png" alt="VGCGroupAreaの追加" />

### 4. GroupAreaの設定

各GroupAreaに対して以下を設定します：

1. **位置とサイズ**: シーンビューでギズモを使って調整
2. **Group ID**: 1から順番に設定（重複しないように）
3. **Group Name（任意）**: RoomA、RoomBなど分かりやすい名前

<ClickableImage src="/img/add-vgcgrouparea--groupid-setting.png" alt="GroupAreaの設定" />

GroupAreaの配置が完了すると、以下のような状態になります：

<ClickableImage src="/img/add-vgcgrouparea--hero-image.png" alt="GroupAreaの配置完了" />

### 5. 動作確認

1. VRChat SDK Control Panelを開く
2. 「Build & Test」でローカルテスト
3. 異なるGroupAreaに移動して音声分離を確認

## 最小構成例

最もシンプルな2部屋構成の例：

- **GroupArea 1**: Group ID = 1、Group Name = "Room A"
- **GroupArea 2**: Group ID = 2、Group Name = "Room B"

これだけで基本的な音声分離が機能します。

## 次のステップ

クイックインストールが完了したら：

- より詳細な設定は[🟢 基本機能導入手順](/docs/getting-started)を参照
- マイクやトランシーバー機能は[🟠 応用機能導入手順](/docs/microphone-setup)を参照

## トラブルシューティング

- **音声が分離されない**: GroupIDが正しく設定されているか確認
- **エラーが出る**: Unity/VRChat SDKのバージョンを確認
- **Prefabが見つからない**: パッケージが正しくインポートされているか確認