exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "KBankHeader": {
            "funcNm": "getFeeAmount",
            "rqAppId": "08006",
            "rqDt": "2021-11-19T15:48:04.000359+05:30",
            "rqUID": "0a14329c-f05c-ad6f-5269-cf716855b779",
            "userId": "ID000000",
            "terminalId": "com.fnf.xes.PRF",
            "userLangPref": "en_US",
            "corrID": "xxxxxxx",
            "rsAppId": "08005",
            "rsDt": "2021-11-19T02:09:07.641279+00:00",
            "rsUID": "276da6b8-4559-432c-bb8a-d8b4814ac9be",
            "statusCode": "00",
            "version": "0.01"
        },
        "FeeAmount": "3000.00",
        "FeeCCYCD": null,
        "PercentVat": "10.00"
    });
    };