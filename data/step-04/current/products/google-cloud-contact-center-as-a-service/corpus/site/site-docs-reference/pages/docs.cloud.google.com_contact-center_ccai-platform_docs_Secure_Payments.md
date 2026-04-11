---
title: "Secure Payments \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Secure_Payments
  title: "Secure Payments \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Secure Payments
Stay organized with collections
Save and categorize content based on your preferences.
Note: For implementation and pricing, please contact your account team or Support.
The Secure Payments feature provides secure credit card processing. After
payment is initiated by the agent, the customer is taken through a series of
payment prompts.
The agent can watch payment progress on their Agent Adapter while the customer
enters payment information but they are unable to hear the consumer side of the
call.
Add Providers for Credit Card Over IVR
Prerequisite
Payment provider credentials are integrated with the CCAI Platform portal.
Retrieve your payment gateway credentials
Stripe
From your Stripe account, toggle View Test Data to on.
API Key : The API key is the information you'll need in the next
section.
FreedomPay
Set up a merchant account with payment gateway(s).
From the FreedomPay portal, retrieve the following information:
Store ID.
Terminal ID for that merchant, specific to the Contact Center AI Platform (CCAI Platform) integration.
Braintree
Retrieve the following credentials for your Braintree account: Environment ,
Merchant ID , Public Key , Private Key , Tokenization Key , and
Merchant Accounts . See
Important Gateway Credentials
in the Braintree documentation.
Admin configuration
Customize messages about payment details
A succession of messages are displayed to the agent while the caller is making
their payment. These messages are standardized by default. To set custom
messages, you can update the Text-to-Speech script at Settings > Languages
& Messages > IVR Purchase Flow Messages .
See IVR Purchase Flow Messages
for sample scripted messages.
Enable and add a provider
Go to Settings > Developer Settings .
In the Credit Card Payment Providers section, click Manage
Payment Providers . Current providers previously set up in your
environment are displayed.
Click +Add Provider . You are brought to the Payment Provider
details page.
Enter a Name for the payment option.
Select Payment Provider .
Select Type . Dynamic fields to enter credentials will display after the
provider type has been selected.
Enter credentials:
For Stripe, enter the API secret key found in your Stripe account.
For FreedomPay, enter the Store ID and the Terminal ID. The format
of these two IDs must be storeID , terminalID .
Select the currency type. The default option is USD. Stripe and
Braintree offer additional currency options. For more information, see the
multi-currency documentation .
Click Save .
Configure Secure Payments for inbound calls
Go to Settings > Queue > {select preferred channel} >
select a queue > Credit Card Payment Settings .
Toggle the Credit Card Payment Settings to Enable .
Select Provider from the drop-down menu.
Select Use ZIP Code to have the customer verify their zip code during
payment.
Select Currency from the drop-down menu.
Click Save .
Configure Secure Payments for outbound calls
Toggle the Payments for Outbound Calls switch to On .
Select an existing payment provider from the Provider dropdown.
Select the Use ZIP Code checkbox is if you want to require the
customer to verify their billing zip code during payment.
Click Save Payment .
Configure Secure Payments for multi-currency
When you set up secure credit card payment options through Stripe or Braintree,
you have the option to select from the following international currencies:
United States Dollar - USD (default option)
British Pounds - EUR
Euros - EUR
Canadian Dollars - CAD
Set a new default currency
Go to Settings > Developer Settings > Credit Card Payment
Providers .
Expand the Default Currency drop-down and select a currency option.
Click Save Payment .
Apply multi-currency options to your payment provider
Note: Stripe and Braintree are the only providers that offer multi-currency.
Go to Settings > Developer Settings > Credit Card Payment
Providers .
Click Manage Payment Providers .
Click +Add Provider .
Enter a name for the provider.
Select the Provider Type from the drop-down menu. If you select
Braintree, dynamic fields for adding a merchant account will appear. To add
multiple currencies for Braintree, click +Add Merchant Account and enter
the details.
Click +Add Currency and select from the list. To add multiple currencies,
keep clicking Add currency . Your selected currencies will appear in a
list on the Payment Provider page. Click X to remove a currency type
Verify the configuration
Caller experience:
For Stripe, see Stripe Testing for
sample test credit cards to use.
Call your support number.
Select the queue that has Payments enabled.
Follow the payment prompts initiated from the Agent Adapter using
the Stripe Testing sample cards.
Troubleshooting
Stripe
Contact Support for help troubleshooting any issues.
FreedomPay
For each transaction between CCAI Platform and FreedomPay,
CCAI Platform receives either a success message or an error code.
Depending on the error code, CCAI Platform shows the agent a message
with one of four calls-to-action:
Check Details & Retry
Try Another Card,
Try Again Later, or
Contact Your Manager.
Check Details & Retry
With this call-to-action, the agent should encourage the caller to try
the IVR payment process again with the same card.
The most common scenario for such a message is when a consumer enters an
invalid account number, zip code, expiry date, and/or CVC.
Try Another Card
With this call-to-action, the agent should encourage the caller to try
again with a different payment card.
CCAI Platform displays such an error when payment authorization fails,
most likely due to an issue with a particular card. A common error is a decline
by the issuer, for example, an overdrawn card.
Try Again Later
With this call-to-action, the agent should wait ten minutes before
trying again. A common scenario for this message is temporary
connectivity issues.
Contact your Manager
With this call-to-action, the agent needs to warn their manager of a
potentially serious issue at hand. Either the caller is using a stolen
or fraudulent card, or there's an urgent technical issue that completely
blocks the usage of that payment gateway. If the latter, the agent
should also note the error number to facilitate debugging.
Escalation to Support
For urgent technical issues for which an error code is provided, a
manager should contact Support and include a description of the
occurrence, error code, time, and call id (if available).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
