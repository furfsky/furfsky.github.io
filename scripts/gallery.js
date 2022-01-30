const tabs = {
  swords: '/assets/gallery/swords/swords.png',
  armor: '/assets/gallery/armor/armor.png',
  bows: '/assets/gallery/bows/bows.gif',
  tools: '/assets/gallery/tools/tools.png',
  talismans: '/assets/gallery/talismans/talismans.png',
  reforges: '/assets/gallery/reforges/reforges.png',
  misc: '/assets/gallery/misc/misc.png',
  // changelog: '/assets/gallery/changelogs/1.3.2/1.3.2.gif',
};

const switchTab = (tabName) => {
  const tabby = document.getElementById('tabby');
  tabby.src = tabs[tabName];
};
