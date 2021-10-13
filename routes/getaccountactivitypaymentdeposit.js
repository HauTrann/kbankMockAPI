exports.get = function(req, res) {
  console.log(JSON.stringify(req.body));
    res.json({
        "Pagination": {
          "perPage": 4,
          "page": 4
        },
        "AccountNo": "104000000012",
        "KBankHeader": {
          "userLangPref": "en_US",
          "rsDt": "2021-09-16T03:46:36.967Z",
          "corrID": "xxxxxxx",
          "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
          "userId": "ID000000",
          "errorVect": null,
          "version": "v0.14",
          "funcNm": "getAccountActivityCASA",
          "rsUID": "534c654c-fd90-40bc-a31a2-055054aac4d0",
          "rsAppId": "08006",
          "rqDt": "2021-09-16T10:46:36.000517+07:00",
          "rqAppId": "8005",
          "statusCode": "00"
        },
        "AcctActivity": [
          {
            "DebitAmt": null,
            "TranDesc": "DEPOSIT",
            "TranDate": {
              "Time": "2021-07-22T10:29:01.000000-00:00"
            },
            "TranCode": "ZDDC",
            "Amount": "2000000.00",
            "Channel": "22",
            "CreditAmt": "2000000.00",
            "EmpCode": "my_thi_hien.n",
            "BRID": "90001",
            "CCYCD": "VND",
            "TranRef": "1836E2100C189247F2D",
            "Balance": "2000000.00",
            "DrCr": "Credit",
            "Memo": "DEPOSIT",
            "EffectiveDate": null
          },
          {
            "DebitAmt": null,
            "TranDesc": "Account Maintenance",
            "TranDate": {
              "Time": "2021-07-22T10:02:32.000000-00:00"
            },
            "TranCode": null,
            "Amount": "0.00",
            "Channel": null,
            "CreditAmt": null,
            "EmpCode": "thao_thi_thu.n",
            "BRID": null,
            "CCYCD": null,
            "TranRef": null,
            "Balance": null,
            "DrCr": "Non-Monetary",
            "Memo": "9,104000000012[RELCIF]ROLE::1::CIF 9:",
            "EffectiveDate": null
          },
          {
            "DebitAmt": null,
            "TranDesc": "Account Maintenance",
            "TranDate": {
              "Time": "2021-07-22T10:02:32.000000-00:00"
            },
            "TranCode": null,
            "Amount": "0.00",
            "Channel": null,
            "CreditAmt": null,
            "EmpCode": "thao_thi_thu.n",
            "BRID": null,
            "CCYCD": null,
            "TranRef": null,
            "Balance": null,
            "DrCr": "Non-Monetary",
            "Memo": "[CMBSTM]STMGRP::2:Stmt CIF 9 New (Detail)",
            "EffectiveDate": null
          },
          {
            "DebitAmt": null,
            "TranDesc": "SET UP NEW ACCOUNT",
            "TranDate": {
              "Time": "2021-07-22T10:02:32.000000-00:00"
            },
            "TranCode": null,
            "Amount": "0.00",
            "Channel": null,
            "CreditAmt": null,
            "EmpCode": "thao_thi_thu.n",
            "BRID": "90001",
            "CCYCD": null,
            "TranRef": null,
            "Balance": null,
            "DrCr": "Non-Monetary",
            "Memo": "SET UP NEW ACCOUNT",
            "EffectiveDate": null
          }
        ],
        "AccountType": "DDA"
      });
  };