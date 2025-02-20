import { IsString, IsNumber, IsArray, IsNotEmpty, IsUrl, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string = 'https://via.placeholder.com/400x300';

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  ingredients!: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  instructions!: string[];

  @IsNumber()
  @IsNotEmpty()
  cookingTime!: number;

  @IsNumber()
  @IsNotEmpty()
  servings!: number;

  @IsString()
  @IsNotEmpty()
  difficulty!: string;
}
