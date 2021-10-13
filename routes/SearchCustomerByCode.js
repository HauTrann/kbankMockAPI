exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "Data": {
            "CustomerCode": "0002001101",
            "CustType": "C",
            "CustName": "Customer 1102",
            "DOB": "07/01/1994",
            "Address": "ADDRESSXXX",
            "PhoneNo": "086 521 604",
            "Email": "",
            "Mobile": "",
            "Fax": "",
            "LicenseNo": "10000011102",
            "LicType": "I",
            "LicDate": "04/04/2018",
            "LicPlace": "KAMPONG CHAM",
            "Nation": "KH",
            "Staff": "89",
            "Occupational": "S2",
            "Sex": "F",
            "BRID": "0002",
            "SanctionStatus": "N",
            "KYC": "1X"
        },
        "ErrorCode": "0",
        "ErrorDesc": "Transaction successfully"
    });
    };