import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanAppManagerModule } from './loan-app-manager/loan-app-manager.module';
import { CommercialServiceModule } from './commercial-service/commercial-service.module';
import { RiskServiceModule } from './risk-service/risk-service.module';
import { CreditServiceModule } from './credit-service/credit-service.module';
import { OcrServiceModule } from './ocr-service/ocr-service.module';
import { CommercialServiceService } from './commercial-service/commercial-service.service';
import { RiskServiceService } from './risk-service/risk-service.service';
import { CreditServiceService } from './credit-service/credit-service.service';
import { OcrServiceService } from './ocr-service/ocr-service.service';
import { LoanAppManagerService } from './loan-app-manager/loan-app-manager.service';

@Module({
  imports: [LoanAppManagerModule, CommercialServiceModule, RiskServiceModule, CreditServiceModule, OcrServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
