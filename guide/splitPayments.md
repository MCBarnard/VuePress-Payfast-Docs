# Split payments

## Engines available for splitting
PayFast has two systems facilitating split payments; the payment engine, where the buyer initiates the transaction, and the recurring engine, where recurring subscriptions and ad hoc payments are handled automatically.

The rules governing these two systems’ split payments are basically the same. However, while there are similarities in the implementation methods of these two systems, there are slight differences. In general, where functionality overlaps, the rules and implementation methods are as similar as possible.

### Basics rules of split payment
- You will need to [contact PayFast](https://support.payfast.co.za/conversation/new/1) to enable this on your account.
- Only one receiving merchant can be allocated a split payment, per split transaction. Therefore the merchant ID of this receiving merchant is mandatory.
- All amounts used for the split must be in cents.
- The method used will be implemented by PayFast according to precedence.
- If both percentage and amount are specified, then the percentage will be deducted first, and then the amount will be deducted from the rest.
- If the split amount is smaller than the min, then the min will be used instead of the split amount.
- If the split amount is bigger than the max, then the max will be used instead of the split amount.

## Methods of facilitating a split
::: warning
 The order of the following methods are important as it indicates precedence.
:::

### 1. Direct request method
When the split data is embedded in the call to us, this will take precedence over the other methods.

### 2. Original transaction method
When the split data was sent to us via the direct method, this data will be extracted and used, upon a subsequent transaction.

### 3. Database method
When the split data has been set up in the database by [contacting PayFast support](https://support.payfast.co.za/conversation/new/1), then we will use this data for all the merchant’s transactions, if neither of the preceding methods are being utilised.

::: tip
Due to the rule of precedence, sending the data through using the direct request method will be used despite any settings in the database.
:::

## Engine type and method support
Each engine supports the various methods of facilitating a split as follows.

### The payment engine supports
#### All once off transactions as follows:

- Direct request method
- Database method
- The recurring engine supports

#### Subscription based payments as follows:

- Direct Request method
- Original transaction method
- Database method

#### Ad hoc agreements as follows:

- Direct Request method
- Original transaction method
-Database method

## Direct request method
For a request based split, a json encoded payload is sent to PayFast with the other transaction variables, in a variable called ‘setup’.

::: tip
JSON decoding will fail if the JSON string is not constructed correctly, according to the JSON standard.
:::

### Variables to be submitted
The following variables are used for a split payment via the direct request method.

| NAME | 	DESCRIPTION	| REQUIRED |	FORMAT |
| ----- | ------------ | --------- | ---------- |
| merchant_id | 	The receiving merchant | 	Yes	| numeric, 8 char |
| amount |	The amount in cents (ZAR), that will go to the receiving merchant |	Yes* (unless only percentage is used) |	numeric |
| percentage |	The percentage allocated to the receiving merchant	| Yes* (unless only amount is used) |	numeric, 2 char |
| min |	The minimum amount that will be split, in cents (ZAR) |	Optional |	numeric |
| max |	The maximum amount that will be split, in cents (ZAR) | 	Optional |	numeric |

::: tip
* Note that amount and percentage are used to calculate the total split amount that the receiving merchant will get. At least one of these needs to be sent to us. It is not mandatory to send both, but if you do, you will need to keep in mind that we will calculate the split amount using both the percentage and the amount variables submitted to us.
:::
<pre>Split payment variable in the checkout form</pre>
```HTML
<input type="hidden" name="setup" value='{ "split_payment" : {
            "merchant_id":10000105,
            "percentage":10,
            "min":100,
            "max":100000}}' >
```

### Example calculations
The following examples show an HTML based implementation. For each of them, we always show the receiving merchant id since it is mandatory for a successful split. We also assume an original transaction amount of ZAR 400 is used, and we convert that amount to cents for the split calculation (40,000 cents).

#### Example 1 - All variables have been sent
<span style="background-color: #e6e6ff">{ "split_payment" : { "merchant_id":10000105, "percentage":10, "amount":500, "min":100, "max":100000 } }</span><br/><br/>
In this example, all the possible split data variables have been provided, specifically percentage (10%), amount (500 cents), min (100 cents) and max (100,000 cents).
For the calculation, the percentage amount will be 4,000 cents (10% of 40,000 cents).

Split amount will then be calculated as:
(transaction amount – percentage amount) – split data amount)
(40,000 – 4,000) – 500)
= 35,500 cents

<pre>Example 1 - All variables have been sent</pre>
```HTML
<input type="hidden" name="setup" value='{ "split_payment" : {
            "merchant_id":10000105,
            "percentage":10,
            "amount":500,
            "min":100,
            "max":100000}}' >
```
While min and max amounts are optional, they have been sent in this example so we compare them with the split amount.
The split amount is not smaller than the min, so the min will not be used.
The split amount is not bigger than the max, so the max will not be used.
The split amount, therefore, stays as calculated at <b>35,500 cents (ZAR 355).</b>

#### Example 2 – Percentage, min and max have been sent
<span style="background-color: #e6e6ff">{ "split_payment" : { "merchant_id":10000105, "percentage":10, "min":100, "max":20000 } }</span><br/><br/>
In this example, the percentage is provided, but not the amount.

Split amount will then be calculated as:
(transaction amount – percentage amount)
(40,000 – 4,000)
= 36,000 cents

<pre>Example 2 - Percentage, min and max have been sent</pre>
```HTML
<input type="hidden" name="setup" value='{ "split_payment" : {
            "merchant_id":10000105,
            "percentage":10,
            "min":100,
            "max":20000}}' >
```
The split amount is not smaller than the min, so the min will not be used.
The split amount is bigger than the max, so the max will be used instead of the calculated amount.
The split amount, therefore, comes to <b>20,000 cents (ZAR 200).</b>

#### Example 3 – Amount has been sent

<span style="background-color: #e6e6ff">{ "split_payment" : { "merchant_id":10000105, "amount":500 } }</span><br/><br/>

In this example, only the amount is provided.

Split amount will then be calculated as:
(transaction amount – split data amount)
(40,000 – 500)
= 39,500 cents

The split amount, therefore, comes to <b>39,500 cents (ZAR 395)</b>, as no min or max has been provided.
<pre>Example 3 - Amount has been sent</pre>
```HTML
<input type="hidden" name="setup" value='{ "split_payment" : {
            "merchant_id":10000105,
            "amount":500 }}' >
```

