# Testing And Tools

## The sandbox
The PayFast sandbox is an exact code duplicate of the production site, available for running test transactions with.

Any transactions made or actions performed on this system, are isolated from the main production environment, while providing a realistic experience of your integration with PayFast, before going live.

<b>Sandbox url:</b>
::: tip
https://sandbox.payfast.co.za
:::

Using our sandbox, you will be able to test your integration, once off payments and recurring payments, as well as receive ITNs, without any money changing hands.

It makes use of a single payment method – a wallet with a substantially large dummy balance. While it is not possible to utilise the other payment methods in sandbox, this will not affect your integration.

The sandbox provides you with tools to check your POST variables, your parameter string generated and your security signature generated.

### Sandbox Limitations
- The sandbox ITN will only be sent once.
- The sandbox does not make any connections to external systems (allowing all payments to be successful).
- Buyer registration has been disabled in the sandbox. Please use the generic buyer details, provided here in these instructions, for testing.

## Tools to test your integration

### Getting started with sandbox
We recommend that you take a tour of the sandbox so you can familiarize yourself with it.
The tour provides you with a step by step guide on how to use the sandbox tools.

To find this, you will first need to gain access to your unique sandbox account at [https://sandbox.payfast.co.za](https://sandbox.payfast.co.za).
Simply insert your email address and proceed, to enter the sandbox.
Then click on ‘The Tour’ button at the top left.

### The Post Check Tools
Check your POST variables by clicking on ‘Open Tools’ at the top right of your sandbox dashboard.

The ‘Signature Generator’ tool allows you to determine the signature that should be generated. Simply insert your parameter string and then click ‘Generate Signature’.

The ‘Post Check Form’ tool allows you to check the variables that will be posted to PayFast:

- Check the order
- Check the length of the values
- Check if there are any missing fields
- Check the signature generated

Simply insert the values into the relevant fields and then click ‘Post To Sandbox’.

### The ITN Tool
By clicking ‘View All’ you will be able to see all the ITNs sent to your server, and the response that we received from your server.

### Setting a Passphrase
Under ‘Settings’, you can set a passphrase. This is required for all subscription and ad hoc payments. It is the salt added to your parameter string before generating the signature.

::: tip
Recurring billing transactions require a passphrase to be set.
:::

### Recurring Billing Tools
Subscriptions and ad hoc payments completed in sandbox can be viewed on your sandbox account. Just like on the PayFast merchant account, you will be able to cancel, charge, pause and edit subscriptions. For ad hoc payments, you will be able to charge and cancel them.

When editing a subscription you can change the amount, the number of cycles (payments), the next payment date and the frequency.

::: tip
The subscription token does not display in the sandbox, so be sure to capture this from the ITN!
:::

## Run a test transaction

1. You will need to use sandbox credentials, obtained from your own sandbox account, or you can use the default credentials below:

| NAME |	DESCRIPTION |
| -------- | ----------- |
| Merchant ID | 	10000100 |
| Merchant Key | 	46f0cd694581a |

::: tip
Remember that when using our default credentials, you can only test once off payments. To test subscriptions you will need to setup your own sandbox account, and set a passphrase!
:::

2. Set your integration to sandbox/test mode by changing the redirect URL to https://sandbox.payfast.co.za/eng/process.

3. When making use of the ITN, change the validate URL, in your notify URL script, to https://sandbox.payfast.co.za/eng/query/validate.

4. When conducting a test transaction on your site, you will be redirected to the PayFast sandbox. You may need to enter buyer credentials, as follows:

| NAME |	DESCRIPTION |
| -------- | ----------- |
| Username | 	sbtu01@payfast.co.za |
| Password | 	clientpass |

5. You will then see that you are in the sandbox test environment.

For a once off payment, you will see the amount given for the transaction, and a PayFast wallet (which is reset to R99,999,999.99 every night). Complete the test transaction by clicking on ‘Pay Now Using Your Wallet’.

For a recurring payment, you will see a message about the recurring payment, as well as a test credit card and cvv number. In order to make the test payment, select the credit card and enter the cvv number provided and click on ‘Pay’.

6. The ITN will then be sent to the notify URL and you will be redirected to the return URL.

7. View the ITNs from your sandbox dashboard by clicking ‘View All’ in the ITN section of your sandbox dashboard.

### Live “test” transactions (fulfilled)
The only real way to know whether the full end to end system is working correctly, is to actually process some transactions on the live system.

If you have ensured that your inputs to PayFast are correct in test transactions with the sandbox, and have ensured that you can handle the appropriate responses, there should be no reason why the live system should perform any differently.

The live payment engine URL is:

::: tip
https://www.payfast.co.za/eng/process
:::

If you wish to test this functionality, keep in mind that any money transferred by testing this way will appear in your PayFast wallet. It can then simply be paid out, once you are finished with the testing.

::: warning 
As per our requirements, you will not be able to process payments with an amount less than ZAR 5.00
:::

Please note that any “test” transactions processed this way will be subject to the agreed transaction fees which can unfortunately not be refunded.

## Test Kit

The test kit is a tool designed for you to become familiar with the PayFast integration and test the interaction between your site and PayFast.

::: tip 
Please ensure that you read the README file included before using the test kit.
:::

[Download Test Kit](https://developers.payfast.co.za/documentation/yoursite.zip)
<br/>

### Key differences between the test kit and an actual integration
1. For a live integration, the checkout page needs to include the required fields for the checkout page and then submit this to PayFast. Here in the test kit, the submit code is located in signature.php page where we are showing the parameter string and signature. This flow is for test purposes only.
2. For a live integration, the passphrase needs to be set in the admin configuration, and referenced as a variable when needed. It is not part of the checkout page form, or hard-coded in the notify page, as we do here.
   
3. For a live integration, the following will be hidden, either set in configuration or hard-coded in your integration:
- The Merchant ID and Merchant Key
- The URLs (Return, Cancel and Notify)
- The Email confirmation fields

4. The Merchant Payment ID will be generated by the merchant’s site.

## Sample code
The following code resources have been kindly contributed by fellow developers for your convenience:
::: warning
If you have any queries concerning this code and debugging or further development thereof, please contact the contributor, or a developer familiar with this particular language, as we will be unable to assist you.
:::
| DOWNLOAD | CONTRIBUTER |
| ---------- | ----------- |
| [PHP ITN](https://developers.payfast.co.za/documentation/samplecode/itn_sample_code.zip) | PayFast |
| [JSP ITN](https://developers.payfast.co.za/documentation/samplecode/jsp_sample_code.zip) | John Eatwell |
| [VB.Net](https://developers.payfast.co.za/documentation/samplecode/vb_sample_code.zip) | Jose Heitor |
| [C#.Net](https://developers.payfast.co.za/documentation/samplecode/csharp_sample_code.zip) | Thabo Letsoalo |
| [C#.Net, (View demo)](https://payfast-demo.azurewebsites.net/) | Louis Lewis |
| [Ruby on rails](https://github.com/pawel2105/payfast_rails_example) | Pawel Janiak |

::: warning
While we strive to ensure that all code we publish is accurate and well documented, the sample code given above is user contributed code and is provided as is, without any guarantee as to its correctness or valid operation.
:::
