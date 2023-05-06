import { Injectable } from '@nestjs/common'; 
import { LoanApplicationDto } from 'src/loan-app-manager/dto/loan-application.dto';

@Injectable()
export class CommercialServiceService {
  async processLoanApplication(loanApplicationDto: LoanApplicationDto ) {
    // Here, you can implement your OCR capabilities to extract information from the uploaded documents in the "user Document database".
    
    // After processing the loan application, you can calculate an initial score based on the borrower's income and financial situation.
    const initialScore = this.calculateInitialScore(loanApplicationDto);

    // You can then return the initial score to the loan app manager.
    return initialScore;
  }

  private calculateInitialScore(loanApplicationDto: LoanApplicationDto): number {
    // You can implement your logic for calculating the initial score here, based on the borrower's income and financial situation.
    // For example, you can use the loan amount, repayment period, and the borrower's income to calculate the score.
    // This is just an example implementation; you should replace it with your own logic.
    const score = (loanApplicationDto.loanAmount / loanApplicationDto.salary) ;

    return score;
  }
}
