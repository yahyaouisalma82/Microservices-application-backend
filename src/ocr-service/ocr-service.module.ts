import { Module } from '@nestjs/common';
import { OcrServiceController } from './ocr-service.controller';
import { OcrServiceService } from './ocr-service.service';

@Module({
  controllers: [OcrServiceController],
  providers: [OcrServiceService]
})
export class OcrServiceModule {}
