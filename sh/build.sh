#!/bin/bash

PROTO_DIR=proto

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`.cmd \
    -I ./proto \
    ./proto/*.proto

# # Generate TypeScript code (d.ts)
# yarn run protoc \
#     --plugin=protoc-gen-ts=C:/Deloitte-Work/Self/grpc/grpc-typescript/node_modules/.bin/protoc-gen-ts.cmd \
#     --ts_out=${PROTO_DIR} \
#     -I ./proto \
#     ./proto/*.proto
    