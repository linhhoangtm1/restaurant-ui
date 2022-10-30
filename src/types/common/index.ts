import tw from "twin.macro";

export interface ITwin {
  css?: typeof tw | null;
}

export interface IPaginate {
  size?: number
  search?: string
}