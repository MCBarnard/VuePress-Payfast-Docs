# FAQs

## Ad Hoc Payments
### Why do I get a signature mismatch?
If you are testing in sandbox, you will need to go to sandbox.payfast.co.za and create your own sandbox account and set a passphrase on there.

On live, you will need to ensure that Recurring Billing is enabled on your PayFast account. You will also need to set a passphrase on your PayFast account.

### How does a token work?
A token is used for recurring billing to identify which user to charge for an adhoc payment. Only after the first payment for an ad hoc payment, will PayFast send back the return variables (ITN).

The ‘token’ in this return variable list is what will be used in the URL of the cURL script to charge the customer.
    
    <!-- Example of a valid URL for cURL: -->
    https://api.payfast.co.za/subscriptions/a1b2acd34-ef5g-h678-ab12-3c4567d89ef1/ping?testing=true

### Can I set up an ad hoc payments agreement without charging the customer?
Yes, the initial amount on an ad hoc agreement can be set to zero. This will create the token that will then be used for charging future payments.

If your questions are not answered here, please see our [Knowledge Base](https://payfast.kayako.com/).

For more information on the Ad hoc payments see our [documentation](https://developers.payfast.co.za/documentation/#ad-hoc-payments-api-endpoints).

## API Integration

### Why am I getting this error code?
Please see our table of [Errors and Causes](https://developers.payfast.co.za/documentation/#errors-and-causes) experienced.

### Why do I get 'Merchant Authorization Failed’?
As per our Errors and Causes table, the signature is incorrect. Please note that the API signature is generated from the MD5 hash of the alphabetised submitted header and body variables, along with the passphrase.

Ensure that you include the correct merchant-id, version, timestamp and passphrase when generating the signature.

### Where can I view my token for testing a subscription in the sandbox?
You will not be able to view it in sandbox. You must make use of the ITN callback in order to retrieve the token among the return variables after a successful payment.

If your questions are not answered here, please see our [Knowledge Base](https://payfast.kayako.com/). For more information on the API see [our API documentation](https://developers.payfast.co.za/documentation/#api-integration).

## Confirmation Email

### Why am I not receiving a confirmation email at all?
Mostly likely, this has not yet been set. There are two ways to do this. You can either send this in the form posted to PayFast from the checkout page as per [our documentation](https://developers.payfast.co.za/documentation/#transaction-options) or the merchant can add this on their PayFast account as per the image below.
<img :src="$withBase('/images/email_confirmation_set.png')" alt="Payfast DashBoard debugging">

```HTML
<input type="hidden" name="email_confirmation" value="1">
<input type="hidden" name="confirmation_address" value="john@doe.com">
```

### When using a button, how do I get my custom field included in the payment confirmation email from PayFast? ‘custom_str1’ is not working.
You will need to add it on to the item name, or the item description, in order to get the information in the confirmation email. Please note the character limit for each of these as per [our documentation](https://developers.payfast.co.za/documentation/#transaction-details).

## Currency Conversion

### Why is the currency not being converted?
PayFast only works with ZAR and does not provide a currency conversion service. This would need to be handled before the amount is sent to PayFast.

### Why is PayFast just changing the currency symbol but not converting the currency amount?
When the amount is sent to PayFast, we will assume this is a ZAR amount because PayFast only transacts in ZAR, even if your shop is using a foreign currency.

### How does PayFast handle international payments?
You will be able to receive international payments via credit card. A buyer can use a card that has been issued in any country. The amount will be in ZAR and the credit card provider will conduct the exchange, paying out ZAR to the merchant’s PayFast account. 

::: tip
Please note that all amounts displayed in a foreign currency need to be converted to ZAR before being sent to PayFast. PayFast does not currently provide a currency conversion service.
:::

## Facebook Integration

### How do I integrate with Facebook?
Facebook and PayFast are not directly integrated from our side. You will be able to use the PayFast service by using the [Ecwid app](https://www.ecwid.com/facebook-commerce).

## Google Analytics

### Can I get more from Google Analytics regarding PayFast?
The way in which Google Analytics works is to record the URL from which the user arrives at your site. As all transactions occur on the PayFast site, before the user is redirected to your site, all that Google Analytics can see is PayFast. This, unfortunately, means that it is not possible to record on Analytics where the payment came from or the amount, as all that Google is looking for is the URL.

## ITN Callback errors

### I do not receive the ITN callback, why?
The URL specified by the ‘notify_url’ parameter in the POST form may not be reachable. To test this navigate to your notify URL and ensure you receive a 200 response. Also see ‘Sandbox Tools and Testing’ for checking the notify URL response. Any response other than a 200 would need to be corrected. If the ITN receives a 500 response, or no response, you will need to contact your host in order to resolve this.

::: tip
The pay now buttons do not send an ITN, should you require an ITN you will need to develop a custom integration, or making use of one of the shopping carts for which PayFast integration is available on our site.
:::
The other reason the notify URL may be unreachable would be the use of an incorrect port. PayFast makes use of ports 80, 8080, 8081 and 443 only.


## What causes the ITN security check errors?
### Invalid signature
This would be caused by the incorrect use of the passphrase, or the incorrect order of variables in the string that is MD5 hashed to generate the signature.

::: tip
Although this signature is generated in the same way as the signature on the POST to PayFast, the signature is different as it is generated using the return variables.
:::

## Bad access of page
This error is caused either by the notify URL not responding with a 200 OK, or if the valid data security check fails. The valid data security check confirms that the data received by the notify URL matches the data sent by PayFast. You will need to ensure that CURL is enabled on your server and setup to be able to receive external data.

## Amount mismatch
This error is due to the amount sent in the ITN not matching the amount stored in your DB for the transaction in question.

## Bad source IP address
This error is caused by the ITN not being received from a specified PayFast source. This is often due to the use of a proxy server.

## Landing Page Errors

### Why do I get a signature mismatch?
This is most likely caused if you generated the MD5 hashed string with the variables in the wrong order, they need to be in the order as they appear in the tables on the checkout page.

Another reason could be that you have not urlencoded the variable values and trimmed all white spaces off the ends using php’s trim() function.

The resultant URL encoding must be in upper case (eg. http%3A%2F%2F), and spaces encoded as ‘+’.

All POSTed values must adhere to the format as specified in the tables on the checkout page, any excess or invalid characters will cause this error.

The passphrase, if used, must be identical on your PayFast account as well as the site, and may consist only of letters, numbers and -_/.

Should you wish to setup recurring billing, then you will need to have a passphrase set and recurring billing enabled on your account in order to prevent the signature mismatch error.

You will need to ensure that the MD5 hash characters are in lower case.

### Why is my account “not able to receive payments”?
This could be due to your account not being verified, or the required payment method is not active on your account. Should you wish to setup recurring billing, ensure that the relevant recurring billing settings are enabled on your merchant account.

### What causes an invalid URL error?
The PayFast system will pick up on ‘local’ or ‘localhost’ in the return, cancel and notify URLs and throw the invalid URL error. This is because it is not possible to test the ITN locally due to no server to server communication. The site needs to be web accessible in order for the PayFast integration to work as expected.

### What causes the error ‘The supplied variables are not according to specification’?
This error is thrown if any of the POSTed values are incorrect, for instance, if the merchant_id or merchant_key is incorrect (possibly due to using a sandbox credentials on the live site), the following error will be thrown ‘The supplied variables are not according to specification: merchant_key: Merchant key is invalid’. The error will highlight which variables are incorrect or missing, you will then need to ensure that the POST form is adjusted accordingly.

### Why am I getting “Merchant_key invalid”?
- Ensure that live credentials are used for live transactions and test credentials are used for testing in the sandbox.
- Double check that the one set on your PayFast account matches the one set on your plugin’s configuration page.
- Check for spaces before and after the merchant key. Insert the merchant key again using copy-paste to ensure that it is correct.

### “This transaction amount is too small to be processed and the payment has been cancelled. Your payment was cancelled. You will be redirected momentarily… “
Please note, when running a payment on our live system, the amount cannot be lower than 5.00, as this is the minimum amount required by the banks.

### Can I set up the payment method directly on my site, and eliminate the redirect to PayFast? 
Unfortunately not. In order to remain PCI compliant (and therefore accepted by the banks, and trusted by the consumers), the payments need to be processed on the PayFast page. PayFast provides the service of communicating with the relevant bank. It cannot be replicated on your site, as it will open the data up to security holes, which the banks will not authorise. 

### How to customise the PayFast landing page
You will be able to add your company logo on the page your buyers are redirected to. To do this, on your merchant account, go to 'SETTINGS’ > 'Display’ > 'Edit’ > 'New Logo’ and 'Choose file’.

### Why is it safer for my customers to be redirected to PayFast?
PayFast is developed with the same demands on security and performance as web sites used for banking services and share trading. The buyer’s account login, personal details, and all money transactions are secured using Secure Socket Layer (SSL) technology with high security 256 bit encryption. Their sensitive financial information (like credit/debit card details) is never sent to the merchant so they are able to pay an unfamiliar merchant without having to share their financial information. PayFast also makes use of [3D Secure](https://www.payfast.co.za/2014/02/14/pasa-3d-secure-cnp-transactions/) to further enhance the security of credit card transactions on PayFast. 

In South Africa, any company accepting credit card payments on their website needs to comply in some way to PCI DSS. This stands for Payment Card Industry Data Security Standard and is a PASA (Payment Association of South Africa) regulation in South Africa.

PayFast is PCI DSS Level 1 Service Provider which is the highest level possible, and since PayFast is [PCI Compliant](https://www.payfast.co.za/2017/03/17/pci-compliance/), the merchant does not have to be. By being redirected to PayFast, the buyer’s credit card payments will be done in PayFast’s secure environment.

For more information please see our [Security & Fraud Prevention](https://www.payfast.co.za/security-fraud/) page.

### Assuring your customers about being redirected
If you are concerned about customers abandoning the payment when redirected, customers can be made aware of the security benefits of paying on an established, regulated payment gateway.

You could have a note on your website to let them know that they will be redirected to PayFast during the payment process and that this is a PCI DSS compliant payment gateway, keeping payment details secure during the payment process.

## Listing Your Integration

### How to get your plugin listed on our shopping carts page
If you have developed a PayFast plugin and would like it listed on our shopping carts page, please visit this [link](https://www.payfast.co.za/list-payfast-integration/) and fill out the required information.

If your questions are not answered here, please see our [Knowledge Base](https://payfast.kayako.com/).

## Mobile Integration

### Am I able to use HTML buttons in my mobile application?
It is possible to do as long as the app allows for browser redirect. Keep in mind that the Pay Now buttons do not send an ITN after the successful payment so in order to keep track of payments, you would need to make use of the PayFast emails as well as transactions page on your PayFast account.

### Why is the redirect to PayFast not working?
Your mobile application must be able to perform a browser redirect, since PayFast works via browser redirects only. Please ensure that your application is able to do this.

### What if I do not want a redirect from my app to PayFast?
It is not currently possible to make a payment without being redirected to PayFast. The best solution for this could be to limit the amount of redirects so it only occurs on the first payment, by making use of Ad Hoc billing. This will allow the user to be redirected for the first payment, and thereafter the payment will be made using a token, eliminating the need to be redirected.


## Subscriptions
### Why is recurring billing giving an error?
Please ensure that your merchant account has been verified and that recurring billing has been enabled on your PayFast account. You will also need to set a passphrase.

### Can a subscription be set up with an initial zero amount 'payment’? 
[Yes, it can](https://developers.payfast.co.za/documentation/#zero-transaction). After which, the recurring amount will kick in for subsequent payments.

### Does the buyer receive a notification from PayFast to say when the next subscription payment will be deducted?
Yes, they will get a reminder email sent to them, about 2 days before the charge. 

### Can the merchant pause a subscription?
Yes, only the merchant has the functionality to pause or unpause a subscription. They will also be able to cancel a subscription.

For more information see our [documentation](https://developers.payfast.co.za/documentation/#merchant-perspective) on the actions available to the Merchant via the dashboard.

### Why did I not receive an email for a cancelled subscription notification?
The notification of the cancelled subscription will go to the merchant at the PayFast account email, not the payment notification address.

### Why is the buyer’s name not visible in cancellation email for a subscription?
The buyer name needs to be provided to PayFast in order for it to show in the cancellation email. In future, you will need to capture the buyer’s name and post it through to PayFast for the payment.

If the buyer’s name is not provided to us, we will send through the buyer’s email address or cell phone number.

### What happens when I receive the error “Subscriber Out of Funds”?
On a complete failure (5 attempts, over 5 days), the subscription will be ‘locked’ and will need some action from the merchant to reactivate on the PayFast backend or via the API pause endpoint. There will be no penalties from us for this and once we stop trying, we will notify the merchant in order for them to be able to follow up and resolve this.

If your questions are not answered here, please see our [Knowledge Base](https://payfast.kayako.com/). For more information on subscriptions see [our Recurring Billing documentation](https://developers.payfast.co.za/documentation/#recurring-billing).

## Testing Your Integration

### Why is the ITN sample code from the PayFast documentation not working?
The following pointers should be of assistance: 

- Please review line 68 to edit the passphrase, as applicable. 
- The code generates a file called notify.txt where you will be able to view the results, if the ITN was successful.

### How do I use the sandbox?
We have provided a [tour of the sandbox](https://developers.payfast.co.za/documentation/#sandbox-tools) in order for you to orientate with it’s features. To see this, you will need to create your own sandbox account, by going to [sandbox.payfast.co.za](https://sandbox.payfast.co.za/) and entering your email address. The tour of the sandbox can be found in the ‘INFORMATION’ section of your sandbox login. 

For more information, please refer to our [documentation on the sandbox](https://developers.payfast.co.za/documentation/#the-sandbox).

### What is the difference between the sandbox and the live PayFast system?
The only real difference is that sandbox uses a virtual wallet in place of all the payment methods. Apart from that, you will be able to test your custom integration, including recurring billing payments, ITNs, order updates on your site, API tests / cURL calls, as well as Pay Now buttons and our plugins, using the sandbox.

Our [test kit](https://developers.payfast.co.za/documentation/#test-kit), which you can download in our documentation, will enable you to do a trial payment, or test our API, with the sandbox.

### Why am I getting a merchant_id / merchant_key error?
This may be due to using your live Merchant ID and Key for the sandbox. When testing in sandbox, you can either use our [supplied testing credentials](https://developers.payfast.co.za/documentation/#run-a-test-transaction) or you can use your own unique sandbox credentials.

#### Default testing credentials:

| Name | 	Description |
| ------------ | -------------- |
| Merchant ID | 	10000100 | 
| Merchant Key | 	46f0cd694581a|

::: tip
Please note that the default sandbox credentials do not have a passphrase set and therefore cannot be used for testing recurring billing. You will also not be able to login to it to view transactions.
:::

When using the supplied sandbox credentials, you will not be able to use a passphrase. If you want to use a passphrase in sandbox then please register for your own sandbox account and set a passphrase on there. Then you will need to update the passphrase, merchant ID and merchant Key on your application’s configuration page.

### How to generate unique credentials:
To create your own sandbox account, register/login in to sandbox at [sandbox.payfast.co.za](https://sandbox.payfast.co.za/) using any email address. On the sandbox dashboard, you will be given your unique sandbox Merchant ID and Key, and this will remain associated with the email used to login.

### Can I send my custom variables to sandbox and get a response?
Yes, you can send custom variables that will be returned on the notify_url, after a successful transaction from the sandbox. However, if you are testing locally, you will not receive the ITN as it will be unable to reach your local server.

### Why does my generated parameter string have strange characters in it?
When displayed in your browser, some of the parts of the parameter string can be converted by HTML, for example, the ‘&not’ of the notify_url part. To avoid this, use a function like PHP’s htmlentities() on the string to allow the characters to be displayed correctly.

### Why did I not receive an email for a cancelled subscription notification?
The notification of the cancelled subscription will go to the merchant at the PayFast account email, not the payment notification address.

### Can I test a live payment with PayFast?
Yes, you will be able to run a live payment, as long the amount is a minimum of ZAR 5. Any payment made can also be refunded by us if you request it to be. We will just require the email address used to transact and the amount to be refunded. Also remember not to use the email address associated with the merchant account as we technically do not allow the merchant to make payments to themselves.

“The supplied variable are not according to specification: 
cancel_url: must be a valid URL, notify_url: must be a valid URL,return_url: must be a valid URL“.

PayFast does not accept local URLs, and will produce this error, as a result, for localhost sites. This is because there is no server to server communication so the ITN will never hit the notify URL.  Once the site is web accessible then these errors will disappear. 

In the meantime, you can try use "127.0.0.1” instead of “localhost” or set up a DNS host file for the local site so that the url becomes “http://www.mysite.local” instead of “http://localhost/mysite”. A tunneling service like https://ngrok.com/ can also be used. It will allow you to connect your local host to the internet.




