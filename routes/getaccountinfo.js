exports.get = function(req, res) {
  console.log(JSON.stringify(req.body));
    res.json({
        "KBankHeader": {
          "funcNm": "getAccountInfo",
          "rqAppId": "8005",
          "rqDt": "2009-05-15T15:48:04.000359+05:30",
          "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
          "rsAppId": "08006",
          "rsDt": "2021-08-24T16:57:53.601+07:00",
          "rsUID": "15a177f9-8283-4ea7-a0d9c-1c4965046e36",
          "statusCode": "00",
          "userId": "ID000000",
          "userLangPref": "en_US",
          "corrID": "xxxxxxx",
          "version": "v0.12"
        },
        "AccountNo": "103871197123",
        "AccountName": "Credit Corporate 1",
        "AccountType": "DDA",
        "CIFNo": "90",
        "CustomerName": "Credit Corporate 1",
        "CustType": "1",
        "Balance": "14954269.00",
        "AvailableBal": "14954269.00",
        "BlockBalance": "0.00",
        "InterestRate": "2.5000",
        "CCYCD": "THB",
        "LastTransDate": "2021-12-31",
        "OpenDate": "2021-09-30",
        "BRID": "90001",
        "Status": "Active",
        "OverLimit": "0.00",
        "Channel": null,
        "AccAppId": null,
        "ProductCode": "1000",
        "AccountRestriction": null
      });
  };