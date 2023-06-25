import { type MicroCMSContentId, type MicroCMSDate } from 'microcms-js-sdk';

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: Category;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blogs = Array<Blog>;

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
