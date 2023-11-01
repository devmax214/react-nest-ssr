import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from '../app.service';

interface ResponseError extends Error {
  status?: number;
}

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = this.appService.getAssetPath(req.path);
      res.sendFile(file, (err: ResponseError) => {
        if (err) {
          res.status(err.status).end();
        }
      });
    } else {
      return next();
    }
  }
}