"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RecipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
});
