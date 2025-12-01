import type { ChangeEvent } from "react";
import { search } from "@/assets";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="searchbar">
      <img src={search} alt="Buscar" className="searchbar__icon" />
      <input
        type="text"
        placeholder="Buscador de productos..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
