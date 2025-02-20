"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const common_1 = require("@nestjs/common");
const recipe_service_1 = require("./recipe.service");
let RecipeController = class RecipeController {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    create(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipeService.create(recipe);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipeService.findAll();
        });
    }
    searchByIngredients(ingredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredientsArray = ingredients.split(',');
            return this.recipeService.searchByIngredients(ingredientsArray);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.recipeService.findOne(id);
            if (!recipe) {
                throw new common_1.NotFoundException('Recipe not found');
            }
            return recipe;
        });
    }
    update(id, recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedRecipe = yield this.recipeService.update(id, recipe);
            if (!updatedRecipe) {
                throw new common_1.NotFoundException('Recipe not found');
            }
            return updatedRecipe;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.recipeService.remove(id);
            if (!result) {
                throw new common_1.NotFoundException('Recipe not found');
            }
        });
    }
};
exports.RecipeController = RecipeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('ingredients')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "searchByIngredients", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "remove", null);
exports.RecipeController = RecipeController = __decorate([
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeController);
