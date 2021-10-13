exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "Data": [
            {
                "AccountNo": "000200020006732",
                "TypeID": "C",
                "AccountName": "Customer 1217",
                "StatusCD": "N",
                "CCYCD": "USD",
                "Balance": 36210.67,
                "ActuBalance": 36210.67,
                "LastTransDate": "06/07/2020",
                "OpenDate": "03/07/2018",
                "DueDate": "",
                "BRID": "0002",
                "AccDisplay": "000200020006732 - 36,210.67 USD"
            },
            {
                "AccountNo": "000201050005252",
                "TypeID": "S",
                "AccountName": "Customer 1217",
                "StatusCD": "N",
                "CCYCD": "THB",
                "Balance": 442491.8,
                "ActuBalance": 442491.8,
                "LastTransDate": "22/05/2020",
                "OpenDate": "09/04/2019",
                "DueDate": "",
                "BRID": "0002",
                "AccDisplay": "000201050005252 - 442,491.80 THB"
            },
            {
                "AccountNo": "000201020013544",
                "TypeID": "S",
                "AccountName": "Customer 1217",
                "StatusCD": "N",
                "CCYCD": "USD",
                "Balance": 2527085.45,
                "ActuBalance": 2527085.45,
                "LastTransDate": "30/06/2020",
                "OpenDate": "27/12/2018",
                "DueDate": "",
                "BRID": "0002",
                "AccDisplay": "000201020013544 - 2,527,085.45 USD"
            }
        ],
        "ErrorCode": "0",
        "ErrorDesc": "Transaction successfully"
    });
    };