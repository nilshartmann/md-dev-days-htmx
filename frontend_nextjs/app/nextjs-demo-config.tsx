// initial Demo Konfiguration::::::::::

export const slowDown_IncreaseLikes = 0;
export const slowDown_GetFeedbacks = 2400;
export const slowDown_GetRecipe = 1200;
export const debounce_search = 200;
export const slowDown_search = 0;

// Für 2. Demo auf true setzen:
export const showNextLogoInHeader = true;
export const enableSuspenseForFeedback = false;

// //////////////////////////////////////////////////////
export const enableTanstackQueryDevTools = false;
export const backendUrl = "http://localhost:9080";

/** number of recipes on /recipes */
export const recipesPerPage = 6;

/** slowdown reading of /recipes */
export const slowDown_GetRecipeList = 0;

/** delay after submitting the add feedback form */
export const slowDown_AddFeedback = 0;

/** delay after submitting the newsletter form
 * note that there is a default delay of 250ms in the server
 * */
export const slowDown_SubscribeNewsletter = 2500;
