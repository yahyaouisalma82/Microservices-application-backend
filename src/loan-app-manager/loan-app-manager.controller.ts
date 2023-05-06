import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { LoanAppManagerService } from './loan-app-manager.service';
import { LoanApplicationDto } from './dto/loan-application.dto';

@Controller('loan-app-manager')
export class LoanAppManagerController {
  constructor(private readonly loanAppManagerService: LoanAppManagerService) {}

  @Post() 
  async createLoanApplication(loanApplicationDto: LoanApplicationDto) { 

    const result = await this.loanAppManagerService.createLoanApplication(
      loanApplicationDto 
    );

    return result;
  }
}
