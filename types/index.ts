export type Work = {
	name: string;
	tools: string[];
	link?: string;
}

export interface Social {
	name: string;
	icon: string;
	href: string;
}

export type Skill = Omit<Social, "href">;
