'use strict';
let crypto = require('crypto');

module.exports = function LiqPay(public_key, private_key) {

    this.host = "https://www.liqpay.ua/api/";

    /**
   * cnb_form
   *
   * @param {object} params
   *
   * @return {string}
   * 
   * @throws {InvalidArgumentException}
   */
    this.cnb_form = function cnb_form(params) {
        let language = "ru";

        if (params.language) {
        language = params.language;
        }

        params = this.cnb_params(params);
        const data = Buffer.from(JSON.stringify(params)).toString('base64');
        const signature = this.str_to_sign(private_key + data + private_key);

        return '<form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">' +
        '<input type="hidden" name="data" value="' + data + '" />' +
        '<input type="hidden" name="signature" value="' + signature + '" />' +
        '<input type="image" src="//static.liqpay.ua/buttons/p1' + language + '.radius.png" name="btn_text" />' +
        '</form>';
    };

    /**
     * cnb_params
     *
     * @param {object} params
     *
     * @return {object} params
     * 
     * @throws {InvalidArgumentException}
     */
    this.cnb_params = function cnb_params(params) {
        params.public_key = public_key;

        if (!params.version) {
        throw new Error('version is null');
        }
        if (!params.amount) {
        throw new Error('amount is null');
        }
        if (!params.currency) {
        throw new Error('currency is null');
        }
        if (!params.description) {
        throw new Error('description is null');
        }

        return params;
    };

    /**
     * str_to_sign
     *
     * @param {string} str
     *
     * @return {string}
     */
    this.str_to_sign = function str_to_sign(str) {
        const sha1 = crypto.createHash('sha1');
        sha1.update(str);
        return sha1.digest('base64');
    };

    return this;
}