---
sidebar_position: 6
---

import ClickableImage from '@site/src/components/ClickableImage';

# グループの音量設定

VGC2では、Configuratorを用いてグループ間の音量を細かく制御できます。この機能により、隣接するエリアからの音漏れや、特定グループ間の音声伝達を調整できます。

<ClickableImage src="/img/group-volume-settings--configurator.png" alt="VGC2 Configurator" />

## 設定方法

### 1. VGCManagerの音量設定パネル(Configurator)を開く

シーンに配置したVoiceGroupControl2のオブジェクトを選択し、インスペクター上に表示される「VGC2 Configuratorを開く」ボタンをクリックしてください。Configuratorが開かれます。

<ClickableImage src="/img/group-volume-settings--open-configurator.png" alt="Configuratorを開く" />

### 2. Configuratorの設定と適用

Configuratorはグループごとの音量設定を行うためのツールです。通常はフェーダー編集モードになっていますが、マトリクス編集モードをチェックボックスから有効にすることで、マトリクス編集モードになります。

<div style={{display: 'flex', gap: '5px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <ClickableImage src="/img/group-volume-settings--configurator.png" alt="フェーダー編集モード" />
    <p style={{marginTop: '10px', fontSize: '14px', color: '#666'}}>フェーダー編集モード</p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <ClickableImage src="/img/group-volume-settings--matrix-mode.png" alt="マトリクス編集モード" />
    <p style={{marginTop: '10px', fontSize: '14px', color: '#666'}}>マトリクス編集モード</p>
  </div>
</div>

:::caution 注意
グループからグループに対しての音量は0~1で設定します。通常時に比べ、0が0%、1が100%の音量になります。
:::

:::tip ヒント
フェーダーとマトリクスの値は、マウスホイールを回転することで編集もできます。
:::

### Defaultグループについて

:::caution 注意
VGCにおいて、Defaultグループとはどこのグループエリアにも属していない場合、Defaultという名前のグループに自動所属します。
:::

<ClickableImage src="/img/group-volume-settings--default-group.png" alt="Defaultグループ" />

#### 2.1 フェーダー編集モードでの設定

<ClickableImage src="/img/group-volume-settings--fader-mode-numbered.png" alt="フェーダー編集モード" />

:::info 画像の説明
[1] **送信元グループの選択**

[2] **選択された送信元グループから送出される音量の設定フェーダー**
:::

#### 2.2 マトリクス編集モードでの設定

<ClickableImage src="/img/group-volume-settings--matrix-mode-numbered.png" alt="マトリクス編集モード" />

:::info 画像の説明
[1] **送信元のグループID**

[2] **送信先のグループID**

[3] **送信元から送信先のグループIDに送信される音量**
:::

### 3. 設定の適用

<ClickableImage src="/img/group-volume-settings--apply-settings.png" alt="設定の適用" />

Configurator内の「設定を適用」をクリックすることで、設定が完了します。

:::caution 注意
設定を適用を必ず行ってください。行わなかった場合、ワールドのアップロードが失敗する、または正常にギミックが動作しなくなります。
:::

## 使用例

エリアが2つ存在すると仮定します。

### 例1: 隣接する部屋の音漏れ

隣接する部屋から少し音が漏れるようにしたい場合：

- エリア1 → エリア2: 0.2（20%）
- エリア2 → エリア1: 0.2（20%）

### 例2: 一方的に音が聞こえるようにする

エリア1からエリア2への音声のみ伝達したい場合：

- エリア1 → エリア2: 1.0（100%）
- エリア2 → エリア1: 0.0（ミュート）

## 高度な設定

### IgnorePassthroughModeの設定

:::tip ヒント
スタッフルームなど、音を確実に管理し続けてほしいエリアなどにはIgnorePassthroughModeを有効にすることをおすすめします。パススルーモードについて詳しくは[パススルーモードについて](/docs/passthrough-mode)をご覧ください。
:::

GroupAreaのオブジェクトを選択するとインスペクターにVGCGroupAreaコンポーネントが表示されます。この中にパススルーモードを無視する(IgnorePassthroughMode)という値があるので、これを必要に応じてチェックを入れます。

<ClickableImage src="/img/group-volume-settings--ignore-passthrough-mode.png" alt="IgnorePassthroughModeの設定" />
