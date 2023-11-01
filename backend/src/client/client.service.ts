import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ClientService {
  public async getApp() {
    const basePath = this.configService.get('CLIENT_BUILD_PATH');
    const filePath = path.resolve(path.join(basePath, 'index.html'));
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}