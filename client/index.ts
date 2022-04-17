import { User, UserStatus } from "../proto/users_pb";
import getUser from "./get-user";
import createUsers from "./create-users";
import allUsers from "./all-users";
import { addNums } from "./calculatorClient";

async function run() {
  const result = await addNums(14, 28)
  console.log("###############################")
  console.log({result: result.getResult()})
  console.log("###############################")
  
  try{
  const user = await getUser(11);
  console.log(user.toString());
  } catch(err) {
    console.error(err)
  }

  const jim = new User();
  jim.setName("Jim");
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  createUsers([jim]);
  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();
  console.log(`\nListing all ${users.length} users`);
  for (const user of users) {
    console.log(user.toString());
  }
}

run();
