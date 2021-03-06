exports.get = function(req, res) {
  console.log(JSON.stringify(req.body));
  if(req.body.AccountNo.startsWith('92')){
    res.json({
      "KBankHeader": {
          "funcNm": "getAccountInfo",
          "rqAppId": "8005",
          "rqDt": "2009-05-15T15:48:04.000359+05:30",
          "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
          "rsAppId": "08005",
          "rsDt": "2021-12-23T13:44:09.622+07:00",
          "rsUID": "5ef08e7a-e8c4-4b18-96123-02d58719e7b3",
          "statusCode": "00",
          "userId": "ID000000",
          "userLangPref": "en_US",
          "corrID": "xxxxxxx",
          "errorVect": null,
          "version": "v0.22"
      },
      "LoanAccountNo": "923000000046",
      "LoanAccountName": "Nguyen Doan Duc",
      "AccountType": "COM",
      "CIFNo": "35",
      "CustomerName": "Nguyen Doan Duc",
      "OutstandingBalance": "0.00",
      "LoanAvailable": "400000.00",
      "CCYCD": "USD",
      "OPENDATE": "2021-09-13",
      "InterestRate": "0.0000",
      "BRID": "90001",
      "Channel": "2",
      "AccAppId": "660005157000251",
      "ProductCode": "7104",
      "AccountRestriction": null,
      "TERMCOUNT": "1",
      "TERMUNIT": "Yearly",
      "ProductType": "Term Loan - ST - Fixed Principal",
      "EXPDATE": "2021-12-31",
      "RLSAMT": "0.00",
      "PRINTNEXTDATE": "2021-12-31",
      "NextInterestDueDate": "2021-12-31",
      "INTNEXTDATE": "2021-12-31",
      "LNINTEREST": "0.0000",
      "PURPOSE": null,
      "PRINAMT": "0.00",
      "FirstDisbursementDate": null,
      "MaturityDate": "2022-09-13",
      "NextPrinciplePaymentAmt": "0.00",
      "NextInterestPaymentAmt": "0.00",
      "NextTotalPaymentAmt": "0.00",
      "NextPaymentDate": "2021-12-31",
      "LoanLimit": "400000.00",
      "LoanPaymentSoruceAccount": "104000000051",
      "OverDuePrincipleAmount": "0.00",
      "OverDueInterestAmount": "0.00",
      "GrandTotalDue": "0.00",
      "DaysDelinquent": null
  });
  }else{
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
      "CCYCD": "VND",
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
  }
    
  };