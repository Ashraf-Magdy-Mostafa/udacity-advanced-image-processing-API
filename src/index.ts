/* eslint @typescript-eslint/no-var-requires: "off" */
import express from 'express';
const app = express();
const port = 3000;
import sharp from 'sharp';
import fs from 'fs';
//resize Function//
async function resizeImage(
  width: number,
  height: number,
  orginalpath: string,
  resizedpath: string
): Promise<void> {
  try {
    await sharp(orginalpath)
      .resize({
        width: width,
        height: height,
      })
      .toFile(resizedpath);
    return;
  } catch (error) {
    console.log(error);
  }
}
// end of- resize Function //

app.listen(port, () => {
  console.log('server running on port: ', port);
});

// main route api //
app.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
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

    if (fs.existsSync(resImgPath)) {
      // if img found --yes -- upload it without resize ((cached from hdd not memory))
      console.log('file exist', 'caching the img');
      res.sendFile(resImgPath);
    } else {
      ////////if Img Not found ----- resize  then upload///

      console.log('not found', 'working to resize');
      await resizeImage(newwidth, newheight, fullPath, resImgPath);
      res.sendFile(resImgPath);
    }
  }
);
/////end of the get method//

export { app, resizeImage };
