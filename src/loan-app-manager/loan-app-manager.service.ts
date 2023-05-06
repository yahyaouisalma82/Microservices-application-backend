import * as multer from 'multer';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanApplication } from './entity/loan-application.entity';
import { LoanApplicationDto } from './dto/loan-application.dto'; 
import { RiskServiceService } from '../risk-service/risk-service.service';
import { CreditServiceService } from '../credit-service/credit-service.service'; 
import { CommercialServiceService } from '../commercial-service/commercial-service.service';

@Injectable()
export class LoanAppManagerService {
  private readonly logger = new Logger(LoanAppManagerService.name);

  constructor(
    private readonly commercialService: CommercialServiceService,
    private readonly riskService: RiskServiceService,
    private readonly creditManagementService: CreditServiceService,
    // @InjectRepository(LoanApplication)
    // private readonly loanApplicationRepository: Repository<LoanApplication>,
  ) {}

  async createLoanApplication(
    loanApplicationDto: LoanApplicationDto, 
  ): Promise<any> {
    const newDto: LoanApplication ={ 
        id:0,
        clientName: loanApplicationDto.clientName,
        cin: loanApplicationDto.cin, 
        loanAmount: loanApplicationDto.loanAmount,
        salary: loanApplicationDto.salary, 
    }
    // const loanApplication =await this.loanApplicationRepository.save(
    //   newDto
    // );
 

 
    const commercialResult = await this.commercialService.processLoanApplication(
      loanApplicationDto, 
    );

    const riskResult = await this.riskService.processLoanApplication(
      loanApplicationDto, 
      commercialResult,
    );

    if (riskResult.score >= 0.5) {
      const creditResult = await this.creditManagementService.generateCreditAgreement(
        loanApplicationDto,
        riskResult,
      );

    //   const savedLoanApplication = await this.loanApplicationRepository.save(
    //     loanApplication,
    //   );

    //   return savedLoanApplication;
    return 'Loan accepted'
    } else {
        return 'Loan application rejected';
    //   throw new ForbiddenException('Loan application rejected');
    }
  }
}
