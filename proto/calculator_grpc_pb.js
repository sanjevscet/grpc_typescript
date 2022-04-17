// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_CalculatorRequest(arg) {
  if (!(arg instanceof calculator_pb.CalculatorRequest)) {
    throw new Error('Expected argument of type calculator.CalculatorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculatorRequest(buffer_arg) {
  return calculator_pb.CalculatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_CalculatorResponse(arg) {
  if (!(arg instanceof calculator_pb.CalculatorResponse)) {
    throw new Error('Expected argument of type calculator.CalculatorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculatorResponse(buffer_arg) {
  return calculator_pb.CalculatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  addNumbers: {
    path: '/calculator.Calculator/AddNumbers',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.CalculatorRequest,
    responseType: calculator_pb.CalculatorResponse,
    requestSerialize: serialize_calculator_CalculatorRequest,
    requestDeserialize: deserialize_calculator_CalculatorRequest,
    responseSerialize: serialize_calculator_CalculatorResponse,
    responseDeserialize: deserialize_calculator_CalculatorResponse,
  },
  subNumbers: {
    path: '/calculator.Calculator/SubNumbers',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.CalculatorRequest,
    responseType: calculator_pb.CalculatorResponse,
    requestSerialize: serialize_calculator_CalculatorRequest,
    requestDeserialize: deserialize_calculator_CalculatorRequest,
    responseSerialize: serialize_calculator_CalculatorResponse,
    responseDeserialize: deserialize_calculator_CalculatorResponse,
  },
  multiplyNumbers: {
    path: '/calculator.Calculator/MultiplyNumbers',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.CalculatorRequest,
    responseType: calculator_pb.CalculatorResponse,
    requestSerialize: serialize_calculator_CalculatorRequest,
    requestDeserialize: deserialize_calculator_CalculatorRequest,
    responseSerialize: serialize_calculator_CalculatorResponse,
    responseDeserialize: deserialize_calculator_CalculatorResponse,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
