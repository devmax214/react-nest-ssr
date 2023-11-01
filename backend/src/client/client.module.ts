import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientMiddleware } from './client.middleware';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
  ],
  controllers: [ClientController],
  providers: [ClientService, AppService]
})
export class ClientModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ClientMiddleware)
      .forRoutes(ClientController);
  }
}
