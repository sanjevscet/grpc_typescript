// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addNumbers: ICalculatorService_IAddNumbers;
    subNumbers: ICalculatorService_ISubNumbers;
    multiplyNumbers: ICalculatorService_IMultiplyNumbers;
}

interface ICalculatorService_IAddNumbers extends grpc.MethodDefinition<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse> {
    path: string; // "/calculator.Calculator/AddNumbers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.CalculatorRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.CalculatorRequest>;
    responseSerialize: grpc.serialize<calculator_pb.CalculatorResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.CalculatorResponse>;
}
interface ICalculatorService_ISubNumbers extends grpc.MethodDefinition<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse> {
    path: string; // "/calculator.Calculator/SubNumbers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.CalculatorRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.CalculatorRequest>;
    responseSerialize: grpc.serialize<calculator_pb.CalculatorResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.CalculatorResponse>;
}
interface ICalculatorService_IMultiplyNumbers extends grpc.MethodDefinition<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse> {
    path: string; // "/calculator.Calculator/MultiplyNumbers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.CalculatorRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.CalculatorRequest>;
    responseSerialize: grpc.serialize<calculator_pb.CalculatorResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.CalculatorResponse>;
}

export const CalculatorService: ICalculatorService;

export interface ICalculatorServer {
    addNumbers: grpc.handleUnaryCall<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse>;
    subNumbers: grpc.handleUnaryCall<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse>;
    multiplyNumbers: grpc.handleUnaryCall<calculator_pb.CalculatorRequest, calculator_pb.CalculatorResponse>;
}

export interface ICalculatorClient {
    addNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    addNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    addNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    subNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    subNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    subNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    multiplyNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorClient extends grpc.Client implements ICalculatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public addNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public addNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public subNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public subNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public subNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: calculator_pb.CalculatorRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
    public multiplyNumbers(request: calculator_pb.CalculatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculatorResponse) => void): grpc.ClientUnaryCall;
}
