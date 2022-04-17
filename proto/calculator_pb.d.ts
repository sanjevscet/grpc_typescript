// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CalculatorResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): CalculatorResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculatorResponse): CalculatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculatorResponse;
    static deserializeBinaryFromReader(message: CalculatorResponse, reader: jspb.BinaryReader): CalculatorResponse;
}

export namespace CalculatorResponse {
    export type AsObject = {
        result: number,
    }
}

export class CalculatorRequest extends jspb.Message { 
    getNum1(): number;
    setNum1(value: number): CalculatorRequest;

    getNum2(): number;
    setNum2(value: number): CalculatorRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculatorRequest): CalculatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculatorRequest;
    static deserializeBinaryFromReader(message: CalculatorRequest, reader: jspb.BinaryReader): CalculatorRequest;
}

export namespace CalculatorRequest {
    export type AsObject = {
        num1: number,
        num2: number,
    }
}
