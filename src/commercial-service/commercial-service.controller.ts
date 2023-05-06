import { Controller, Post, Body } from '@nestjs/common';
import { LoanApplicationDto } from '../loan-app-manager/dto/loan-application.dto';  
import { CommercialServiceService } from './commercial-service.service';

@Controller('commercial')
export class CommercialServiceController {
  constructor(private readonly commercialService: CommercialServiceService) {}

  @Post('loan-application')
  async processLoanApplication(
    @Body() loanApplicationDto: LoanApplicationDto, 
  ) {
    const results = await this.commercialService.processLoanApplication(
      loanApplicationDto, 
    );
    return results;
  }
}
