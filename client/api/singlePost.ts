export interface singlePostMeta {
  id: string;
  title: string;
  url: string;
  date: string;
  user: string;
  karma: number;

  // TODO: determine comment structure wrt 
  comments: string[];
}

export const singlePost = {
  id: '92840238421',
  title: 'Launch HN: Bloop (YC S21) - Code Search with GPT-4',
  url: '',
  date: '',
  karma: 4,
  comments: ['982423', '928323', '209835'],
}
