import * as keys from "./keys.js";

export const addPageViewApi = async () => {
  
  const apiUrl = keys.addPageViewUrl;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store", // for always fresh dynamic data
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GetPageViews failed (${response.status}): ${text}`);
  }

  return await response.json();
};
