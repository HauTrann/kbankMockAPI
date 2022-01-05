exports.get = function(req, res) {
  console.log(JSON.stringify(req.body));
  let data = {};
  if(req.body.CIFNo === '21'){
    data = {
      "KBankHeader": {
          "funcNm": "getcustomerinfo",
          "rqAppId": "08006",
          "rqDt": "2009-05-15T15:48:04.000359+05:30",
          "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
          "rsAppId": "08006",
          "rsDt": "2021-09-23T08:09:40.518Z",
          "rsUID": "20f3ae27-d076-4229-b9fd1-8f87abd3cd87",
          "statusCode": "00",
          "userId": "ID000000",
          "userLangPref": "en_US",
          "corrID": "xxxxxxx",
          "errorVect": null,
          "version": "v0.20"
      },
      "CIFNo": "21",
      "CustType": "1",
      "CustName": "#@#@#@!@!@@#@CONG TY CO PHAN PHUC LOC THO",
      "Title": null,
      "DOB": null,
      "PermAddr": [
          {
              "Addr1": "39 Nguyen Thi Minh Khai St",
              "City": ",",
              "StatProv": "HNO",
              "Country": "VN"
          }
      ],
      "TempAddr": [],
      "WorkAddr": [],
      "PhoneNo": "0123456789",
      "Email": null,
      "Mobile": null,
      "OfficePhone": "0123456789",
      "Fax": null,
      "LicenseNo": "010256789",
      "LicenseType": "3",
      "LicDate": "2011-02-01T00:00:00.000000+07:00",
      "LicPlace": "Ha noi",
      "Nationality": "VN",
      "Staff": "t_teller03",
      "Sex": null,
      "Occupational": "",
      "BRID": "90001",
      "SanctionStatus": "0",
      "CustSegment": "CC01",
      "FATCAFlag": "6",
      "PDPAMarketingConsent": null,
      "PDPANonMarketingConsent": null,
      "PDPASendAbroadConsent": null,
      "PDPATransferThridPartyConsent": null
  }
  }else{
data = {
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
  "CIFNo": "9",
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
  "BRID": "90001",
  "SanctionStatus": "0",
  "CustSegment": "CP01",
  "FATCAFlag": "2",
  "PDPAMarketingConsent": null,
  "PDPANonMarketingConsent": null,
  "PDPASendAbroadConsent": null,
  "PDPATransferThridPartyConsent": null
};
  }
    

      res.json(data);
  };