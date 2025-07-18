---
sidebar_position: 8
sidebar_label: 各種設定パネルの使い方
---

# 各種設定パネルの使い方ガイド

VGC2には複数の設定パネルが用意されており、それぞれ異なる機能と役割を持っています。このガイドでは、各パネルの使い方と設定項目について詳しく説明します。

## 設定パネルの種類

VGC2で利用可能な設定パネル：

1. **VGC基本設定パネル** - 基本的な音声設定
2. **詳細パラメーター設定パネル** - 高度な音声制御
3. **ミキサーパネル** - リアルタイムの音量調整
4. **デバッグパネル** - 開発・テスト用

## VGC基本設定パネル

### 概要

VGC基本設定パネルは、最も重要な設定項目をまとめたメインコントロールパネルです。

### パネルの配置

1. `Assets/mikinel/VoiceGroupControl2/Prefabs` フォルダを開きます
2. `VGCBasicSettingsPanel.prefab` を配置
3. アクセスしやすい位置に設置

### 主要な設定項目

#### Group Settings
グループ関連の基本設定：

- **Active Groups**: 有効なグループ数（1-32）
- **Default Volume**: デフォルト音量（0-100%）
- **Crossfade Time**: グループ切り替え時のフェード時間

#### Voice Settings
音声の基本パラメータ：

- **Master Volume**: マスター音量
- **Voice Range Multiplier**: 音声範囲の倍率
- **Voice Falloff Type**: 距離減衰の種類

#### System Settings
システム全体の設定：

- **Update Rate**: 更新頻度（Hz）
- **Performance Mode**: パフォーマンスモード
- **Debug Mode**: デバッグ表示

### 使用方法

1. **基本調整の流れ**
   1. Active Groupsでグループ数を設定
   2. Master Volumeで全体音量を調整
   3. 必要に応じて詳細設定

2. **プリセットの活用**
   - 「Load Preset」で既存設定を読み込み
   - 「Save as Preset」で現在の設定を保存

## 詳細パラメーター設定パネル

### 概要

より細かい制御が必要な場合に使用する上級者向けパネルです。

### パネルの配置

1. `VGCAdvancedSettingsPanel.prefab` を配置
2. 管理者エリアや技術スタッフ用エリアに設置

### 高度な設定項目

#### Audio Processing
音声処理の詳細設定：

```
- Sample Rate: 48000Hz（推奨）
- Buffer Size: 512 samples
- Latency Mode: Low / Normal / High
- DSP Buffer Size: 1024
```

#### Spatial Audio
立体音響の設定：

- **3D Spatialize**: 3D音響の有効/無効
- **Doppler Level**: ドップラー効果の強度
- **Spread**: 音源の広がり
- **Rolloff Mode**: 距離減衰カーブ

#### Network Optimization
ネットワーク最適化：

- **Send Rate**: データ送信頻度
- **Interpolation**: 補間設定
- **Packet Size**: パケットサイズ
- **Priority System**: 優先度システム

### グループ間詳細設定

#### Volume Matrix
グループ間の音量を詳細に設定：

- 各グループペアの音量を個別調整
- 非対称な音量設定が可能
- リアルタイムプレビュー

#### Distance Override
グループごとの距離設定：

- Min Distance: 最小距離
- Max Distance: 最大距離
- Custom Curve: カスタム減衰カーブ

## ミキサーパネル

### 概要

DJミキサーのようなインターフェースで、リアルタイムに音量を調整できます。

### パネルの配置

1. `VGCMixerPanel.prefab` を配置
2. イベント会場のコントロールブースなどに設置

### ミキサー機能

#### Channel Strips
各グループのチャンネルストリップ：

- **Fader**: 音量フェーダー（-∞ to +12dB）
- **Mute**: ミュートボタン
- **Solo**: ソロボタン
- **Pan**: パンニング（L-R）

#### Master Section
マスターセクション：

- **Master Fader**: マスター音量
- **Limiter**: リミッター設定
- **Compressor**: コンプレッサー

#### Effects Section
エフェクト設定：

- **Reverb Send**: リバーブセンド量
- **Delay Send**: ディレイセンド量
- **EQ**: 3バンドイコライザー

### 実践的な使い方

#### イベント中の調整

1. **オープニング**
   - BGMグループを上げる
   - マイクグループを下げる

2. **本番中**
   - マイクグループを上げる
   - BGMを適度に下げる

3. **交流タイム**
   - 全体のバランスを均等に

#### ミキサープリセット

よく使う設定をプリセット保存：

```
プリセット例：
- "Speech": スピーチ用設定
- "Music": 音楽イベント用
- "Game": ゲーム用バランス
- "Silent": 最小音量設定
```

## デバッグパネル

### 概要

開発やトラブルシューティング時に使用する技術者向けパネルです。

### 主な機能

#### System Monitor
システム状態の監視：

- **CPU Usage**: CPU使用率
- **Memory Usage**: メモリ使用量
- **Network Traffic**: ネットワーク通信量
- **Active Players**: アクティブプレイヤー数

#### Audio Analyzer
音声解析ツール：

- **Spectrum Analyzer**: スペクトラム表示
- **Level Meter**: レベルメーター
- **Peak Hold**: ピークホールド表示

#### Debug Logs
デバッグログ表示：

- エラーログ
- 警告ログ
- 情報ログ
- カスタムフィルター

### トラブルシューティング機能

#### Connection Test
接続テスト機能：

- プレイヤー間の接続状態
- 遅延測定
- パケットロス率

#### Audio Test
音声テスト機能：

- テストトーンの再生
- ループバックテスト
- 録音・再生テスト

## パネルのカスタマイズ

### UI のカスタマイズ

1. **カラーテーマ**
   - ダークテーマ
   - ライトテーマ
   - カスタムカラー

2. **レイアウト**
   - コンパクトモード
   - 拡張モード
   - カスタムレイアウト

### アクセス権限の設定

各パネルに個別のアクセス権限を設定：

```csharp
Panel Access Levels:
- Public: 全員
- Member: メンバーのみ
- Staff: スタッフのみ
- Admin: 管理者のみ
- Owner: オーナーのみ
```

## ベストプラクティス

### パネル配置の推奨

1. **基本設定パネル**: メインエリアに1つ
2. **ミキサーパネル**: コントロールルームに
3. **詳細設定パネル**: スタッフルームに
4. **デバッグパネル**: 開発時のみ表示

### 運用上の注意

1. **権限管理を適切に**
   - 一般ユーザーには基本パネルのみ
   - スタッフには必要なパネルのみ

2. **設定変更の記録**
   - 重要な変更はログに記録
   - 変更前の設定をバックアップ

3. **定期的な確認**
   - 設定値の定期チェック
   - 異常値の早期発見

## まとめ

各設定パネルを適切に使い分けることで：

- 効率的な音声制御が可能
- トラブルの早期発見と対処
- イベントごとの最適化が簡単

次は[設定リファレンス](/docs/configuration-reference)で全パラメータの詳細を確認しましょう。