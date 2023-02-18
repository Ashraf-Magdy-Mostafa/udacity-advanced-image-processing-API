#Description:

 - this is a simple .Png Images Resizer Api.
 - Takes  a URL with params('imgname','width','height') (ex: http://localhost:3001/?imgname=sammy&width=400&height=400)
    //end of Description
 - included checking for pre-resized images, reloades them quickly via HDD cache.
 -includen 2 images(sammy.png && pica.png) dist(root/src/dist/original-img)

 creator:
 ashrafmagdy926@gmail.com

 # License:

 -current-version: v0.1.0 
 -feel free to edit the source code as u Like.

 # scripts:

    "test": "npm run compile  &&  jasmine",
    "compile": "npx tsc",
    "prettier": "prettier --config --write src/dist/*.js",
    "node": "node src/dist/index",
    "lint": "eslint  src/dist/index.js --ext .js  --fix",
    "jasmine": "jasmine",
    "comp-run":"npm run compile && npm run node"

 
# quick-start-server:
  --------
1) npm run compile ---- to compile the ts files
2) npm run lint  ------ lint & prettier
3) npm run jasmine ----- debugg(tests)
4) npm run node ----- start the server




# notes

-currently the api is working with png images only,
-no get response with error in .json (hoping to add it soon)ex(this imge doesn't exist and so..),
