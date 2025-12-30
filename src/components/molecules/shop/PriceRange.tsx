import React from "react";

interface PriceRangeProps {
  value: [number, number];
  onChange: (val: [number, number]) => void;
  min: number;
  max: number;
}

export default function PriceRange({
  value,
  onChange,
  min,
  max,
}: PriceRangeProps) {
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value);
    onChange([value[0], newVal]);
  };

  return (
    <div className="price-range">
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={handleMaxChange}
        className="price-range__slider"
      />
      <div className="price-range__info">
        <span>
          ${value[0]} - ${value[1]}
        </span>
      </div>
    </div>
  );
}
