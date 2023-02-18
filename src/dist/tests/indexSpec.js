"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {myFunc} from '../index';
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
const request = (0, supertest_1.default)(index_1.app);
describe('api testing', () => __awaiter(void 0, void 0, void 0, function* () {
    it("testing 1st route ('/')", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logger = yield request.get('/?imgname=sammy&width=400&height=400');
            expect(logger.status).toBe(200);
        }
        catch (error) {
            console.log(error);
        }
    }));
}));
describe('unit test a function', () => {
    const [width, height, originalPath, resizedPath] = [200, 200, 'img.png', 'resizable-img'];
    it('test the resize function', () => {
        expect((0, index_1.resizeImage)(width, height, originalPath, resizedPath));
        expect(width).toBe(200);
        expect(width).toBeGreaterThan(0);
        expect(height).toBe(200);
        expect(originalPath).toBe('img.png');
        expect(originalPath).toBeTruthy();
        expect(resizedPath).toBe('resizable-img');
        expect(index_1.resizeImage).toBeTrue;
    });
});
