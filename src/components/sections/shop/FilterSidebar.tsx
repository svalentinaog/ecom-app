import { useTranslation } from "react-i18next";

// Interfaz para cuando traigas la data del backend
interface FilterCategory {
  id: string;
  name: string;
  count?: number;
}

export default function FilterSidebar() {
  const { t } = useTranslation("shop");

  // Mock de datos (esto es lo que vendrá del backend después)
  const categories: FilterCategory[] = [
    { id: "1", name: "Categoría 1", count: 12 },
    { id: "2", name: "Categoría 2", count: 5 },
    { id: "3", name: "Categoría 3", count: 8 },
  ];

  return (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <h3>{t("filters.categories")}</h3>
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.id} className="category-item">
              <label>
                <input type="checkbox" />
                <span>{cat.name}</span>
                <span className="count">({cat.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-group">
        <h3>{t("filters.prices")}</h3>
        <div className="price-range">
          {/* Aquí puedes usar un input type="range" o una librería como rc-slider */}
          <input type="range" min="0" max="1000" />
          <div className="price-labels">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      <button className="btn-clear">{t("filters.clear")}</button>
    </aside>
  );
}
