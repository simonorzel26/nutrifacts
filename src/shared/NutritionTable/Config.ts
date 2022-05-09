enum inputUnitTypes {
  Metric = 'metric',
  Imperial = 'imperial',
}

export type ReqConfig = {
  inputUnitType: inputUnitTypes.Metric | inputUnitTypes.Imperial | string;
};