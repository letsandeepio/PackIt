export interface PackingListLocalizaton {
  country: string;
  city: string;
}

export interface PackingList {
  id: string;
  name: string;
  localization: PackingListLocalizaton;
  items: PackingListItems[];
}

export interface PackingListItems {
  name: string;
  quantity: number;
  isPacked: boolean;
}
