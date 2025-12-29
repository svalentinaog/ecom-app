export type Product = {
  id: string;
  name: {
    es: string;
    en: string;
  };
  price: number;
  category: {
    es: string;
    en: string;
  };
  image: string;
  points: number;
};
