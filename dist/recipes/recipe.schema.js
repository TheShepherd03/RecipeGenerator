"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RecipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    difficulty: { type: String, required: true },
    imageUrl: { type: String, required: true, default: 'https://via.placeholder.com/400x300' }
});
