export interface IUser {
  user_id: string;
  user_name: string;
  user_email: string;
  upvote_count: number;
}

export interface IStory {
  id: string;
  title: string;
  user_id: string;
  user_name: string;
  created_at: string;
  url_ref: string | null;
  content: string | null;
  comment_count: number;
  upvote_count: number;
  descendants: number; // total comment count
}

export interface IComment {
  id: string;
  post_id: string;
  user_id: string;
  user_name: string;
  created_at: string;
  content: string;
  parent_ref: string;
  child_ref: string[];
  upvote_count: number;
}

// folding story and comment types into one to 
// reflect potential API structure
export interface IPost {
  id: string;
  user: string;
  user_id: string;
  title: string | null;
  content: string | null;
  url: string | null;
  parent: string | null;
  children: string[];
  descendants: number;
  score: number;
}