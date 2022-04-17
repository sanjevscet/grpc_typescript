import { ServerUnaryCall, sendUnaryData } from "grpc";

// import { IUsersServer } from "../proto/users_grpc_pb";
import { ICalculatorServer } from "../proto/calculator_grpc_pb";
import { CalculatorRequest, CalculatorResponse } from "../proto/calculator_pb";

export class CalculatorServer implements ICalculatorServer {
  addNumbers(
    call: ServerUnaryCall<CalculatorRequest>,
    callback: sendUnaryData<CalculatorResponse>
  ) {
    const firstNum = call.request.getNum1();
    const secondNum = call.request.getNum2();

    const result = new CalculatorResponse();
    result.setResult(firstNum + secondNum);

    callback(null, result);
  }

  subNumbers(
    call: ServerUnaryCall<CalculatorRequest>,
    callback: sendUnaryData<CalculatorResponse>
  ) {
    const firstNum = call.request.getNum1();
    const secondNum = call.request.getNum2();

    const result = new CalculatorResponse();
    result.setResult(firstNum - secondNum);

    callback(null, result);
  }

  multiplyNumbers(
    call: ServerUnaryCall<CalculatorRequest>,
    callback: sendUnaryData<CalculatorResponse>
  ) {
    const firstNum = call.request.getNum1();
    const secondNum = call.request.getNum2();

    const result = new CalculatorResponse();
    result.setResult(firstNum * secondNum);

    callback(null, result);
  }
}
