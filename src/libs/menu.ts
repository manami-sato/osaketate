import { menuNavTypes, menuTypes } from '../types/menu';

export const menuNav: menuNavTypes[] = [
  {
    title: 'アルコール度数で選ぶ',
    item: [
      { title: 'つよい', path: 'hard', id: [3, 4] },
      { title: 'よわい', path: 'weak', id: [1, 2] },
    ],
  },
  {
    title: 'お酒の味で選ぶ',
    item: [
      { title: '甘い', path: 'sweet', id: [1] },
      { title: '辛い', path: 'dry', id: [3] },
      { title: 'ご飯に合う', path: 'pair', id: [1, 2, 3, 4] },
    ],
  },
  {
    title: '種類で選ぶ',
    item: [
      { title: '酎ハイ', path: 'chuhai', id: [1] },
      { title: 'カクテル', path: 'cocktail', id: [1, 2] },
      { title: '日本酒', path: 'sake', id: [1, 2] },
      { title: '焼酎', path: 'shochu', id: [3] },
      { title: 'ビール', path: 'beer', id: [] },
      { title: '蒸留酒', path: 'liquor', id: [2, 4] },
    ],
  },
];

export const menu: menuTypes[] = [
  {
    id: 1,
    title: 'レモンサワー',
    price: 400,
  },
  {
    id: 2,
    title: '梅酒',
    price: 400,
  },
  {
    id: 3,
    title: 'いも焼酎 佐藤 1合',
    price: 600,
  },
  {
    id: 4,
    title: 'ハイボール',
    price: 500,
  },
];

export const foodMenu: menuTypes[] = [
  {
    id: 1,
    title: '生ハム',
    price: 400,
  },
  {
    id: 2,
    title: '生ハムとバゲット',
    price: 700,
  },
];
