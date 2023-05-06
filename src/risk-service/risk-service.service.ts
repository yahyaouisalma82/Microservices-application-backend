import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanApplicationDto } from 'src/loan-app-manager/dto/loan-application.dto';
import { Repository } from 'typeorm'; 
import { RiskResultDto } from './dto/risk-result-dto.dto';
import { UserDocument } from './entity/user-document.entity';
@Injectable()
export class RiskServiceService {
  constructor( 
  ) {}

  async processLoanApplication(
    loanApplicationDto: LoanApplicationDto, 
    commercialResult: any,
  ): Promise<RiskResultDto> {
    // Extract information from documents using OCR capabilities
    // and check for other outstanding commitments with other banks
    // using an API to the central bank database
    // Calculate a final score based on the suggested debt ratio and other factors

    // Save the credit agreement and the amortization table in the user document database
    const userDocument = new UserDocument();
    userDocument.name = 'credit_agreement';
    userDocument.content = 'content'; 

    // Return the risk result
    const riskResult = new RiskResultDto();
    if(commercialResult < 0.5)
        return commercialResult
    riskResult.score = 80; 
    return riskResult;
  }
}
