export interface transactionHistoryData {
    id: number;
    name: string;
    webtoonsubcategories: webtoonsubcategories[];
    episodesubcategories: episodesubcategories[];
}

export interface webtoonsubcategories {
    subCategoryId: number;
    views: string;
    likes: string;
    title: string;
    author: string;
    imgurl: string;
    reason?: string;
}

export interface episodesubcategories {
    id: number;
    imgurl: string;
    title: string;
    rating: string;
    day: string;
    reason?: string;
}

export interface WebtoonStateType {
    id: number;
    title: string;
    description: string;
    genre: string;
    day: string;
    author: string;
    illustrator: string;
    mainImageData: string;
    thumbnailImageData: string;
    ask: boolean;
}

export interface episodeStateType {
    id: number;
    title: string;
    episodetitle: string;
    episodedescription: string;
    day: string;
    authortalk: string;
    thumbnailImage: string;
    edisodeImage: string;
    ask: boolean;
}