#!/bin/bash

PROTO_DIR=proto

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=C:/Deloitte-Work/Self/grpc/grpc-typescript/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \
    -I ./proto \
    ./proto/*.proto