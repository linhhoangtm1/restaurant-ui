import React, { ReactNode } from "react";
import { ITwin, IRecipe } from "types";

export interface ITwoColSingleFeatureWithStats2 {
  subheading?: string | ReactNode;
  heading?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  imageSrc?: string;
  imageCss?: Object | null;
  imageContainerCss?: ITwin | null;
  imageDecoratorBlob?: boolean;
  imageDecoratorBlobCss?: ITwin | null;
  imageInsideDiv?: boolean;
  statistics?: null | { key: string; value: string }[];
  textOnLeft?: boolean;
}

export interface ITab {
  imageSrc?: string;
  title?: string;
  description?: string;
  url?: string;
}

export interface IThreeColSimple {
  cards: IRecipe[] | ITab[];
  linkText?: string;
  heading?: string | ReactNode;
  subheading?: string;
  description?: string;
  imageContainerCss?: any;
  imageCss?: Object | null;
}
