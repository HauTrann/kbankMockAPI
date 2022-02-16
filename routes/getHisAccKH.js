exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "Data": [
            {
                "TranDate": "25/12/2021",
                "TranTime": "06:12:36 AM",
                "TranRef": "211225000002123905",
                "Amount": 0.04,
                "TranDesc": "Saving account: Transfer Int to Prin",
                "Balance": 2006.5,
                "CCYCD": "USD",
                "COD": "D",
                "TranType": "DPT_TIP",
                "BranchCode": "0001",
                "Teller": "00001"
            },
            {
                "TranDate": "25/12/2021",
                "TranTime": "06:12:36 AM",
                "TranRef": "211225000002123905",
                "Amount": 1.0,
                "TranDesc": "Saving account: Transfer Int to Prin",
                "Balance": 2007.5,
                "CCYCD": "USD",
                "COD": "C",
                "TranType": "DPT_TIP",
                "BranchCode": "0001",
                "Teller": "00001"
            }
        ],
        "ErrorCode": "0",
        "ErrorDesc": "Transaction successfully"
    });
    };