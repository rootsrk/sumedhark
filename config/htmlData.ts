import { join } from "path";
import { loadEnv } from "vite";

export function getHTMLData(mode: string) {
  const env = loadEnv(mode, join(process.cwd(), "config"));
  const apiURL = env.VITE_API_URL;
  const appVersion = env.VITE_APP_VERSION;

  const commonValues = {
    appVersionInfo: `<meta name="version" content="${appVersion}"/>`,
    apiURL,
  };

  if (mode === "development") {
    return {
      ...commonValues,
    };
  }

  return {
    ...commonValues,
  };
}
