type Props = {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
};

export default function ProductFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="filter">
      <h4
        className={selected === "all" ? "tab-active" : ""}
        onClick={() => onSelect("all")}
      >
        Todas
      </h4>

      {categories.map((cat) => (
        <h4
          key={cat}
          className={selected === cat ? "tab-active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </h4>
      ))}
    </div>
  );
}
