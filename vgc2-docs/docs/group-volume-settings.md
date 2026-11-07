---
sidebar_position: 6
---

import ClickableImage from '@site/src/components/ClickableImage';

# グループの音量設定

VGC2では、Configuratorを用いてグループ間のプレイヤー音声の送信音量を調整できます。2.9.2からは、グループごとにマイクの拡声音声を聞くかどうかも設定できます。

<ClickableImage src="/img/group-volume-settings--configurator.png" alt="VGC2 Configurator" />

## 設定方法

### 1. VGCManagerの音量設定パネル(Configurator)を開く

シーンに配置したVoiceGroupControl2のオブジェクトを選択し、インスペクター上に表示される「VGC2 Configuratorを開く」ボタンをクリックしてください。Configuratorが開かれます。

<ClickableImage src="/img/group-volume-settings--open-configurator.png" alt="Configuratorを開く" />

### 2. Configuratorの設定と適用

Configuratorには、次の2つの設定タブがあります。

| タブ |
| --- |
| 送信音量設定 |
| マイク受信設定 |

通常はフェーダー編集モードで表示されます。「マトリクス編集モード」をチェックすると、複数グループの設定を一覧で編集できます。マイク受信設定は、どちらの表示でもON/OFFで設定します。

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
「送信音量設定」の音量は0〜1で設定します。0で消音、1で通常の音量になります。「マイク受信設定」はON/OFFの設定です。
:::

:::tip ヒント
「送信音量設定」のフェーダーとマトリクスの数値は、マウスホイールでも編集できます。
:::

### Defaultグループについて

:::caution 注意
VGCにおいて、Defaultグループとはどこのグループエリアにも属していない場合、Defaultという名前のグループに自動所属します。
:::

<ClickableImage src="/img/group-volume-settings--default-group.png" alt="Defaultグループ" />

#### 2.1 送信音量設定：フェーダー編集モード

「送信音量設定」タブで送信元のグループを選択し、各グループへの音量を調整します。

{/* TODO: group-volume-settings--fader-mode-numbered.pngを2.9.2のラベル表示で撮り直す。 */}

<ClickableImage src="/img/group-volume-settings--fader-mode-numbered.png" alt="フェーダー編集モード" />

:::info 画像の説明
[1] **送信元グループの選択**

[2] **選択された送信元グループから送出される音量の設定フェーダー**
:::

#### 2.2 送信音量設定：マトリクス編集モード

「送信音量設定」タブで「マトリクス編集モード」をチェックします。

{/* TODO: group-volume-settings--matrix-mode-numbered.pngを2.9.2のボタン表記で撮り直す。 */}

<ClickableImage src="/img/group-volume-settings--matrix-mode-numbered.png" alt="マトリクス編集モード" />

:::info 画像の説明
[1] **送信元のグループID**

[2] **送信先のグループID**

[3] **送信元から送信先のグループIDに送信される音量**
:::

### マイク受信設定 {#mic-receive-settings}

選択したグループ内のプレイヤーがマイク拡声音声を聞くかどうかを設定します。無効の場合は送信音量設定で設定された音量で聞こえます。

1. 「マイク受信設定」タブを開きます。
2. 聞き手が所属するグループを選択します。
3. 「マイクの拡声音声を聞く」のチェックを切り替えます。
4. 「設定を適用」をクリックします。

<ClickableImage src="/img/group-volume-settings--mic-receive-settings.png" alt="Configuratorのマイク受信設定" />

:::info 設定の対象
この設定は、マイクを使うプレイヤーではなく、**聞き手が所属するグループ**に適用されます。マイクごとの設定ではなく、そのグループで聞くすべてのVGCマイクに共通です。Defaultグループにも設定できます。
:::

OFFは、そのプレイヤーの声を完全に消す設定ではありません。通常会話も消音したい場合は、「送信音量設定」で該当する送信元から聞き手のグループへの音量を0にしてください。トランシーバーの音声制御は、このマイク設定の対象外です。

「マトリクス編集モード」をチェックすると、各グループのマイク設定をON/OFFで一覧編集できます。通常表示とマトリクス表示は同じ設定値を使用します。

<ClickableImage src="/img/group-volume-settings--mic-receive-matrix.png" alt="マイク受信設定のマトリクス表示" />

パススルーモード中の扱いについては、[パススルーモードについて](/docs/passthrough-mode)をご覧ください。

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

### 例3: スタッフルームではマイクの拡声音声を聞かないようにする

「マイク受信設定」タブでスタッフルームのグループを選び、「マイクの拡声音声を聞く」をOFFにします。スタッフルーム内のプレイヤーにはマイクによる拡声が適用されなくなります。

## 高度な設定

### IgnorePassthroughModeの設定

:::tip ヒント
スタッフルームなど、音を確実に管理し続けてほしいエリアなどにはIgnorePassthroughModeを有効にすることをおすすめします。パススルーモードについて詳しくは[パススルーモードについて](/docs/passthrough-mode)をご覧ください。
:::

GroupAreaのオブジェクトを選択するとインスペクターにVGCGroupAreaコンポーネントが表示されます。この中にパススルーモードを無視する(IgnorePassthroughMode)という値があるので、これを必要に応じてチェックを入れます。

<ClickableImage src="/img/group-volume-settings--ignore-passthrough-mode.png" alt="IgnorePassthroughModeの設定" />
