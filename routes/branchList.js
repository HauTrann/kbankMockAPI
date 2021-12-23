exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "KBankHeader": {
            "funcNm": "getCITADBranchList",
            "rqAppId": "08006",
            "rqDt": "2009-05-15T15:48:04.000359+05:30",
            "rqUID": "623e7c95-8669-4fa0-87cd-2cfafe23b475",
            "userId": "ID000000",
            "terminalId": "com.fnf.xes.PRF",
            "userLangPref": "en_US",
            "corrID": "xxxxxxxx",
            "rsAppId": "08005",
            "rsDt": "2021-10-26T10:34:24.585643+07:00",
            "rsUID": "a85f5d2e-008a-422e-ad69-34a4435e3f8b",
            "statusCode": "10",
            "version": "0.01"
        },
        "Branch": [
            {
                "BankCode": "031",
                "BankBranchCode": "48204009",
                "BranchNameEN": "CN Chợ Cồn Nam Đà Nẵng English",
                "BranchNameVI": "CN Chợ Cồn Nam Đà Nẵng",
                "BranchStatus": "1",
                "BranchType": "B",
                "CreatedBy": "SYSTEM",
                "CreatedDate": "2021-10-05T15:15:56.2002936+07:00",
                "LastModifyBy": "SYSTEM",
                "LastModifyDate": "2021-10-05T15:15:56.2002936+07:00"
            },
            {
                "BankCode": "031",
                "BankBranchCode": "48204019",
                "BranchNameEN": "CN Nam DInh English",
                "BranchNameVI": "CN Nam DInh",
                "BranchStatus": "1",
                "BranchType": "B",
                "CreatedBy": "SYSTEM",
                "CreatedDate": "2021-10-05T15:15:56.2002936+07:00",
                "LastModifyBy": "SYSTEM",
                "LastModifyDate": "2021-10-05T15:15:56.2002936+07:00"
            }
        ]
    });
    };