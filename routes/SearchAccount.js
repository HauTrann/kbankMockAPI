exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "Data": {
            "AccountName": "Customer 2010",
            "CustomerName": "Customer 2010",
            "CustomerCode": "0002002009",
            "CustType": "C",
            "Balance": 43298.22,
            "AvailableBal": 43298.22,
            "CCYCD": "USD",
            "LastTransDate": "20/07/2021",
            "BlockBalance": 0.0,
            "OpenDate": "20/07/2021",
            "DueDate": "20/07/2024",
            "NETPAY": "20/07/2024",
            "TERM": "002036",
            "InterestRate": 0.0,
            "BRID": "0002",
            "Status": "A",
            "OverLimit": 0.0,
            "AccDisplay": "000202010000126 - 43,298.22 KHR"
        },
        "ErrorCode": "0",
        "ErrorDesc": "Transaction successfully"
    }
    );
    };