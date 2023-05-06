
import { Body, Controller, Post } from '@nestjs/common'; 
import { RiskServiceService } from './risk-service.service';
import { LoanApplicationDto } from 'src/loan-app-manager/dto/loan-application.dto';
import { RiskResultDto } from './dto/risk-result-dto.dto';
@Controller('risk')
export class RiskServiceController {
  constructor(private readonly riskService: RiskServiceService) {}

  @Post('process-loan-application')
  async processLoanApplication(
    @Body() loanApplicationDto: LoanApplicationDto, 
    @Body() suggestedDebtRatio: number,
  ): Promise<RiskResultDto> {
    return this.riskService.processLoanApplication(
      loanApplicationDto, 
      suggestedDebtRatio,
    );
  }
}
