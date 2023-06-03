import { join } from "path";
import { loadEnv } from "vite";

export function getHTMLData(mode: string) {
  const env = loadEnv(mode, join(process.cwd(), "config"));
  const appVersion = env.VITE_APP_VERSION;

  const commonValues = {
    appVersionInfo: `<meta name="version" content="${appVersion}"/>`,
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
