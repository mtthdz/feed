export interface IUser {
  user_id: string;
  user_name: string;
  user_email: string;
  upvote_count: number;
}

// folding story and comment types into one to 
// reflect potential API structure
export interface IPost {
  id: string;
  created_at: string;
  user: string;
  user_id: string;
  title: null | string;
  content: null | string;
  url: null | string;
  parent: null | string;
  children: IPost[];
  descendants: number;
  score: number;
}