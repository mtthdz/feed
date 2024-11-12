import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.listen(port, () => {
  console.log(`feed server is running on http://localhost:${port}.`);
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'welcome to the feed api' });
});