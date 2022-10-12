export const ARRAY_START = 0;

export const INDEX_TO_HUMAN_OFFSET = 1;

export const MAX_BREAKPOINTS = {
  MOBILE: 550,
  SMALL_TABLET: 750,
  TABLET: 1100,
  LAPTOP: 1500,
};

export const DEFAULT_REM_PX_SIZE = 16;

export const QUERIES = {
  PHONES: `@media(max-width: ${MAX_BREAKPOINTS.MOBILE / DEFAULT_REM_PX_SIZE}rem)`,
  SMALL_TABLET: `@media(max-width: ${MAX_BREAKPOINTS.SMALL_TABLET / DEFAULT_REM_PX_SIZE}rem)`,
  TABLETS: `@media(max-width: ${MAX_BREAKPOINTS.TABLET / DEFAULT_REM_PX_SIZE}rem)`,
  LAPTOPS: `@media(max-width: ${MAX_BREAKPOINTS.LAPTOP / DEFAULT_REM_PX_SIZE}rem)`,
};
