import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "https://blockpage.site";

const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
