---
title: "Resolve Cloud Billing issues \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/resolve-issues
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/resolve-issues
  title: "Resolve Cloud Billing issues \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Resolve Cloud Billing issues
Stay organized with collections
Save and categorize content based on your preferences.
This document describes some of the Cloud Billing issues
you might encounter and provides guidance on how to resolve these issues.
If you're using Google Workspace, see
Troubleshoot issues with Google Workspace billing .
If you need help with your Cloud Billing account, Google Cloud offers free
Cloud Billing Support to all customers. If you want to talk to a support
representative about a Cloud Billing question or a billing-related issue,
visit our
Cloud Billing Support
page for contact options.
Understand why you've been charged
This section describes a few common questions about when you're charged.
Charges that occur more than once a month
Your Cloud Billing account might incur charges more than one time a
month, depending on your
charging cycle
and your level of billable usage.
Postpay charging cycles and payments accounts:
For Postpay accounts
with automatic payments triggered by threshold billing, if your accrued balance
exceeds your payment threshold, you're charged on that day. In addition,
you're charged on the first day of the next month for any additional costs
that you accrue.
For example, if your threshold is €500, you're charged every time that
your costs reach €500. So if your costs total €1675 EUR in a month, you're
charged €500 three times (3 x 500 = 1500). In addition, you're charged
on the first day of the next month for the outstanding balance of €175.
Learn more about automatic payments and threshold billing .
Prepay charging cycles and payments accounts:
For Prepay accounts with auto-reload enabled ,
if your credit balance falls below a value you specify, you'll be charged
at that time to buy more credits, based on the reload amount you configured.
For example, if your specified "trigger" amount is "when my balance falls
below $30", and you configure a "reload value" to "add $100" in credits, then
you're charged $100 each time your credit balance falls below $30. Depending
on your level of usage, and the trigger amount and reload amount you've
specified, you might see multiple charges in the same month.
Prepay billing is configured in Google AI Studio : For more information,
refer to the Gemini API in AI Studio billing documentation .
Learn more about
split charging cycles for self-serve (online) Cloud Billing accounts .
Charges after making a manual payment
For Postpay accounts
with automatic payments triggered by threshold billing, if you make a manual
payment, you might still be charged on your automatic billing cycle. Here are
some possible reasons:
An automatic payment was already in progress when you initiated your
payment : The automatic payment cycle is punctual, so if you made your
payment when this process was underway, you might still be charged your
automatic payment amount. This is most likely to happen if you make a manual
payment when you're close to your billing threshold, or at the end of the
calendar month.
You reached the end of your billing cycle : After you make a manual
payment, your account returns to its usual billing cycle. You'll receive
an automatic charge after your account costs reach your billing threshold,
and on the first day of the month.
If the total of your automatic payment plus manual payment is greater than the
amount you owe, the "overpayment" is added as a credit to your account and
applied immediately to your accrued costs.
Learn more about making a manual payment to a Postpay payments account
Unrecognized charges from Google Cloud and other Google services
This section describes what you should do if you receive charges that you
don't recognize for Google Cloud, Google Maps Platform, Firebase,
or Google AI Studio services. Your contact
options depend on if you have a Cloud Billing account or not.
You have a Cloud Billing account
If the form of payment linked to your Cloud Billing account was charged
for Google services that you don't recognize, or you received an unexpected
invoice for Google Cloud, Google Maps Platform, Google AI Studio, or
Firebase services,
contact Cloud Billing Support .
You don't have a Cloud Billing account
If you were charged by Google Cloud for Google services that you don't
recognize, or you received an unexpected invoice for Google Cloud,
Google Maps Platform, Firebase, or Google AI Studio services that
you don't recognize, and you don't own a Google Cloud or Cloud Billing
account, submit a Cloud Billing Support ticket through the
Unknown Google Cloud Charge Inquiry
form.
Dispute charges
The process to dispute unauthorized charges depends on your country.
UPI AutoPay in India
If you're a Unified Payment Interface (UPI) user in India and have an
unauthorized charge from Google Cloud on your account, follow these steps:
Cancel your UPI AutoPay mandate to prevent further unauthorized charges.
Contact your bank to request a refund.
United States and other countries
Contact your bank to dispute unauthorized charges, which the bank treats as
a chargeback .
Your bank notifies Google of the disputed charge, and then Google does the following:
Sends you an email that your dispute was received.
Reviews the details of the dispute and the documentation or evidence you
provided.
Submits a decision to your bank, based on the results of that review.
This information may agree or disagree with the dispute you filed.
Depending on the decision, you might see one of these changes on your
Cloud Billing account:
If Google agrees with your disputed charge: The charge is corrected in
your Cloud Billing account. You can see the correction in your
transaction history ,
and you don't need to take any action.
If Google disagrees with the disputed charge, and the card-issuing bank
doesn't resolve the chargeback in your favor: The charge won't be
returned to you. Your account will remain active.
If Google disagrees with your disputed charge, and the card-
issuing bank resolves the dispute in your favor: Your account will have an
overdue balance. You can continue service on your account by
making a manual payment .
Missing Cloud Billing transactions or documents
Cloud Billing documents and transactions are accessible in the
Google Cloud console and the Google payments center.
Learn how to find your Cloud Billing documents ,
such as invoices, statements, and payment receipts.
Learn how to view your transaction history .
Delayed billing
Google Cloud and billing-eligible products such as Google Maps Platform,
Google AI Studio, and Firebase report usage data to
Cloud Billing at varying intervals. Due to the complexity of our
billing and processing systems, you might see a delay between your use of
services, the usage charges being applied to your Google payments
accounts, and the usage and costs being available to view in the various
cost reports and dashboards.
Typically, your cost details are available within a day, but can sometimes
take more than 24 hours.
For self-serve, online accounts, it's possible that charges for some usage
might occur rapidly, such as 5 to 15 minutes after usage.
Because of this difference in timing, you might notice charges on your
Postpay or Prepay payments accounts
occur before you can view the details of those charges in a cost report
or billing dashboard. These system delays also impact budget alerts,
anomaly detection, and billing data exported to BigQuery.
After accounting for processing and reporting delays, if you can't find a
specific document or transaction related to your usage of resources and
services in Google Cloud, Google Maps Platform, Firebase, and
Google AI Studio,
contact Cloud Billing Support
for assistance.
Viewing credits and adjustments
When Google needs to modify your account balance, you receive adjustments.
Adjustments come in the form of credits and debits , which reduce your
account balance or create additional invoices you must pay.
If your account is configured for monthly invoicing, you might also receive
documents called memos when an adjustment is issued.
Credit memos apply to previous, current, or future invoices and reduce
the amount you need
to pay, or may remain on your account as unapplied to be applied to
invoices at your discretion.
If you have unapplied payments or credits, they will
appear above your invoices .
To apply an unapplied payment or credit,
contact our collections team
and let them know how you want to apply it.
Debit memos act as additional invoices that you must pay, and aren't
associated with a specific invoice.
Separately, you might also have promotional credits applied to your account.
Promotional credits differ from adjustments and are applied to future use
charges.
Understand memos and adjustments
Credit and debit memos describe credit and debit adjustments that have been
issued to your
invoiced
Cloud Billing account.
Credit memos describe adjustments that reduce the amount you need to
pay for the month in which the credit adjustment is applied.
Debit memos describe adjustments that increase the amount you must pay
for the month in which the debit adjustment is applied.
The month a memo is issued can be different from the month the
adjustment is applied to your invoice. Credit memos can be applied to a
previous, current, or future invoice. For example, a credit memo could be
issued in April that documents a credit adjustment applied to a March
invoice. Similarly, a credit memo could be issued in May describing a credit
adjustment to be applied to your June invoice.
When a credit memo is applied to an invoice, the invoice shows the credit
memo amount as an amount paid , reducing the outstanding balance owed on
the invoice.
The following table describes how credit and debit memos are reflected in
each page, report, or output.
Page, report, or output
Description
Cloud Billing Documents page
Access documents issued for your Cloud Billing account,
where you can view detailed information about individual debit and
credit memos and the correlating adjustments.
Viewing an invoice from the Documents page of the
Google Cloud console shows all credit memos applied to that invoice
during the invoice period. Memo activity isn't shown in the
downloadable invoice PDF.
Viewing a credit memo from the Documents page of the
Google Cloud console shows which invoice the memo was applied to. Debit
memos aren't associated with a specific invoice.
Cost table report
The Cost table report gives you a detailed, tabular view of
your costs by individual invoice. The report lists the individual
adjustments so you can see the credit and debit memos applied on
the invoice you're viewing. Depending on the type of billing correction
issued, adjustment amounts might only appear in the footer of the report.
The report doesn't include memos issued but not applied
during the invoice period.
Data in the cost table report can be
downloaded to CSV .
Billing Reports
In Billing Reports , you can view and analyze your
Google Cloud usage costs using many selectable settings and
filters. To view billing modifications or adjustments in a billing
report, set your
Time range to Invoice month . In the report,
modifications are labeled Adjustments and appear in the
footer of the billing report.
Adjustments are aggregated across all invoices issued for the invoice
months you're viewing, so you can see the total of the credit and debit
memos applied to all of the invoices issued during the invoice
months. The adjustments shown correspond to the invoice, credit memo, and
debit memo documents available in the Documents area of the
Billing section in the Google Cloud console. The report
doesn't include memos issued but not applied during the
invoice period.
If you want to analyze your Google Cloud costs after receiving
SKU-level corrections, such as a retroactive price adjustment on a
previously-billed service, view your costs using a
Usage date Time range .
When you view costs by usage date, any corrections or charges for
late-monetized usage are accumulated, and you don't need to worry about
any temporarily incorrect data.
If you want view more detailed information on your corrections,
configure your billing report as follows:
Set your report's
Time range to Invoice month .
Select a
date-based Group by option (for example,
Date > Service ).
In the report's table, look for any charges with a usage date
before the start of the invoice month. These charges are the
results of corrections or late-monetized usage.
Data in the billing reports can be
downloaded to CSV .
Cost breakdown report
When viewing the Cost breakdown report by
invoice month ,
adjustments are aggregated across all invoices issued for the invoice
months you're viewing, so you can see the total of the credit
and debit memos applied to all of the invoices issued during the
invoice months. The report doesn't include memos issued but
not applied during the invoice period.
Data in the cost breakdown report can be
downloaded to CSV .
Cloud Billing data export to BigQuery
In your exported data, when adjustments are issued, your export is
appended with corrective data. These adjustments fall under one of two
categories: billing modifications or corrections.
Billing modifications appear as separate line items. If you
received a billing modification, you'll see a new line item in your
Cloud Billing export to BigQuery showing the change.
Credit and debit memos reflect the month the adjustment was issued .
However, the exported data doesn't include information about when and
where the memos are applied. To learn if and where an adjustment is
applied, review the details of the invoice and credit or debit memo
documents available in the
Cloud Billing Documents page .
Corrections appear as new data that negates incorrect data on
the source SKUs. In some cases, there will be new data that replaces the
incorrect charge.
Learn more about how corrections are viewed in your data export .
View invoices, adjustments, and memos applied to your account
Invoices, adjustments, and memos are viewed on the
Invoices
page in Cloud Billing.
In the Google Cloud console, go to the Invoices page.
Go to the Invoices page
At the prompt, choose the Cloud Billing account
you want to view.
On the Invoices page:
You see a table with all of the documents that have been issued
for your Cloud Billing account.
You can use filters and search tools to locate specific documents.
For more information on the features in the Invoices page, see
Get a Cloud Billing document such as an invoice, statement, or receipt .
Look at the details of an invoice or memo
From the Invoices table, click the row of the invoice or document that
you want to view details for. A dialog opens, showing you document header
details including the invoice or memo number, amount, status, purchase order
number, and account details.
In the Document Activity section, you can see information including the
addresses where the document was mailed and emailed, as well as invoices
or credit and debit memos that might apply to the document.
In the Associated documents section, you can see a list of documents and
document types that apply to the document you're viewing.
To view an itemized list of all the charges on an invoice, use the
Cost table report .
View promotional credits applied to your account
Promotional credits are viewed on the Credits page in the Billing section of
the Google Cloud console.
In the Google Cloud console, go to the Billing Credits page.
Go to the Billing Credits page
At the prompt, choose the Cloud Billing account
you want to view.
The Credits page opens for the selected Cloud Billing
account.
The Credits page is a tabular listing of your promotional credits.
For each promotional credit, you will see the Credit name , the Status
of the credit (available, used, or expired), the Remaining value and
Original value , the Type (recurring or one-time), the Credit ID
that appears on invoices, the Scope if the credit is restricted to
particular services or SKUs, and the Start date and End date .
Discounts are a different category of credits and aren't included on the
Credits page. Discount credits include free tiers, sustained use discounts,
committed use discounts, spending based discounts (contractual), subscriptions,
and reseller margin.
To view the details of the different types of credits that are applied to
your Cloud Billing account, both discounts and promotions, view the
Billing Reports .
The Credits page is also accessible from
the
Billing Account Overview page.
On the Billing Account Overview page, your costs for the current
month are summarized in a cost summary report card, including an amount for
Credits used .
The Credits used amount sums the value of all
of the types of credits applied during the time range of the cost
summary, including discount credits (such as committed use discounts
or subscriptions) and promotional credits.
Below the Credits used amount, select View
details to access the Credits page to see a detailed
list of all your promotional credits, including
expired and exhausted credits.
To view the breakdown of all of the credits
included in the Credits used amount, select View
details on Reports .
Request a refund
If you have unused funds in your Cloud Billing account's linked
Postpay payments account ,
you might be eligible for a refund. For example, if you
made an early payment
and have funds left over that you don't plan to use, you can request a
refund of those unused funds.
We don't offer refunds in the following cases:
You have an unused promotional credit balance left over in your billing
account.
You have an outstanding amount due on your Cloud Billing account's
linked Postpay payments account. If you're unsure if this is
the case, select a Cloud Billing account and then click the
Payment overview tab to see if there's an outstanding balance in your
billing account.
You have unused credits in a
Prepay payments account
to pay for Gemini API in AI Studio usage. Unused credits expire after
1 year from the date of purchase and are non-refundable, with a few
exceptions. For example, if you
meet the criteria
to upgrade your Prepay account to a Postpay billing tier, remaining Prepay
credits are automatically refunded during the upgrade process.
Learn more about
refund policies for Prepay accounts .
Permissions required to request a refund
You must be a Billing Administrator
on the Cloud Billing account to request a refund.
How to request a refund
To request a refund for a
Postpay payments account
complete the following steps:
In the Google Cloud console, sign in to the Payment overview page for
your Cloud Billing account.
Go to Payment overview
At the prompt, choose the Cloud Billing account
that you want to request a refund for. The Billing Payment overview
page opens for the selected billing account. If you have a credit on the
account, you see the Request a refund button.
Click Request a refund .
Confirm the payment method to receive the refund. Refunds are issued to your
original payment method.
Note: If there's a problem with your original payment method and the
refund can't be issued,
contact support
and provide a valid bank account to receive your refund.
If your refund request is processed, your refund is credited to the payment
method associated with the Cloud Billing account.
Resolve service restrictions caused by overdue balances
You might have an overdue balance on your Cloud Billing account if you are
late paying your invoice or a payment was declined on your
self-serve/online account. If you have a delinquent account balance, you might
experience service degradation or restrictions that limit your Google Cloud
usage. For example, you might experience throttling or be unable to perform
actions like:
Access certain workloads
Create new projects
Increase quotas
To restore full platform usage, pay your overdue balance by using the following
instructions, depending on whether you have an invoiced or self-serve/online
billing account:
Invoiced accounts
Make a payment to an invoiced billing account .
After you resolve your delinquent account, you might need to
restart Google Cloud services .
Self-serve/online accounts
Follow these instructions to resolve declined payments.
Resolving declined payments on self-serve (online) accounts .
(Customers in India) Automatic payments declined due to Reserve Bank of India (RBI) regulations .
After you resolve your delinquent account, you might need to
restart Google Cloud services .
Resolving declined payments on self-serve (online) accounts
Sometimes payments are declined, and when they are, we might stop running your
services until your payment can be processed. You can get your services running
again in just a few steps.
Find out the reason for the decline. You can view declined payment
information for your billing account and its linked Google payments
account on the
Transactions
page. In your transaction history, you can see the date of the decline, the
amount, and, if your bank shared it with us, the reason for the decline.
(Keep in mind that Google doesn't decline payments; your bank or credit
card institution does.)
Contact your bank or credit card company. If you can't figure out why
your payment was declined or if you can't solve the issue, contact your bank
or credit card company. Give them the date and amount of the declined
payment, and they should be able to tell you what the problem is and help
you fix it.
Note: If you're a customer in India, your card might be declined due to
local financial regulations.
Learn about resolving declined recurring payments in India .
Re-enable your form of payment. After you've contacted your bank and
made sure that the form of payment will work, you need to access the
Payment method page for your Google payments account to
re-enable it:
Postpay account
Follow these steps to re-enable the payment method on your Postpay
Google payments account:
In the Google Cloud console, go to the Payment method page.
Go to the Payment method page
At the prompt, choose the Cloud Billing account you want to
manage.
The Payment method page opens for the Postpay
payments account.
On the Payment method page, find the form of payment and make
sure that all of the details are correct for this form of payment.
Below the information for the form of payment, click Fix .
Prepay account
Follow these steps to re-enable the payment method on your Prepay
Google payments account:
In the Google AI Studio console, go to Dashboard > Billing.
Go to the AI Studio Billing page
Locate the How you pay card and click Manage payment methods .
The Payment method page opens for the Prepay
payments account.
On the Payment method page, find the form of payment and make
sure that all of the details are correct for this form of payment.
Below the information for the form of payment, click Fix .
Make a payment or purchase credits. After you've contacted your bank and
made sure that the payment method will work, you can do one of the following
based on the type of Google payments account you're using:
Postpay payments account : You can
make a manual payment .
Prepay payments account : You can
purchase additional credits
to pay for your usage of Gemini API in AI Studio.
For either account, if you're using a bank account as your payment method,
the amount you paid or purchased might be subject to a delay in posting.
Note the following:
A self-serve online Cloud Billing account is always linked to a
Postpay Google payments account. If there is an issue with your Postpay
payments account, such as a delinquent account balance, a
declined payment, or an invalid payment method, your overall
Cloud Billing account might be suspended until you resolve the
issue. If your Cloud Billing account is suspended, ALL services in
ALL of the projects that are linked to the Cloud Billing account
are stopped. This includes your prepaid usage of
Gemini API in AI Studio, regardless of how many credits are available
in your Prepay account.
To resolve a suspended Cloud Billing account, you need to fix the
issue on your Postpay account. After you resolve any issues that are
impacting the overall state of your Cloud Billing account, then
you will regain access to your Prepay credit balance and your
Gemini API services.
After you have re-enabled your form of payment and your billing account is
in good standing, you might need to manually restart some services. For more
information, see
Restarting Google Cloud Services .
While your Cloud Billing account is inactive or suspended, your
BigQuery exports
are paused. When you re-enable your form of payment, your
BigQuery export isn't backfilled with data for the duration
that your account was inactive.
For Postpay payments accounts, re-enabling your form of
payment without making a manual payment will automatically trigger a charge
for your outstanding balance. It may take a few hours to process the payment.
If the payment isn't successful within one business day after you re-enabled
your form of payment, reactivate your account by making a manual payment or
adding a new payment method. For more information, see
Add, remove, or update a payment method
or Make a Manual Payment .
You can keep your services running by entering a backup credit card. We
charge your backup card only if your primary form of payment is declined.
For more information, see
Add, remove, or update a payment method .
If your billing account remains invalid for a protracted period, some
resources might be removed from the projects associated with your account.
For example, if you use Google Cloud, your Compute Engine resources might be
removed. Removed resources aren't recoverable .
(Customers in India) Automatic payments declined due to Reserve Bank of India (RBI) regulations
Due to Reserve Bank of India (RBI) regulations, for new
Google Cloud accounts, we might be unable to charge you automatically
for one of these reasons:
Your card doesn't support automatic payments.
Your usage costs are over ₹5,000, which is the limit that the RBI has
set for automatic payments.
In these cases, you get this error message:
Your card does not support automatic recurring payments .
To keep your services running, if your automatic payments are being
declined, we recommend one of these options:
Make manual payments for your usage .
You can also make manual payments to proactively add credit to your account.
Try adding a different card .
Consider working with a local reseller, who might be able to accept more forms
of payment, or help you switch to invoiced billing . Find a list of
resellers on the Google partners page .
Changes to card information stored in Google
Starting October 1, 2022, due to Reserve Bank of India (RBI) card storage regulations ,
Google can't save your card details in the current format. Depending
on your card, you can authorize us to save your card details in a format that
complies with RBI regulations.
Learn more about authorizing Google to save your card details in a new format .
Other Cloud Billing issues
If you're stuck and you want to talk to a support representative about a
Cloud Billing question or a billing-related issue that you're having, visit
Cloud Billing Support
for contact options.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
