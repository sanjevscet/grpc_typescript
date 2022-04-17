import { Server, ServerCredentials } from "grpc";
import { UsersService } from "../proto/users_grpc_pb";
import { UsersServer } from "./services";

import {CalculatorService} from "../proto/calculator_grpc_pb"
import {CalculatorServer} from "./calculator_server"

const server = new Server();
server.addService(UsersService, new UsersServer());
server.addService(CalculatorService, new CalculatorServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
