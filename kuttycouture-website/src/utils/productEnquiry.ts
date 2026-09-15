import type { Product } from "../types/product";

type ProductEnquiryOptions = {
  size?: string;
  useLowStockWording?: boolean;
};

const whatsappBaseUrl = "https://wa.me/918610971628";

export function getWhatsAppUrl(message: string): string {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getProductEnquiryMessage(
  product: Product,
  { size, useLowStockWording = false }: ProductEnquiryOptions = {},
): string {
  const sizeMessage = size ? ` Size: ${size}.` : "";
  const color = product.color?.trim();
  const colorMessage = color ? `, Color: ${color}` : "";
  const messageStart = `Hi KuttyCouture, I'm interested in ${product.name} (SKU: ${product.sku}${colorMessage}).`;

  switch (product.availability) {
    case "in-stock":
      return `${messageStart}${sizeMessage} Is it available?`;
    case "low-stock":
      return `${messageStart}${sizeMessage} ${
        useLowStockWording ? "Is it still available?" : "Is it available?"
      }`;
    case "out-of-stock":
      return `${messageStart}${sizeMessage} I see it's currently unavailable. Could you let me know if it will be available again?`;
  }
}

export function getProductEnquiryUrl(
  product: Product,
  options?: ProductEnquiryOptions,
): string {
  return getWhatsAppUrl(getProductEnquiryMessage(product, options));
}
