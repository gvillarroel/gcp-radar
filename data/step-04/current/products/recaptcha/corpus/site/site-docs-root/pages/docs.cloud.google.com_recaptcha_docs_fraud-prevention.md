---
title: "Protect payment transactions with Transaction defense \_|\_ reCAPTCHA \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/fraud-prevention
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/fraud-prevention
  title: "Protect payment transactions with Transaction defense \_|\_ reCAPTCHA \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Protect payment transactions with Transaction defense
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to effectively protect payment transactions against
attacks, such as carding, stolen instrument fraud, and account takeover payment
fraud by using Transaction defense.
Transaction defense helps you protect payment transactions
by identifying targeted manual attacks and scaled fraud attempts. It
automatically trains behavior and transaction models to identify events that are
likely fraudulent and can result in a dispute or chargeback if accepted.
As part of these models, Transaction defense examines
transaction signals to detect carding and chargeback attacks. For example, a series of
purchase attempts with low prices might indicate a carding attack. In the
response, you receive risk scores for different types of fraud, which you can
use to send the transaction to a manual review, or directly block sufficiently
suspicious transactions.
Note: Transaction defense is PCI compliant .
To set up Transaction defense, you need to complete the
following steps:
Prepare your environment .
Enable Transaction defense on your Google Cloud project .
Choose an integration method .
Submit a create assessment API request from your backend with transaction data, using either the Frontend Integration or the API-only Integration chosen earlier.
In the response of the create assessment API request, reCAPTCHA
provides a score for transaction risk and additional Explainability reasons
(for example, HIGH_TRANSACTION_VELOCITY ), if applicable.
Determine the next action for your users based on the scores .
You can choose to allow the transaction, ask for additional verification,
forward to a manual review, or block the transaction.
Before you begin
If you are new to reCAPTCHA, then do the following:
Configure reCAPTCHA on your Google Cloud project .
Create a score-based reCAPTCHA key .
If you are planning a Frontend Integration, verify that your environment supports tokens larger than 8 kB, because
Transaction defense might use larger tokens.
Enable Transaction defense
In the Google Cloud console, go to the reCAPTCHA page.
Go to reCAPTCHA
Verify that the name of your project appears in the resource selector.
If you don't see the name of your project, click the resource selector,
then select your project.
Click settings Settings .
In the Transaction defense pane, click Configure .
Click the Enable toggle, and click Save .
Choose an integration method
Choose the Frontend Integration to automatically incorporate signals from the frontend device, or API-only Integration if you'd prefer not integrating in the frontend.
Note: The Frontend Integration uses the same JavaScript that's used for other reCAPTCHA
use cases, such as bot detection and account protection. If you're already using other features from the reCAPTCHA portfolio, your frontend JavaScript integration is already complete.
When the JavaScript is executed, reCAPTCHA generates a unique
reCAPTCHA token for every user session and collects user
behavioral data to evaluate the user.
The API-only Integration returns a verdict using only the required transaction data and doesn't require this token.
Frontend Integration - Install reCAPTCHA on your website
Using Transaction defense with a reCAPTCHA frontend integration helps protect against carding attacks and fraudulent transactions. To start detecting attacks, install a score-based reCAPTCHA
key on each page in your payment user flow. This includes the interface where a
user reviews their cart, selects their payment method, and completes the purchase.
After the user has made their selection at each step, call grecaptcha.enterprise.execute()
to generate a token. To learn how to install score-based keys and call
execute() , see Install score-based keys .
The following example shows how to integrate a score-based key on a credit
card transaction event:
function submitForm() {
grecaptcha.enterprise.ready(function() {
grecaptcha.enterprise.execute(
'reCAPTCHA_site_key', {action: 'purchase'}).then(function(token) {
document.getElementById("token").value = token;
document.getElementByID("paymentForm").submit();
});
});
}
<form id="paymentForm" action="?" method="POST">
Total: $1.99
Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/>
<input type="hidden" id="token" name="recaptcha_token"/>
<button onclick="submitForm()">Purchase</button>
</form>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
You can experiment with this code in JSFiddle by clicking the <> icon in the
top-right corner of the code window.
<html>
<head>
<title>Protected Payment</title>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
<script>
function submitForm() {
grecaptcha.enterprise.ready(function() {
grecaptcha.enterprise.execute(
'reCAPTCHA_site_key', {action: 'purchase'}).then(function(token) {
document.getElementById("token").value = token;
document.getElementByID("paymentForm").submit();
});
});
}
</script>
</head>
<body>
<form id="paymentForm" action="?" method="POST">
Total: $1.99
Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/>
<input type="hidden" id="token" name="recaptcha_token"/>
<button onclick="submitForm()">Purchase</button>
</form>
</body>
</html>
Frontend Integration - Create assessments with transaction data
To receive payment fraud verdicts, create assessments with Transaction Data by
using the additional fields in the
projects.assessments.create
method.
At a minimum, the integration requires the payment_method ,
card_bin , and card_last_four fields. To improve the detection quality, we recommend
adding optional fields such as email , phone_number , and billing_address .
One of the following is required to receive a Transaction defense Assessment with Frontend Integration:
Transaction Data cardBin and cardLastFour .
User accountId
User email
User phoneNumber
Important: Without this minimum set of data, your Assessment response won't contain a Transaction defense Assessment.
{
"event" : {
"token" : " YOUR_TOKEN " ,
"site_key" : " KEY_ID " ,
"expected_action" : " YOUR_CHECKOUT_ACTION_NAME " ,
"transaction_data" : {
"transaction_id" : "txid-1234567890" ,
"payment_method" : "credit-card" ,
"card_bin" : "411111" ,
"card_last_four" : "1234" ,
"currency_code" : "USD" ,
"value" : 39.98 ,
"user" : {
"email" : "someEmailAddress@example.com"
},
"billing_address" : {
"recipient" : "name1 name2" ,
"address" : [
"123 Street Name" ,
"Apt 1"
],
"locality" : "Sunnyvale" ,
"administrative_area" : "CA" ,
"region_code" : "USA" ,
"postal_code" : "123456"
}
}
}
}
To improve the quality of scores, we recommend that you also send
additional signals .
To learn about how to create assessments,
see Create an assessment for your website .
Transaction defense might use larger tokens, so verify
that the request is sent in a POST request rather than GET; and in the
body, not in a header.
API-only Integration - Create assessments with transaction data
Note: You must have an Enterprise subscription to use the API-only integration .
For more information, see Compare features between reCAPTCHA tiers .
To receive payment fraud verdicts, create assessments with Transaction Data by
using the additional fields in the
projects.assessments.create
method.
Because reCAPTCHA API-only Integration produces a Transaction
defense Assessment using only the Transaction Data that you provide, you
must at a minimum provide the following:
Important: Without this minimum set of data, your API request will fail with a 400 error.
Billing Address regionCode and postalCode .
Transaction Data paymentMethod .
One of the following:
Transaction Data cardBin and cardLastFour .
User accountId
User email
User phoneNumber
{
"event" : {
"site_key" : " KEY_ID " ,
"expected_action" : " YOUR_CHECKOUT_ACTION_NAME " ,
"transaction_data" : {
"transaction_id" : "txid-1234567890" ,
"payment_method" : "credit-card" ,
"card_bin" : "411111" ,
"card_last_four" : "1234" ,
"currency_code" : "USD" ,
"value" : 39.98 ,
"user" : {
"account_id" : "abcde12345" ,
"email" : "someEmailAddress@example.com" ,
"phone_number" : "+18005550175" ,
},
"billing_address" : {
"recipient" : "name1 name2" ,
"address" : [
"123 Street Name" ,
"Apt 1"
],
"locality" : "Sunnyvale" ,
"administrative_area" : "CA" ,
"region_code" : "USA" ,
"postal_code" : "123456"
}
}
}
}
To improve the quality of scores, we recommend that you provide as much input as possible, and also send
additional signals .
Interpret assessments
After you start sending the transaction data, you receive assessments as a
JSON response with the fraudPreventionAssessment component in riskAnalysis .
The following example is a sample response:
{
"event" : { ....
....
}
.....
....
....
"fraudPreventionAssessment" : {
"transactionRisk" : 0.9 ,
"riskReasons" : HIGH_TRANSACTION_VELOCITY
}
}
The response you receive includes a score and reason codes wherever applicable.
The higher the score, the more likely the transaction is fraudulent and risky;
the lower the score, the more likely the transaction is legitimate. For example,
a score of 0.9 indicates that the transaction is more likely
fraudulent and risky, and a score of 0.1 indicates that
the transaction is more likely legitimate.
You are responsible for the actions you take based on the assessment.
For the simplest integration, you can set thresholds on transactionRisk
to contribute to your decision. For example, it can contribute to sending to a
manual review or directly rejecting likely fraudulent transactions.
You can also use the score in your own fraud workflows, or as part of rules with
your existing system. Because reCAPTCHA examines unique signals
and has a unique visibility of behavior across the internet, you can expect
incremental value even with an already mature fraud-detection engine.
Each score bucket is calibrated to a maximum false positive rate, which represents the maximum proportion of legitimate users that might experience additional friction. The thresholds you need to select depend on your business needs. The following are some examples of how you can use
the transactionRisk score:
Risk tolerance
Recommended threshold
Maximum false positive rate
Example usage
Low
0.5
5%
Require additional verification, such as 2FA, before accepting transaction
Medium
0.7
1%
Send transaction to manual review
High
0.9
0.1%
Reject transaction
What's next
To improve the quality of fraud detection, learn about additional signals .
To annotate assessments, see Annotate assessments with transaction events .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
