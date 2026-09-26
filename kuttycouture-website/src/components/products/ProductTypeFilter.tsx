export type ProductTypeFilterOption = {
  value: string;
  label: string;
};

type ProductTypeFilterProps = {
  options: ProductTypeFilterOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  label?: string;
};

export function ProductTypeFilter({
  options,
  selectedValue,
  onValueChange,
  label = "Product Type",
}: ProductTypeFilterProps) {
  return (
    <div className="mt-10">
      <div className="hidden md:block">
        <p
          id="product-type-filter-label"
          className="text-sm font-medium text-[var(--kc-text)]"
        >
          {label}
        </p>

        <div
          className="mt-3 flex flex-wrap gap-2"
          aria-labelledby="product-type-filter-label"
        >
          <FilterButton
            label="All Products"
            isSelected={selectedValue === "all"}
            onClick={() => onValueChange("all")}
          />

          {options.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              isSelected={selectedValue === option.value}
              onClick={() => onValueChange(option.value)}
            />
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <label
          htmlFor="product-type-filter-select"
          className="text-sm font-medium text-[var(--kc-text)]"
        >
          {label}
        </label>

        <select
          id="product-type-filter-select"
          value={selectedValue}
          onChange={(event) => onValueChange(event.target.value)}
          className="mt-2 min-h-11 w-full rounded-[var(--kc-radius-sm)] border border-[var(--kc-border)] bg-[var(--kc-surface)] px-3 text-sm text-[var(--kc-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2"
        >
          <option value="all">All Products</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

type FilterButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

function FilterButton({ label, isSelected, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kc-primary)] focus-visible:ring-offset-2 ${
        isSelected
          ? "border-[var(--kc-primary)] bg-[var(--kc-primary)] font-semibold text-white ring-2 ring-[var(--kc-primary)] ring-offset-1"
          : "border-[var(--kc-border)] bg-[var(--kc-surface)] text-[var(--kc-text)] hover:border-[var(--kc-primary)]"
      }`}
    >
      {label}
    </button>
  );
}
