import { CalculatorClient } from "../proto/calculator_grpc_pb";
import { credentials } from "grpc";
import { CalculatorRequest, CalculatorResponse } from "../proto/calculator_pb";


const port = 3000;

export const calculatorClient = new CalculatorClient(
  `localhost:${port}`,
  credentials.createInsecure()
);


export function addNums(num1: number, num2: number) {
    return new Promise<CalculatorResponse>((resolve, reject) => {
      const request = new CalculatorRequest();
      request.setNum1(num1);
      request.setNum2(num2);

  
      calculatorClient.addNumbers(request, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }