---
pageClass: webIntegration-class
---
# Web Integration

## Getting Started

### How it Works

All that is required for a once-off payment, or to setup a recurring payment (subscription or ad hoc), is an HTML form with the necessary variables (described in the checkout page) sent to PayFast. PayFast will then process the transaction, update the merchants account, and send a payment confirmation (ITN) to the notify URL. The return variables of the payment confirmation can then be used to update your system accordingly.

<img :src="$withBase('/images/Getting started.png')" alt="Getting Started with Payfast">


There are two methods available for integrating with PayFast, ITN, which is our preferred integration method and PDT, a method that we are deprecating, and will no longer support after 2018-12-31. The main difference, besides better security in ITN, is that with ITN our server contacts your website and notifies you of the payment, whereas with PDT you are required to contact and confirm with us.

The following is a list of pages that are generally needed on your website or application:
| NAME &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   |   DESCRIPTION              |
| ------------------------------------------- | -------------------------- |
| Checkout page         | Buyer clicks a button to confirm their order and is redirected to PayFast for payment            |__
| Success page         | Page on your site which the buyer sees after successful payment            |
| Cancelled page         | Page on your site which the buyer sees after payment is cancelled on PayFast            |
| Notify page         | Callback page which does all the ‘heavy lifting’ with regards to updating your database with payment information etc            |

### Checkout Page
This page will have an HTML form, usually hidden, with a number of fields containing all the necessary information needed for PayFast to process the payment. Most shopping cart systems will have the buyer click on a ‘Confirm Order’ or ‘Pay Now’ button to submit the form and be redirected to the PayFast Payment page.


### Success Page ‘return_url’
This page on your site is where the buyer is redirected to, from PayFast, after a successful payment. A plain HTML page thanking the buyer for their purchase (and maybe mentioning the delivery procedure) is usually the norm. The page is specified by the return_url variable in the HTML form on the Checkout Page. If you are using the PDT method to update your custom integration this page would handle any required functionality.

### Cancelled Page ‘cancel_url’
This page (on your site) is where the buyer is redirected from PayFast if they cancel their payment. Good practice is to set this to a page which will allow the buyer to try and purchase again. Our recommendation is that you return the buyer to the Checkout Page. This page is specified by the cancel_url variable as defined in the HTML form on the Checkout Page.

### Notify Page ‘notify_url’
This page would do all the ‘work’ which is required (e.g. updating the order in your database), when using our ITN method. This page is ‘called’ by our server directly after a successful payment and before the user is redirected to the Success Page. If there are any communication problems, or errors, our server will try again (up to eight more times).

### Possible Sequence of events
Below is a sequence of events for a successful and unsuccessful (cancelled) payment on PayFast assuming the use of the above integration process and using the ITN method.

#### Successful Payment
1. Variables POSTed to PayFast from merchant website.
2. Payment collected from customer through payment engine, and the ITN is posted to the notify_url
3. ITN process completes
4. Customer displayed success screen on PayFast
5. Customer redirected to return_url on merchant website
6. If first ITN was unsuccessful (eg. due to merchant server outage), ITN is attempted again after 10 minutes, up to 8 consecutive times.

::: tip
The URL to which the variables are posted is: https://www.payfast.co.za/eng/process
:::

#### Cancelled Payment
1. Variables POSTed to PayFast from merchant
2. Buyer cancels payment on PayFast during any step
3. Customer displayed unsuccessful screen on PayFast
4. Customer redirected to cancel_url on merchant’s site

::: tip
No ITN is triggered for a cancelled payment
:::

#### Variable format
The below table describes the formats of the variables used when integrating with PayFast.

| Format     &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;   | Description &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;          |
| ------------- | ------------- |
| alphanumeric     | A-Z, a-z, 0-9 |
| alphanumeric extended     | alphanumeric and special characters _-/ |
| char     | maximum number of characters |
| decimal     | numeric and optional decimal point . |
| email     | valid email address |
| numeric     | numeric digits, 0-9 |
| url/alphanumericspecial     | 	alphanumeric and special characters _-/:&?#=+ |
| MD5 hash     | 32 character hexadecimal number. |

## Checkout Page
 The checkout or confirm page is usually the last step before the buyer will enter their payment details, allowing the buyer to review their order before paying for it.
 
 From the checkout page, all the necessary fields (variables) that PayFast requires to process a payment will be ‘POSTed’ to PayFast. These fields are explained in the tables below.
 
 There are 4 required variables for all types of integrations, with further variables required for recurring payments. The other variables are either highly recommended, or optional.
 
 Take note of the variables that only allow specific characters and those that have a restricted character length, as well as the order that the variables are submitted in.

### Variables to be submitted

#### Merchant Details
| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| merchant_id     | The Merchant ID as given by the PayFast system. Used to uniquely identify the receiving account. <br /> <br /> *This can be found on the merchant’s settings page.* | Yes     | numeric |
| merchant_key     | The Merchant Key as given by the PayFast system. Used to uniquely identify the receiving account. This provides an extra level of certainty concerning the correct account as both the ID and the Key must be correct in order for the transaction to proceed. <br /> <br /> *This can be found on the merchant’s settings page.* | Yes     | alphanumeric |
| return_url     | The URL where the user is returned to after payment has been successfully taken. | Optional     | url |
| cancel_url     | The URL where the user should be redirected should they choose to cancel their payment while on the PayFast system. | Optional     | url |
| notify_url	     | The URL which is used by PayFast to post the Instant Transaction Notifications (ITNs) for this transaction. | Optional     | url |
```HTML
    <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
    
    <input type="hidden" name="merchant_id" value="10000100">
    <input type="hidden" name="merchant_key" value="46f0cd694581a">
    <input type="hidden" name="return_url" value="https://www.yoursite.com/return">
    <input type="hidden" name="cancel_url" value="https://www.yoursite.com/cancel">
    <input type="hidden" name="notify_url" value="https://www.yoursite.com/notify">
```
::: tip
For the notify_url above, a variable can be specified globally on the Merchant’s PayFast account or overridden on a per transaction basis. The value provided during a transaction overrides the global setting.
:::

### Buyer Details
While these fields are optional, it is highly recommended to provide this information (if available) as it is used to pre-populate any forms the user needs to fill in to complete payment. It decreases the time taken to complete the transaction and improves the rate of successful payment completion.

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| name_first     | The buyer’s first name. | Optional     | alphanumeric, 100 char |
| name_last     | The buyer’s last name. | Optional     | alphanumeric, 100 char |
| email_address     | The buyer’s email address | Optional     | alphanumeric, 100 char |
| cell_number     | The buyer’s valid cell number. If the email_address field is empty, and cell_number provided, the system will use the cell_number as the username and autologin the user, if they do not have a registered account | Optional     | 	numeric, 10 char |

### Transaction Details

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| m_payment_id |	Unique payment ID on the merchant’s system. |	Optional |	alphanumeric, 100 char |
| amount |	The amount which the payer must pay in ZAR. |	Yes |	decimal |
| item_name |	The name of the item being charged for.	| Yes	| alphanumeric, 100 char |
| item_description |	The description of the item being charged for. |	Optional |	alphanumeric, 255 char |
| custom_int1 |	A series of 5 custom integer variables (custom_int1, custom_int2…) which can be used by the merchant as pass-through variables. They will be posted back to the merchant at the completion of the transaction. |	Optional |	numeric, 255 char |
| custom_str1 |	A series of 5 custom string variables (custom_str1, custom_str2…) which can be used by the merchant as pass-through variables. They will be posted back to the merchant at the completion of the transaction. |	Optional |	alphanumeric, 255 char |
```HTML    
    <input type="hidden" name="m_payment_id" value="01AB">
    <input type="hidden" name="amount" value="100.00">
    <input type="hidden" name="item_name" value="Test Item">
    <input type="hidden" name="item_description" value="A test product">
    <input type="hidden" name="custom_int1" value="2">
    <input type="hidden" name="custom_str1" value="Extra order information">
```
### Transaction Options

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| email_confirmation |	Whether to send email confirmation to the merchant of the transaction. Email confirmation is automatically sent to the payer. |	Optional |	1 or 0 |
| confirmation_address |	The address to send the confirmation email to. |	Optional |	alphanumeric, 100 char |
```HTML
    <input type="hidden" name="email_confirmation" value="1">
    <input type="hidden" name="confirmation_address" value="john@doe.com">
```
* This is a Boolean variable whose value must be 1 (on) or 0 (off).
* A variable can be specified globally on your account or overridden on a per transaction basis. The value provided during a transaction overrides the global setting.

### Set Payment Method

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| payment_method | When this field is set, only the payment method specified can be used when the buyer reaches PayFast. <br/><br/>If this field is blank, or not included, then all available payment methods will be shown.<br/>The values are as follows:<br/> <br/><ul><li> ‘eft’ – sets eft payment method <br/></li></ul><ul><li> ‘cc’ – sets credit card payment method <br/></li></ul><ul><li> ‘dc’ – sets debit card payment method <br/></li></ul><ul><li> ‘bc’ – sets bitcoin payment method <br/></li></ul><ul><li> ‘mp’ – sets masterpass payment method <br/></li></ul><ul><li> ‘mc’ – sets mobicred payment method <br/></li></ul><ul><li> ‘cd’ – sets cash deposit payment method <br/></li></ul><ul><li> ‘sc’ – sets SCode payment method</li></ul> | Optional | 	alphanumeric, 3 char |
```HTML
    <input type="hidden" name="payment_method" value="cc">
```
### Recurring Billing Details

#### Subscription

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| subscription_type |	The subscription type sets the recurring billing type to a subscription. Value is as follows: <br />  <ul><li> 1 – sets type to a subscription</li></ul> | Yes (For subscription only)  |	1 |
| billing_date |	The date from which future subscription payments will be made. Eg. 2016-01-01. Defaults to current date if not set. |	Optional	| Date format: YYYY-MM-DD |
| recurring_amount |	Future recurring amount for the subscription. Defaults to the ‘amount’ value if not set. A minimum amount of R5.00 should be used as the recurring_amount. |	Optional |	decimal |
| frequency |	The cycle period. |	Yes (For subscription only) |	numeric: <br/> 3- Monthly <br />4- Quarterly<br />5- Biannual<br />6- Annual |
| cycles |	The number of payments/cycles that will occur for this subscription. Set to 0 for infinity. |	Yes (For subscription only) |	numeric, 0 for indefinite subscription |


<pre>
Subscription
</pre>
```HTML
    <input type="hidden" name="subscription_type" value="1">
    <input type="hidden" name="billing_date" value="2017-01-01">
    <input type="hidden" name="recurring_amount" value="123.45">
    <input type="hidden" name="frequency" value="3">
    <input type="hidden" name="cycles" value="12">
```
#### Tokenized Charge

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| subscription_type |	The subscription type sets the recurring billing type to an ad hoc payment. Value is as follows: <br /> <ul><li>2 – sets type to an ad hoc payment</li></ul> | Yes (For Ad Hoc only) |	2 |

<pre>
Tokenized Charge
</pre>
```HTML
    <input type="hidden" name="subscription_type" value="2">
    <input type="hidden" name="subscription_type" value="2">
    <input type="hidden" name="subscription_type" value="2">
    <input type="hidden" name="subscription_type" value="2">
```
### Split Payment Details

#### Checkout page variable
For a split payment, we make us of the hidden variable called setup. Note that this will not be included in the signature. The value for setup needs to contain the JSON encoded payload split_payment as per the table below.

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| merchant_id | 	The receiving merchant	| Yes	| numeric, 8 char |
| amount |	The amount in cents (ZAR), that will go to the receiving merchant |	Yes* (unless only percentage is used) |	numeric |
| percentage |	The percentage allocated to the receiving merchant	| Yes* (unless only amount is used)	| numeric, 2 char |
| min |	The minimum amount that will be split, in cents (ZAR) |	Optional |	numeric |
| max |	The maximum amount that will be split, in cents (ZAR) |	Optional |	numeric |

<pre>
Split Payments
</pre>
```HTML
    <input type="hidden" name="setup" value='{ "split_payment" : {
                "merchant_id":10000105,
                "percentage":10,
                "min":100,
                "max":100000}}' >
```
::: details
At least one of these needs to be sent to us. It is not mandatory to send both, but if you do, PayFast will calculate the split amount using both the percentage and the amount variables submitted to us.
:::

#### Rules for split payments
- You will need to contact PayFast [contact PayFast](https://www.payfast.co.za/contact) to enable this on your account.
- Only one receiving merchant can be allocated a split payment, per transaction.
- All amounts used for the split must be in cents.
- Using this direct request method for splitting a payment will take precedence over any previously submitted split data sent or set up by the PayFast support team in the database.
- If both percentage and amount are specified, then the percentage will be deducted first, and then the amount will be deducted from the rest.
- If the split amount is smaller than the min, then the min will be used instead of the split amount.
- If the split amount is bigger than the max, then the max will be used instead of the split amount.

### Security Features
#### The Signature

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| signature | A security signature of the transmitted data taking the form of an MD5 hash of the submitted variables. <br />  <br />The string from which the hash is created, is the concatenation of the name value pairs of all the non-blank variables with ‘&’ used as a separator eg. name_first=John&name_last=Doe&email_address=… where pairs are listed in the order in which they appear on this page. <br /> <br /> The string from which the hash is created, is the concatenation of the name value pairs of all the non-blank variables with ‘&’ used as a separator eg. name_first=John&name_last=Doe&email_address=… where pairs are listed in the order in which they appear on this page. <br /> <br /> This hash will be regenerated by the PayFast engine and the values compared to ensure the integrity of the data transfer. | Yes | MD5 hash, characters must be in lower case |
```HTML 
   <input type="hidden" name="signature" value="f103e22c0418655fb03991538c51bfd5">
               
   </form>
```
#### The order of the checkout variables
The order in which the checkout page variables and urlencoded values are submitted is vitally important, and allows PayFast to ensure the integrity of the data transfer by way of the signature. It is a set order, the same as they appear in the tables above.

```php
<?php
// Construct variables 
$cartTotal = xxxx;// This amount needs to be sourced from your application
$data = array(
    // Merchant details
    'merchant_id' => '10000100',
    'merchant_key' => '46f0cd694581a',
    'return_url' => 'http://www.yourdomain.co.za/thank-you.html',
    'cancel_url' => 'http://www.yourdomain.co.za/cancelled-transction.html',
    'notify_url' => 'http://www.yourdomain.co.za/itn.php',
    // Buyer details
    'name_first' => 'First Name',
    'name_last'  => 'Last Name',
    'email_address'=> 'valid@email_address.com',
    // Transaction details
    'm_payment_id' => '8542', //Unique payment ID to pass through to notify_url
    // Amount needs to be in ZAR
    // If multicurrency system its conversion has to be done before building this array
    'amount' => number_format( sprintf( "%.2f", $cartTotal ), 2, '.', '' ),
    'item_name' => 'Item Name',
    'item_description' => 'Item Description',
    'custom_int1' => '9586', //custom integer to be passed through           
    'custom_str1' => 'custom string is passed along with transaction to notify_url page'
);        

// Create parameter string
$pfOutput = '';
foreach( $data as $key => $val )
{
    if(!empty($val))
     {
        $pfOutput .= $key .'='. urlencode( trim( $val ) ) .'&';
     }
}
// Remove last ampersand
$getString = substr( $pfOutput, 0, -1 );
//Uncomment the next line and add a passphrase if there is one set on the account 
//$passPhrase = '';
if( isset( $passPhrase ) )
{
    $getString .= '&passphrase='. urlencode( trim( $passPhrase ) );
}   
$data['signature'] = md5( $getString );

```

<pre> This array can then also be used in generating the form output. </pre>
```php
<?php
// If in testing mode make use of either sandbox.payfast.co.za or www.payfast.co.za
$testingMode = true;
$pfHost = $testingMode ? 'sandbox.payfast.co.za' : 'www.payfast.co.za';
$htmlForm = '<form action="https://'.$pfHost.'/eng/process" method="post">'; 
foreach($data as $name=> $value)
{ 
    $htmlForm .= '<input name="'.$name.'" type="hidden" value="'.$value.'" />'; 
} 
$htmlForm .= '<input type="submit" value="Pay Now" /></form>'; 
echo $htmlForm;
```

When the data transmitted from the checkout page is received by PayFast, the MD5 hash will be regenerated by PayFast from the supplied data, in the set order, and the resulting hash will be compared with the signature received. If the hash created, from the checkout variables supplied, does not match the signature, then the payment will fail. The string from which the hash is created, is the concatenation of the name value pairs of all the non-blank variables with ‘&’ used as a separator eg:

<span style="background-color: #e6e6ff">name_first=John&name_last=Doe&email_address=john.doe@example.com..</span>

#### Passphrase
The passphrase is an optional/ extra security feature, made up of a maximum of 32 characters, which is set by the Merchant in the Settings section of their PayFast Dashboard. The identical passphrase must be used on the merchant’s site.

The passphrase is used to ‘salt’ the parameter string before it is MD5 hashed to generate the signature.

::: tip
The passphrase does not get passed to the server like the other variables
:::

This further aids in ensuring the integrity of the data that is being passed through when payment is made.

### Example Checkout Page


<img :src="$withBase('/images/page-checkout.png')" alt="An example of a checkout page.">

#### Common causes of a failed integration / signature mismatch

The following will cause a signature mismatch or a payment to fail:

1. <b>The order of the variables</b> in parameter string (to create the signature/MD5 hash) does not mirror the order as presented above. This is the most likely cause of a signature mismatch! It is critical that the variables are concatenated in the order as they appear in the tables above.

2. <b>A required field is missing</b>

3. A field is greater than the allowable <b>character length</b>

4. Any of the fields containing <b>non-allowable characters</b>

5. The Parameter string has been <b>URLencoded incorrectly</b>. The resultant URLencoding has to be show upper case, for example, <span style="background-color: #e6e6ff">http%3A%2F%2</span> and not lower case like <span style="background-color: #e6e6ff">http%3A%2F%2</span>.

6. The Parameter string has not been trimmed of <b>white spaces</b> on the ends. Please make use of PHP’s [trim()](https://www.php.net/manual/en/function.trim.php) function to avoid this.

## Success Page

The success page, or return page, is used to show the buyer that the payment has been successfully received and provides any necessary details about the order.

This page is determined by the value set on the return_url field of the form submitted from the checkout page. It is possible to add a cart id, or order id, onto the return_url which the merchant’s system can then use to access the necessary information from the database to be displayed to the user on the success page.

::: details 
All return variables are sent to the notify_url only, no data is sent to the `return_url`
:::

### Success page example (Return page)

<img :src="$withBase('/images/page-success.png')" alt="An example of a Successfull checkout page.">

## Cancel Page
This page is where buyers are redirected to if they cancel the payment transaction at any stage. It is defined by the cancel_url field that is set on the shopping cart or client checkout page prior to being redirected to the PayFast payment engine.

If you are saving the user’s purchase information prior to being redirected, it is common practice to present that information to the buyer on this page to encourage them to complete the transaction or continue shopping. Many eCommerce solutions set the cancel_url field to the same page as the shopping cart page to get the buyer to retry (or reconsider) paying.

### Cancel Page Example

<img :src="$withBase('/images/page-cancel.png')" alt="An example of a Cancelled checkout page.">

## Notify Page (ITN)

<img :src="$withBase('/images/itn-callback-flow.png')" alt="An example of how the Notifications work with PayFast.">

The payment notification (Instant Transaction Notification – ITN) communicates with the notify_url, which is a  field set on the  form sent from the checkout page, allowing for the exchange of data between the two web servers after a successful transaction. The notify_url should process the following:

1. Receive the data posted by PayFast
2. Notify PayFast that the information has been received
3. Perform security checks
&nbsp; <ul><li> Verify the security signature is valid </li></ul>
&nbsp; <ul><li> Verify the source IP address belongs to PayFast </li></ul>
&nbsp; <ul><li> Verify the payment amount matches your order amount </li></ul>
&nbsp; <ul><li> Verify the data received is valid </li></ul>
4. Verify that the order hasn’t been processed already
5. Process the order
&nbsp; <ul><li> Update the status to paid </li></ul>
&nbsp; <ul><li> Email the buyer confirming payment </li></ul>

### Return Variables
Detailed below are the possible variables returned to the receiver as part of an ITN from PayFast.

#### Transaction details

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| m_payment_id |	Unique payment ID on the merchant’s system. |	Optional | 	alphanumeric, 100 char |
| pf_payment_id |	Unique transaction ID on PayFast.|	Required |	numeric|
| payment_status |	After a successful payment the status sent will be COMPLETE. When a subscription is cancelled the status will be CANCELLED.	| Required |	COMPLETE or CANCELLED |
| item_name	| The name of the item being charged for. |	Required	| alphanumeric, 100 char |
| item_description |	The description of the item being charged for. |	Optional |	alphanumeric, 255 char |
| amount_gross	| The total amount which the payer paid.	| Required	| decimal |
| amount_fee	| The total in fees which was deducted from the amount. |	Required |	decimal |
| amount_net	| The net amount credited to the receiver’s account.	| Required	| decimal |
| custom_str1 |	The series of 5 custom string variables (custom_str1, custom_str2…) originally passed by the receiver during the payment request. |	Optional |	alphanumeric, 255 char |
| custom_int1 |	The series of 5 custom integer variables (custom_int1, custom_int2…) originally passed by the receiver during the payment request. |	Optional | 	numeric |

#### Buyer details

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| name_first |	The buyer’s first name. |	Optional |	alphanumeric, 100 char |
| name_last	| The buyer’s last name.	| Optional	| alphanumeric, 100 char |
| email_address |	The buyer’s email address |	Optional |	alphanumeric, 100 char |

#### Merchant details 

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| merchant_id |	The Merchant ID as given by the PayFast system. Used to uniquely identify the receiver’s account. |	Required |	numeric |

#### Recurring billing details

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| token |	Unique ID on PayFast that represents the subscription	| Required |	alphanumeric, 36 char |

::: details 
Should the buyer / subscriber cancel a subscription, an ITN call may be made. In this case, the payment_status field may return an additional status value.
:::

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| billing_date |	The date from which future subscription payments will be made. Eg. 2016-01-01. Defaults to current date if not set.	| Optional |	Date format: YYYY-MM-DD |

### Security information

| NAME       | DESCRIPTION   | REQUIRED    | FORMAT    |
| ------------- | ------------- | ------------- | ------------- |
| signature | 	A security signature of the transmitted data taking the form of an MD5 hash of all the url encoded submitted variables. The string from which the hash is created, is the concatenation of the name value pairs of all variables (including the blank variables) with ‘&’ used as a separator eg. “name_first=John&name_last=Doe&email_address=…” where pairs are listed in the order in which they appear in the $_POST data. This hash will be regenerated by the PayFast engine and the values compared to ensure the integrity of the data transfer. | Optional | MD5 hash, characters must be in lower case |

If the ITN callback method has been used, part of the security checking stage is confirming the received data’s signature (see security check one).

If you have a passphrase set on your account “Settings” page, it will need to be added to the string used to generate the signature. The passphrase is never published or given out. It serves as an extra security measure to ensure that all information is accurate and has not been tampered with.

### Step one
Receive the payment information from PayFast and then tell PayFast that this page is reachable by triggering a header 200, the payment engine will make a few attempts, one immediately and then one after 10 minutes again, then exponentially at longer intervals, until it receives an OK 200 from your web server. Once the ITN receives the OK 200 there will be no further communication with the ITN.

::: tip
The return variables will not be posted to your server if it does not respond with a header of 200 OK
:::

```php
<?php
header( 'HTTP/1.0 200 OK' );
flush();
```
<pre>Store the posted data in:</pre>
```php
<?php
define( 'SANDBOX_MODE', true );
$pfHost = SANDBOX_MODE ? 'sandbox.payfast.co.za' : 'www.payfast.co.za';
// Posted variables from ITN
$pfData = $_POST;

// Strip any slashes in data
foreach( $pfData as $key => $val )
{
    $pfData[$key] = stripslashes( $val );
}
```
### Step two
Conduct four security checks to ensure that the data you are receiving is correct, from the correct source and hasn’t been altered; you should not continue the process if a test fails!

### Security check one
Verify the security signature in the data array; this is done in a similar way that the signature that you generated for stage one of the user payment flow. It is to ensure that there hasn’t been any middle man attacks and changing of values within the received data. The string that gets created needs to include all fields posted from PayFast.

::: tip 
If a passphrase has been set in the PayFast Settings, then it needs to be included in the signature string
:::

```php
<?php
// $pfData includes of ALL fields posted through from PayFast, plus the empty strings
$pfData = $_POST;

// Construct variables 
foreach( $pfData as $key => $val )
{
    if( $key != 'signature' )
    {
        $pfParamString .= $key .'='. urlencode( $val ) .'&';
    }
}

// Remove the last '&' from the parameter string
$pfParamString = substr( $pfParamString, 0, -1 );
$pfTempParamString = $pfParamString;
// Passphrase stored in website database
$passPhrase = '';

if( !empty( $passPhrase ) )
{
    $pfTempParamString .= '&passphrase='.urlencode( $passPhrase );
}
$signature = md5( $pfTempParamString );

if($signature!=$pfData['signature'])
{
    die('Invalid Signature');
}
```
### Security check two

With this test you will be checking to ensure that your application is communicating with a valid PayFast payment engine.

The following is a list of valid domains:
- www.payfast.co.za
- w1w.payfast.co.za
- w2w.payfast.co.za
- sandbox.payfast.co.za

```php
<?php
// Variable initialization
$validHosts = array(
    'www.payfast.co.za',
    'sandbox.payfast.co.za',
    'w1w.payfast.co.za',
    'w2w.payfast.co.za',
);

$validIps = array();

foreach( $validHosts as $pfHostname )
{
    $ips = gethostbynamel( $pfHostname );
    if( $ips !== false )
    {
        $validIps = array_merge( $validIps, $ips );
    }
}

// Remove duplicates
$validIps = array_unique( $validIps );

if( !in_array( $_SERVER['REMOTE_ADDR'], $validIps ) )
{
    die('Source IP not Valid');
}
```
### Security check three
Check payment data against the merchant’s order. This can be determined by comparing the amount processed for payment and the amount of the cart in your application and seeing if they match.

```php
<?php
$cartTotal = xxxx; // This amount needs to be sourced from your application
if( abs( floatval( $cartTotal ) - floatval( $pfData['amount_gross'] ) ) > 0.01 )
{
    die('Amounts Mismatch');
}
```

### Security check four

Using cURL, validate the data that you have received from PayFast by contacting our server and confirming the order details.

#### Live validation URL:
::: tip
https://www.payfast.co.za/eng/query/validate
:::

#### Sandbox validation URL:
::: tip
https://sandbox.payfast.co.za/eng/query/validate
:::

```php
<?php
// Variable initialization
$url = 'https://'. $pfHost .'/eng/query/validate';

// Create default cURL object
$ch = curl_init();

// Set cURL options - Use curl_setopt for greater PHP compatibility
// Base settings
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_HEADER, false );      
curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 2 );
curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 1 );

// Standard settings
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt( $ch, CURLOPT_POST, true );
curl_setopt( $ch, CURLOPT_POSTFIELDS, $pfParamString );

// Execute CURL
$response = curl_exec( $ch );
curl_close( $ch );

$lines = explode( "\r\n", $response );
$verifyResult = trim( $lines[0] );

if( strcasecmp( $verifyResult, 'VALID' ) != 0 )
{
    die('Data not valid');
}
```

The following table contains a detailed description of each of the cURL options used in the code snippet to the right.

| OPTION |	DESCRIPTION |
| ------------- | ----------------------------------|
| CURLOPT_RETURNTRANSFER  | Set to TRUE to return the transfer as a string of the return value of [curl_exec()](http://php.net/manual/en/function.curl-exec.php) instead of outputting it out directly.  |
| CURLOPT_HEADER  |  Set to False to exclude the header in the output. |
|  CURLOPT_SSL_VERIFYHOST |  Set to 2 to check the existence of a common name in the SSL peer certificate, and to also verify that it matches the hostname provided. |
| CURLOPT_SSL_VERIFYPEER  |  This option determines whether curl verifies the authenticity of the peer’s certificate. The default value is 1. |
|  CURLOPT_URL | 	Set to the PayFast query validation URL, eg. https://www.payfast.co.za/eng/query/validate. This can also be set when initializing a session with [curl_init()](http://php.net/manual/en/function.curl-init.php).  |
|  CURLOPT_POST | Set to TRUE to do a regular HTTP POST. This POST is the normal application/x-www-form-urlencoded kind, most commonly used by HTML forms.  |
|  CURLOPT_POSTFIELDS |  The full data to post via HTTP to PayFast. This parameter is passed as a urlencoded string, such as: <br /> <span style="background-color: #e6e6ff">m_payment_id=01&pf_payment_id=01234..</span> |

### Step three

Query your database and compare the pf_payment_id in order to verify that the order hasn’t already been processed on your system.

```php
    <?php
    $pfPaymentId = $pfData['pf_payment_id'];
```
### Step four
Once you have completed these tests and the data received is valid, check the payment status and handle appropriately.

```php
Copy<?php
 if( $pfData ['payment_status'] == 'COMPLETE' )
 {
    // If complete, update your application
 }
 else
 {
    // If unknown status, do nothing (which is the safest course of action)
 }
```
<pre> For Recurring billing only: </pre>
```php
<?php
switch( $pfData['payment_status'] )
{
    case 'COMPLETE':
    // If complete, update your application
       break;
    case 'CANCEL':
    // If cancel, then cancel subscription
       break;
    default:
    // If unknown status, do nothing (which is the safest course of action)
       break;
}
```

## PDT (deprecated)

<img :src="$withBase('/images/PDT-v2.png')" alt="working with PDT Payfast">

::: warning
The PDT integration method is deprecated and will be discontinued by 2018-12-31
:::
