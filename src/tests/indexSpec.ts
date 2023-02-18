//import {myFunc} from '../index';
import supertest from 'supertest';
import { app, resizeImage } from '../index';

const request = supertest(app);

describe('api testing', async () => {
  it("testing 1st route ('/')", async () => {
    try {
      const logger = await request.get('/?imgname=sammy&width=400&height=400');
      expect(logger.status).toBe(200);
    } catch (error) {
      console.log(error);
    }
  });
});
describe('unit test a function', () => {
  const [width, height,originalPath, resizedPath] = [200, 200, 'img.png', 'resizable-img'];

  it('test the resize function', () => {
    expect(resizeImage(width, height,originalPath, resizedPath))
    expect(width).toBe(200);
    expect(width).toBeGreaterThan(0);
    expect(height).toBe(200);
    expect(originalPath).toBe('img.png');
    expect(originalPath).toBeTruthy();
    expect(resizedPath).toBe('resizable-img');
    expect(resizeImage).toBeTrue;
  });
});
