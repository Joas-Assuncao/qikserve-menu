
export interface IImage {
  id: number;
  image: string;
}

export interface IModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
}

export interface IModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: IModifierItem[];
}

export interface IItem {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  modifiers?: IModifier[];
  images?: IImage[];
  available: boolean;
}

export interface ISection {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible?: number;
  images: IImage[];
  items: IItem[];
}

export interface IMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: ISection[];
}

export interface IRestaurant {
  id: number;
  name: string;
  internalName: string;
  description?: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3?: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: IWebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

interface IWebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}
