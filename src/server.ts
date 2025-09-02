import express, { Request, Response } from 'express';
const app = express();
const port: number = 3000;

app.get('/', (_req: Request, res: Response ): void => {
  res.send('Hello uma! Welcome to the application')
})

app.get('/uma', (_req: Request, res: Response ) : void => {
  res.send('Hello uma! Welcome to the application')
})

app.listen(port, () : void => {
  console.log(`Example app listening on port ${port}`)
})
