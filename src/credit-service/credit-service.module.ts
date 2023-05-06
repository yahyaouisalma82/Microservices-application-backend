import { Module } from '@nestjs/common';
import { CreditServiceController } from './credit-service.controller';
import { CreditServiceService } from './credit-service.service';

@Module({
  controllers: [CreditServiceController],
  providers: [CreditServiceService]
})
export class CreditServiceModule {}
