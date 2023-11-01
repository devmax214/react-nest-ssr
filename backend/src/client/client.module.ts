import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientMiddleware } from './client.middleware';
import { AppService } from '../app.service';
import { RecipeModule } from '../recipe/recipe.module';
import { RecipeService } from '../recipe/recipe.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    RecipeModule,
  ],
  controllers: [ClientController],
  providers: [ClientService, AppService, RecipeService]
})
export class ClientModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ClientMiddleware)
      .forRoutes(ClientController);
  }
}
