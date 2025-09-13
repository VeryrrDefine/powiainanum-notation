import { EngineeringNotation, FGHJNotation } from "./fgh-j";
import { Notation } from "./notation-class";

export enum NotationsEnum {
  FGH_J,
  ENGINEERING,
}

export const NotationsMap = {
  [NotationsEnum.FGH_J]: FGHJNotation,
  [NotationsEnum.ENGINEERING]: EngineeringNotation,
};
