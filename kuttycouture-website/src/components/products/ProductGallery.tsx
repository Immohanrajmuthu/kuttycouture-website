import { useEffect, useRef, useState } from "react";
import type { ProductImage } from "../../types/product";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const mobileGalleryRef = useRef<HTMLDivElement>(null);
  const mainImageButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const selectedImage = images[selectedIndex];
  const selectedImageColor = selectedImage.color?.trim();
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const mobileGallery = mobileGalleryRef.current;

    if (mobileGallery) {
      mobileGallery.scrollTo({
        left: selectedIndex * mobileGallery.clientWidth,
        behavior: "auto",
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previouslyFocusedElement = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [isLightboxOpen]);

  const selectPreviousImage = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const selectNextImage = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const handleMobileScroll = () => {
    const mobileGallery = mobileGalleryRef.current;

    if (!mobileGallery) {
      return;
    }

    const nextIndex = Math.round(
      mobileGallery.scrollLeft / mobileGallery.clientWidth,
    );

    if (nextIndex !== selectedIndex && nextIndex >= 0 && nextIndex < images.length) {
      setSelectedIndex(nextIndex);
    }
  };

  return (
    <>
      <section aria-label={`${productName} image gallery`}>
        <div className="md:hidden">
          <div
            ref={mobileGalleryRef}
            className="flex snap-x snap-mandatory overflow-x-auto rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)]"
            onScroll={handleMobileScroll}
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="w-full shrink-0 snap-center focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--kc-primary)]"
                aria-label={`View image ${index + 1} of ${images.length} fullscreen`}
                onClick={() => {
                  setSelectedIndex(index);
                  setIsLightboxOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </button>
            ))}
          </div>

          <p
            className="mt-3 text-center text-sm font-medium text-[var(--kc-muted)]"
            aria-live="polite"
          >
            Image {selectedIndex + 1} of {images.length}
          </p>

          {selectedImageColor && (
            <p
              className="mt-1 text-center text-sm text-[var(--kc-text)]"
              aria-live="polite"
            >
              Color: {selectedImageColor}
            </p>
          )}
        </div>

        <div className="hidden md:block">
          <button
            ref={mainImageButtonRef}
            type="button"
            className="block w-full overflow-hidden rounded-[var(--kc-radius-lg)] border border-[var(--kc-border)] bg-[var(--kc-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
            aria-label={`View ${selectedImage.alt} fullscreen`}
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="aspect-square w-full object-cover"
            />
          </button>

          {selectedImageColor && (
            <p className="mt-3 text-sm text-[var(--kc-text)]" aria-live="polite">
              Color: {selectedImageColor}
            </p>
          )}

          {hasMultipleImages && (
            <div className="mt-4 flex gap-3" aria-label="Product image thumbnails">
              {images.map((image, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={image.src}
                    type="button"
                    className={`relative overflow-hidden rounded-[var(--kc-radius-sm)] border bg-[var(--kc-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2 ${
                      isSelected
                        ? "border-[var(--kc-primary)] ring-2 ring-[var(--kc-primary)] ring-offset-2"
                        : "border-[var(--kc-border)] hover:border-[var(--kc-accent)]"
                    }`}
                    aria-label={`Show image ${index + 1} of ${images.length}: ${image.alt}`}
                    aria-current={isSelected ? "true" : undefined}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="size-20 object-cover"
                      loading="lazy"
                    />
                    {isSelected && <span className="sr-only">Selected image</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {isLightboxOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-0 top-0 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--kc-surface)] px-4 text-sm font-medium text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              onClick={() => setIsLightboxOpen(false)}
            >
              Close viewer
            </button>

            {hasMultipleImages && (
              <button
                type="button"
                className="absolute left-0 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--kc-surface)] px-4 text-sm font-medium text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Show previous image"
                onClick={selectPreviousImage}
              >
                Previous
              </button>
            )}

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-full max-w-full rounded-[var(--kc-radius-md)] object-contain"
            />

            {hasMultipleImages && (
              <button
                type="button"
                className="absolute right-0 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--kc-surface)] px-4 text-sm font-medium text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Show next image"
                onClick={selectNextImage}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
