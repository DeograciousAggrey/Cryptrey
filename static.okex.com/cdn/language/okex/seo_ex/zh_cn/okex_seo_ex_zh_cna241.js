(function(global, undefined) {
var messages = {
	"c2c.bottom.boundPhone.btn": "\u53bb\u7ed1\u5b9a",
	"c2c.bottom.boundPhone.tip": "\u8d2d\u4e70\u524d\u8bf7\u5148\u7ed1\u5b9a\u624b\u673a\u53f7",
	"c2c.bottom.buy.btn": "\u8d2d\u4e70\u007b\u0030\u007d",
	"c2c.bottom.goKYCOne.btn": "\u53bb\u8ba4\u8bc1",
	"c2c.bottom.goKYCOne.tip": "\u5b8c\u6210\u8ba4\u8bc1\u540e\u5373\u53ef\u8d2d\u4e70",
	"c2c.bottom.goKYCThree.one.btn": "\u63d0\u5347\u9650\u989d",
	"c2c.bottom.goKYCThree.one.tip": "\u76ee\u524d\u60a8\u5355\u7b14\u4ea4\u6613\u9650\u989d\u4e3a\u007b\u0030\u007d\u5143\uff0c\u5b8c\u6210\u9ad8\u7ea7\u8ba4\u8bc1\u53ef\u63d0\u5347\u9650\u989d",
	"c2c.bottom.goKYCThree.two.btn": "\u53bb\u8ba4\u8bc1",
	"c2c.bottom.goKYCThree.two.tip": "\u5f53\u524d\u5339\u914d\u5230\u7684\u5546\u5bb6\u53ea\u63a5\u53d7\u89c6\u9891\u8ba4\u8bc1\u7528\u6237\uff0c\u5b8c\u6210\u540e\u5373\u53ef\u8d2d\u4e70",
	"c2c.bottom.goKYCTwo.one.btn": "\u63d0\u5347\u9650\u989d",
	"c2c.bottom.goKYCTwo.one.tip": "\u76ee\u524d\u60a8\u7d2f\u8ba1\u4ea4\u6613\u9650\u989d\u4e3a\u007b\u0030\u007d\u5143\uff0c\u5b8c\u6210\u9ad8\u7ea7\u8ba4\u8bc1\u53ef\u63d0\u5347\u9650\u989d",
	"c2c.bottom.goKYCTwo.two.btn": "\u63d0\u5347\u9650\u989d",
	"c2c.bottom.goKYCTwo.two.tip": "\u76ee\u524d\u60a8\u5355\u7b14\u4ea4\u6613\u9650\u989d\u4e3a\u007b\u0030\u007d\u5143\uff0c\u5b8c\u6210\u9ad8\u7ea7\u8ba4\u8bc1\u53ef\u63d0\u5347\u9650\u989d",
	"c2c.bottom.noLogin.btn": "\u767b\u5f55\u002f\u6ce8\u518c",
	"c2c.bottom.noLogin.tip": "\u8d2d\u4e70\u524d\u8bf7\u5148\u767b\u5f55\u6216\u6ce8\u518c",
	"c2c.bottom.noPayMethod.btn": "\u53bb\u6cd5\u5e01\u4ea4\u6613",
	"c2c.bottom.noPayMethod.tip": "\u5f53\u524d\u65e0\u5339\u914d\u5546\u5bb6\uff0c\u60a8\u53ef\u4ee5\u524d\u5f80\u6cd5\u5e01\u4ea4\u6613\u533a\u8d2d\u4e70",
	"c2c.bottom.overPrice.btn": "\u8d2d\u4e70\u007b\u0030\u007d",
	"c2c.bottom.overPrice.tip": "\u5f53\u524d\u4ef7\u683c\u9ad8\u4e8e\u5e02\u573a\u5747\u4ef7\uff0c\u8bf7\u786e\u8ba4\u540e\u8d2d\u4e70",
	"c2c.buyMethod.coin": "\u6309\u6570\u91cf\u8d2d\u4e70",
	"c2c.buyMethod.money": "\u6309\u91d1\u989d\u8d2d\u4e70",
	"c2c.content.pay": "\u652f\u4ed8\u65b9\u5f0f",
	"c2c.content.title": "\u8d2d\u4e70\u91d1\u989d\u0020\u0028\u53c2\u8003\u5355\u4ef7\u007b\u0030\u007d\u0043\u004e\u0059\u0029",
	"c2c.money.unit": "\u5143",
	"c2c.pay.aliPay.name": "\u652f\u4ed8\u5b9d",
	"c2c.pay.bank.name": "\u94f6\u884c\u5361",
	"c2c.pay.optimal": "\u4ef7\u683c\u6700\u4f18",
	"c2c.pay.wxPay.name": "\u5fae\u4fe1",
	"c2c.top.desc": "\u5feb\u6377\u8d2d\u4e70\uff0c\u0030\u624b\u7eed\u8d39",
	"c2c.top.title": "\u5feb\u6377\u8d2d\u4e70",
	"common.guide.continue": "\u7ee7\u7eed\u8bbf\u95ee\u624b\u673a\u7248\u7f51\u7ad9",
	"common.guide.desc": "\u4e3a\u4e86\u63d0\u9ad8\u60a8\u7684\u4f7f\u7528\u4f53\u9a8c\u63a8\u8350\u60a8\u4f7f\u7528\u004f\u004b\u0045\u0078\u0020\u0041\u0050\u0050",
	"common.guide.open.app": "\u6253\u5f00\u004f\u004b\u0045\u0078\u0020\u0041\u0050\u0050",
	"common.guide.title": "\u6b27\u6613\u004f\u004b\u0045\u0078",
	"common.limit.province.tip": "\u60a8\u7684\u0049\u0050\u5730\u5740\u5728\u007b\u0070\u0072\u006f\u0076\u0069\u006e\u0063\u0065\u007d\u3002\u6839\u636e\u5f53\u5730\u6cd5\u5f8b\u6cd5\u89c4\uff0c\u60a8\u4e0d\u5f97\u8bbf\u95ee\u0020\u007b\u0073\u0069\u0074\u0065\u007d\u0020\u4ea7\u54c1\u6216\u670d\u52a1\u3002\u5982\u679c\u60a8\u4e0d\u5c45\u4f4f\u5728\u53d7\u9650\u5236\u7684\u5730\u533a\uff0c\u60a8\u65b9\u53ef\u7ee7\u7eed\u4f7f\u7528\u0020\u007b\u0073\u0069\u0074\u0065\u007d\u3002",
	"dns.dialog.cancel": "\u0037\u5929\u5185\u4e0d\u518d\u63d0\u793a",
	"dns.dialog.change.desc": "\u8be5\u5207\u6362\u4e0d\u4f1a\u5bf9\u60a8\u7684\u4f7f\u7528\u9020\u6210\u4efb\u4f55\u5f71\u54cd\u3002",
	"dns.dialog.change.link": "\u67e5\u770b\u4fee\u6539\u6559\u7a0b",
	"dns.dialog.change.title": "\u4fee\u6539\u672c\u5730\u7f51\u7edc\u0044\u004e\u0053",
	"dns.dialog.client": "\u4f7f\u7528\u004f\u004b\u0045\u0078\u5ba2\u6237\u7aef",
	"dns.dialog.confirm": "\u6211\u5df2\u4e0b\u8f7d\u6216\u5207\u6362\uff0c\u4e0d\u518d\u63d0\u793a",
	"dns.dialog.desc": "\u60a8\u5f53\u524d\u6b63\u5728\u6d4f\u89c8\u004f\u004b\u0045\u0078\u5907\u7528\u57df\u540d\uff0c\u4e3a\u4e86\u66f4\u52a0\u7a33\u5b9a\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u6211\u4eec\u63a8\u8350\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a",
	"dns.dialog.dns.one": "\u0032\u0032\u0033\u002e\u0035\u002e\u0035\u002e\u0035",
	"dns.dialog.dns.two": "\u0032\u0032\u0033\u002e\u0036\u002e\u0036\u002e\u0036",
	"dns.dialog.download": "\u7acb\u5373\u4e0b\u8f7d",
	"dns.dialog.or": "\u6216",
	"dns.dialog.title": "\u63d0\u793a",
	"eu.cookies.agree": "\u540c\u610f\u4f7f\u7528\uff0c\u7ee7\u7eed",
	"eu.cookies.info": "\u004f\u004b\u0045\u0078\u4f7f\u7528\u0043\u006f\u006f\u006b\u0069\u0065\u4f18\u5316\u7f51\u7ad9\uff0c\u5982\u679c\u60a8\u7ee7\u7eed\u6d4f\u89c8\u6b64\u7f51\u7ad9\uff0c\u5219\u4ee3\u8868\u60a8\u540c\u610f\u6211\u4eec\u4f7f\u7528\u0043\u006f\u006f\u006b\u0069\u0065\u3002\u6709\u5173\u66f4\u591a\u8be6\u60c5\u53ca\u5982\u4f55\u7ba1\u7406\u0043\u006f\u006f\u006b\u0069\u0065\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684",
	"eu.cookies.privacy": "\u9690\u79c1\u653f\u7b56",
	"eu.protocol.agree": "\u540c\u610f",
	"eu.protocol.btn": "\u786e\u5b9a",
	"eu.protocol.info": "\u6839\u636e\u6b27\u76df\u7684\u89c4\u5b9a\uff0c\u6240\u6709\u004f\u004b\u0045\u0058\u7528\u6237\u5fc5\u987b\u540c\u610f\u4ee5\u4e0b\u7528\u6237\u534f\u8bae\u624d\u80fd\u7ee7\u7eed\u4f7f\u7528\u8be5\u7f51\u7ad9\uff0c\u0020\u8c22\u8c22\uff01",
	"eu.protocol.risk": "\u98ce\u9669\u4e0e\u5408\u89c4\u62ab\u9732",
	"float.app.download.btnText": "\u4e0b\u8f7d",
	"float.app.download.desc": "\u79fb\u52a8\u4ea4\u6613\uff0c\u968f\u65f6\u968f\u5730",
	"float.app.download.okex.name": "\u6b27\u6613\u004f\u004b\u0045\u0078\u0020\u0041\u0050\u0050",
	"float.open.app.download.btnText": "\u4e0b\u8f7d",
	"float.open.app.download.desc": "\u4ea4\u6613\uff0c\u968f\u65f6\u968f\u5730",
	"float.open.app.download.title": "\u5b98\u65b9\u0041\u0050\u0050",
	"footer.bottom.mobile.tip.lang": "\u9ed8\u8ba4\u8bed\u8a00\u4e3a\uff1a\u007b\u0030\u007d\uff0c\u672c\u5730\u8ba1\u4ef7\u8d27\u5e01\u4e3a\uff1a\u007b\u0031\u007d",
	"footer.bottom.tip.confirm": "\u786e\u8ba4",
	"footer.bottom.tip.currency": "\u5982\u6709\u9700\u8981\u53d8\u66f4\uff0c\u007b\u0030\u007d",
	"footer.bottom.tip.currency.title": "\u672c\u5730\u8ba1\u4ef7\u8d27\u5e01",
	"footer.bottom.tip.lang": "\u6839\u636e\u60a8\u7684\u6d4f\u89c8\u5668\u8bed\u8a00\u53ca\u0049\u0050\u5730\u5740\uff0c\u6211\u4eec\u4e3a\u60a8\u9ed8\u8ba4\u9009\u62e9\u7f51\u7ad9\u8bed\u8a00\u4e3a\uff1a\u007b\u0030\u007d\uff0c\u672c\u5730\u8ba1\u4ef7\u8d27\u5e01\u4e3a\uff1a\u007b\u0031\u007d",
	"footer.bottom.tip.language.title": "\u5f53\u524d\u9009\u62e9\u8bed\u8a00",
	"footer.bottom.tip.link": "\u8bf7\u4fee\u6539",
	"footer.contact.loading": "\u6b63\u5728\u542f\u52a8\u002e\u002e\u002e",
	"footer.currency.title": "\u672c\u5730\u8d27\u5e01",
	"footer.language.title": "\u8bed\u8a00",
	"header.download.app": "\u4e0b\u8f7d\u0020\u004f\u004b\u0045\u0078\u0020\u0041\u0070\u0070",
	"header.simulated.api": "\u6a21\u62df\u4ea4\u6613\u0041\u0050\u0049",
	"header.simulated.paper": "\u6a21\u62df\u4ea4\u6613",
	"header.trade.otc.other": "\u6cd5\u5e01\u4ea4\u6613",
	"header.trade.prefix": "\u4ea4\u6613",
	"ieo.pleg.countdown.tips": "\u8ddd\u79bb\u7ed3\u675f\u8d28\u62bc\u8fd8\u6709",
	"index.drop.country.title": "\u9009\u62e9\u533a\u53f7",
	"index.drop.title": "\u5e38\u7528",
	"index.email.error": "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e",
	"index.email.placeholder": "\u90ae\u7bb1\u5730\u5740",
	"index.guide.startwith": "\u65b0\u7528\u6237\u53ef\u4eab\u4ef7\u503c\u0020\u007b\u0030\u007d\u0020\u65b0\u624b\u798f\u5229",
	"index.input.search": "\u641c\u7d22",
	"index.iphone.placeholder": "\u624b\u673a\u53f7\u7801",
	"index.present.tip": "\u9996\u6b21\u8d2d\u4e70\u0032\u0030\u0030\u5143\u53ca\u4ee5\u4e0a\u7684\u6570\u5b57\u8d27\u5e01\uff0c\u60a8\u53ef\u4ee5\u5728\u65b0\u624b\u798f\u5229\u4e2d\u9886\u53d6\u4ef7\u503c\u007b\u0030\u007d\u5956\u52b1\uff01",
	"index.present.tip.green": "\u0032\u0030\u5143\u6bd4\u7279\u5e01",
	"index.present.tip.small": "\u83b7\u53d6\u0032\u0030\u5143\u6bd4\u7279\u5e01",
	"index.present.tip.smallnew": "\u83b7\u53d6\u007b\u0030\u007d\u0020\u6bd4\u7279\u5e01",
	"index.present.tipnew": "\u9996\u6b21\u8d2d\u4e70\u007b\u0031\u007d\u0020\u53ca\u4ee5\u4e0a\u7684\u6570\u5b57\u8d27\u5e01\uff0c\u60a8\u53ef\u4ee5\u5728\u65b0\u624b\u798f\u5229\u4e2d\u9886\u53d6\u4ef7\u503c\u007b\u0030\u007d\u0020\u5956\u52b1\uff01",
	"index.tab.email": "\u90ae\u7bb1",
	"index.tab.iphone": "\u624b\u673a\u53f7",
	"ip.kyc.limit.continue": "\u5982\u679c\u60a8\u4e0d\u5c45\u4f4f\u5728\u5f53\u524d\u7684\u5730\u533a\u5e76\u4e14\u80fd\u63d0\u4f9b\u6709\u6548\u7684\u8bc1\u4ef6\uff0c\u8bf7\u8ba4\u8bc1\u8eab\u4efd\uff0c\u5373\u53ef\u7ee7\u7eed\u4f7f\u7528\u004f\u004b\u0045\u0078\u3002",
	"ip.kyc.limit.guide": "\u60a8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684\u5408\u4f5c\u7684\u4ea4\u6613\u6240\u004f\u006b\u0063\u006f\u0069\u006e\uff0c\u5b83\u662f\u5e02\u9762\u4e0a\u6700\u5b89\u5168\u53ca\u6700\u4f4e\u624b\u7eed\u8d39\u7684\u4ea4\u6613\u5e73\u53f0\u4e4b\u4e00\u3002",
	"ip.kyc.limit.link": "\u53bb\u004f\u006b\u0063\u006f\u0069\u006e",
	"ip.kyc.limit.text": "\u0054\u006f\u0020\u0063\u006f\u006d\u0070\u006c\u0079\u0020\u0077\u0069\u0074\u0068\u0020\u006c\u006f\u0063\u0061\u006c\u0020\u006c\u0061\u0077\u0073\u002c\u0020\u0077\u0065\u0020\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0020\u0074\u0068\u0065\u0020\u0075\u0073\u0065\u0020\u006f\u0066\u0020\u006f\u0075\u0072\u0020\u0073\u0069\u0074\u0065\u0020\u0069\u006e\u0020\u0079\u006f\u0075\u0072\u0020\u006c\u006f\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0028\u007b\u0063\u006f\u0075\u006e\u0074\u0072\u0079\u004e\u0061\u006d\u0065\u007d\u0029\u002e\u0020\u007b\u006f\u006b\u0063\u006f\u0069\u006e\u007d\u0020\u007b\u006b\u0079\u0063\u0052\u0065\u0071\u0075\u0069\u0072\u0065\u0064\u007d",
	"ip.kyc.limit.text.one": "\u4e3a\u4e86\u9075\u5b88\u5f53\u5730\u6cd5\u5f8b\u5408\u89c4\uff0c\u60a8\u6240\u5728\u7684\u5730\u533a\u0020\u0028\u007b\u0063\u006f\u0075\u006e\u0074\u0072\u0079\u004e\u0061\u006d\u0065\u007d\u0029\u0020\u65e0\u6cd5\u8bbf\u95ee\u004f\u004b\u0045\u0078\u002e\u0063\u006f\u006d\u7684\u4ea7\u54c1\u3002\u0020\u007b\u006f\u006b\u0063\u006f\u0069\u006e\u007d\u0020\u007b\u006b\u0079\u0063\u0052\u0065\u0071\u0075\u0069\u0072\u0065\u0064\u007d",
	"ip.kyc.limit.verify": "\u8ba4\u8bc1\u8eab\u4efd",
	"ip.limit.btn": "\u6211\u77e5\u9053\u4e86",
	"ip.limit.hide": "\u4e00\u4e2a\u6708\u5185\u4e0d\u518d\u63d0\u793a",
	"ip.limit.info": "\u672c\u7ad9\u76ee\u524d\u4e0d\u652f\u6301\u6765\u81ea\u4e0b\u5217\u56fd\u5bb6\u6216\u5730\u533a\u7684\u5ba2\u6237\uff1a\u4e2d\u56fd\u9999\u6e2f\u3001\u53e4\u5df4\u3001\u4f0a\u6717\u3001\u671d\u9c9c\u3001\u514b\u91cc\u7c73\u4e9a\u3001\u82cf\u4e39\u3001\u9a6c\u6765\u897f\u4e9a\u3001\u53d9\u5229\u4e9a\u3001\u7f8e\u56fd\u005b\u5305\u62ec\u6240\u6709\u7f8e\u56fd\u9886\u571f\uff0c\u5982\u6ce2\u591a\u9ece\u5404\u3001\u7f8e\u5c5e\u8428\u6469\u4e9a\u3001\u5173\u5c9b\u3001\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b\u90a6\u3001\u7f8e\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b\uff08\u5723\u514b\u7f57\u4f0a\u5c9b\uff0c\u5723\u7ea6\u7ff0\u5c9b\u548c\u5723\u6258\u9a6c\u65af\u5c9b\uff09\u005d\u3001\u5b5f\u52a0\u62c9\u56fd\u3001\u73bb\u5229\u7ef4\u4e9a\u3001\u5384\u74dc\u591a\u5c14\u548c\u5409\u5c14\u5409\u65af\u65af\u5766\u3002\u5982\u6b32\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684\u670d\u52a1\u6761\u6b3e\u53ca\u6211\u4eec\u7684\u98ce\u9669\u4e0e\u5408\u89c4\u58f0\u660e\u3002",
	"jump.account.avaliable": "\u8d44\u91d1\u8d26\u6237\u53ef\u7528\uff1a",
	"jump.apy": "\u5e74\u5316\u6536\u76ca\u7387",
	"jump.cancel": "\u53d6\u6d88",
	"jump.curr.pledge.amount": "\u5f53\u524d\u8d28\u62bc\uff1a",
	"jump.defi.okt.data.key1": "\u7406\u8bba\u53d1\u884c\u603b\u91cf",
	"jump.defi.okt.data.key2": "\u521b\u4e16\u53d1\u884c",
	"jump.defi.okt.data.key3": "\u51cf\u534a\u5468\u671f\uff08\u6708\uff09",
	"jump.defi.okt.data.key4": "\u533a\u5757\u5956\u52b1",
	"jump.earned.coin": "\u5f85\u9886\u53d6\u7684\u007b\u0063\u006f\u0069\u006e\u007d",
	"jump.finish": "\u5df2\u7ed3\u675f",
	"jump.harvest": "\u9886\u53d6",
	"jump.max": "\u6700\u5927\u503c",
	"jump.ming.avaliable": "\u5269\u4f59\u007b\u0063\u006f\u0069\u006e\u007d\u6570\u91cf",
	"jump.ming.coin.price": "\u007b\u0063\u006f\u0069\u006e\u007d\u4ef7\u683c",
	"jump.pledge.amount": "\u8d28\u62bc\u6570\u91cf",
	"jump.pledge.text": "\u8d28\u62bc",
	"jump.stake": "\u8d28\u62bc",
	"jump.stake.limit": "\u4e2a\u4eba\u4e0a\u9650\uff1a",
	"jump.staked.coin": "\u6211\u8d28\u62bc\u7684\u007b\u0063\u006f\u0069\u006e\u007d",
	"jump.staked.coin.total": "\u007b\u0063\u006f\u0069\u006e\u007d\u8d28\u62bc\u603b\u91cf",
	"jump.staking": "\u8d28\u62bc",
	"jump.staking.into": "\u8d28\u62bc\u4fe1\u606f",
	"jump.start.pledge.text": "\u8ddd\u79bb\u7ed3\u675f\u8d28\u62bc\u8fd8\u6709",
	"jump.start.text": "\u5f00\u59cb\u5012\u8ba1\u65f6\u0020",
	"jump.sure": "\u786e\u5b9a",
	"jump.unfreeze.amount": "\u89e3\u62bc\u6570\u91cf",
	"jump.unstake": "\u89e3\u62bc",
	"jump.unstake.no.coin": "\u89e3\u62bc\u5931\u8d25\uff0c\u60a8\u5f53\u524d\u65e0\u8d28\u62bc\u4e2d\u7684\u007b\u0063\u006f\u0069\u006e\u007d\u000a",
	"jumpstart.detail.defi.desc.OKT": "\u611f\u8c22\u004f\u004b\u0042\u6301\u6709\u4eba\u5bf9\u004f\u004b\u0045\u0078\u0043\u0068\u0061\u0069\u006e\u7684\u652f\u6301",
	"jumpstart.detail.defi.rule.title.OKT": "\u004f\u004b\u0054\u521b\u4e16\u53d1\u884c\u89c4\u5219",
	"jumpstart.detail.defi.title.OKT": "\u004f\u004b\u0045\u0078\u0043\u0068\u0061\u0069\u006e\u4e3b\u7f51\u542f\u52a8\uff0c\u004f\u004b\u0054\u521b\u4e16\u53d1\u884c",
	"korean.switch.btn": "\ubc29\ubb38\ud558\ub7ec\u0020\uac00\uae30",
	"korean.switch.info.one": "\u004f\u004b\u0045\u0078\ucf54\ub9ac\uc544\uc5d0",
	"korean.switch.info.two": "\u004b\u0052\u0057\uff08\uc6d0\ud654\uff09\uc785\ucd9c\uae08\uacfc\u0020\uac70\ub798\uac00\u0020\uac00\ub2a5\ud569\ub2c8\ub2e4",
	"korean.switch.link": "\u004f\u004b\u0045\u0078\u002e\u0063\u006f\u006d\u0020\uacc4\uc18d\u0020\uc774\uc6a9\ud55c\ub2e4",
	"kyc.limit.btn": "\u53bb\u8ba4\u8bc1\u004b\u0059\u0043",
	"kyc.limit.info": "\u975e\u5e38\u62b1\u6b49\uff0c\u6839\u636e\u60a8\u7684\u0049\u0050\u5730\u5740\uff0c\u60a8\u4f3c\u4e4e\u4f4d\u4e8e\u6211\u4eec\u76ee\u524d\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u7684\u56fd\u5bb6\u6216\u5730\u533a\u3002\u0020\u5982\u679c\u60a8\u4e0d\u662f\u5f53\u524d\u0049\u0050\u5730\u5740\u6240\u5728\u56fd\u5bb6\u6216\u5730\u533a\u7684\u516c\u6c11\uff0c\u8bf7\u7ee7\u7eed\u8fdb\u884c\u004b\u0059\u0043\u9a8c\u8bc1\u3002",
	"newHome.quotation.ada": "\u827e\u8fbe\u5e01",
	"newHome.quotation.bch": "\u6bd4\u7279\u5e01\u73b0\u91d1",
	"newHome.quotation.bsv": "\u6bd4\u7279\u5e01\u0053\u0056",
	"newHome.quotation.btc": "\u6bd4\u7279\u5e01",
	"newHome.quotation.dot": "\u0050\u006f\u006c\u006b\u0061\u0064\u006f\u0074",
	"newHome.quotation.eclassic": "\u4ee5\u592a\u7ecf\u5178",
	"newHome.quotation.etc": "\u4ee5\u592a\u7ecf\u5178",
	"newHome.quotation.eth": "\u4ee5\u592a\u574a",
	"newHome.quotation.ltc": "\u83b1\u7279\u5e01",
	"newHome.quotation.okb": "\u004f\u004b\u0042\u5168\u7403\u901a\u7528\u79ef\u5206",
	"newHome.quotation.okt": "\u004f\u004b\u0045\u0078\u0043\u0068\u0061\u0069\u006e\u0020\u0054\u006f\u006b\u0065\u006e",
	"onBoarding.crypto.btn": "\u5feb\u901f\u8d2d\u4e70\u0028\u0031\u0030\u5143\u8d77\u0029",
	"onBoarding.crypto.desc": "\u5e0c\u671b\u5728\u004f\u004b\u0045\u0078\u8d2d\u4e70\u4e00\u4e9b\u6570\u5b57\u8d27\u5e01",
	"onBoarding.crypto.reward": "\u514d\u8d39\u83b7\u5f97\u007b\u0030\u007d",
	"onBoarding.crypto.reward.green": "\uffe5\u0032\u0030\u6bd4\u7279\u5e01",
	"onBoarding.crypto.title": "\u6211\u007b\u0030\u007d\u6570\u5b57\u8d27\u5e01",
	"onBoarding.deposit.btn": "\u5145\u503c\u6570\u5b57\u8d27\u5e01",
	"onBoarding.deposit.desc": "\u5e0c\u671b\u5145\u503c\u5230\u004f\u004b\u0045\u0078\u8fdb\u884c\u50a8\u5b58\u548c\u4ea4\u6613",
	"onBoarding.deposit.title": "\u6211\u007b\u0030\u007d\u6570\u5b57\u8d27\u5e01",
	"onBoarding.has": "\u300c\u6709\u300d",
	"onBoarding.no": "\u300c\u6ca1\u6709\u300d",
	"onBoarding.sub.title": "\u0053\u0065\u006c\u0065\u0063\u0074\u0020\u006f\u006e\u0065\u0020\u006f\u0066\u0020\u0074\u0068\u0065\u0020\u0062\u0065\u006c\u006f\u0077\u0020\u006f\u0070\u0074\u0069\u006f\u006e\u0073",
	"onBoarding.title": "\u0048\u0069\u002c\u6b22\u8fce\u6765\u5230\u6570\u5b57\u8d27\u5e01\u7684\u4e16\u754c",
	"present.bonus": "\u0032",
	"present.error.btn": "\u786e\u5b9a",
	"present.error.desc": "\u62b1\u6b49\uff0c\u60a8\u672a\u5728\u0031\u0035\u5929\u5185\u89e3\u9501\u8d60\u91d1\uff0c\u8d60\u91d1\u5df2\u7ecf\u88ab\u56de\u6536\u3002",
	"present.limit.btn": "\u89e3\u9501\u8d60\u91d1",
	"present.limit.main.buy.title": "\u7d2f\u8ba1\u8d2d\u4e70\u4ef7\u503c\u007b\u0030\u007d\u7684\u6570\u5b57\u8d27\u5e01\u3002",
	"present.limit.main.finish.btn": "\u5df2\u5b8c\u6210",
	"present.limit.main.finish.desc": "\u5df2\u5b8c\u6210",
	"present.limit.main.go.buy.btn": "\u53bb\u8d2d\u4e70",
	"present.limit.main.go.buy.desc": "\u672a\u5b8c\u6210",
	"present.limit.main.go.kyc.btn": "\u53bb\u8ba4\u8bc1",
	"present.limit.main.go.kyc.desc": "\u5f85\u8ba4\u8bc1",
	"present.limit.main.kyc.level": "\u004b\u0059\u0043\u0032",
	"present.limit.main.kyc.title": "\u8eab\u4efd\u8ba4\u8bc1\u5b8c\u6210\u007b\u0030\u007d",
	"present.limit.main.title": "\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\u5373\u53ef\u89e3\u9501\u4ef7\u503c\u0024\u0032\u7684\u0055\u0053\u0044\u0054\uff1a",
	"present.limit.main.warning": "\u8bf7\u4e8e\u6ce8\u518c\u540e\u0031\u0035\u5929\u5185\u5b8c\u6210\u89e3\u9501\uff0c\u82e5\u672a\u5b8c\u6210\u8d60\u91d1\u5c06\u4f1a\u88ab\u56de\u6536\u3002",
	"present.limit.title": "\u60a8\u5df2\u83b7\u5f97\u8d60\u91d1",
	"present.login.pop": "\u89e3\u9501\u007b\u0030\u007d",
	"present.unit": "\u0055\u0053\u0044",
	"present.unlock.btn": "\u8d44\u91d1\u8d26\u6237",
	"present.unlock.desc": "\u60a8\u7684\u8d60\u91d1\u5df2\u89e3\u9501\uff0c\u8bf7\u4e8e\u8d44\u91d1\u8d26\u6237\u4e2d\u67e5\u770b\u3002",
	"present.unlock.title": "\u60a8\u5df2\u6210\u529f\u89e3\u9501\u8d60\u91d1",
	"present.unlogin.btn": "\u7acb\u5373\u6ce8\u518c",
	"present.unlogin.desc": "\u65b0\u7528\u6237\u6ce8\u518c\u5373\u53ef\u83b7\u5f97\u6ce8\u518c\u8d60\u91d1\uff0c\u5feb\u6765\u5f00\u542f\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u4e4b\u65c5\u5427\uff01",
	"present.unlogin.pop": "\u6ce8\u518c\u9886\u0020\u007b\u0030\u007d",
	"present.unlogin.title": "\u6ce8\u518c\u5373\u53ef\u83b7\u5f97",
	"sim.dialog.detail": "\u6b22\u8fce\u4f7f\u7528\u6a21\u62df\u4ea4\u6613\u529f\u80fd\uff0c\u60a8\u7684\u4ea4\u6613\u4f53\u9a8c\u91d1\u5df2\u7ecf\u53d1\u653e\u81f3\u60a8\u7684\u8d26\u6237\u4e2d",
	"sim.dialog.info.list.1": "\u5e01\u5e01\u4ea4\u6613\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0030\u0030\u0030\u0030\u0020\u0055\u0053\u0044\u0054",
	"sim.dialog.info.list.2": "\u6760\u6746\u4ea4\u6613\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0030\u0030\u0030\u0030\u0020\u0055\u0053\u0044\u0054",
	"sim.dialog.info.list.3": "\u5e01\u672c\u4f4d\u4ea4\u5272\u5408\u7ea6\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0020\u0042\u0054\u0043",
	"sim.dialog.info.list.4": "\u0055\u0053\u0044\u0054\u4fdd\u8bc1\u91d1\u4ea4\u5272\u5408\u7ea6\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0030\u0030\u0030\u0020\u0055\u0053\u0044\u0054",
	"sim.dialog.info.list.5": "\u5e01\u672c\u4f4d\u6c38\u7eed\u5408\u7ea6\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0020\u0042\u0054\u0043",
	"sim.dialog.info.list.6": "\u0055\u0053\u0044\u0054\u4fdd\u8bc1\u91d1\u6c38\u7eed\u5408\u7ea6\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0030\u0030\u0030\u0020\u0055\u0053\u0044\u0054",
	"sim.dialog.info.list.7": "\u671f\u6743\u5408\u7ea6\u4f53\u9a8c\u91d1\u003a\u0020\u0031\u0020\u0042\u0054\u0043",
	"sim.dialog.info.list.8": "\u66f4\u591a\u7cbe\u5f69\u6a21\u62df\u76d8\u6d3b\u52a8\uff0c\u656c\u8bf7\u671f\u5f85",
	"sim.dialog.info.title": "\u60a8\u5c06\u4f1a\u83b7\u5f97\u003a",
	"sim.dialog.money": "",
	"sim.dialog.title": "\u5f00\u59cb\u6a21\u62df\u4ea4\u6613",
	"test.test": "\u0042\u0069\u0074\u0063\u006f\u0069\u006e\u0020\u0045\u0078\u0063\u0068\u0061\u006e\u0067\u0065\u0020\u007c\u0020\u0042\u0075\u0079\u0020\u0026\u0020\u0053\u0065\u006c\u006c\u0020\u0062\u0069\u0074\u0063\u006f\u0069\u006e\u0020\u007c\u0020\u0043\u0072\u0079\u0070\u0074\u006f\u0063\u0075\u0072\u0072\u0065\u006e\u0063\u0079\u0020\u0045\u0078\u0063\u0068\u0061\u006e\u0067\u0065",
	"testnet.declaration.confirm": "\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f",
	"testnet.declaration.msg1": "\u60a8\u5373\u5c06\u8fdb\u5165\u004f\u004b\u0045\u0078\u0020\u6d4b\u8bd5\u7ad9\u2014\u0054\u0065\u0073\u0074\u004e\u0065\u0074\uff0c\u5728\u8fd9\u91cc\uff0c\u60a8\u5c06\u2f46\u95e8\u69db\u6a21\u62df\u4f53\u9a8c\u004f\u004b\u0045\u0078\u5168\u2f45\u4f4d\u4e1a\u52a1\u3002\u5e2e\u52a9\u60a8\u7406\u89e3\u0020\u004f\u004b\u0045\u0078\u0020\u5e76\u5408\u7406\u4ea4\u6613\u3002\u4f46\u9700\u8981\u6ce8\u610f\uff0c\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u6a21\u62df\u5e73\u53f0\u4e3a\u865a\u62df\u7684\u5e73\u53f0\uff0c\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u6a21\u62df\u5e73\u53f0\u5185\u7684\u5168\u90e8\u6d4b\u8bd5\u5e01\u4e3a\u865a\u62df\u5e01\uff0c\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u6a21\u62df\u5e73\u53f0\u4e0d\u6d89\u53ca\u771f\u5b9e\u4e70\u5356\u53ca\u6295\u8d44\u3002\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u6a21\u62df\u5e73\u53f0\u4e0a\u7684\u4efb\u4f55\u6d4b\u8bd5\u5e01\u2f46\u771f\u5b9e\u4ef7\u503c\uff0c\u6a21\u62df\u5e73\u53f0\u4e0a\u7684\u5408\u7ea6\u3001\u671f\u6743\u7b49\u4ea7\u751f\u7684\u6536\u76ca\u53ca\u635f\u5931\u4e5f\u65e0\u771f\u5b9e\u4ef7\u503c\uff0c\u4ec5\u4f9b\u7528\u6237\u6a21\u62df\u4f53\u9a8c\uff0c\u8bf7\u60a8\u6b63\u786e\u7406\u6027\u64cd\u4f5c\u5e76\u4e0e\u004f\u004b\u0045\u0078\u6b63\u5f0f\u7ad9\u4e0a\u8fdb\u884c\u7684\u771f\u5b9e\u4ea4\u6613\u8fdb\u884c\u533a\u5206\uff0c\u907f\u514d\u60a8\u7684\u7ecf\u6d4e\u635f\u5931\u3002",
	"testnet.declaration.msg2": "\u60a8\u4e86\u89e3\u5e76\u540c\u610f\uff0c\u004f\u004b\u0045\u0078\u0020\u53ca\u0020\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u6a21\u62df\u5e73\u53f0\u4e0d\u5bf9\u5e73\u53f0\u4e0a\u4efb\u4f55\u6570\u636e\u6216\u4fe1\u606f\u7684\u771f\u5b9e\u6027\u3001\u51c6\u786e\u6027\u3001\u5b8c\u6574\u6027\u548c\u53ca\u65f6\u6027\u4f5c\u51fa\u4efb\u4f55\u9648\u8ff0\u6216\u4fdd\u8bc1\u3002\u6240\u6709\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u6a21\u62df\u5e73\u53f0\u4e0a\u63d0\u4f9b\u7684\u76f8\u5173\u6570\u636e\u4ec5\u4f9b\u7528\u6237\u5b66\u4e60\u548c\u6a21\u62df\u4ea4\u6613\u53c2\u8003\uff0c\u4e00\u5f8b\u7981\u6b62\u7528\u4e8e\u4efb\u4f55\u5176\u4ed6\u7528\u9014\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5546\u4e1a\u53ca\u4e2a\u4eba\u7528\u9014\uff0c\u0020\u4e0d\u6784\u6210\u5bf9\u7528\u6237\u7684\u4efb\u4f55\u6295\u8d44\u5efa\u8bae\uff0c\u4e0d\u5b9c\u88ab\u2f64\u4e8e\u7528\u6237\u51b3\u5b9a\u8fdb\u884c\u771f\u5b9e\u4ea4\u6613\u7b49\u771f\u5b9e\u6295\u8d44\u7528\u9014\uff0c\u7528\u6237\u4e0d\u5e94\u5f53\u4ee5\u8be5\u7b49\u4fe1\u606f\u53d6\u4ee3\u5176\u72ec\u7acb\u5224\u65ad\u6216\u4ec5\u4f9d\u636e\u8be5\u7b49\u4fe1\u606f\u505a\u51fa\u6295\u8d44\u51b3\u7b56\u3002\u56e0\u4f7f\u2f64\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u6a21\u62df\u5e73\u53f0\u2f7d\u5f15\u8d77\u6216\u5bfc\u81f4\u7684\u7528\u6237\u7684\u4e00\u5207\u635f\u5931\u3001\u8d23\u4efb\u6216\u51fa\u73b0\u7684\u4efb\u4f55\u6cd5\u5f8b\u98ce\u9669\u7531\u7528\u6237\u81ea\u884c\u627f\u62c5\uff0c\u004f\u004b\u0045\u0078\u53ca\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u6a21\u62df\u5e73\u53f0\u4e0d\u627f\u62c5\u4efb\u4f55\u76f4\u63a5\u6216\u95f4\u63a5\u8d23\u4efb\uff0c\u5982\u56e0\u7cfb\u7edf\u8f6f\u786c\u4ef6\u6545\u969c\u6216\u5176\u4ed6\u539f\u56e0\u5bfc\u81f4\u4ea4\u6613\u5f02\u5e38\uff0c\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u0020\u5e73\u53f0\u4e0d\u5bf9\u7528\u6237\u7684\u865a\u62df\u8d26\u6237\u627f\u62c5\u4efb\u4f55\u8d23\u4efb\u3002\u004f\u004b\u0045\u0078\u53ca\u0054\u0065\u0073\u0074\u004e\u0065\u0074\u6a21\u62df\u5e73\u53f0\u5bf9\u6a21\u62df\u5e73\u53f0\u548c\u76f8\u5173\u58f0\u660e\u53ca\u5176\u4fee\u6539\u3001\u66f4\u65b0\u62e5\u6709\u6700\u7ec8\u89e3\u91ca\u6743\u3002",
	"testnet.declaration.title": "\u0054\u0065\u0073\u0074\u006e\u0065\u0074\u58f0\u660e",
	"testnet.register.confirm": "\u53bb\u6ce8\u518c",
	"testnet.register.msg": "\u60a8\u5c06\u521b\u5efa\u004f\u004b\u0045\u0078\u8d26\u6237",
	"view.home.nav.trade.tradeNew.basic.all": "\u5e01\u5e01\u3001\u671f\u6743\u7b80\u9009",
	"view.home.nav.trade.tradeNew.basic.spot": "\u5e01\u5e01",
	"view.home.nav.trade.tradeNew.margin.all": "\u6760\u6746\u3001\u6c38\u7eed\u3001\u4ea4\u5272\u53ca\u671f\u6743\u4ea4\u6613",
	"view.home.nav.trade.tradeNew.margin.future": "\u4ea4\u5272",
	"view.home.nav.trade.tradeNew.margin.margin": "\u6760\u6746",
	"view.home.nav.trade.tradeNew.margin.option": "\u671f\u6743\u4ea4\u6613",
	"view.home.nav.trade.tradeNew.margin.split": "\u53ca",
	"view.home.nav.trade.tradeNew.margin.swap": "\u6c38\u7eed",
	"view.ieo.day": "\u5929",
	"view.ieo.defi.btnUnfreeze": "\u89e3\u62bc\u0020\u007b\u0061\u006d\u006f\u0075\u006e\u0074\u007d",
	"view.ieo.defi.get.succ": "\u63d0\u53d6\u6210\u529f\uff0c\u8bf7\u5230\u8d44\u91d1\u8d26\u6237\u67e5\u770b",
	"view.ieo.defi.maxAnnualYieldText": "\u6700\u5927\u5e74\u5316\u6536\u76ca\u7387",
	"view.ieo.defi.pledge.succ": "\u8d28\u62bc\u6210\u529f",
	"view.ieo.defi.unfreeze.succ": "\u89e3\u62bc\u6210\u529f\uff0c\u8bf7\u5230\u8d44\u91d1\u8d26\u6237\u67e5\u770b",
	"view.ieo.hour": "\u65f6",
	"view.ieo.minute": "\u5206",
	"view.ieo.second": "\u79d2",
	"view.popular.token.ethereum": "\u4ee5\u592a\u7ecf\u5178",
	"view.popular.token.litecoin": "\u83b1\u7279\u5e01",
	"view.popular.token.sv": "\u6bd4\u7279\u5e01\u0053\u0056",
};

if(global){
	global.okex_seo_ex_zh_cn = messages;
	if ('onLocaleDataReady' in global) {
		global.onLocaleDataReady(messages,'seo_ex');
	}
}
if (typeof define == 'function') {
	define(function(require, exports, module) {
		module.exports = messages;
	 });
} else if (typeof exports !== 'undefined') {
	module.exports = messages;
}
})(this);