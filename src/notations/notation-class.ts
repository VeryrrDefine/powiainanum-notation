import PowiainaNum from "powiaina_num.js";

export abstract class Notation {
  NaNString: string = "NaN";
  PosInfString: string = "Infinity";
  NegInfString: string = "-Infinity";
  abstract format(num: PowiainaNum, precision?: number): string;
  constructor() {}
}
