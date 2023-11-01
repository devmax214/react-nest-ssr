import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [RecipeModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
