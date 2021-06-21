var fs = require('fs')
var path = require('path')

const axios = require('axios')



var controller = {

    getPaypalToken:  async function(req, res) {

        let username = process.env.PAYPAL_CLIENT_LIVE
        let password = process.env.SECRET_SECRET_ID_LIVE;

        (async () => {
            try {
                const { data : { access_token, token_type, expires_in} } = await axios({
                    url: "https://api-m.paypal.com/v1/oauth2/token",
                    method: "post",
                    headers: {
                    Accept: "application/json",
                    "Accept-Language": "en_US",
                    "Content-Type": "application/x-www-form-urlencoded",
                    },
                    auth: {
                    username: username,
                    password: password,
                    },
                    params: {
                    grant_type: "client_credentials",
                    },
                })
                
                console.log(res);
                
                return res.status(200).send({
                    status: "success",
                    message: "su token",
                    access_token : access_token,
                    token_type: token_type,
                    expires_in: expires_in
                })

            } catch (error) {
                console.log('error :', error);
                
                return res.status(400).send({
                    status: "error",
                    message: "error de paypal revisoar logs",
                })
            }
        })()

        
    }

    

}

module.exports = controller;


