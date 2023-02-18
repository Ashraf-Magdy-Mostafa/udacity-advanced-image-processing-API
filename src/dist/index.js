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
exports.resizeImage = exports.app = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
//resize Function//
function resizeImage(width, height, orginalpath, resizedpath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)(orginalpath)
                .resize({
                width: width,
                height: height,
            })
                .toFile(resizedpath);
            return;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.resizeImage = resizeImage;
// end of- resize Function //
app.listen(port, () => {
    console.log('server running on port: ', port);
});
// main route api //
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //GET REQUEST//
    // variables from the get Reuest//
    const { width, height, imgname } = req.query;
    console.log(JSON.stringify(req.body));
    const newwidth = Number(width);
    const newheight = Number(height);
    const resizedImgName = `${imgname}_${width}_${height}`;
    const fullPath = `${__dirname}/original-img/${imgname}.png`;
    const resImgPath = `${__dirname}/resized-img/${resizedImgName}.png`; ///// resized img path
    // end of variables//
    if (fs_1.default.existsSync(resImgPath)) {
        // if img found --yes -- upload it without resize ((cached from hdd not memory))
        console.log('file exist', 'caching the img');
        res.sendFile(resImgPath);
    }
    else {
        ////////if Img Not found ----- resize  then upload///
        console.log('not found', 'working to resize');
        yield resizeImage(newwidth, newheight, fullPath, resImgPath);
        res.sendFile(resImgPath);
    }
}));
