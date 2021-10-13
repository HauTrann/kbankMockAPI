exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({"ErrorDesc":"Transaction successfully","Data":[{"BUYTRANSFER":0.033014,"SELLTRANSFER":0.033367,"CCYCD":"THB","BUYCASH":0.030303,"BASERATE":0.03319,"ExchangeDate":"01/04/2021","SELLCASH":0.030675}],"ErrorCode":"000"});
    };