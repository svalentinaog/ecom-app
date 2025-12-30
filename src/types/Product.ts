export type TranslationMap = {
  es: string;
  en: string;
};

export type Product = {
  id: number;
  name: TranslationMap;
  price: number;
  oldPrice: number;
  discount: number;
  category: TranslationMap;
  subCategory: TranslationMap;
  image: string;
  points: number;
};
