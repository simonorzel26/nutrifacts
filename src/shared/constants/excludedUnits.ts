import { Unit } from 'convert-units';

type ExcludedUnits = Unit[];

export const excludedUnits: ExcludedUnits = [
  'mm',
  'cm',
  'm',
  'in',
  'ft-us',
  'ft',
  'mi',
  'mcg',
  //   'mg',
  //   'g',
  'kg',
  //   'oz',
  'lb',
  'mt',
  't',
  //   'ml',
  'l',
  //   'tsp',
  //   'Tbs',
  //   'fl-oz',
  //   'cup',
  'pnt',
  'qt',
  'gal',
  // 'ea',
  // 'dz',
];
