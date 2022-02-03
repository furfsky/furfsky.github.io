const tabs = {
  swords: '/assets/gallery/swords.png',
  armor: '/assets/gallery/armor.png',
  bows: '/assets/gallery/bows.gif',
  tools: '/assets/gallery/tools.png',
  talismans: '/assets/gallery/talismans.png',
  reforges: '/assets/gallery/reforges.png',
  misc: '/assets/gallery/misc.png',
};

const switchTab = (tabName) => {
  const tabby = document.getElementById('tabby');
  tabby.src = tabs[tabName];
};
