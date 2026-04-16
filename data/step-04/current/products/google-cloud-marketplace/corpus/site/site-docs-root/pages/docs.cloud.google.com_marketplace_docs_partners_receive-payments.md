---
title: "Receiving payments from Google \_|\_ Google Cloud Marketplace Partners \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/receive-payments
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/receive-payments
  title: "Receiving payments from Google \_|\_ Google Cloud Marketplace Partners \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
Go to market
Send feedback
Receiving payments from Google
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how customer billing works and walks you through
enrolling for payments and setting up your payment methods.
Cloud Marketplace also generates reports that you can use to
reconcile the payments you receive, and to get information about how your
customers are deploying your solution. Learn about these reports
in Reports for your Cloud Marketplace products .
For questions related to payments, use
Partner Support Desk to request assistance,
and include the word "Marketplace" in your description. For more information
about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
Before you begin
You must be a Project Editor
( roles/editor ) for your product's Google Cloud project. To learn about
managing access to your project, see Granting, changing and revoking access
to resources .
Overview of customer billing
Each month, Google computes how much your customers paid for your products, and
what Google owes you. You receive your payouts typically on the 21st of every
month. This section describes customer billing and disbursement processes for
your Cloud Marketplace products.
When customers use your products, Google calculates billing and payments
using the following method:
Your service reports usage to Cloud Billing.
Cloud Billing computes the cost based on usage:
Finds the SKU for that measurement.
Looks up the price per unit for the SKU.
Converts the measurement into the pricing unit.
Calculates the cost by multiplying the pricing unit by the price.
The cost is added to the customer's invoice.
Google computes the revenue split and posts your share to your disbursement
account. For examples of how Google computes the revenue split, see
Sample revenue share calculations .
Note: Starting April 21, 2025, Google Cloud Marketplace calculates revenue share
percentage for Cloud Marketplace transactions in accordance with the
Vendor Net Revenue Schedule ,
where applicable. For more information, see
Overview of the Vendor Net Revenue Schedule .
Google pays you the aggregated amount due from all customers for the month.
You don't need to invoice Google Cloud.
To report usage to Cloud Billing, you can use any of the following
services:
A Google Cloud service, such as Compute Engine that measures the life of a
virtual machine (VM).
The subscription engine in Cloud Billing.
A service from your organization, or a service that you deploy in your
customer's Google Cloud project, which reports usage through the Service Control
API.
Customer invoices are created on month boundaries in the US and Canadian
Pacific Time zone (UTC-8 or UTC-7, depending on daylight saving time). If you
use a service from your organization, you must report usage by 6 AM US
and Canadian Pacific Time on the first of the month to ensure
that the usage appears on the customer invoice for the previous month.
Billing subscriptions
When a customer purchases your product as a subscription, their usage is measured
in seconds and they are billed according to the number of seconds the
subscription is active. If a customer begins a subscription during the month,
they are charged a prorated amount, determined by the number of seconds
remaining in the month.
If you set your product's pricing by month, a subscription for your product
doesn't have a set price per day because the number of seconds fluctuates from
month to month. For example, February has a higher per-day price than March,
because February has fewer days while maintaining the same monthly price.
Currency conversions
Google Cloud Marketplace prices are set in USD, but you can charge customers or receive
payments in different currencies. We set and use
exchange rates when converting customer charges to your
Google payments currency. For example, we can use these rates to charge a
customer in GBP (converted from USD), and then convert your share to EUR. For
details on what currencies we support for payment, refer to our
list of supported regions and currencies .
Setting up your payments profile
If this is the first time you're integrating with Cloud Marketplace,
you must set up your payments profile after your partner agreement is final.
Caution: Don't set up payments until your partner agreement is finalized.
Both of the following must be true for your payments profile:
The name of the legal entity associated with your payments profile must
match that of the legal entity that entered into the Marketplace Vendor
Agreement with Google.
The physical address associated with your payments profile must be within
the country where your company was formed or organized.
To set up your payments profile and receive your payments, you have two options:
Create a payments profile directly.
Use another Google Cloud project that already has a payments profile
set up for Cloud Marketplace.
You still receive a monthly
usage and disbursement report
separately for each project. However, the transaction amounts in the Payments
page will include amounts from all projects that share the same payments
profile. Revenue earned through all projects will be issued into one monthly
payment.
Option 1: Create a payments profile directly
On the Payments page, select the region and currency that you
receive your payments in
( see the list of supported regions and currencies ).
The region and currency must match the country of your legal entity. After
you select your region and currency, click Continue .
Open the Payments page
On the Payment info page, you must create your payments profile. In the
Customer info section, add your business name and contact details, then
click Continue to finish signing up for payments.
Add at least one other person as an administrator. If a profile has only one
administrator and that person leaves the company, the profile is closed and
you don't receive further payments. For details, refer to
Controlling access to payment profiles .
If you encounter an error message that says your Google Account isn't
authorized to use Google Payments, follow the steps at
Turn Google Payments on or off
to turn on Google Payments for your account.
Note: To turn on Google Payments, you must have an administrator account. If
your account is not an administrator account, contact your organization's
administrator and request that they turn on Google Payments for your account.
Next, you must set up a bank account for your payments .
Option 2: Use payment settings from an existing project
On the Payments page, select Yes to having
another project manage payments.
Open the Payments page
After you enter the Project ID, click SUBMIT .
No further action is needed as all settings are now being managed by the project
you entered.
Note: The page will then automatically refresh to load the Payments settings
from the project you provided. If you encounter error OR-AC-02 instead, refer
to the troubleshooting steps .
Troubleshooting your payment settings
If you encounter the following error messages, take the recommended steps:
Unable to find the resource you requested : Make sure the Google Cloud project
that you selected has access to Producer Portal.
OR-AC-02 : Contact your payments administrator to request access to the
payment profile. By default, the payments administrator is the person who
initially created the payment profile.
OR-BAIH-01 or OR-IEH-02 : For assistance with adding your payment method,
use the Partner Support Desk to request
assistance, and include the word "Marketplace" in your description. For more
information about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
OR-DDUH-01 : You don't have access to Google Payments. To get access, ask
your Google Workspace administrator to
turn on Google Payments for
your account.
test deposit failure or verification pending for too long : For
assistance with adding your payment method, use the
Partner Support Desk to request
assistance, and include the word "Marketplace" in your description. For more
information about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
For additional support, use the
Partner Support Desk to request assistance.
Include the word "Marketplace" and details, including any error messages you've
received, in your description. For more information about Partner Support Desk,
visit
Request assistance with Cloud Marketplace .
Setting up your bank account
To receive your payouts, you must set up a primary bank account. You can add
more accounts to your payments profile, but you can only receive payments
through your primary bank account.
To set up your bank account:
On the Payments page, click Manage payment methods .
Open the Payments page
Click Add payment method , and add the details for your bank account.
If you want this payment method to be the primary payment method, select
Set as primary payment method .
Note: If you change your primary bank account, the changes take effect
for the next payout, which is typically the 21st of the month.
Click Save . To receive payments, you must verify your bank account by
signing in to your bank's website and confirming test deposits made by
Google.
If you need to add another bank account, repeat these steps.
You can view the bank accounts that you manage in the
Google Payments Center .
Controlling access to payment profiles
You can add more users to the payments profile that you manage. By
default, the users you add receive emails about payments. You can also give
them access to the Payments page, your payment history, and permissions to
edit your payments profile.
Before adding a user, ensure that the user has read access to your product's
Google Cloud project, which they can be granted as a Project Viewer ( roles/viewer ). To manage
access to the project, see Granting, changing and revoking access to resources .
To add users to your payment profile:
On the Payments page, click Manage settings .
Open the Payments page
Under Payments Users , click Manage payments users .
Click Add new user , and enter the contact information for the user.
To choose the user's level of access, expand Permissions , and choose
the permissions you want to grant to the user.
Note: If you want to give the user permissions to access the Payments page,
you must also give them access to the project .
To choose the types of emails the user gets, expand Email preferences .
If you want to make the user the primary contact for your organization,
select the Primary contact checkbox.
Note: If you already have a primary contact, selecting this option replaces
your current primary contact.
Add your tax information to your payments profile
If you are in the United States, you must also add your
Form W-9
tax information to receive your payments. If you are outside the United States,
you must instead add your
Form W-8 BEN-E
tax information.
Note: In the Form W-8 BEN-E, if you claim a 0% withholding rate due to a tax
treaty between your country and the United States, you should claim it for the
payment type "Other Copyright Royalties", not "Services".
On the Payments page, click Manage settings .
Open the Payments page
Under Payments profile , click United States tax info .
Add or update your appropriate tax form, then click Submit . Your
tax information is sent to the
Internal Revenue Service (IRS)
for verification.
For transactions using the merchant of record transaction model, you might need
to provide additional information, based on the location of your payments
profile:
If you're located in the Asia Pacific region, Cloud Marketplace asks
you to provide Singapore tax information, because your payments come from
the Google Asia Pacific entity, which is located in Singapore.
If you're located in Europe, the Middle East, or Africa,
Cloud Marketplace asks you to provide Ireland tax information, because
your payments come from the Google Ireland entity.
If you're located in a country that supports the agency transaction model for
Cloud Marketplace, you aren't asked to provide this additional tax
information for your agency model transactions. For more information about
transaction models and the requirements for transacting under the agency model,
see Transaction models . For a
list of regions that support the Cloud Marketplace agency transaction
model, see Agency jurisdictions .
Viewing your payments
To view your transactions, open the Payments page, and click
View transactions . You also get a monthly usage and disbursement report
that shows the usage and revenue for your products.
Supported regions and currencies
In Cloud Marketplace, all prices are set in USD, but customers can pay in
any of the currencies available for their country .
The cost is converted to the customer's currency using the
exchange rate active at the time the usage was measured.
For each month's billing, all exchange rates are determined at once. If you have
a SKU priced at US$19.99 per month, customers who pay in another currency
might see their cost vary from month to month.
The following table displays Cloud Marketplace's supported regions and
currencies. If you are paid in a supported currency other than USD, your payment
is also subject to the exchange rate active at the time the usage was measured.
Google converts the customer's currency to your currency before posting the
payout to your disbursement account.
Region
Currency
Belgium
EUR
Canada
CAD
Canada
USD
Finland
EUR
France
EUR
Germany
EUR
Hong Kong
HKD
India
USD
Ireland
EUR
Israel
ILS
Italy
EUR
Japan
JPY
Luxembourg
EUR
Netherlands
EUR
Norway
NOK
Poland
PLN
Romania
EUR
Saudi Arabia
USD
Spain
EUR
Sweden
SEK
Switzerland
CHF
United Kingdom
GBP
United States
USD
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
