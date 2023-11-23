import express, { Router } from "express"
import dotenv from 'dotenv';
import defaultData from './default.js'
import Routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";
const BASH_URL = process.env.BASH_URL;


const app = express()
const port =process.env.port || 8000

import Connection from "./Database/db.js";
import { v4 as uuid } from "uuid";

dotenv.config()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);

app.listen(port, () => { console.log(`Server is running successfully on port ${port}`)})

defaultData();


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = `${BASH_URL}/callback`;
paytmParams['EMAIL'] = 'shantanupaul18@gmail.com';
paytmParams['MOBILE_NO'] = '9985678956';


