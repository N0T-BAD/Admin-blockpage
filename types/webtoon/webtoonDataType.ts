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

export interface CreatorName {
  data: [{
    creator: string;
  }]
}

export interface CreatorEmail {
  data: {
    email: string;
  }
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

export interface episodeStateType {
  data: [{
    webtoonId: number;
    episodeId: number;
    episodeTitle: string;
    uploadDate: string;
    authorWords: string;
    thumbnail: string;
  }]
}

export interface WebtoonModifyType {
  data: [{
    webtoonId: 0;
    webtoonTitle: string;
    webtoonDescription: string;
    genre: string;
    publicationDays: string;
    main: string;
    thumbnail: string;
  }]
}