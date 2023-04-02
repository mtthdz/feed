export interface UserMeta {
  id: string;
  username: string;
  karma: number;
  submissions: string[];
  comments: string[];

  // everything below must be wrapped in permissions
  saved: string[];
  hidden: string[];
  email: string;
  created: Date;
  authToken: string;
  refreshToken: string;
}