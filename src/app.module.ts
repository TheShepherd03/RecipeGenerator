import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RecipeModule } from './recipes/recipe.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://AdminUser:mJsDwymWr6fwGPoN@clusterone.8fcw7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne'),
    RecipeModule,
  ],
})
export class AppModule {}