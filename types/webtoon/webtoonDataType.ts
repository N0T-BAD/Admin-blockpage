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
  data: [{
    webtoonId: number;
    webtoonTitle: string;
    webtoonDescription: string;
    genre: string;
    publicationDays: string;
    creator: string;
    illustrator: string;
    webtoonMainImage: string;
    webtoonThumbnail: string;
  }]
}

export interface WebtoonDetailType {
  data: {
    webtoonId: number;
    webtoonTitle: string;
    webtoonDescription: string;
    genre: number;
    publicationDays: number;
    creator: string;
    creatorId: string;
    illustrator: string;
    webtoonMainImage: string;
    webtoonThumbnail: string;
  }
}

export interface episodeStateType {
  data: [{
    webtoonId: number;
    episodeId: number;
    episodeTitle: string;
    uploadDate: string;
    authorWords: string;
    thumbnail: string;
    episodeNumber: number;
  }]
}

export interface episodeDetailType {
  data: {
    episodeId: number;
    episodeTitle: string;
    episodeNumber: number;
    author: string;
    uploadDate: string;
    authorWords: string;
    episodeThumbnail: string;
    images: [{
      imageUrl: string;
    }]
  }
}

export interface WebtoonModifyType {
  data: [{
    webtoonId: number;
    webtoonTitle: string;
    webtoonDescription: string;
    genre: string;
    publicationDays: string;
    main: string;
    thumbnail: string;
  }]
}