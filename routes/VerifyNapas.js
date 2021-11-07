exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "KBankHeader": {
            "funcNm": "transferKtoNapas",
            "rqAppId": "8005",
            "rqDt": "2009-10-28T15:48:04.000359+05:30",
            "rqUID": "0a14329c-f04c-ab2f-0174-ba572828b114",
            "userId": "ID000000",
            "terminalId": "com.fnf.xes.PRF",
            "userLangPref": "en_US",
            "corrID": "xxxxxxx",
            "rsAppId": "08005",
            "rsDt": "2021-11-05T20:37:29.245320+07:00",
            "rsUID": "e772b7dc-e4b2-4050-9f4f-6d0798e0f314",
            "statusCode": "00",
            "version": "0.01"
        },
        "FromCIFNo": "16",
        "FromAcctNo": "100000000030",
        "FromAcctName": "Indi TF Indi TF",
        "FromAcctType": "DDA",
        "FromCustomerName": "Indi TF Indi TF",
        "FromAcctProductType": "1000",
        "FromAccAppId": "659585413400053",
        "FromAcctStatus": "Active",
        "FromOutBalance": "683468128.95",
        "FromAvailBalance": "683468056.95",
        "ReceivingAcctNo": "6666688888",
        "ReceivingAuthentification": "xxxxxx",
        "ReceivingIPHRefNo": "aadffa66-83db-41b9-a6a1-24851a8bf7df",
        "ReceivingAcctInfo": "Name address",
        "FeeAmount": null,
        "FeeCCYCD": null,
        "PercentVAT": null
    }
    );
    };