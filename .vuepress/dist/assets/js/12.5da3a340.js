(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{355:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"split-payments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split-payments"}},[t._v("#")]),t._v(" Split payments")]),t._v(" "),e("h2",{attrs:{id:"engines-available-for-splitting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#engines-available-for-splitting"}},[t._v("#")]),t._v(" Engines available for splitting")]),t._v(" "),e("p",[t._v("PayFast has two systems facilitating split payments; the payment engine, where the buyer initiates the transaction, and the recurring engine, where recurring subscriptions and ad hoc payments are handled automatically.")]),t._v(" "),e("p",[t._v("The rules governing these two systems’ split payments are basically the same. However, while there are similarities in the implementation methods of these two systems, there are slight differences. In general, where functionality overlaps, the rules and implementation methods are as similar as possible.")]),t._v(" "),e("h3",{attrs:{id:"basics-rules-of-split-payment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basics-rules-of-split-payment"}},[t._v("#")]),t._v(" Basics rules of split payment")]),t._v(" "),e("ul",[e("li",[t._v("You will need to "),e("a",{attrs:{href:"https://support.payfast.co.za/conversation/new/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact PayFast"),e("OutboundLink")],1),t._v(" to enable this on your account.")]),t._v(" "),e("li",[t._v("Only one receiving merchant can be allocated a split payment, per split transaction. Therefore the merchant ID of this receiving merchant is mandatory.")]),t._v(" "),e("li",[t._v("All amounts used for the split must be in cents.")]),t._v(" "),e("li",[t._v("The method used will be implemented by PayFast according to precedence.")]),t._v(" "),e("li",[t._v("If both percentage and amount are specified, then the percentage will be deducted first, and then the amount will be deducted from the rest.")]),t._v(" "),e("li",[t._v("If the split amount is smaller than the min, then the min will be used instead of the split amount.")]),t._v(" "),e("li",[t._v("If the split amount is bigger than the max, then the max will be used instead of the split amount.")])]),t._v(" "),e("h2",{attrs:{id:"methods-of-facilitating-a-split"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods-of-facilitating-a-split"}},[t._v("#")]),t._v(" Methods of facilitating a split")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The order of the following methods are important as it indicates precedence.")])]),t._v(" "),e("h3",{attrs:{id:"_1-direct-request-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-direct-request-method"}},[t._v("#")]),t._v(" 1. Direct request method")]),t._v(" "),e("p",[t._v("When the split data is embedded in the call to us, this will take precedence over the other methods.")]),t._v(" "),e("h3",{attrs:{id:"_2-original-transaction-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-original-transaction-method"}},[t._v("#")]),t._v(" 2. Original transaction method")]),t._v(" "),e("p",[t._v("When the split data was sent to us via the direct method, this data will be extracted and used, upon a subsequent transaction.")]),t._v(" "),e("h3",{attrs:{id:"_3-database-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-database-method"}},[t._v("#")]),t._v(" 3. Database method")]),t._v(" "),e("p",[t._v("When the split data has been set up in the database by "),e("a",{attrs:{href:"https://support.payfast.co.za/conversation/new/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("contacting PayFast support"),e("OutboundLink")],1),t._v(", then we will use this data for all the merchant’s transactions, if neither of the preceding methods are being utilised.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Due to the rule of precedence, sending the data through using the direct request method will be used despite any settings in the database.")])]),t._v(" "),e("h2",{attrs:{id:"engine-type-and-method-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#engine-type-and-method-support"}},[t._v("#")]),t._v(" Engine type and method support")]),t._v(" "),e("p",[t._v("Each engine supports the various methods of facilitating a split as follows.")]),t._v(" "),e("h3",{attrs:{id:"the-payment-engine-supports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-payment-engine-supports"}},[t._v("#")]),t._v(" The payment engine supports")]),t._v(" "),e("h4",{attrs:{id:"all-once-off-transactions-as-follows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-once-off-transactions-as-follows"}},[t._v("#")]),t._v(" All once off transactions as follows:")]),t._v(" "),e("ul",[e("li",[t._v("Direct request method")]),t._v(" "),e("li",[t._v("Database method")]),t._v(" "),e("li",[t._v("The recurring engine supports")])]),t._v(" "),e("h4",{attrs:{id:"subscription-based-payments-as-follows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscription-based-payments-as-follows"}},[t._v("#")]),t._v(" Subscription based payments as follows:")]),t._v(" "),e("ul",[e("li",[t._v("Direct Request method")]),t._v(" "),e("li",[t._v("Original transaction method")]),t._v(" "),e("li",[t._v("Database method")])]),t._v(" "),e("h4",{attrs:{id:"ad-hoc-agreements-as-follows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ad-hoc-agreements-as-follows"}},[t._v("#")]),t._v(" Ad hoc agreements as follows:")]),t._v(" "),e("ul",[e("li",[t._v("Direct Request method")]),t._v(" "),e("li",[t._v("Original transaction method\n-Database method")])]),t._v(" "),e("h2",{attrs:{id:"direct-request-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#direct-request-method"}},[t._v("#")]),t._v(" Direct request method")]),t._v(" "),e("p",[t._v("For a request based split, a json encoded payload is sent to PayFast with the other transaction variables, in a variable called ‘setup’.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("JSON decoding will fail if the JSON string is not constructed correctly, according to the JSON standard.")])]),t._v(" "),e("h3",{attrs:{id:"variables-to-be-submitted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables-to-be-submitted"}},[t._v("#")]),t._v(" Variables to be submitted")]),t._v(" "),e("p",[t._v("The following variables are used for a split payment via the direct request method.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("NAME")]),t._v(" "),e("th",[t._v("DESCRIPTION")]),t._v(" "),e("th",[t._v("REQUIRED")]),t._v(" "),e("th",[t._v("FORMAT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("merchant_id")]),t._v(" "),e("td",[t._v("The receiving merchant")]),t._v(" "),e("td",[t._v("Yes")]),t._v(" "),e("td",[t._v("numeric, 8 char")])]),t._v(" "),e("tr",[e("td",[t._v("amount")]),t._v(" "),e("td",[t._v("The amount in cents (ZAR), that will go to the receiving merchant")]),t._v(" "),e("td",[t._v("Yes* (unless only percentage is used)")]),t._v(" "),e("td",[t._v("numeric")])]),t._v(" "),e("tr",[e("td",[t._v("percentage")]),t._v(" "),e("td",[t._v("The percentage allocated to the receiving merchant")]),t._v(" "),e("td",[t._v("Yes* (unless only amount is used)")]),t._v(" "),e("td",[t._v("numeric, 2 char")])]),t._v(" "),e("tr",[e("td",[t._v("min")]),t._v(" "),e("td",[t._v("The minimum amount that will be split, in cents (ZAR)")]),t._v(" "),e("td",[t._v("Optional")]),t._v(" "),e("td",[t._v("numeric")])]),t._v(" "),e("tr",[e("td",[t._v("max")]),t._v(" "),e("td",[t._v("The maximum amount that will be split, in cents (ZAR)")]),t._v(" "),e("td",[t._v("Optional")]),t._v(" "),e("td",[t._v("numeric")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("Note that amount and percentage are used to calculate the total split amount that the receiving merchant will get. At least one of these needs to be sent to us. It is not mandatory to send both, but if you do, you will need to keep in mind that we will calculate the split amount using both the percentage and the amount variables submitted to us.")])])]),t._v(" "),e("pre",[t._v("Split payment variable in the checkout form")]),t._v(" "),e("div",{staticClass:"language-HTML extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('{ "split_payment" : {\n            "merchant_id":10000105,\n            "percentage":10,\n            "min":100,\n            "max":100000}}'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"example-calculations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-calculations"}},[t._v("#")]),t._v(" Example calculations")]),t._v(" "),e("p",[t._v("The following examples show an HTML based implementation. For each of them, we always show the receiving merchant id since it is mandatory for a successful split. We also assume an original transaction amount of ZAR 400 is used, and we convert that amount to cents for the split calculation (40,000 cents).")]),t._v(" "),e("h4",{attrs:{id:"example-1-all-variables-have-been-sent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-1-all-variables-have-been-sent"}},[t._v("#")]),t._v(" Example 1 - All variables have been sent")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#e6e6ff"}},[t._v('{ "split_payment" : { "merchant_id":10000105, "percentage":10, "amount":500, "min":100, "max":100000 } }')]),e("br"),e("br"),t._v("\nIn this example, all the possible split data variables have been provided, specifically percentage (10%), amount (500 cents), min (100 cents) and max (100,000 cents).\nFor the calculation, the percentage amount will be 4,000 cents (10% of 40,000 cents).")]),t._v(" "),e("p",[t._v("Split amount will then be calculated as:\n(transaction amount – percentage amount) – split data amount)\n(40,000 – 4,000) – 500)\n= 35,500 cents")]),t._v(" "),e("pre",[t._v("Example 1 - All variables have been sent")]),t._v(" "),e("div",{staticClass:"language-HTML extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('{ "split_payment" : {\n            "merchant_id":10000105,\n            "percentage":10,\n            "amount":500,\n            "min":100,\n            "max":100000}}'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("While min and max amounts are optional, they have been sent in this example so we compare them with the split amount.\nThe split amount is not smaller than the min, so the min will not be used.\nThe split amount is not bigger than the max, so the max will not be used.\nThe split amount, therefore, stays as calculated at "),e("b",[t._v("35,500 cents (ZAR 355).")])]),t._v(" "),e("h4",{attrs:{id:"example-2-percentage-min-and-max-have-been-sent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2-percentage-min-and-max-have-been-sent"}},[t._v("#")]),t._v(" Example 2 – Percentage, min and max have been sent")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#e6e6ff"}},[t._v('{ "split_payment" : { "merchant_id":10000105, "percentage":10, "min":100, "max":20000 } }')]),e("br"),e("br"),t._v("\nIn this example, the percentage is provided, but not the amount.")]),t._v(" "),e("p",[t._v("Split amount will then be calculated as:\n(transaction amount – percentage amount)\n(40,000 – 4,000)\n= 36,000 cents")]),t._v(" "),e("pre",[t._v("Example 2 - Percentage, min and max have been sent")]),t._v(" "),e("div",{staticClass:"language-HTML extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('{ "split_payment" : {\n            "merchant_id":10000105,\n            "percentage":10,\n            "min":100,\n            "max":20000}}'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("The split amount is not smaller than the min, so the min will not be used.\nThe split amount is bigger than the max, so the max will be used instead of the calculated amount.\nThe split amount, therefore, comes to "),e("b",[t._v("20,000 cents (ZAR 200).")])]),t._v(" "),e("h4",{attrs:{id:"example-3-amount-has-been-sent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-3-amount-has-been-sent"}},[t._v("#")]),t._v(" Example 3 – Amount has been sent")]),t._v(" "),e("p",[e("span",{staticStyle:{"background-color":"#e6e6ff"}},[t._v('{ "split_payment" : { "merchant_id":10000105, "amount":500 } }')]),e("br"),e("br")]),t._v(" "),e("p",[t._v("In this example, only the amount is provided.")]),t._v(" "),e("p",[t._v("Split amount will then be calculated as:\n(transaction amount – split data amount)\n(40,000 – 500)\n= 39,500 cents")]),t._v(" "),e("p",[t._v("The split amount, therefore, comes to "),e("b",[t._v("39,500 cents (ZAR 395)")]),t._v(", as no min or max has been provided.\n"),e("pre",[t._v("Example 3 - Amount has been sent")])]),t._v(" "),e("div",{staticClass:"language-HTML extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('{ "split_payment" : {\n            "merchant_id":10000105,\n            "amount":500 }}'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);