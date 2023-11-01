import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const response = context.switchToHttp().getResponse();
    const arg = context.getArgByIndex(0);
    if (arg && !arg.route.path.includes('api')) {
      console.log('here!', arg.route.path);
      return next.handle();
    }

    console.log('passed!', arg.route.path);
    return next.handle();
  }
}