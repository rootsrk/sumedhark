import axios from "axios";

export const assemblyAPI = axios.create({
  withCredentials: true,
});

export const unauthenticatedAssemblyAPI = axios.create({
  withCredentials: true,
  headers: {
    clientAPIVersion: "1.5.0",
    XClient: window.location.host,
  },
});

export function getAPIErrorCode(error: unknown) {
  if (axios.isAxiosError(error)) {
    return (error.response?.data as { message: string }).message.toLowerCase();
  }
  return "unknown";
}
