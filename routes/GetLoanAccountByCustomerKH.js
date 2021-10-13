exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "Data": [
            {
                "LNACCTNO": "000203020000216",
                "PRODUCTTYPE": "Commercial loan",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "07/06/2018",
                "LOANLIMIT": 2750000.0,
                "BALANCE": 2290000.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "31/10/2025",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020005938",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "05/06/2019",
                "LOANLIMIT": 67517.45,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "03/10/2019",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006317",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "21/10/2019",
                "LOANLIMIT": 158180.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "18/02/2020",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020005905",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "17/05/2019",
                "LOANLIMIT": 241819.65,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "13/09/2019",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020005950",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "20/06/2019",
                "LOANLIMIT": 90662.9,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "18/10/2019",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000203020000517",
                "PRODUCTTYPE": "Commercial loan",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "03/10/2019",
                "LOANLIMIT": 550000.0,
                "BALANCE": 473600.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "02/10/2026",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006146",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "13/09/2019",
                "LOANLIMIT": 241819.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "10/01/2020",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006588",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "10/01/2020",
                "LOANLIMIT": 241820.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "10/04/2020",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006641",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "19/02/2020",
                "LOANLIMIT": 158180.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 0.0,
                "CCYCD": "USD",
                "DUEDATE": "17/06/2020",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006964",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "17/06/2020",
                "LOANLIMIT": 158180.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 158180.0,
                "CCYCD": "USD",
                "DUEDATE": "15/09/2020",
                "BRID": "0002"
            },
            {
                "LNACCTNO": "000205020006760",
                "PRODUCTTYPE": "PN",
                "LNACCTNAME": "Customer 1101",
                "OPENDATE": "10/04/2020",
                "LOANLIMIT": 241820.0,
                "BALANCE": 0.0,
                "LOANAVAILABLE": 241820.0,
                "CCYCD": "USD",
                "DUEDATE": "07/08/2020",
                "BRID": "0002"
            }
        ],
        "ErrorCode": "0",
        "ErrorDesc": "Transaction successfully"
    });
    };