import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction)  {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "a747c6da4b61dadfbd87f69fcb92271a") as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end(); 
  }
}