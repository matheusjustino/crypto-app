export interface INews {
	url: string;
	name: string;
	description: string;
	image?: {
		thumbnail?: {
			contentUrl: string;
		};
	};
	provider: {
		name?: string;
		image?: {
			thumbnail?: {
				contentUrl: string;
			};
		};
	}[];
	datePublished: string;
}
