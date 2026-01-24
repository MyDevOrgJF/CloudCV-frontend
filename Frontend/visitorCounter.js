import { addPageViewApi } from "./functionsApiService.js";

window.onload = () => {
  addPageView();
};

const addPageView = async () => {
  try {

    const data = await addPageViewApi();

    if (!data || !data.views) {
      throw new Error(
        "Invalid data returned from AddPageView API. No views data.",
      );
    }

    updateDisplay(data.views);
    
  } catch (err) {
    console.error(err.message);
    return 0;
  }
};

const updateDisplay = (count) => {
  const el = document.getElementById("page-view-count");
  if (el) el.textContent = count;
};
