export interface Suggestion {
  name: string;
  latlng: [string, string];
}

export interface Filter {
  accessible: boolean;
  unisex: boolean;
  changing_table: boolean;
}
