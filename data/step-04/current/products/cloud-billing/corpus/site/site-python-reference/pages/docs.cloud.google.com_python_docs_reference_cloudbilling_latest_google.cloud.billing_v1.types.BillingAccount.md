---
title: "Class BillingAccount (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.BillingAccount
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.BillingAccount
  title: "Class BillingAccount (1.18.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class BillingAccount (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.18.0 (latest)
1.17.0
1.16.3
1.15.0
1.14.1
1.13.6
1.12.1
1.11.5
1.10.1
1.9.1
1.8.0
1.7.3
1.6.1
1.5.1
1.4.1
1.3.4
1.2.1
1.1.1
1.0.0
0.1.0
BillingAccount ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A billing account in the Google Cloud
Console <https://console.cloud.google.com/> __. You can assign a
billing account to one or more projects.
Attributes
Name
Description
name
str
Output only. The resource name of the billing account. The
resource name has the form
billingAccounts/{billing_account_id} . For example,
billingAccounts/012345-567890-ABCDEF would be the
resource name for billing account 012345-567890-ABCDEF .
open_
bool
Output only. True if the billing account is
open, and will therefore be charged for any
usage on associated projects. False if the
billing account is closed, and therefore
projects associated with it are unable to use
paid services.
display_name
str
The display name given to the billing account, such as
My Billing Account . This name is displayed in the Google
Cloud Console.
master_billing_account
str
If this account is a
subaccount __,
then this will be the resource name of the parent billing
account that it is being resold through. Otherwise this will
be empty.
parent
str
Output only. The billing account's parent resource
identifier. Use the MoveBillingAccount method to update
the account's parent resource if it is a organization.
Format:
- organizations/{organization_id} , for example,
organizations/12345678
- billingAccounts/{billing_account_id} , for example,
billingAccounts/012345-567890-ABCDEF
currency_code
str
Optional. The currency in which the billing account is
billed and charged, represented as an ISO 4217 code such as
USD .
Billing account currency is determined at the time of
billing account creation and cannot be updated subsequently,
so this field should not be set on update requests. In
addition, a subaccount always matches the currency of its
parent billing account, so this field should not be set on
subaccount creation requests. Clients can read this field to
determine the currency of an existing billing account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
