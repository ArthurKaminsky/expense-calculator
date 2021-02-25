import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplycheckService {
  public getImgPath(img) {
    return `../../assets/${img}`;
  }
}
