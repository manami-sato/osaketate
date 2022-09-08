export type menuNavItemTypes = {
  title: string;
  path: string;
  id: number[];
};

export type menuNavTypes = {
  title: string;
  item: menuNavItemTypes[];
};

export type menuTypes = {
  id: number;
  title: string;
  price: number;
};
