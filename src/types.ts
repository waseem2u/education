import { ReactNode } from "react";

export type SvgParamTypes = {
  width: string;
  height: string;
  fill: string;
  className: string;
  onClick: () => void;
};

export type HowMojiDifferentTypes = {
  id: number;
  title: string;
  paragraph: string;
  icon: ReactNode;
};

export type TutorCustomCardTypes = {
  id: number;
  image: string;
  name: String;
  feild: string;
  review: string;
  totalStudent: string;
};

export type SuccessCardsTypes = {
  id: number;
  image: string;
  name: string;
  role: string;
  icon: ReactNode;
};

export type FooterTypes = {
  id: number;
  title: string;
  detail: string;
  icon: ReactNode;
  image: string;
};
