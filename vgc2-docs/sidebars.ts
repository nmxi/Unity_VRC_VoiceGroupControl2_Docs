import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manually define the sidebar structure
  tutorialSidebar: [
    'intro',
    'quick-installation',
    {
      type: 'category',
      label: '🟢 基本機能導入手順',
      collapsed: false,
      items: [
        'getting-started',
        'add-prefab',
        'add-vgcgrouparea',
        'group-volume-settings',
        'world-upload',
      ],
    },
    {
      type: 'category',
      label: '🟠 応用機能導入手順',
      collapsed: false,
      items: [
        'information-panel',
        'control-panel',
        'microphone-setup',
        'transceiver-setup',
        'save-load-panel',
        'group-area-mixer-panel',
        'mixer-panel',
        'additional-settings-panel',
        'passthrough-mode',
        'volume-settings-and-upload',
      ],
    },
  ],
};

export default sidebars;