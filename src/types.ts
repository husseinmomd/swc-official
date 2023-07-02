export interface IProfile {
  _id?: string;
  name: string;
  email: string;
  location: string;
  skills: string[];
  github: string;
  twitter: string;
  linkedIn: string;
  portfolio: string;
  picture?: IImage;
  bio: string;
  accepted?: boolean;
  dateAdded?: string;
}

export interface IBlog {
  _id?: string;
  authorName: string;
  category: string;
  title: string;
  imgUrl: IImage;
  body: string;
  date: string;
}

export interface IImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface IJob {
  _id?: number;
  jobTitle: string;
  imgUrl: IImage;
  companyName: string;
  workType: string;
  jobType: string;
  location: string;
  estimatedSalary: number;
  link: string;
  accepted?: boolean;
  companyEmail: string;
}
