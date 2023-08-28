export interface Social {
  name: string;
  icon: string;
  href: string;
}

export type Skill = Omit<Social, "href">;
