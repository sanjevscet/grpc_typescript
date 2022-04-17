import express, { Request, Response } from 'express';
import { addNums } from './calculatorClient';

const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
    const {first_number, second_number} = req.body;

    const result = (await addNums(+first_number, +second_number)).getResult();

    res.json({hello:"world", result})
})

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});