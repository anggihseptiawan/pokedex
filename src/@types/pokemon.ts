interface Types {
  type: {
    name: string;
    url: string;
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  id: number;
  name: string;
  types: Types[];
}
