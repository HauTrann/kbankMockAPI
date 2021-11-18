exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
    if(req.body.Original_Currency === 'USD' && req.body.Exchange_Currency === 'THB'){
        res.json({
            "KBankHeader": {
                "funcNm": "getExchangeRate",
                "rqAppId": "08006",
                "rqDt": "2009-05-15T15:48:04.000359+05:30",
                "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
                "rsAppId": "08006",
                "rsDt": "2021-10-19T07:20:16.917Z",
                "rsUID": "c4f9f7de-9276-47c5-91e57-77ae1775b476",
                "statusCode": "00",
                "userId": "ID000000",
                "userLangPref": "en_US",
                "corrID": "xxxxxxxx",
                "errorVect": null,
                "version": "v0.9"
            },
            "ForeignExRateInfo": {
                "ExchangeDate": "2021-10-19T08:55:41",
                "CCYCD": "USD",
                "BUYCASH": 22650,
                "SELLCASH": 32.57,
                "BUYTRANSFER": 32.57,
                "SELLTRANSFER": 32,
                "BASERATE": 32.57
            }
        });
    }else if(req.body.Original_Currency === 'THB' && req.body.Exchange_Currency === 'USD'){
        res.json({
            "KBankHeader": {
                "funcNm": "getExchangeRate",
                "rqAppId": "08006",
                "rqDt": "2009-05-15T15:48:04.000359+05:30",
                "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
                "rsAppId": "08006",
                "rsDt": "2021-10-19T07:20:16.917Z",
                "rsUID": "c4f9f7de-9276-47c5-91e57-77ae1775b476",
                "statusCode": "00",
                "userId": "ID000000",
                "userLangPref": "en_US",
                "corrID": "xxxxxxxx",
                "errorVect": null,
                "version": "v0.9"
            },
            "ForeignExRateInfo": {
                "ExchangeDate": "2021-10-19T08:55:41",
                "CCYCD": "USD",
                "BUYCASH": 22650,
                "SELLCASH": 32.57,
                "BUYTRANSFER": 0.031,
                "SELLTRANSFER": 0.03125,
                "BASERATE": 0.031
            }
        });
    }
    else{
        res.json({
            "KBankHeader": {
                "funcNm": "getExchangeRate",
                "rqAppId": "08006",
                "rqDt": "2009-05-15T15:48:04.000359+05:30",
                "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
                "rsAppId": "08006",
                "rsDt": "2021-10-19T07:20:16.917Z",
                "rsUID": "c4f9f7de-9276-47c5-91e57-77ae1775b476",
                "statusCode": "00",
                "userId": "ID000000",
                "userLangPref": "en_US",
                "corrID": "xxxxxxxx",
                "errorVect": null,
                "version": "v0.9"
            },
            "ForeignExRateInfo": {
                "ExchangeDate": "2021-10-19T08:55:41",
                "CCYCD": "USD",
                "BUYCASH": 22650,
                "SELLCASH": 22880,
                "BUYTRANSFER": 22680,
                "SELLTRANSFER": 22880,
                "BASERATE": 702.5
            }
        });
    }
  };