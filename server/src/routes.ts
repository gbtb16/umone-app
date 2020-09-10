import express, { Response } from 'express';
import request from 'request';

const routes = express.Router();

const options = {
    method: 'POST',
    url: 'https://cloud.iexapis.com/stable/rules/create',
    json: {
        token: 'pk_318657a2e1594190848e623dd5b1d7be',
        ruleSet: 'AAPL',
        type: 'any',
        ruleName: 'My Rule',
        conditions: [
            ['changePercent','>',5],
            ['latestPrice','<',100]
        ],
        outputs: [
            {
                frequency: 60,
                method: 'email',
                to: 'gabrieltb07@gmail.com'
            }
        ]
    },
}

request(options, function(error, response, body){
    if (error) throw new Error(error);

    console.log(body);
});

export default routes;