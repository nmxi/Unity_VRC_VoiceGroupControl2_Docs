---
sidebar_position: 3
sidebar_label: グループエリアの追加と設定
---

import ClickableImage from '@site/src/components/ClickableImage';

# グループエリアの追加と設定

<ClickableImage src="/img/add-vgcgrouparea--hero-image.png" alt="VGCGroupAreaの概要" />

VGCGroupAreaは、音声グループを分けるためのエリアを定義するコンポーネントです。このエリア内にいるプレイヤーは特定のGroupIDに属し、そのGroupIDを元に音声が制御されます。

このセクションではVGCGroupAreaをシーンに設定します。

## VGCGroupAreaの追加

VGCManagerコンポーネントのエディタ上に表示されている"VGCGroupAreaを追加"のボタンをクリックすることで、GroupAreaをシーンに追加することができます。

<ClickableImage src="/img/add-vgcgrouparea--add-button.png" alt="VGCManagerのVGCGroupAreaを追加ボタン" />

シーンにVGCGroupAreaが追加された状態

<ClickableImage src="/img/add-vgcgrouparea--scene-with-area.png" alt="シーンにVGCGroupAreaが追加された状態" />

:::tip
既存のVGCGroupAreaを複製して配置することも可能です。
:::

<ClickableImage src="/img/add-vgcgrouparea--duplicate-area.gif" alt="VGCGroupAreaの複製" />

## GroupIDを設定

GroupAreaに入ったときに属するGroupIDを設定します。

<ClickableImage src="/img/add-vgcgrouparea--groupid-setting.png" alt="GroupIDの設定" />

## GroupNameを設定(任意)

必要に応じてグループ名を付けます。例としてRoomA, RoomBやStaffRoomなどに設定すると良いでしょう。

<ClickableImage src="/img/add-vgcgrouparea--groupname-setting.png" alt="GroupNameの設定" />

## GroupAreaの範囲を編集

シーン上のギズモを操作することでGroupAreaの大きさを変更できます。スケールを直接編集することも可能です。

<ClickableImage src="/img/add-vgcgrouparea--resize-gizmo.gif" alt="GroupAreaのサイズ変更操作" />

### 複雑な範囲の配置

範囲設定を複雑な形で行う場合は、同じGroupIDのGroupAreaを複数配置することで可能です。GroupAreaは重なっても問題ありません。

<ClickableImage src="/img/add-vgcgrouparea--complex-area-layout.png" alt="複雑な範囲の配置例" />

:::caution 注意
複数のIDのGroupAreaが重なった場合、内部的な処理順で、いずれかのGroupIDに属することになります。意図した動作のためには複数のIDの重なる部分はできるだけ小さく設定してください。
:::

<ClickableImage src="/img/add-vgcgrouparea--overlapping-areas.png" alt="複数のIDのGroupAreaが重なった例" />

## 高度な設定

### 一括でグループIDを設定する

複数のVGCGroupAreaのグループIDを一括で設定することができます。

1. 一括でグループIDを設定したいエリア（ゲームオブジェクト）を選択します。

<ClickableImage src="/img/add-vgcgrouparea--batch-select.png" alt="複数のエリアを選択" />

2. MikinelTools/VoiceGroupControl2/Auto Number GroupIDsを選択

<ClickableImage src="/img/add-vgcgrouparea--auto-number-menu.png" alt="Auto Number GroupIDsメニュー" />

3. Auto Number GroupIDsのウィンドウ内の開始IDを設定して、適用をクリック

<ClickableImage src="/img/add-vgcgrouparea--auto-number-window.png" alt="Auto Number GroupIDsウィンドウ" />

4. 一括でグループIDの設定が完了します。

<ClickableImage src="/img/add-vgcgrouparea--auto-number-complete.png" alt="グループID設定完了" />
