import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApplycheckService } from './applycheck/applycheck.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly applyCheck: ApplycheckService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('track/:imgId')
  test(@Param('imgId') imgId, @Res() res) {
    const imgPath = this.applyCheck.getImgPath(imgId);
    return res.sendFile(imgPath, { root: 'public' });
  }
}
