import PowiainaNum from "powiaina_num.js";
import { Notation } from "../notation-class";
import formatXEY from "./xey-format";

export class FGHJNotation extends Notation {
  format(num: PowiainaNum, precision?: number): string {
    return formatXEY(num, precision);
  }
}
export class EngineeringNotation extends Notation {
  format(num: PowiainaNum, precision?: number): string {
    return formatXEY(num, precision, {
      engineering: true,
      UCF: false,
      reciprocate_format: false,
    });
  }
}
