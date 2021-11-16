exports.get = function(req, res) {
    console.log(JSON.stringify(req.body));
      res.json({
        "KBankHeader": {
            "funcNm": "CVR0003I01",
            "rqAppId": "08006",
            "rqDt": "2021-11-15T10:25:10+07:00",
            "rqUID": "623e7c95-8669-4fb0-87cd-2cfefa23b664",
            "rsAppId": "681",
            "rsDt": "2021-11-15T21:34:39.858+07:00",
            "rsUID": "68120211115213439858ec0bb1daec244a938e7e",
            "statusCode": "00",
            "userId": "K0999999",
            "userLangPref": "en_US"
        },
        "sanctionFlag": "Y"
    }
    );
    };