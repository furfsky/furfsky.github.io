import { navigationRoutes } from "./navigation.config.js";

const buildImageSrc = (pageName, isHover = false) => {
  const BASE_IMG_URL = "/assets/navbar/";
  const HOVER_IMG_POSTFIX = "_pressed";
  return `${BASE_IMG_URL}${pageName}${isHover ? HOVER_IMG_POSTFIX : ""}.png`;
};

const handleImageHoverEvent = (event, isHover) => {
  if (!event || !event.target || !event.target.alt) return;
  event.target.src = buildImageSrc(event.target.alt, isHover);
};

const buildNavigationNode = (config) => {
  const navbar = document.createElement("nav");
  if (!config) {
    console.error("[buildNavigationPage]: Config is missing");
    return navbar;
  }
  const list = document.createElement("ul");
  list.addEventListener("mouseover", (e) => handleImageHoverEvent(e, true));
  list.addEventListener("mouseout", handleImageHoverEvent);
  Object.keys(config).forEach((pageName) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = config[pageName];
    const image = document.createElement("img");
    image.src = buildImageSrc(pageName);
    image.alt = pageName;
    link.appendChild(image);
    listItem.appendChild(link);
    list.appendChild(listItem);
  });
  navbar.appendChild(list);
  return navbar;
};

document.body.insertBefore(
  buildNavigationNode(navigationRoutes),
  document.body.firstChild
);
