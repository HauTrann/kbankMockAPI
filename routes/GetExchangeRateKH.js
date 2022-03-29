exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
    if(req.body.CCYCD === 'THB'){
      res.json({
        "ErrorDesc": "Transaction successfully",
        "Data": [
          {
            "BUYTRANSFER": 0.030303,
            "SELLTRANSFER": 0.030303,
            "CCYCD": "THB",
            "BUYCASH": 0.030303,
            "BASERATE": 0.03319,
            "ExchangeDate": "01/04/2021",
            "SELLCASH": 0.030303
          }
        ],
        "ErrorCode": "000"
      });
    } else if (req.body.CCYCD === 'KHR'){
      res.json({
        "ErrorDesc": "Transaction successfully",
        "Data": [
          {
            "BUYTRANSFER": 0.00025,
            "SELLTRANSFER": 0.00025,
            "CCYCD": "KHR",
            "BUYCASH": 0.00025,
            "BASERATE": 0.00025,
            "ExchangeDate": "01/04/2021",
            "SELLCASH": 0.00025
          }
        ],
        "ErrorCode": "000"
      });
    } else if (req.body.CCYCD === 'USD'){
      res.json({
        "ErrorDesc": "Transaction successfully",
        "Data": [
          {
            "BUYTRANSFER": 1,
            "SELLTRANSFER": 1,
            "CCYCD": "THB",
            "BUYCASH": 0.030303,
            "BASERATE": 0.03319,
            "ExchangeDate": "01/04/2021",
            "SELLCASH": 1
          }
        ],
        "ErrorCode": "000"
      });
    }else{
      res.json({
        "ErrorDesc": "Transaction successfully",
        "Data": [
          {
            "BUYTRANSFER": 0.033014,
            "SELLTRANSFER": 0.033367,
            "CCYCD": "THB",
            "BUYCASH": 0.030303,
            "BASERATE": 0.03319,
            "ExchangeDate": "01/04/2021",
            "SELLCASH": 0.030675
          }
        ],
        "ErrorCode": "000"
      });
    }
    
    };