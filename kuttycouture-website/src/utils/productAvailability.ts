import type { Product } from "../types/product";

export function getAvailabilityLabel(availability: Product["availability"]): string {
  switch (availability) {
    case "in-stock":
      return "Available";
    case "low-stock":
      return "Limited Availability";
    case "out-of-stock":
      return "Currently Unavailable";
  }
}

export function getAvailabilityClassName(
  availability: Product["availability"],
): string {
  switch (availability) {
    case "in-stock":
      return "text-[var(--kc-availability-available)]";
    case "low-stock":
      return "text-[var(--kc-availability-limited)]";
    case "out-of-stock":
      return "text-[var(--kc-availability-unavailable)]";
  }
}
