# Implementing a gRPC client and server in Typescript

This repo can be used as a template for using gRPC to generate TypeScript files for interacting with a gRPC server or client. Setup this process can be fiddly, hopefully in this repo will make it easier to understand.

# Note
** This cmd is used to generate ts code **
protoc \
    --plugin=protoc-gen-ts=C:/Deloitte-Work/Self/grpc/grpc-typescript/node_modules/.bin/protoc-gen-ts.cmd \
    --ts_out=./proto \
    -I ./proto \
    ./proto/users..proto



** This cmd is used to generate JS code **
# Generate JavaScript code
PROTO_DIR=proto

yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=C:/Deloitte-Work/Self/grpc/grpc-typescript/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd \
    -I ./proto \
    ./proto/*.proto
