exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
    res.json({
        "KBankHeader": {
            "funcNm": "getexchangerate",
            "rqAppId": "08006",
            "rqDt": "2009-05-15T15:48:04.000359+05:30",
            "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
            "rsAppId": "08006",
            "rsDt": "2021-09-21T12:10:58.319Z",
            "rsUID": "ff192b2b-2cd5-409c-af10a-b2f5d4b75239",
            "statusCode": "00",
            "userId": "ID000000",
            "userLangPref": "en_US",
            "corrID": "xxxxxxxx",
            "errorVect": null,
            "version": "v0.09"
        },
        "ForeignExRateInfo": [
            {
                "ExchangeDate": "2021-09-21T01:50:51",
                "CCYCD": "CNY",
                "BUYCASH": 0.0,
                "SELLCASH": 3620,
                "BUYTRANSFER": 3550,
                "SELLTRANSFER": 3620,
                "BASERATE": 3585
            },
            {
                "ExchangeDate": "2021-09-21T08:55:41",
                "CCYCD": "EUR",
                "BUYCASH": 1.0E-6,
                "SELLCASH": 27570,
                "BUYTRANSFER": 26470,
                "SELLTRANSFER": 27570,
                "BASERATE": 27020
            },
            {
                "ExchangeDate": "2021-09-21T08:55:41",
                "CCYCD": "JPY",
                "BUYCASH": 1.0E-6,
                "SELLCASH": 212.71,
                "BUYTRANSFER": 204.15,
                "SELLTRANSFER": 212.71,
                "BASERATE": 208.43
            },
            {
                "ExchangeDate": "2021-09-21T08:55:41",
                "CCYCD": "THB",
                "BUYCASH": 1.0E-6,
                "SELLCASH": 715,
                "BUYTRANSFER": 690,
                "SELLTRANSFER": 715,
                "BASERATE": 702.5
            },
            {
                "ExchangeDate": "2021-09-21T08:55:41",
                "CCYCD": "USD",
                "BUYCASH": 22650,
                "SELLCASH": 22880,
                "BUYTRANSFER": 22680,
                "SELLTRANSFER": 22880,
                "BASERATE": 22780
            }
        ]
    });
  };