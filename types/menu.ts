export type DietTag = "vegan" | "vejetaryen" | "glutensiz" | "acili" | "cok-acili" | "helal";

export type MenuItem = {
  id: string;
  name: string;
  nameUg?: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  ingredients?: string[];
  allergens?: string[];
  tags?: DietTag[];
  prepTime?: number;
  portion?: string;
};

export type Subgroup = {
  id: string;
  name: string;
  nameUg?: string;
  items: MenuItem[];
};

export type Category = {
  id: string;
  name: string;
  nameUg?: string;
  icon?: string;
  description?: string;
  descriptionUg?: string;
  items: MenuItem[];
  subgroups?: Subgroup[];
};

export type Menu = {
  restaurantName: string;
  restaurantNameUg?: string;
  categories: Category[];
};
