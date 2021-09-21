exports.get = function(req, res) {
    res.json({
        "KBankHeader": {
          "funcNm": "getCustomerInfo",
          "rqAppId": "08006",
          "rqDt": "2009-05-15T15:48:04.000359+05:30",
          "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
          "rsAppId": "08006",
          "rsDt": "2021-09-15T04:36:58.812Z",
          "rsUID": "7607f1c1-8e55-4ab6-be1f4-a60e0c745326",
          "statusCode": "00",
          "userId": "ID000000",
          "userLangPref": "en_US",
          "corrID": "xxxxxxx",
          "errorVect": null,
          "version": "v0.20"
        },
        "CIFNo": "10",
        "CustType": "0",
        "CustName": "PERIPERA BETTY",
        "Title": null,
        "DOB": "1985-01-30",
        "PermAddr": [
          {
            "Addr1": "445 TRAN BINH TRONG DIST. 5",
            "City": ",",
            "StatProv": "HCM",
            "Country": "VN"
          }
        ],
        "TempAddr": [],
        "WorkAddr": [],
        "PhoneNo": null,
        "Email": "betty1@gmail.com",
        "Mobile": "0122392881",
        "OfficePhone": null,
        "Fax": null,
        "LicenseNo": "PP937711",
        "LicenseType": "2",
        "LicDate": "2020-02-22T00:00:00.000000+07:00",
        "LicPlace": "AUSTRIA",
        "Nationality": null,
        "Staff": "9753",
        "Sex": "F|Female",
        "Occupational": "9",
        "BRID": "0002",
        "SanctionStatus": "0",
        "CustSegment": "CP01",
        "FATCAFlag": "2",
        "PDPAMarketingConsent": null,
        "PDPANonMarketingConsent": null,
        "PDPASendAbroadConsent": null,
        "PDPATransferThridPartyConsent": null
      });
  };