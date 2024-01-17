import express, { Request, Response } from 'express';

const app = express();
const port = 3069; // Ensure this is different from Vite's port

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
