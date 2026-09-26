import type { Location } from "react-router-dom";

export type ProductNavigationState = {
  fromCollection: true;
  collectionPathname: string;
  collectionFilter?: string;
  collectionScrollPosition?: number;
  fromProductDetail?: true;
};

function isCollectionPathname(pathname: string): boolean {
  return pathname === "/collections" || pathname.startsWith("/collections/");
}

function getCollectionPathnameFromState(state: unknown): string | undefined {
  if (
    typeof state === "object" &&
    state !== null &&
    "fromCollection" in state &&
    "collectionPathname" in state &&
    state.fromCollection === true &&
    typeof state.collectionPathname === "string" &&
    isCollectionPathname(state.collectionPathname)
  ) {
    return state.collectionPathname;
  }

  return undefined;
}

export function getProductNavigationState(
  location: Location,
): ProductNavigationState | undefined {
  const collectionPathname = isCollectionPathname(location.pathname)
    ? location.pathname
    : getCollectionPathnameFromState(location.state);
  const collectionFilter = getCollectionFilterFromState(location.state);
  const collectionScrollPosition = getCollectionScrollPositionFromState(location.state);

  return collectionPathname
    ? {
        fromCollection: true,
        collectionPathname,
        ...(collectionFilter ? { collectionFilter } : {}),
        ...(collectionScrollPosition !== undefined ? { collectionScrollPosition } : {}),
      }
    : undefined;
}

export function isProductDetailPathname(pathname: string): boolean {
  return pathname.startsWith("/products/");
}

export function getCollectionFilterFromState(state: unknown): string | undefined {
  if (
    typeof state === "object" &&
    state !== null &&
    "collectionFilter" in state &&
    typeof state.collectionFilter === "string"
  ) {
    return state.collectionFilter;
  }

  return undefined;
}

export function getCollectionScrollPositionFromState(state: unknown): number | undefined {
  if (
    typeof state === "object" &&
    state !== null &&
    "collectionScrollPosition" in state &&
    typeof state.collectionScrollPosition === "number" &&
    Number.isFinite(state.collectionScrollPosition) &&
    state.collectionScrollPosition >= 0
  ) {
    return state.collectionScrollPosition;
  }

  return undefined;
}
