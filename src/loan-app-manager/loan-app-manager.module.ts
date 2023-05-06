import { Module } from '@nestjs/common';
import { LoanAppManagerController } from './loan-app-manager.controller';
import { LoanAppManagerService } from './loan-app-manager.service'; 
import { CommercialServiceModule } from 'src/commercial-service/commercial-service.module'; 
import { RiskServiceModule } from 'src/risk-service/risk-service.module';
import { CreditServiceModule } from 'src/credit-service/credit-service.module';
import { CommercialServiceService } from 'src/commercial-service/commercial-service.service';
import { RiskServiceService } from 'src/risk-service/risk-service.service';
import { CreditServiceService } from 'src/credit-service/credit-service.service';

@Module({
  controllers: [LoanAppManagerController],
  providers: [LoanAppManagerService,CommercialServiceService,RiskServiceService,CreditServiceService],
  imports:[CommercialServiceModule,RiskServiceModule,CreditServiceModule,]
})
export class LoanAppManagerModule {}
