---
title: "Additional signals \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/additional-signals
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/additional-signals
  title: "Additional signals \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
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
Additional signals
Stay organized with collections
Save and categorize content based on your preferences.
This page shows the additional fields that you can send when creating assessments
to improve the quality of scores. For more information,
see transaction data .
Note: The PII data for Fraud Prevention is not displayed in the platform logs.
The following code snippet shows a sample request body with additional fields
related to transaction data.
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
"shipping_value" : 7.99 ,
"shipping_address" : {
"recipient" : "name1 name2" ,
"address" : [
"123 Street Name" ,
"Apt 1"
],
"locality" : "Sunnyvale" ,
"administrative_area" : "CA" ,
"region_code" : "USA" ,
"postal_code" : "123456"
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
},
"user" : {
"account_id" : "abcde12345" ,
"creation_ms" : 1650000000000 ,
"email" : "user@example.com" ,
"email_verified" : true ,
"phone_number" : "+18005550175" ,
"phone_verified" : false
},
"merchant" : {
"account_id" : "abcde12345" ,
"creation_ms" : 1650000000000 ,
"email" : "user@example.com" ,
"email_verified" : true ,
"phone_number" : "+1+18005550178" ,
"phone_verified" : false
},
"items" : [
{
"name" : "first item" ,
"value" : 19.99 ,
"quantity" : 1 ,
"merchant_account_id" : "abcde12345"
},
{
"name" : "second item" ,
"value" : 19.99 ,
"quantity" : 1 ,
"merchant_account_id" : "abcde12345"
}
],
"gateway_info" : {
"name" : "google" ,
"gateway_response_code" : "SUCCESS" ,
"avs_response_code" : "Y" ,
"cvv_response_code" : "Y"
}
}
}
}
To learn about how to create assessments, see Create an assessment for your website .
What's next
To annotate assessments, see Annotate assessments with transaction events .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
