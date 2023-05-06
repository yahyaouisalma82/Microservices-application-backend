import { Injectable } from '@nestjs/common';
import { LoanApplicationDto } from 'src/loan-app-manager/dto/loan-application.dto';
import { RiskResultDto } from 'src/risk-service/dto/risk-result-dto.dto';

@Injectable()
export class CreditServiceService {
    generateCreditAgreement(loanApplicationDto:LoanApplicationDto,
    riskResult:RiskResultDto,): any {}
}
